/** Visual labels for the exhibition layout. Facts stay in projects.js. */
export const categories = [
  { id: "all", title: "All Projects", icon: "grid" },
  { id: "health", title: "AI for Health and Wellbeing", icon: "heart" },
  { id: "sustainability", title: "AI for Sustainability", icon: "leaf" },
  { id: "safety", title: "AI for Safety and Security", icon: "shield" },
  { id: "living", title: "AI for Smart Living", icon: "home" },
  { id: "education", title: "AI for Education", icon: "book" },
  { id: "cities", title: "AI for Smart Cities", icon: "city" },
  { id: "access", title: "AI for Accessibility", icon: "access" },
  { id: "humanitarian", title: "AI for Humanitarian Impact", icon: "hands" },
];

export const presentation = {
  "sanad-ai": {
    categories: ["humanitarian", "safety"],
    tags: ["Natural Language Processing", "Information Verification", "Decision Support"],
    image: "/media/scene-sanad.png",
    problem: "/media/problem-sanad.jpg",
    visual: "/media/visual-sanad.jpg",
    audience: "/media/audience-sanad.jpg",
    scene: true,
  },
  "shop-wise-ai-cart": {
    categories: ["living"],
    tags: ["Product Analysis", "Personalization", "Smart Assistant"],
    image: "/media/scene-shopwise.png",
    problem: "/media/problem-shopwise.jpg",
    visual: "/media/visual-shopwise.jpg",
    audience: "/media/audience-shopwise.jpg",
    scene: true,
  },
  "ai-safeguard": {
    categories: ["safety"],
    tags: ["Computer Vision", "Object Detection", "Safety Monitoring"],
    image: "/media/scene-safeguard.png",
    problem: "/media/problem-safeguard.jpg",
    visual: "/media/visual-safeguard.jpg",
    audience: "/media/audience-safeguard.jpg",
    scene: true,
  },
  "ai-aero-biome": {
    categories: ["health", "sustainability", "cities"],
    tags: ["Environmental Data", "Health Insights", "Hyperlocal Monitoring"],
    image: "/media/scene-aero.png",
    problem: "/media/problem-aero.jpg",
    visual: "/media/visual-aero.jpg",
    audience: "/media/audience-aero.jpg",
    scene: true,
  },
  "safespace-ai": {
    categories: ["health"],
    tags: ["AI Support", "Wellbeing Resources", "Sentiment Analysis"],
    image: "/media/scene-safespace.png",
    problem: "/media/problem-safespace.jpg",
    visual: "/media/visual-safespace.jpg",
    audience: "/media/audience-safespace.jpg",
    scene: true,
  },
  "ai-simulation-chamber": {
    categories: ["education", "safety"],
    tags: ["Virtual Reality", "Reinforcement Learning", "Generative AI"],
    image: "/media/scene-simulation.png",
    problem: "/media/problem-simulation.jpg",
    visual: "/media/visual-simulation.jpg",
    audience: "/media/audience-simulation.jpg",
    scene: true,
  },
  cai: {
    categories: ["access"],
    tags: ["Brain-Computer Interface", "Robotics", "Emergency Response"],
    image: "/media/scene-cai.png",
    problem: "/media/problem-cai.jpg",
    visual: "/media/visual-cai.jpg",
    audience: "/media/audience-cai.jpg",
    scene: true,
  },
  acr: {
    categories: ["education"],
    tags: ["Generative AI", "3D Visualization", "Image Recognition"],
    image: "/media/scene-acr.png",
    problem: "/media/problem-acr.jpg",
    visual: "/media/visual-acr.jpg",
    audience: "/media/audience-acr.jpg",
    scene: true,
  },
};

/** Distinct techniques named in the project materials. */
export const techniques = [
  "Generative AI",
  "Reinforcement Learning",
  "Virtual Reality",
  "Natural Language Processing",
  "Machine Learning Classification",
  "Computer Vision",
  "Object Detection",
  "Facial Recognition",
  "Image Recognition",
  "Sentiment Analysis",
  "Brain-Computer Interface",
  "Personalization",
  "3D Visualization",
];

export function metaFor(slug) {
  return presentation[slug] || { categories: [], tags: [], image: "" };
}

export function categoryById(id) {
  return categories.find((item) => item.id === id);
}

export function categoryLabel(item, t) {
  if (!item) return "";
  return t(`cat_${item.id}`);
}

export function localizeTag(tag, lang, t) {
  if (lang !== "ar") return tag;
  const translated = t(`tag_${tag}`);
  return !translated || translated === `tag_${tag}` ? tag : translated;
}
