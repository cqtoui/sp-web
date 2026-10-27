/**
 * Showcase content. Edit names, descriptions, colors, routes, and image paths here.
 * Facts below are taken from the supplied project documents, posters, and brochures.
 * Where a detail was not in those files, it is left out or marked as a placeholder.
 */

import projectCopyAr from "./projects.ar.json";

const projectRecords = [
  {
    slug: "ai-simulation-chamber",
    video: "/media/demos/ai-simulation-chamber.mp4",
    name: "AI Simulation Chamber",
    tagline: "Adaptive Emergency Protocol Engine",
    summary:
      "A simulator that uses generative AI and immersive technology to train people for emergencies through adaptive, high-pressure scenarios.",
    theme: "simulation",
    accent: "#0f6880",
    accentSoft: "#e7f6f8",
    signal: "#d4652f",
    logo: "/media/simulation-card.png",
    cardLogo: "/media/simulation-card.png",
    logoAlt: "AI Simulation Chamber logo, an orange and cyan cross with the name Adaptive Emergency Protocol Engine",
    overview:
      "The AI Simulation Chamber is a training simulator for emergency response. Traditional first-aid resources can explain a procedure, but they rarely recreate the pressure or the personal differences of a real crisis. This project proposes a game-like environment where the story and the difficulty change from the user’s choices in the moment.",
    problem: [
      "First-aid knowledge on its own does not prepare someone for panic, time pressure, or a situation that changes while they act. A person may remember a procedure on paper and still freeze when noise, smoke, or a changing patient makes the next step unclear. Hesitation in a real emergency can cost lives.",
      "The simulation is designed around high-pressure scenes such as aviation incidents, cardiac arrest, severe trauma, and structural fires with smoke. Those events rarely stay still, so practice that only explains a list of steps leaves a gap between knowing what to do and doing it under stress.",
    ],
    solution: [
      "The chamber places the user in a safe but demanding training ground. Generative AI adapts the narrative as choices are made, and reinforcement learning models what happens next, such as a patient’s condition worsening after incorrect CPR. The aim is to rehearse the sequence while the pressure is still present.",
      "The intended deliverable is a functional VR prototype. Unity or Unreal Engine would provide the visual scene, and the OpenAI API would support adaptive storytelling. Localized information, including country-specific emergency numbers and dispatcher protocols, keeps the practice closer to the setting a trainee might actually face.",
    ],
    features: [
      {
        title: "Adaptive scenarios",
        text: "The narrative and difficulty change from the user’s real-time choices, from aviation incidents to cardiac arrest.",
      },
      {
        title: "Stress factors",
        text: "Auditory anxiety cues add pressure so the practice feels closer to a real emergency.",
      },
      {
        title: "Consequence modeling",
        text: "Reinforcement learning represents the result of an action, including harm caused by an incorrect procedure.",
      },
      {
        title: "Procedure practice",
        text: "Users rehearse step-by-step life-saving actions and work on faster decision-making.",
      },
    ],
    steps: [
      { title: "Choose a crisis", text: "The user enters a scenario such as an aviation incident, cardiac arrest, trauma, or fire." },
      { title: "Enter the scene", text: "A VR environment applies time pressure and stress cues." },
      { title: "Act under pressure", text: "The AI adjusts the story and difficulty from the choices being made." },
      { title: "See the consequence", text: "Reinforcement learning reflects the outcome, including the effect of an incorrect action." },
      { title: "Build the sequence", text: "Repeated practice is meant to support muscle memory and quicker decisions." },
    ],
    users:
      "The AI Simulation Chamber is designed for students, trainees, and individuals who need realistic emergency-response practice. It provides a safe, high-pressure environment where users can build confidence, strengthen decision-making skills, and rehearse life-saving procedures before facing a real emergency.",
    impact:
      "By simulating the panic of a real emergency, the chamber is meant to help users practice life-saving procedures and improve decision speed before they face a real event.",
    extras: [
      {
        title: "Emergency Scenarios Addressed",
        items: [
          "Aviation Incidents and Cabin Pressure",
          "Cardiac Arrest and CPR Timing",
          "Severe Physical Trauma and Hemorrhage",
          "Structural Fire and Smoke Navigation",
        ],
      },
    ],
    toolsTitle: "Technologies and Frameworks",
    tools: [
      "Unity or Unreal Engine",
      "OpenAI API",
      "Reinforcement Learning",
      "Virtual Reality (VR)",
    ],
    team: [
      { name: "Saada Alalawi" },
      { name: "Shouq Al Ameri" },
      { name: "Shamma Al Ameri" },
    ],
    meta: [{ label: "Campus", value: "Applied Technology Schools, Baniyas" }],
    images: [
      {
        src: "/media/simulation-rollup.jpg",
        alt: "AI Simulation Chamber roll-up banner with the cross logo, a training control room, and sections for practice, learning, real scenarios, and AI feedback",
        caption: "Project roll-up",
        rollup: true,
      },
      {
        src: "/media/simulation-poster.svg",
        alt: "AI Simulation Chamber artwork describing the training loop, system capabilities, and simulated crises",
        caption: "",
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-simulation.jpg",
        alt: "AI Simulation Chamber prototype training view",
      },
    ],
  },
  {
    slug: "sanad-ai",
    video: "/public%20videos/SANAD.mp4?v=sanad",
    name: "SANAD AI Crisis & Safety Assistant",
    tagline: "Verify information. Assess risk. Stay safe.",
    summary:
      "A mobile assistant that helps people understand crisis-related messages, see a simple safety level, and find practical guidance.",
    theme: "sanad",
    accent: "#1a6f97",
    accentSoft: "#e7f3fb",
    logo: "/media/sanad-card.png",
    cardLogo: "/media/sanad-card.png",
    logoAlt: "SANAD AI logo, a shield with an AI profile and icons for conflict, disaster, home safety, storms, and health",
    overview:
      "SANAD AI Crisis & Safety Assistant is a mobile application for crisis awareness. People can submit a news message, social media post, or alert and receive an AI-supported reading of its possible safety level and credibility. The goal is to help users become more aware and prepared. It is not a replacement for official emergency services.",
    problem: [
      "During a crisis, confusing, misleading, or false information can spread quickly. A news item, social post, or alert may look urgent while still being incomplete or wrong. People may not know what the message means, how serious it is, or what to do next.",
      "Delayed or unreliable information is a practical risk. The aim is to help users slow down and understand what they are reading before they trust it, act on it, or pass it on to someone else.",
    ],
    solution: [
      "SANAD organizes submitted text into crisis categories and returns a result people can read without technical knowledge: a safety level, a credibility label, a possible threat type, an affected area when the text supports it, and recommended actions.",
      "Emergency Mode offers quicker access to safety guidance when someone needs it at once. The application also points users toward trusted official sources for anything serious, so the assistant stays a first reading rather than a replacement for authorities.",
    ],
    features: [
      {
        title: "Information analysis",
        text: "Users paste a news item, message, post, or alert and receive an understandable assessment.",
      },
      {
        title: "Safety level",
        text: "Results use three labels: Low, Medium, or High.",
      },
      {
        title: "Credibility check",
        text: "Submitted information is categorized as Real, Suspicious, or Fake, with a reminder to verify important claims.",
      },
      {
        title: "Crisis categories",
        text: "Conflict and war, natural disasters, health crises, and a general mode for other safety situations.",
      },
      {
        title: "Threat and area",
        text: "When the text contains enough detail, SANAD identifies a possible threat type and affected area.",
      },
      {
        title: "Emergency Mode",
        text: "A focused mode for safety guidance when someone needs it quickly.",
      },
    ],
    steps: [
      { title: "Select a category", text: "Conflict and war, natural disasters, health crisis, or general mode." },
      { title: "Submit the message", text: "Paste a news article, social media post, alert, or other crisis-related text." },
      { title: "AI analysis", text: "SANAD looks for the possible threat, credibility cues, and level of concern." },
      { title: "Read the result", text: "The screen shows Low, Medium, or High, plus a credibility assessment." },
      { title: "Follow the guidance", text: "Recommendations match the situation and the selected category." },
      { title: "Verify what matters", text: "Serious information should be confirmed with official emergency services and trusted authorities." },
    ],
    levels: [
      { name: "Low", text: "Limited or low-risk information." },
      { name: "Medium", text: "Information that may need attention or verification." },
      { name: "High", text: "Information that may indicate a serious safety concern." },
    ],
    categories: [
      { name: "Conflict & War", text: "Air raids, missiles, and armed threats." },
      { name: "Natural Disasters", text: "Floods, storms, and sandstorms." },
      { name: "Health Crisis", text: "Disease outbreaks, pandemics, and lockdowns." },
      { name: "General Mode", text: "Other safety-related situations." },
    ],
    users:
      "SANAD is designed for students who encounter emergency information on social media, families and other citizens, people who need quick access to basic safety guidance, and communities working to improve preparedness. The application is designed to be easy to use without technical knowledge.",
    impact:
      "SANAD brings crisis-specific analysis, safety classification, credibility assessment, threat identification, recommendations, Emergency Mode, safety education, and source verification into one application.",
    disclaimer:
      "SANAD is an educational awareness project. It does not replace emergency services, government authorities, medical professionals, law enforcement, or official alerts. AI-generated results may be inaccurate and should not be treated as confirmed facts. In a real emergency, follow instructions from official authorities and trusted emergency services.",
    team: [
      { name: "Dhabya Mohsin" },
      { name: "Alreem Tareq" },
      { name: "Mahra Asaad" },
      { name: "Sara Nasser" },
    ],
    supervisor: "Ms. Dina Sarris",
    meta: [{ label: "School", value: "Applied Technology Schools, Grade 12" }],
    images: [
      {
        src: "/media/sanad-rollup.jpg",
        alt: "SANAD AI roll-up banner with the shield logo, the line Verify information, assess risk, stay safe, and sections for verification, risk assessment, safety recommendations, and multi-crisis support",
        caption: "Project roll-up",
        rollup: true,
      },
      {
        src: "/media/sanad-poster.jpg",
        alt: "SANAD AI project poster with problem, solution, workflow, and team sections",
        caption: "Project poster",
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-sanad-home.png",
        alt: "SANAD Crisis Assistant home screen",
      },
      {
        src: "/media/prototype-sanad-modes.png",
        alt: "SANAD Crisis Assistant emergency type screen",
      },
      {
        src: "/media/prototype-sanad-tips.png",
        alt: "SANAD Crisis Assistant safety tips screen",
      },
      {
        src: "/media/prototype-sanad-shelter.png",
        alt: "SANAD Crisis Assistant shelter time calculator",
      },
    ],
  },
  {
    slug: "safespace-ai",
    video: "/media/demos/safespace-ai.mp4",
    qr: "/media/safespace-qr.png",
    name: "SafeSpace AI",
    tagline: "Your feelings matter. Your growth matters.",
    summary:
      "A web platform that helps teenagers express emotions, check in regularly, and receive age-appropriate support.",
    theme: "safespace",
    accent: "#5b4d99",
    accentSoft: "#f3effb",
    logo: "/media/safespace-card.png",
    cardLogo: "/media/safespace-card.png",
    logoAlt: "SafeSpace AI logo, a heart framing a young person in a hijab and a small smiling AI companion",
    overview:
      "SafeSpace AI is a web platform for teenagers who need a place to talk about how they feel and to practice healthier emotional habits. It uses artificial intelligence, natural language processing, and sentiment analysis to notice emotional patterns and offer personalized support. The platform is designed to protect users’ privacy while offering optional support for guardians.",
    problem: [
      "Teenagers may find it difficult to express their emotions or develop healthy emotional habits. Feelings can stay unspoken, and regular check-ins are easy to skip when there is no quiet place that feels safe enough to start.",
      "SafeSpace AI is designed to give an accessible and supportive place for emotional expression, regular self-reflection, and positive personal growth, without asking a young person to share a private conversation with everyone around them.",
    ],
    solution: [
      "SafeSpace offers an empathetic, age-appropriate chatbot, daily mood check-ins, mood insights, and suggested growth activities such as hobbies, exercise, and creative work. The tools are meant to help a teenager notice patterns and take a small next step.",
      "A guardian dashboard provides high-level progress summaries without revealing private conversations. If the system notices signs of serious distress, it encourages the user to seek help from a trusted adult or an appropriate support service rather than treating the chatbot as the only answer.",
    ],
    features: [
      { title: "AI supportive chatbot", text: "Empathetic, age-appropriate conversation and guidance." },
      { title: "Daily check-ins", text: "A place to record mood and feelings." },
      { title: "Mood insights", text: "Emotional trends and patterns over time." },
      { title: "Growth activities", text: "Suggestions such as hobbies, exercise, creative work, and other positive goals." },
      { title: "Guardian dashboard", text: "Provides high-level progress summaries without revealing private conversations." },
      { title: "Safety support", text: "Signs of serious distress lead toward trusted adults or appropriate services." },
    ],
    objectives: [
      "Give teenagers an accessible place to express feelings.",
      "Encourage regular emotional check-ins and self-reflection.",
      "Suggest healthy coping strategies and positive activities.",
      "Protect privacy while offering optional support for guardians.",
    ],
    users:
      "Teenagers are the primary users. Guardians can see summarized progress. The mission is emotional awareness, resilience, and personal growth through ethical AI support and human connection.",
    impact:
      "The platform is meant to help teenagers understand their emotions, build healthy habits, and grow into their best selves through AI-supported conversation, mood tracking, and personalized guidance.",
    contact: "safespaceai.team@gmail.com",
    team: [
      { name: "Fatima Ali Almarzooqi" },
      { name: "Mariam Jumaa Almarzooqi" },
      { name: "Hend Abdulla Alhammadi" },
      { name: "Aisha Hamza" },
    ],
    images: [
      {
        src: "/media/safespace-rollup.jpg",
        alt: "SafeSpace AI roll-up banner with the heart logo, daily check-ins, an AI companion, mood insights, and a phone showing mood choices",
        caption: "Project roll-up",
        rollup: true,
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-safespace-home.png",
        alt: "SafeSpace AI home dashboard",
      },
      {
        src: "/media/prototype-safespace-chat.png",
        alt: "SafeSpace AI chat screen",
      },
      {
        src: "/media/prototype-safespace-insights.png",
        alt: "SafeSpace AI emotional insights screen",
      },
      {
        src: "/media/prototype-safespace-resources.png",
        alt: "SafeSpace AI wellness resources screen",
      },
    ],
  },
  {
    slug: "ai-aero-biome",
    video: "/media/demos/ai-aero-biome.mp4",
    qr: "/media/aero-qr.png",
    name: "AI Aero-Biome",
    tagline: "Intelligent hyperlocal air quality and respiratory health assistant",
    summary:
      "A decision-support system for personalized, street-level air-quality analysis and healthier travel routes.",
    theme: "aero",
    accent: "#0f766e",
    accentSoft: "#e7f6f3",
    logo: "/media/aero-card.png",
    cardLogo: "/media/aero-card.png",
    logoAlt: "AI Aero-Biome logo with a profile, circuit lines, lungs, a city, and a winding path",
    mark: "/media/aero-mark.jpg",
    overview:
      "AI Aero-Biome is an intelligent decision-support system for personalized, hyperlocal air-quality analysis and health-focused navigation. It combines artificial intelligence, machine learning, environmental data, weather information, geographic information systems, and a user’s health profile to point out places with higher respiratory risk.",
    problem: [
      "Asthma, allergic rhinitis, and other chronic respiratory conditions affect millions of people. A public Air Quality Index often describes a wide area, so two streets a few minutes apart can feel very different while the published number stays the same.",
      "Traffic, vegetation, pollen, wind direction, and urban infrastructure can change the air a person actually walks or drives through. That local difference is hard to see when the only available reading covers a whole district.",
    ],
    solution: [
      "The system analyzes environmental conditions together with personalized symptom information. From that, it aims to predict localized air quality and recommend a healthier route rather than simply the shortest one.",
      "The purpose is to help people with asthma and allergies make more informed daily decisions, raise awareness of environmental health risks, and show how AI can serve healthcare, environmental monitoring, and smart-city planning at street level.",
    ],
    features: [
      { title: "Hyperlocal analysis", text: "Looks beyond a city-wide average to local differences in air quality." },
      { title: "Health profiles", text: "Uses personalized symptom information alongside environmental data." },
      { title: "Risk identification", text: "Flags areas that may carry a higher respiratory risk." },
      { title: "Healthier routes", text: "Recommends a travel route for health, not only the shortest distance." },
      { title: "Environmental inputs", text: "Draws on weather, GIS, and conditions such as traffic, pollen, wind, and urban form." },
      { title: "Decision support", text: "Informs daily choices for people managing asthma and allergies." },
    ],
    users:
      "People with asthma and allergies are the people the system is designed to help directly. The broader aim is public awareness of environmental health, and a demonstration of AI in healthcare, environmental monitoring, and smart cities.",
    impact:
      "AI Aero-Biome is intended to support healthier travel choices by making lower-risk routes visible before a trip begins. It also aims to increase awareness of respiratory and environmental health risks and demonstrate how AI can support healthcare, environmental monitoring, and smart-city solutions.",
    team: [
      { name: "Noor Alhashmi" },
      { name: "Reem Sarooj" },
      { name: "Fatima Alameri" },
    ],
    images: [
      {
        src: "/media/aero-rollup.jpg",
        alt: "AI Aero-Biome roll-up banner with the lungs-and-city logo, a phone showing air quality, and sections for analysis, health risk, hyperlocal insights, and personalized guidance",
        caption: "Project roll-up",
        rollup: true,
      },
      {
        src: "/media/aero-poster.jpg",
        alt: "AI Aero-Biome exhibition poster with the challenge, solution, phone preview, and why it matters",
        caption: "Project poster",
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-aero-dashboard.png",
        alt: "AI Aero-Biome dashboard with environmental risk score",
      },
      {
        src: "/media/prototype-aero-air.png",
        alt: "AI Aero-Biome air quality readings",
      },
      {
        src: "/media/prototype-aero-map.png",
        alt: "AI Aero-Biome health map",
      },
      {
        src: "/media/prototype-aero-health.png",
        alt: "AI Aero-Biome my health screen",
      },
    ],
  },
  {
    slug: "shop-wise-ai-cart",
    video: "/public%20videos/shopwise-h264-aac.mp4",
    name: "Shop Wise AI Cart",
    tagline: "Smarter shopping. Healthier choices.",
    summary:
      "A grocery assistant that scans products with a phone camera and gives budget, allergy, and diet guidance while someone shops.",
    theme: "shopwise",
    accent: "#3c348f",
    accentSoft: "#f3f0fb",
    logo: "/media/shopwise-logo.png",
    cardLogo: "/media/shopwise-card.png",
    logoAlt: "Shop Wise AI Cart logo, a shopping cart with an AI node and a compass",
    overview:
      "Shop Wise AI Cart is an AI-powered shopping assistant for grocery trips. The phone camera scans an item, image recognition identifies the product, and the app can show details such as price and ingredients. It also raises real-time alerts for budget limits, allergies, and suggestions based on shopping habits.",
    problem: [
      "Many people shop without a plan. Impulsive or emotional choices lead to overspending, unnecessary items, and sometimes products that can trigger allergies. Reading ingredient lists, finding a path through a large store such as Carrefour or Lulu, and remembering food before it expires often sit in separate, easy-to-forget tasks.",
      "The team’s survey found that more than 80% of respondents reported accidentally exceeding their planned grocery budget and feeling concerned about hidden allergens in packaged foods. That combination of money pressure and safety worry is what the assistant is meant to hold in one place.",
    ],
    solution: [
      "The project combines camera recognition, budget control, allergy alerts, store navigation, and expiry reminders in one assistant, instead of leaving those jobs in separate apps. A scan can check the product, the price, and whether it fits the shopper’s limits.",
      "A shopper can select a store, such as Lulu Hypermarket or Carrefour, so the app is designed to use that store’s inventory, aisle layout, and pricing information. Over time, the assistant is meant to learn habits and tailor suggestions. The interface was designed in Figma, and development notes describe work in Visual Studio Code with React and TypeScript.",
    ],
    features: [
      { title: "Camera scanning", text: "Use image recognition to identify a grocery item and retrieve product information." },
      { title: "Budget tracking", text: "Monitor spending and suggest cheaper alternatives when appropriate." },
      { title: "Allergy protection", text: "Compare ingredients with the user’s allergy profile and provide a warning." },
      { title: "Diet preferences", text: "Support preferences such as Halal, Keto, and Vegan." },
      { title: "Store selection and navigation", text: "Use selected-store information, including inventory, aisle layouts, and pricing where available." },
      { title: "Expiry reminders", text: "Help users track products nearing their expiry date." },
      { title: "Personalized recommendations", text: "Adapt suggestions to the user profile and shopping habits over time." },
    ],
    steps: [
      { title: "Set a profile", text: "Add a budget, diet preferences, and allergy information." },
      { title: "Scan the item", text: "The camera matches the product and checks price, ingredients, and suitability." },
      { title: "Watch the cart", text: "Spending updates immediately, with cheaper alternatives when they help the budget." },
      { title: "Leave with a plan", text: "Navigation and expiry reminders support the trip after the scan." },
    ],
    users:
      "Busy families, budget-conscious shoppers, and people with dietary needs or serious food allergies, including peanuts and dairy.",
    impact:
      "The team chose one camera assistant over a barcode-only scanner, a separate budget tracker, or a recipe tool, so budget, diet, and allergy support could happen during the shop.",
    disclaimerTitle: "Safety and project scope",
    disclaimer:
      "Allergy alerts may be inaccurate, so users should always check the actual product packaging. Product recognition can also be affected by poor lighting or blurry camera angles. The project is being developed and tested as a prototype.",
    toolsHeading: "Development and design tools confirmed in the project records",
    tools: [
      "Figma",
      "Visual Studio Code",
      "React",
      "TypeScript",
      "Camera-based image recognition",
    ],
    team: [
      { name: "Dana Alawbthani" },
      { name: "Dan Mohammed" },
      { name: "Alya Aref" },
      { name: "Rawda Waleed" },
    ],
    supervisor: "Ms. Dina Sarris",
    meta: [{ label: "Campus", value: "Baniyas Girls" }],
    images: [
      {
        src: "/media/shopwise-rollup.jpg",
        alt: "Shop Wise AI Cart roll-up banner with a shopping cart logo, a phone scanning groceries, and sections for healthier choices, best deals, and scan and know",
        caption: "Project roll-up",
        rollup: true,
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-shopwise.jpg",
        alt: "Shop Wise AI Cart prototype scan view",
      },
    ],
  },
  {
    slug: "ai-safeguard",
    video: "/media/demos/ai-safeguard.mp4?v=senior",
    name: "AI SafeGuard",
    tagline: "Smart safety, real protection.",
    summary:
      "A webcam check that looks for required safety gear at a laboratory or workshop entrance and keeps a record for supervisors.",
    theme: "safeguard",
    accent: "#b45309",
    accentSoft: "#fff4eb",
    logo: "/media/safeguard-logo.png",
    cardLogo: "/media/safeguard-card.png",
    logoAlt: "AI SafeGuard logo, an orange shield with a worker in safety gear, an AI node, and a check mark",
    overview:
      "An AI-based workplace safety system that uses computer vision and facial recognition to identify workers and check whether they are wearing the required personal protective equipment before they enter.",
    problem: [
      "In many workshops and laboratories, incidents can occur when people do not wear the required safety equipment. A missing helmet, pair of goggles, gloves, or lab coat can place workers and students in a dangerous situation within seconds, especially when a task starts as soon as they walk in.",
      "These risks grow when an entrance is busy and no one can watch every person who walks in. Without a clear record, a violation can pass unnoticed, the same gap can repeat, and the chance of injury rises before a supervisor has a chance to review what happened.",
    ],
    solution: [
      "We developed an AI-based system that detects required safety gear, identifies the person, and records incidents on the computer running the prototype. A webcam checks the entrance, and the result is shown immediately so the person can correct the missing item before they continue.",
      "When a violation occurs, it is saved so supervisors can review it later. The record shows who was involved and which required equipment was missing, which keeps the check useful after the moment at the door has already passed.",
    ],
    features: [
      { title: "Incident photos and records", text: "Relevant incident details, including the scan image, missing equipment, entry point, and recognized person when available, are retained for supervisor review." },
      { title: "Face detection and person identification", text: "The system detects a face and identifies the registered person at the entrance." },
      { title: "Safety-gear detection", text: "It checks for the protective equipment required before someone enters the workspace." },
      { title: "Instant alerts and sound notifications", text: "A clear result or a violation is announced on screen and with an immediate sound." },
      { title: "Feedback for users", text: "The person at the entrance sees which items are present and which required items are missing." },
      { title: "Supervisor dashboard", text: "Supervisors can follow live checks, people, entry points, and the records that need review." },
      { title: "Incident and violation records", text: "Each violation is saved with the person, the entrance, and the missing equipment." },
      { title: "Supervisor review and responsible use", text: "Authorized supervisors can review incidents and safety information. Unclear AI results should be reviewed by a supervisor, and the system supports human safety supervision rather than replacing it." },
    ],
    ppe: ["Helmets", "Safety goggles", "Gloves", "Safety vests", "Ear protection", "Lab coats"],
    steps: [
      { title: "Select the entrance", text: "Choose the entry point so the check uses the safety rules for that place." },
      { title: "Detect the required safety items", text: "The camera looks for the protective equipment a person is wearing." },
      { title: "Identify the person", text: "Face detection matches the person with a registered identity." },
      { title: "Match the required safety gear", text: "Detected equipment is compared with the gear required for the selected entry point." },
      { title: "Display the result and provide a sound output", text: "The screen shows the outcome, and a sound confirms a clear result or a violation." },
      { title: "If there is a violation, record and save it", text: "The incident is recorded and saved so a supervisor can review it later." },
    ],
    audienceTitle: "Who is it for",
    purposeTitle: "Purpose",
    users:
      "AI SafeGuard is designed for teachers, laboratory staff, workshop supervisors, workplace safety personnel, students, and workers in environments where protective equipment is required.",
    impact:
      "AI SafeGuard supports safer working and learning environments by helping supervisors notice missing safety equipment, provide immediate feedback, and review relevant incident records.",
    resources: [
      {
        title: "AI and image processing",
        text: "YOLO11s with PyTorch detects the required safety gear. OpenCV reads the camera image, while YuNet, Facenet512, and DeepFace identify the person.",
      },
      {
        title: "Frontend and backend",
        text: "The interface uses React, Vite, HTML, CSS, and JavaScript. FastAPI handles image checks, worker records, and incident data.",
      },
      {
        title: "Data and training",
        text: "The PPE model was trained using curated Roboflow datasets in Kaggle and improved with locally recorded camera videos and manually reviewed annotations.",
      },
      {
        title: "Hardware",
        text: "The prototype uses a development laptop and an external USB webcam.",
      },
    ],
    team: [
      { name: "Aisha Abdulla Alshehyari", role: "System development, AI integration, research, and data analysis" },
      { name: "Sara Saoud Aljenibi", role: "Design, UI, system development, and research" },
      { name: "Salamah Ahmed Alyammahi", role: "Quality testing and support" },
    ],
    supervisor: "Ms. Dina Sarris",
    meta: [{ label: "Campus", value: "Baniyas Girls" }],
    images: [
      {
        src: "/media/safeguard-rollup.jpg",
        alt: "AI SafeGuard roll-up banner with the shield logo, a worker in safety gear, and sections for detect, identify, alert, and analyze",
        caption: "Project roll-up",
        rollup: true,
      },
      {
        src: "/media/safeguard-poster.jpg",
        alt: "AI SafeGuard artwork explaining the problem, the webcam workflow, and the supervisor dashboard",
        caption: "",
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-safeguard-monitor.png",
        alt: "AI SafeGuard Live Monitor screen with camera feed, scan results, and required gear",
      },
      {
        src: "/media/prototype-safeguard-workers.png",
        alt: "AI SafeGuard Workers screen listing registered workers and compliance",
      },
      {
        src: "/media/prototype-safeguard-dashboard.png",
        alt: "AI SafeGuard Dashboard with compliance rate, incidents, and missed gear items",
      },
      {
        src: "/media/prototype-safeguard-incidents.png",
        alt: "AI SafeGuard Incidents screen listing recorded safety violations",
      },
    ],
  },
  {
    slug: "cai",
    video: "/public%20videos/CAI.MOV?v=cai",
    name: "CAI",
    fullName: "Cognitive Astronaut Interface",
    tagline: "A space assistant controlled by the mind, able to act in an emergency.",
    summary:
      "An AI-powered system that turns brain signals into commands for a robotic assistant, and can trigger safety actions if the user cannot respond.",
    theme: "astronaut",
    accent: "#1e4f86",
    accentSoft: "#e8f1fb",
    logo: "/media/cai-logo.png",
    cardLogo: "/media/cai-logo.png",
    signal: "#2aa3c7",
    logoAlt: "Cognitive Astronaut Interface logo, with an astronaut helmet, neural nodes, and an EEG line",
    overview:
      "CAI, the Cognitive Astronaut Interface, is an AI-powered system designed to help astronauts control robotic systems with brain signals. An EEG headset captures activity such as blinking and focus. Python processes those signals into commands for a robotic assistant prototype that stands in for a space assistant working in dangerous or hard-to-reach places.",
    problem: [
      "Astronauts work where movement is limited by microgravity, tight spaces, or injury. In an emergency they may be unable to operate equipment by hand or answer quickly, even when a robot is already nearby.",
      "Some parts of a mission are too dangerous or too difficult to reach, so a robot has to help. Many current systems still depend on manual control and do not include an intelligent emergency response if the person stops sending a clear signal.",
    ],
    solution: [
      "The headset signal is filtered and interpreted with basic AI logic, then sent as a command to the robot. The distinctive feature is emergency response: if the astronaut cannot respond, or if the signal looks abnormal, the system can raise an alert or start an autonomous action.",
      "The prototype uses an EEG headset, or simulated input if needed, Python for processing, and a robot built with Arduino or a Raspberry Pi. It is a simplified model of a space assistant, not a flight system, built to show the loop from signal to action in a demonstration.",
    ],
    features: [
      { title: "Brain-signal input", text: "An EEG headset captures signals such as blink strength and attention." },
      { title: "Signal processing", text: "Python turns noisy brain signals into a small set of commands." },
      { title: "Robotic control", text: "Commands drive a prototype robot that represents a space assistant." },
      { title: "Emergency detection", text: "No signal, or an abnormal signal, can be treated as a reason to act." },
      { title: "Automatic response", text: "The system can raise an alert or activate a safety action on its own." },
      { title: "Live demonstration", text: "The project is built to show the loop from signal to action in real time." },
    ],
    steps: [
      { title: "Capture", text: "The EEG headset reads brain signals." },
      { title: "Process", text: "Python and threshold-based logic convert signals into commands." },
      { title: "Control", text: "The command operates the robotic prototype." },
      { title: "Assist", text: "The robot represents help with tasks that are hard or unsafe for a person." },
      { title: "Protect", text: "If the user cannot respond, the system can alert or act on its own." },
    ],
    scope: {
      include: [
        "EEG headset input, or simulated input if needed",
        "Signal processing in Python",
        "Control of a robotic prototype",
        "Basic AI logic for interpreting signals",
        "Emergency detection when the signal is missing or abnormal",
        "An alert or automatic system action",
        "A real-time demonstration",
      ],
    },
    limitations: [
      "EEG signals may be inconsistent or noisy.",
      "Only a limited number of commands are available.",
      "The response may include a slight delay.",
      "CAI is a simplified robotic prototype, not a flight-ready or industrial-level space system. It does not include medical-grade EEG analysis, a full space-environment simulation, complex deep-learning models, or industrial robotic systems.",
    ],
    users:
      "The design case is an astronaut who needs hands-free control in an extreme environment. The proposal also notes that brain-computer interfaces on Earth have helped people with disabilities control devices, which shows a wider use for the same idea.",
    impact:
      "The expected result is a working prototype that converts brain signals into actions and demonstrates emergency detection. Deliverables listed in the proposal are the robotic assistant, Python and Arduino source code, a project report, and a live presentation.",
    toolsHeading: "Technologies and Hardware",
    tools: [
      "Python",
      "Arduino (C/C++)",
      "Signal processing and threshold-based logic",
      "Arduino IDE",
      "A Python IDE, such as VS Code, Thonny, or PyCharm",
      "EEG headset software or SDK",
      "NeuroSky MindWave Mobile 2 or OpenBCI Galea",
      "Arduino Uno or Raspberry Pi 4",
      "Robotic prototype with motors, wheels, or actuators",
      "L298N motor driver",
      "Bluetooth module (HC-05) or Wi-Fi",
      "Rechargeable battery pack",
      "Optional: ultrasonic sensor and camera module",
    ],
    supervisor: "Ms. Ashjan Saleh",
    meta: [{ label: "Campus", value: "Baniyas Girls" }],
    team: [
      { name: "Mariam Saad" },
      { name: "Salama Jamal" },
      { name: "Meera Abdulhakeem" },
      { name: "Shikha Ali" },
    ],
    images: [
      {
        src: "/media/cai-rollup.jpg",
        alt: "CAI roll-up banner showing the helmet logo, a five-step workflow from capture to protect, and a robotic rover",
        caption: "Project roll-up",
        rollup: true,
      },
      {
        src: "/media/cai-brochure-en.jpg",
        alt: "English CAI brochure with the helmet logo, features, technology, and the project team",
        caption: "CAI Brochure",
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-cai.jpg",
        alt: "CAI prototype control view",
      },
    ],
  },
  {
    slug: "acr",
    video: "/media/demos/acr.mp4",
    name: "ACR",
    fullName: "Ancient Civilization Reconstructor",
    tagline: "The past meets possibilities",
    summary:
      "A website that uses AI-assisted reconstructions so people can explore ancient civilizations and estimate how a damaged historic site or artifact may have looked.",
    theme: "acr",
    accent: "#8b5e34",
    accentSoft: "#f7f0e6",
    logo: "/media/acr-logo.jpg",
    cardLogo: "/media/acr-card.jpg",
    logoAlt: "ACR logo, stone letters for Ancient Civilization Reconstructor connected by circuit lines",
    overview:
      "Ancient Civilization Reconstructor is a website where users can learn about ancient civilizations through pictures and digital reconstructions. Users can choose civilizations such as Ancient Egypt, Rome, or the Maya and explore their buildings and environments. The site also includes a path where someone can upload a picture of a broken ancient piece or historic site. AI uses that picture and reference images to estimate how the complete piece may have looked and to create a new picture.",
    problem: [
      "Historic sites and artifacts are often incomplete or damaged. A ruined building or broken piece is hard to read as a full place, so students and visitors may see a fragment and never picture the streets, rooms, or landscape that once belonged with it.",
      "Collecting accurate historical information and finding suitable visual references is difficult. That gap makes it harder to teach and explore these places through images alone, especially when the remaining object does not show how the complete piece may have looked.",
    ],
    solution: [
      "The website presents selected civilizations with reconstructed environments, images, and historical information. Users move between sections to learn more about Ancient Egypt, Rome, or the Maya and to see buildings and environments together rather than as isolated pictures.",
      "For a damaged artifact or historic site, the user uploads a photo. AI-assisted tools compare it with historical records, maps, images, and archaeological references, then generate an estimated reconstruction and a visual scene that can be explored with the related history.",
    ],
    features: [
      {
        title: "Preserve heritage",
        text: "The project is designed to keep historic places visible for future generations through pictures and reconstructions.",
      },
      {
        title: "AI reconstruction",
        text: "AI-assisted generation estimates missing parts of a site or artifact from the uploaded photo and reference sources.",
      },
      {
        title: "Interactive learning",
        text: "Users select a civilization and move through reconstructed environments and historical information.",
      },
      {
        title: "Civilization explorer",
        text: "The first civilizations are Ancient Egypt, Rome, and the Maya, chosen so users can compare buildings, cities, and landscapes.",
      },
      {
        title: "AI analysis",
        text: "The system studies the uploaded image together with historical records, maps, and archaeological references.",
      },
      {
        title: "Immersive scenes",
        text: "Reconstruction layouts and visual scenes are prepared so users can see an estimated complete view of the place.",
      },
    ],
    steps: [
      { title: "Upload", text: "A picture of the historic site or broken artifact is added to the website." },
      { title: "Analyze", text: "AI studies the image against historical records, maps, and reference pictures." },
      { title: "Reconstruct", text: "AI-assisted tools generate an estimate of the missing parts and a reconstruction layout." },
      { title: "Explore", text: "The reconstructed scene is shown with historical information about the civilization." },
    ],
    objectives: [
      "Create an interactive website about ancient civilizations.",
      "Allow users to select different civilizations.",
      "Display reconstructed historical environments.",
      "Provide educational information about each civilization.",
      "Use technology and AI to improve learning experiences.",
    ],
    resources: [
      {
        title: "User path",
        text: "The user opens the website, chooses a civilization, and the system loads the related reconstruction, images, and historical information.",
      },
      {
        title: "AI input",
        text: "Historical records, maps, images, and archaeological references, including public pictures used as student-project references.",
      },
      {
        title: "AI output",
        text: "Reconstruction layouts, visual scenes, and historical information about the selected civilization.",
      },
    ],
    toolsHeading: "Technologies and Tools",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Visual Studio Code",
      "Figma",
      "Blender",
      "Three.js",
      "AI-assisted content generation",
    ],
    users:
      "The website is designed for people who want to learn about ancient civilizations through pictures and reconstructions. It also includes a path for someone to upload a photo of a broken artifact so the system can estimate a complete view.",
    impact:
      "The project combines history, technology, and artificial intelligence to create an educational experience. It aims to help users better understand ancient civilizations through interactive visual reconstructions.",
    disclaimerTitle: "Educational scope",
    disclaimer:
      "Reconstructions are AI-assisted estimates from historical records, maps, images, and archaeological references. They are an educational reconstruction, not an official archaeological restoration.",
    supervisor: "Ms. Ashjan Saleh",
    meta: [{ label: "Campus", value: "Applied Technology Schools, Baniyas Girls" }],
    team: [
      { name: "Mahrah Ahmed Alyammahi" },
      { name: "Afra Mohammed Al Hamed" },
      { name: "Hajar Hashim Alsaqqaf" },
      { name: "Salama Ali Alhadhrami" },
    ],
    images: [
      {
        src: "/media/acr-rollup.jpg",
        alt: "ACR roll-up banner with stone ACR letters, a historic tower beside a reconstructed city, and a four-step upload, analyze, reconstruct, and explore workflow",
        caption: "Project roll-up",
        rollup: true,
      },
      {
        src: "/media/acr-brochure.jpg",
        alt: "ACR brochure with AI-powered reconstruction features and the three available civilizations: Ancient Egypt, Rome, and the Maya",
        caption: "Project brochure",
      },
    ],
    prototypes: [
      {
        src: "/media/prototype-acr.jpg",
        alt: "ACR prototype reconstruction view",
      },
    ],
  },
];

const showcaseOrder = [
  "ai-safeguard",
  "ai-simulation-chamber",
  "sanad-ai",
  "safespace-ai",
  "ai-aero-biome",
  "shop-wise-ai-cart",
  "cai",
  "acr",
];

export const projects = showcaseOrder.map((slug) => projectRecords.find((project) => project.slug === slug));

export function localizeProject(project, lang) {
  if (!project || lang !== "ar") return project;
  const extra = projectCopyAr[project.slug] || {};
  return {
    ...project,
    name: extra.name || project.name,
    fullName: extra.fullName || project.fullName,
    tagline: extra.tagline || project.tagline,
    summary: extra.summary || project.summary,
  };
}

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getNeighbors(slug) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
