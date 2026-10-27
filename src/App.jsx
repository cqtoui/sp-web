import { useEffect, useLayoutEffect } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./context/Language";


function Layout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(
      ".panel > .kicker, .panel > h2, .panel > .lede, .panel > .quote, .welcome-grid > *, .stat-grid article, .innov-card, .demo-card, .cat-card, .team-card, .glass, .step-card, .pipeline li, .empty-card, .info-card, .closing-inner, .uae-pills li, .feature-board > li, .flow-card"
    );
    nodes.forEach((node) => node.classList.add("anim"));
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((node) => {
      const siblings = [...node.parentElement.children].filter((child) => child.classList.contains("anim"));
      const order = Math.max(0, siblings.indexOf(node));
      node.style.transitionDelay = `${Math.min(order, 8) * 70}ms`;
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = requestAnimationFrame(() => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/cai-2" element={<Navigate to="/projects/acr" replace />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
