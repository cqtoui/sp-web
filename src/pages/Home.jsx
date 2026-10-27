import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Assistant from "../components/Assistant";
import QrImage from "../components/QrImage";
import Reveal from "../components/Reveal";
import { Icon } from "../components/Icons";
import { localizeProject, projects } from "../data/projects";
import { categories, categoryLabel, metaFor, techniques } from "../data/hub";
import { useLang } from "../context/Language";

function useCount(target) {
  const [value, setValue] = useState(0);
  const [node, setNode] = useState(null);

  useEffect(() => {
    if (!node) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return undefined;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / 900);
        setValue(Math.round(target * (1 - (1 - progress) ** 3)));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [node, target]);

  return [value, setNode];
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Home() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [vote, setVote] = useState(() => localStorage.getItem("ats-vote") || "");
  const [rating, setRating] = useState(0);
  const [role, setRole] = useState("");
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const [qrSlug, setQrSlug] = useState(projects.find((project) => !project.placeholder)?.slug || projects[0].slug);
  const [journeyHot, setJourneyHot] = useState(-1);
  const [clip, setClip] = useState(null);
  const students = projects.reduce((total, project) => total + (project.team?.length || 0), 0);
  const [projectCount, projectRef] = useCount(projects.length);
  const [studentCount, studentRef] = useCount(students);
  const [techCount, techRef] = useCount(techniques.length);

  useEffect(() => {
    document.title = "ATS Baniyas AI Innovation Hub | AI Exhibition 2026";
  }, []);

  useEffect(() => {
    if (!clip) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setClip(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [clip]);

  const visible = useMemo(
    () =>
      projects.filter((project) => filter === "all" || metaFor(project.slug).categories.includes(filter)),
    [filter]
  );

  const qrProject = projects.find((project) => project.slug === qrSlug) || projects[0];
  const qrValue = `${window.location.origin}/projects/${qrProject.slug}`;

  function choose(id) {
    setFilter(id);
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function castVote(slug) {
    if (vote) return;
    localStorage.setItem("ats-vote", slug);
    setVote(slug);
  }

  return (
    <main id="main">
      <section className="hero" id="top">
        <img className="hero-earth" src="/media/hero-globe.png" alt="" />
        <div className="hero-copy">
          <p className="pill pop">
            <span>{t("exhibit")}</span>
            <i />
            {t("exhibitYear")}
          </p>
          <h1 className="hero-title">
            {t("heroTitleA").split(" ").map((word, index) => (
              <span key={`${word}-${index}`} style={{ animationDelay: `${0.08 + index * 0.12}s` }}>{word}</span>
            ))}
            <span className="grad" style={{ animationDelay: "0.5s" }}>{t("heroTitleB")}</span>
          </h1>
          <p className="hero-lead pop">{t("heroLead")}</p>
          <p className="hero-text pop">{t("heroText")}</p>
          <div className="hero-actions pop">
            <a className="btn btn-solid" href="#projects">
              {t("explore")} <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#demos">
              <span className="play-dot" aria-hidden="true">▶</span>
              {t("watch")}
            </a>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          {t("scroll")}
          <span />
        </a>
      </section>

      <section className="panel" id="about">
        <div className="welcome-grid">
          <Reveal>
            <div className="welcome-photo">
              <img src="/media/welcome-lab.png" alt="Students collaborating on AI and technology projects" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="kicker">{t("welcomeKicker")}</p>
              <h2>{t("welcomeTitle")}</h2>
              <p className="lede">{t("welcomeText")}</p>
            </div>
          </Reveal>
        </div>
        <div className="stat-grid">
          <article ref={projectRef}>
            <Icon name="layers" />
            <strong>{projectCount}</strong>
            <h3>{t("statProjects")}</h3>
            <p>{t("statProjectsNote")}</p>
          </article>
          <article ref={studentRef}>
            <Icon name="users" />
            <strong>{studentCount}</strong>
            <h3>{t("statStudents")}</h3>
            <p>{t("statStudentsNote")}</p>
          </article>
          <article ref={techRef}>
            <Icon name="bulb" />
            <strong>{techCount}</strong>
            <h3>{t("statTech")}</h3>
            <p>{t("statTechNote")}</p>
          </article>
        </div>
      </section>

      <section className="panel" id="projects">
        <Reveal>
          <p className="kicker center">{t("featuredKicker")}</p>
          <h2 className="center">{t("featuredTitle")}</h2>
          <p className="lede center">{t("featuredText")}</p>
        </Reveal>
        <div className="filter-row" role="tablist">
          {categories
            .filter((item) => ["all", "health", "sustainability", "safety", "living", "humanitarian"].includes(item.id))
            .map((item) => (
              <button
                key={item.id}
                type="button"
                className={filter === item.id ? "is-on" : ""}
                onClick={() => setFilter(item.id)}
              >
                {categoryLabel(item, t)}
              </button>
            ))}
        </div>
        <div className="innov-grid">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="panel" id="categories">
        <p className="kicker center">{t("catKicker")}</p>
        <h2 className="center">{t("catTitle")}</h2>
        <div className="cat-grid">
          {categories.map((item) => {
            const count =
              item.id === "all"
                ? projects.length
                : projects.filter((project) => metaFor(project.slug).categories.includes(item.id)).length;
            return (
              <button key={item.id} type="button" className="cat-card" onClick={() => choose(item.id)}>
                <span className="cat-icon">
                  <Icon name={item.icon} />
                </span>
                <strong>{categoryLabel(item, t)}</strong>
                <small>
                  {count} {count === 1 ? t("projectCountOne") : t("projectCount")}
                </small>
              </button>
            );
          })}
        </div>
      </section>

      <section className="panel" id="how">
        <p className="kicker center kicker-rule">{t("howKicker")}</p>
        <h2 className="center">{t("howTitle")}</h2>
        <ol className="pipeline">
          {[
            ["db", "01", "how1", "how1t"],
            ["cpu", "02", "how2", "how2t"],
            ["brain", "03", "how3", "how3t"],
            ["chat", "04", "how4", "how4t"],
          ].map(([icon, number, title, body]) => (
            <li key={number}>
              <span className="pipe-icon">
                <Icon name={icon} />
              </span>
              <small>{number}</small>
              <h3>{t(title)}</h3>
              <p>{t(body)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="panel" id="demos">
        <p className="kicker center">{t("demoKicker")}</p>
        <h2 className="center">{t("demoTitle")}</h2>
        <p className="lede center">{t("demoText")}</p>
        <div className="demo-grid">
          {projects.map((project) => {
            const meta = metaFor(project.slug);
            return (
              <article key={project.slug} className="demo-card">
                <div className="innov-media">
                  {meta.image ? <img src={meta.image} alt="" /> : <div className="innov-fallback"><strong>{localizeProject(project, lang).name}</strong></div>}
                  <span className="media-badge">{project.video ? t("demoClipBadge") : project.link ? t("demoLive") : t("demoSoon")}</span>
                  <span className="preview-flag">{t("preview")}</span>
                </div>
                <div className="innov-body">
                  <h3>{localizeProject(project, lang).name}</h3>
                  <p>{project.video ? t("demoClip") : project.link ? t("demoLive") : t("demoNote")}</p>
                  <div className="demo-actions">
                    <button className="btn btn-line" type="button" disabled={!project.video} onClick={() => project.video && setClip(project)}>
                      {t("video")}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="panel" id="innovators">
        <p className="kicker center">{t("mindsKicker")}</p>
        <h2 className="center">{t("mindsTitle")}</h2>
        <p className="quote">{t("mindsQuote")}</p>
        <div className="team-grid">
          {projects.map((project) => (
            <article key={project.slug} className="team-card">
              <div className="avatar-row">
                {(project.team || [{ name: " " }]).slice(0, 4).map((member) => (
                  <span key={member.name}>{initials(member.name) || "•"}</span>
                ))}
              </div>
              <p className="team-label">{t("teamLabel")}</p>
              <h3>{localizeProject(project, lang).name}</h3>
              {project.team?.length ? (
                <ul>
                  {project.team.map((member) => (
                    <li key={member.name}>{member.name}</li>
                  ))}
                </ul>
              ) : (
                <p>{t("teamSoon")}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="journey">
        <p className="kicker center kicker-rule">{t("pathKicker")}</p>
        <h2 className="center">{t("pathTitle")}</h2>
        <div className="journey-wrap">
          <div className="journey-rail" aria-hidden="true">
            <span
              className="journey-glow"
              style={{
                left: journeyHot < 0 ? "0%" : `${(journeyHot / 4) * 100}%`,
                opacity: journeyHot < 0 ? 0 : 1,
              }}
            />
          </div>
          <ol className="journey" onMouseLeave={() => setJourneyHot(-1)}>
            {["search", "pen", "cpu", "flask", "chat"].map((icon, index) => (
              <li key={icon} onMouseEnter={() => setJourneyHot(index)}>
                <span>
                  <Icon name={icon} />
                </span>
                <div className="step-card">
                  <small>0{index + 1}</small>
                  <h3>{t(`step${index + 1}`)}</h3>
                  <p>{t(`step${index + 1}t`)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="uae panel" id="uae">
        <p className="kicker center">{t("uaeKicker")}</p>
        <h2 className="center">{t("uaeTitle")}</h2>
        <p className="lede center">{t("uaeText")}</p>
        <ul className="uae-pills">
          {categories
            .filter((item) => item.id !== "all")
            .map((item) => (
              <li key={item.id}>{categoryLabel(item, t)}</li>
            ))}
        </ul>
        <p className="official">{t("official")}</p>
        <p className="official-links">
          <a href="https://ai.gov.ae/" target="_blank" rel="noreferrer">
            UAE Artificial Intelligence Office
          </a>
          <a href="https://u.ae/" target="_blank" rel="noreferrer">
            UAE Government Portal
          </a>
          <a href="https://mbzuai.ac.ae/" target="_blank" rel="noreferrer">
            MBZUAI — Abu Dhabi
          </a>
        </p>
      </section>

      <section className="panel" id="achievements">
        <p className="kicker center">{t("achieveKicker")}</p>
        <h2 className="center">{t("achieveTitle")}</h2>
        <div className="empty-card">
          <Icon name="trophy" />
          <p>{t("achieveEmpty")}</p>
        </div>
      </section>

      <section className="panel" id="assistant">
        <p className="kicker center">{t("askKicker")}</p>
        <h2 className="center">{t("askTitle")}</h2>
        <Assistant />
      </section>

      <section className="panel" id="contact">
        <p className="kicker center kicker-rule">{t("partKicker")}</p>
        <h2 className="center">{t("partTitle")}</h2>
        <div className="exhibit-grid">
          <article className="glass">
            <span className="card-icon"><Icon name="star" /></span>
            <h3>{t("voteTitle")}</h3>
            <p>{t("voteText")}</p>
            <ul className="vote-list">
              {projects.filter((project) => !project.placeholder).map((project) => (
                <li key={project.slug}>
                  <span>{localizeProject(project, lang).name}</span>
                  <button type="button" disabled={Boolean(vote)} onClick={() => castVote(project.slug)}>
                    {vote === project.slug ? t("voted") : t("vote")}
                  </button>
                </li>
              ))}
            </ul>
            {vote ? <p className="saved">{t("voteSaved")}</p> : null}
          </article>
          <article className="glass feed-card">
            <span className="card-icon"><Icon name="chat" /></span>
            <h3>{t("feedTitle")}</h3>
            <p>{t("rating")}</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} type="button" className={star <= rating ? "is-on" : ""} onClick={() => setRating(star)} aria-label={`${star}`}>
                  ★
                </button>
              ))}
            </div>
            <p>{t("iAm")}</p>
            <div className="role-row">
              {["parent", "student", "teacher", "industry"].map((key) => (
                <button key={key} type="button" className={role === key ? "is-on" : ""} onClick={() => setRole(key)}>
                  {t(key)}
                </button>
              ))}
            </div>
            <label className="sr-only" htmlFor="note">
              {t("thoughts")}
            </label>
            <textarea id="note" value={note} placeholder={t("thoughts")} onChange={(event) => setNote(event.target.value)} />
            <button
              className="btn btn-solid wide"
              type="button"
              onClick={() => {
                const previous = JSON.parse(localStorage.getItem("ats-feedback") || "[]");
                previous.push({ rating, role, note, at: Date.now() });
                localStorage.setItem("ats-feedback", JSON.stringify(previous));
                setSent(true);
              }}
            >
              {t("sendFeedback")}
            </button>
            {sent ? <p className="saved">{t("thanks")}</p> : null}
          </article>
          <article className="glass">
            <span className="card-icon"><Icon name="qr" /></span>
            <h3>{t("scanTitle")}</h3>
            <p>{t("scanText")}</p>
            <div className="qr-picks">
              {projects.filter((project) => !project.placeholder).map((project) => (
                <button key={project.slug} type="button" className={qrSlug === project.slug ? "is-on" : ""} onClick={() => setQrSlug(project.slug)}>
                  {localizeProject(project, lang).name}
                </button>
              ))}
            </div>
              <div className="qr-box">
                <QrImage value={qrValue} src={qrProject.qr} label={localizeProject(qrProject, lang).name} size={196} />
              </div>
          </article>
        </div>
        <button
          className="btn btn-solid surprise-wide"
          type="button"
          onClick={() => {
            const pool = projects.filter((project) => !project.placeholder);
            const pick = pool[Math.floor(Math.random() * pool.length)];
            navigate(`/projects/${pick.slug}`);
          }}
        >
          <Icon name="shuffle" />
          {t("surpriseTitle")}
          <span>{t("surpriseText")}</span>
        </button>
      </section>

      <section className="closing">
        <div className="closing-bg" aria-hidden="true" />
        <div className="closing-inner">
          <div className="brand closing-brand">
            <span className="brand-mark">ATS</span>
            <span>
              <strong>{t("brand")}</strong>
              <small>{t("brandSub")}</small>
            </span>
          </div>
          <p className="kicker">{t("exhibitYear")}</p>
          <h2 className="close-quote">
            {t("closeQuote").split(" ").map((word, index) => (
              <span key={`${word}-${index}`} style={{ animationDelay: `${0.12 + index * 0.07}s` }}>{word}</span>
            ))}
          </h2>
          <div className="hero-actions pop">
            <a className="btn btn-solid" href="#projects">
              {t("exploreAll")} <span aria-hidden="true">→</span>
            </a>
            <div className="mini-qr">
              <QrImage value={window.location.origin} size={112} />
              <span>{t("scanVisit")}</span>
            </div>
          </div>
        </div>
      </section>
      {clip ? (
        <div className="lightbox video-lightbox" role="dialog" aria-modal="true" aria-label={localizeProject(clip, lang).name} onClick={() => setClip(null)}>
          <div className="video-stage" onClick={(event) => event.stopPropagation()}>
            <video key={clip.video} src={clip.video} controls autoPlay playsInline />
            <p>{localizeProject(clip, lang).fullName || localizeProject(clip, lang).name}</p>
            <button className="btn btn-line" type="button" onClick={() => setClip(null)}>{t("closeVideo")}</button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
