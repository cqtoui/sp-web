"""Build two-minute exhibition videos from each project's scene image and verified description."""

import asyncio
import subprocess
import sys
from pathlib import Path

import edge_tts
from mutagen.mp3 import MP3
from PIL import Image, ImageDraw, ImageFont
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[1]
MEDIA = ROOT / "public" / "media"
OUT = MEDIA / "demos"
TMP = ROOT / "scripts" / "_video_tmp"
W, H = 1280, 720
VOICE = "en-US-JennyNeural"
RATE = "-4%"

FONT = "C:/Windows/Fonts/segoeui.ttf"
FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"

PROJECTS = [
    {
        "slug": "ai-safeguard",
        "scene": "scene-safeguard.png",
        "slides": [
            ("AI SafeGuard", "Smart safety, real protection.",
             "AI SafeGuard. Smart safety, real protection. This is a student project from Applied Technology Schools, Baniyas."),
            ("The problem", "A busy entrance can miss missing safety gear.",
             "In many workshops and laboratories, an incident can start when someone is not wearing the required safety equipment. A missing helmet, pair of goggles, gloves, or lab coat can place workers and students in danger within seconds. When an entrance is busy, no one can watch every person who walks in. Without a clear record, a violation can pass unnoticed, and the chance of injury rises."),
            ("The prototype", "A webcam checks the required gear before entry.",
             "AI SafeGuard is an AI-based workplace safety system. It uses computer vision and facial recognition to identify a registered person and check whether they are wearing the required personal protective equipment before they enter. A webcam watches the entrance. The result is shown immediately, and a sound confirms a clear result or a violation. Incident records stay on the computer running the prototype."),
            ("What the person sees", "Present items, missing items, and a supervisor record.",
             "The person at the entrance sees which items are present and which required items are missing. Supervisors can follow the checks, the people, the entry points, and the records that need review. A violation can keep the scan image, the missing equipment, the entry point, and the recognized person when that information is available. Unclear AI results should be reviewed by a supervisor. The system supports human safety supervision rather than replacing it."),
            ("How the check works", "Entrance, detection, identity, match, alert, record.",
             "The check follows six steps. Select the entrance, so the safety rules match that place. Detect the protective equipment the camera can see. Identify the person with face detection. Compare the equipment with the gear required for that entrance. Display the result and play a sound. If there is a violation, record and save it so a supervisor can review it later."),
            ("A student prototype", "Laptop, webcam, and supervisor review.",
             "The prototype uses a development laptop and an external USB webcam. It is designed for teachers, laboratory staff, workshop supervisors, students, and workers in places where protective equipment is required. This two-minute video introduces the student project. It is not a recording of a system already installed in a workplace."),
        ],
    },
    {
        "slug": "ai-simulation-chamber",
        "scene": "scene-simulation.png",
        "slides": [
            ("AI Simulation Chamber", "Adaptive Emergency Protocol Engine.",
             "AI Simulation Chamber. The Adaptive Emergency Protocol Engine. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "Knowing first aid is not the same as acting under pressure.",
             "Traditional first-aid resources can explain a procedure, but they rarely recreate the pressure or the personal differences of a real crisis. First-aid knowledge on its own does not prepare someone for panic, time pressure, or a situation that changes while they act. Hesitation in a real emergency can cost lives."),
            ("The idea", "A safe training ground with an adaptive story.",
             "The chamber places the user in a safe but demanding training ground. Generative AI adapts the narrative, while reinforcement learning models the consequences of an action, such as a patient's condition worsening after incorrect CPR. The intended deliverable is a functional virtual-reality prototype. Unity or Unreal Engine would provide the visual scene, and the OpenAI API would support adaptive storytelling."),
            ("What it is designed to include", "Local emergency numbers, stress cues, and consequences.",
             "The simulation is designed to include country-specific emergency numbers and dispatcher protocols. Auditory anxiety cues add pressure so the practice feels closer to a real emergency. Physiological limits can follow user attributes such as height and weight. Users rehearse step-by-step life-saving actions and work on faster decision-making."),
            ("Scenarios and steps", "Aviation, cardiac arrest, trauma, and fire.",
             "The scenarios addressed are aviation incidents and cabin pressure, cardiac arrest and CPR timing, severe physical trauma and hemorrhage, and structural fire and smoke navigation. The user chooses a crisis, enters the scene, acts under pressure, sees the consequence of the action, and repeats the sequence to support quicker decisions."),
            ("Who it is for", "Practice before a real emergency.",
             "The AI Simulation Chamber is designed for students, trainees, and individuals who need realistic emergency-response practice. It is meant to help them build confidence and rehearse procedures before they face a real event. This video introduces that student project. It does not show a finished public training system."),
        ],
    },
    {
        "slug": "sanad-ai",
        "scene": "scene-sanad.png",
        "slides": [
            ("SANAD AI", "Verify information. Assess risk. Stay safe.",
             "SANAD AI Crisis and Safety Assistant. Verify information. Assess risk. Stay safe. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "Crisis messages can be confusing or false.",
             "During a crisis, confusing, misleading, or false information can spread quickly. People may not know what a message means, how serious it is, or what to do next. Delayed or unreliable information is a practical risk. The aim is to help users understand what they are reading before they trust it or pass it on."),
            ("The assistant", "A reading of safety level and credibility.",
             "SANAD is a mobile application for crisis awareness. People can submit a news message, social media post, or alert and receive an AI-supported reading of its possible safety level and credibility. The goal is to help users become more aware and prepared. It is not a replacement for official emergency services."),
            ("What the result shows", "Low, Medium, or High. Real, Suspicious, or Fake.",
             "Results use three safety labels: Low, Medium, or High. Submitted information is categorized as Real, Suspicious, or Fake, with a reminder to verify important claims. The categories are conflict and war, natural disasters, health crises, and a general mode. When the text contains enough detail, SANAD identifies a possible threat type and affected area. Emergency Mode offers quicker access to safety guidance."),
            ("How a check works", "Choose a category, submit the message, then verify.",
             "The user selects a category, pastes the message, and SANAD looks for the possible threat, credibility cues, and level of concern. The screen shows the safety level and the credibility assessment. Recommendations match the situation. Serious information should be confirmed with official emergency services and trusted authorities."),
            ("A student project", "Awareness and preparation, not an official alert service.",
             "SANAD is meant to help people understand crisis-related messages and find practical guidance. Results may be inaccurate, so users should follow instructions from official authorities and trusted emergency services. This video introduces the student project. It is not a public emergency system."),
        ],
    },
    {
        "slug": "safespace-ai",
        "scene": "scene-safespace.png",
        "slides": [
            ("SafeSpace AI", "Your feelings matter. Your growth matters.",
             "SafeSpace AI. Your feelings matter. Your growth matters. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "Teenagers need a place to talk about how they feel.",
             "Teenagers may find it difficult to express their emotions or develop healthy emotional habits. SafeSpace AI is designed to provide an accessible and supportive place for emotional expression, regular self-reflection, and positive personal growth."),
            ("The platform", "Conversation, check-ins, insights, and growth activities.",
             "SafeSpace AI is a web platform for teenagers. It uses artificial intelligence, natural language processing, and sentiment analysis to notice emotional patterns and offer personalized support. The platform is designed to protect users' privacy while offering optional support for guardians. It offers an empathetic, age-appropriate chatbot, daily mood check-ins, mood insights, and suggested growth activities such as hobbies, exercise, and creative work."),
            ("Guardians and safety", "Summaries only. Private conversations stay private.",
             "A guardian dashboard provides high-level progress summaries without revealing private conversations. If the system notices signs of serious distress, it encourages the user to seek help from a trusted adult or an appropriate support service."),
            ("What it includes", "Chat, daily check-ins, mood trends, and positive goals.",
             "The main features are an AI supportive chatbot, daily check-ins for mood and feelings, mood insights that show emotional trends, growth activities, the guardian dashboard, and safety support. The objectives are to give teenagers a place to express feelings, encourage regular check-ins, suggest healthy coping strategies, and protect privacy while offering optional support for guardians."),
            ("Who it is for", "Teenagers first, with optional guardian summaries.",
             "Teenagers are the primary users. Guardians can see summarized progress. The mission is emotional awareness, resilience, and personal growth through ethical AI support and human connection. This video introduces the student project. It is not a published live counseling service."),
        ],
    },
    {
        "slug": "ai-aero-biome",
        "scene": "scene-aero.png",
        "slides": [
            ("AI Aero-Biome", "Hyperlocal air quality and healthier routes.",
             "AI Aero-Biome. An intelligent hyperlocal air-quality and respiratory-health assistant. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "A city-wide air index can miss the next street.",
             "Asthma, allergic rhinitis, and other chronic respiratory conditions affect millions of people. A public Air Quality Index often describes a wide area, so it can miss the difference between nearby streets. Traffic, vegetation, pollen, wind direction, and urban infrastructure can change the air a person actually walks or drives through."),
            ("The idea", "Health-focused routes, not only the shortest path.",
             "AI Aero-Biome is an intelligent decision-support system for personalized, hyperlocal air-quality analysis and health-focused navigation. It combines artificial intelligence, machine learning, environmental data, weather information, geographic information systems, and a user's health profile to point out places with higher respiratory risk."),
            ("What it is designed to do", "Local differences, personal symptoms, and risk flags.",
             "It looks beyond a city-wide average to local differences in air quality. It uses personalized symptom information alongside environmental data. It flags areas that may carry a higher respiratory risk, and it recommends a travel route for health, not only the shortest distance. It draws on weather, maps, and conditions such as traffic, pollen, wind, and urban form."),
            ("The purpose", "Informed daily choices for asthma and allergies.",
             "The system analyzes environmental conditions together with personalized symptom information. From that, it aims to predict localized air quality and recommend a healthier route. It is designed to help people with asthma and allergies make more informed daily decisions."),
            ("A student demonstration", "Routes, awareness, and a demonstration of the idea.",
             "AI Aero-Biome is intended to support healthier travel choices by making lower-risk routes visible before a trip begins. It also aims to increase awareness of respiratory and environmental health risks and demonstrate how AI can support healthcare, environmental monitoring, and smart-city solutions. This video introduces that student project."),
        ],
    },
    {
        "slug": "shop-wise-ai-cart",
        "scene": "scene-shopwise.png",
        "slides": [
            ("Shop Wise AI Cart", "Smarter shopping. Healthier choices.",
             "Shop Wise AI Cart. Smarter shopping. Healthier choices. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "Unplanned trips, hidden allergens, and large stores.",
             "Many people shop without a plan. Impulsive or emotional choices lead to overspending, unnecessary items, and sometimes products that can trigger allergies. The project also describes the strain of reading ingredient lists, navigating large stores such as Carrefour or Lulu, and forgetting food until it expires. The team's survey found that more than 80 percent of respondents reported accidentally exceeding their planned grocery budget and feeling concerned about hidden allergens in packaged foods."),
            ("The assistant", "One camera scan for price, ingredients, and alerts.",
             "Shop Wise AI Cart is an AI-powered shopping assistant for grocery trips. The phone camera scans an item, image recognition identifies the product, and the app can show details such as price and ingredients. It also raises real-time alerts for budget limits, allergies, and suggestions based on shopping habits. A shopper can select a store, such as Lulu Hypermarket or Carrefour, so the app is designed to use that store's inventory, aisle layout, and pricing information."),
            ("What it includes", "Budget, allergies, diet, aisles, and expiry dates.",
             "The features are camera scanning, budget tracking with cheaper alternatives when appropriate, allergy warnings, diet preferences such as Halal, Keto, and Vegan, store selection and navigation, expiry reminders, and recommendations that adapt to the user profile and shopping habits over time."),
            ("A shopping trip", "Profile, scan, cart, then a plan for the way out.",
             "The shopper sets a profile with a budget, diet preferences, and allergy information. The camera matches the product and checks price, ingredients, and suitability. Spending updates immediately. Navigation and expiry reminders support the trip after the scan. The interface was designed in Figma, and the development notes describe work in Visual Studio Code with React and TypeScript."),
            ("A prototype", "Always check the package. Lighting can affect the scan.",
             "Allergy alerts may be inaccurate, so users should always check the actual product packaging. Product recognition can also be affected by poor lighting or blurry camera angles. The project is being developed and tested as a prototype. This video introduces that student project. It is not a finished supermarket system."),
        ],
    },
    {
        "slug": "cai",
        "scene": "scene-cai.png",
        "slides": [
            ("Cognitive Astronaut Interface", "A mind-controlled robotic assistant.",
             "CAI, the Cognitive Astronaut Interface. A space assistant controlled by the mind, able to act in an emergency. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "Hands are not always free in a dangerous place.",
             "Astronauts work where movement is limited by microgravity, tight spaces, or injury. In an emergency they may be unable to operate equipment by hand or answer quickly. Some parts of a mission are too dangerous or too difficult to reach, so a robot has to help. Many current systems still depend on manual control and do not include an intelligent emergency response."),
            ("The prototype", "Brain signals become a small set of robot commands.",
             "An EEG headset captures activity such as blinking and focus. Python processes those signals into commands for a robotic assistant prototype. The headset signal is filtered and interpreted with basic AI logic, then sent as a command to the robot. The distinctive feature is emergency response. If the astronaut cannot respond, or if the signal looks abnormal, the system can raise an alert or start an autonomous action. It is a simplified model of a space assistant, not a flight system."),
            ("What it demonstrates", "Input, processing, control, and an automatic alert.",
             "The features are brain-signal input, signal processing, robotic control, emergency detection, an automatic response, and a live demonstration of the loop from signal to action. The design case is an astronaut who needs hands-free control. The same idea has also helped people with disabilities control devices on Earth."),
            ("From signal to action", "Capture, process, control, assist, and protect.",
             "First the headset reads the brain signals. Python and threshold-based logic convert those signals into commands. The command operates the robotic prototype. The robot represents help with tasks that are hard or unsafe for a person. If the user cannot respond, the system can alert or act on its own."),
            ("A student prototype", "Not a flight-ready space system.",
             "CAI is a simplified robotic prototype, not a flight-ready or industrial-level space system. It does not include medical-grade EEG analysis, a full space-environment simulation, complex deep-learning models, or industrial robotic systems. This video introduces the student prototype. It has not been used in space, and it is not a claim of proven astronaut safety."),
        ],
    },
    {
        "slug": "acr",
        "scene": "scene-acr.png",
        "slides": [
            ("Ancient Civilization Reconstructor", "The past meets possibilities.",
             "ACR, Ancient Civilization Reconstructor. The past meets possibilities. A student project from Applied Technology Schools, Baniyas."),
            ("The problem", "Damaged sites are hard to read as complete places.",
             "Historic sites and artifacts are often incomplete or damaged. A ruined building or broken piece is hard to read as a full place, so students and visitors may see a fragment and never picture the streets, rooms, or landscape that once belonged with it. Collecting accurate historical information and finding suitable visual references is difficult."),
            ("The website", "Explore Egypt, Rome, and the Maya through reconstructions.",
             "Ancient Civilization Reconstructor is a website where users can learn about ancient civilizations through pictures and digital reconstructions. Users can choose civilizations such as Ancient Egypt, Rome, or the Maya and explore their buildings and environments."),
            ("AI reconstruction", "Upload a damaged piece. See an estimated complete view.",
             "The site also includes a path where someone can upload a picture of a broken ancient piece or historic site. AI uses that picture and reference images to estimate how the complete piece may have looked and to create a new picture. The system studies the uploaded image together with historical records, maps, and archaeological references."),
            ("How it works", "Upload, analyze, reconstruct, then explore.",
             "First a picture of the historic site or broken artifact is added to the website. AI studies the image against historical records, maps, and reference pictures. AI-assisted tools generate an estimate of the missing parts and a reconstruction layout. The reconstructed scene is shown with historical information about the civilization."),
            ("A student project", "An educational estimate, not an official restoration.",
             "The website is designed for people who want to learn about ancient civilizations through pictures and reconstructions. Reconstructions are AI-assisted estimates from historical records, maps, images, and archaeological references. They are an educational reconstruction, not an official archaeological restoration. This video introduces that student project."),
        ],
    },
]


def font(path, size):
    return ImageFont.truetype(path, size)


def wrap(draw, text, face, width):
    lines, current = [], ""
    for word in text.split():
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=face) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def make_card(scene_name, title, body, index, total):
    base = Image.open(MEDIA / scene_name).convert("RGB")
    scale = max(W / base.width, H / base.height)
    resized = base.resize((int(base.width * scale), int(base.height * scale)), Image.Resampling.LANCZOS)
    left = (resized.width - W) // 2
    top = (resized.height - H) // 2
    frame = resized.crop((left, top, left + W, top + H)).convert("RGBA")

    shade = Image.new("L", (W, 1))
    for x in range(W):
        shade.putpixel((x, 0), int(214 - 78 * x / W))
    shade = shade.resize((W, H))
    veil = Image.new("RGBA", (W, H), (5, 12, 24, 255))
    veil.putalpha(shade)
    frame = Image.alpha_composite(frame, veil)
    draw = ImageDraw.Draw(frame)
    draw.rectangle((0, 0, 8, H), fill=(62, 203, 255, 255))

    kicker = font(FONT_BOLD, 22)
    title_font = font(FONT_BOLD, 58)
    body_font = font(FONT, 30)
    foot = font(FONT, 22)
    draw.text((64, 78), "ATS BANIYAS  |  AI EXHIBITION 2026", font=kicker, fill=(127, 223, 255, 255))
    title_lines = wrap(draw, title, title_font, 760)
    y = 130
    for line in title_lines[:2]:
        draw.text((64, y), line, font=title_font, fill=(237, 245, 255, 255))
        y += 68
    y += 18
    for line in wrap(draw, body, body_font, 740)[:6]:
        draw.text((64, y), line, font=body_font, fill=(210, 224, 238, 255))
        y += 42
    draw.text((64, H - 64), f"{index + 1}  /  {total}", font=foot, fill=(169, 189, 211, 255))
    return frame.convert("RGB")


async def speak(text, path):
    await edge_tts.Communicate(text, VOICE, rate=RATE).save(str(path))


def duration(path):
    return MP3(path).info.length


def ffmpeg():
    return imageio_ffmpeg.get_ffmpeg_exe()


def render_segment(card, audio, dest, seconds, zoom_in):
    direction = "min(1.0+0.00035*on,1.06)" if zoom_in else "max(1.06-0.00035*on,1.0)"
    subprocess.run(
        [
            ffmpeg(), "-y", "-loglevel", "error",
            "-loop", "1", "-framerate", "18", "-i", str(card),
            "-i", str(audio),
            "-t", f"{seconds:.3f}",
            "-vf",
            f"scale=1440:810,zoompan=z='{direction}':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=1:s=1280x720:fps=18,format=yuv420p",
            "-c:v", "libx264", "-preset", "ultrafast", "-crf", "25",
            "-c:a", "aac", "-ar", "44100", "-ac", "2", "-b:a", "128k",
            "-pix_fmt", "yuv420p", "-shortest",
            str(dest),
        ],
        check=True,
    )


async def build(project):
    work = TMP / project["slug"]
    work.mkdir(parents=True, exist_ok=True)
    slides = project["slides"]
    segments = []
    total = 0
    for index, (title, body, spoken) in enumerate(slides):
        card = work / f"card-{index}.png"
        audio = work / f"audio-{index}.mp3"
        segment = work / f"seg-{index}.mp4"
        make_card(project["scene"], title, body, index, len(slides)).save(card, quality=95)
        await speak(spoken, audio)
        seconds = max(4.8, duration(audio) + 0.45)
        render_segment(card, audio, segment, seconds, index % 2 == 0)
        segments.append(segment)
        total += seconds
        print(f"  {project['slug']} slide {index + 1}/{len(slides)} {seconds:.1f}s", flush=True)
    listing = work / "list.txt"
    listing.write_text("".join(f"file '{segment.as_posix()}'\n" for segment in segments), encoding="utf-8")
    OUT.mkdir(parents=True, exist_ok=True)
    dest = OUT / f"{project['slug']}.mp4"
    subprocess.run(
        [ffmpeg(), "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(listing), "-c", "copy", "-movflags", "+faststart", str(dest)],
        check=True,
    )
    print(f"DONE {project['slug']} {total:.1f}s -> {dest.name}", flush=True)


async def main():
    wanted = set(sys.argv[1:])
    chosen = [item for item in PROJECTS if not wanted or item["slug"] in wanted]
    for project in chosen:
        print(f"BUILD {project['slug']}", flush=True)
        await build(project)
    print("ALL DONE", flush=True)


if __name__ == "__main__":
    asyncio.run(main())
