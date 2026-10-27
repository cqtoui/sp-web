import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject, localizeProject, projects } from "../data/projects";
import { categoryById, categoryLabel, metaFor } from "../data/hub";
import ProjectCard from "../components/ProjectCard";
import QrImage from "../components/QrImage";
import { Icon } from "../components/Icons";
import { useLang } from "../context/Language";
import NotFound from "./NotFound";

function Block({ icon, title, children }) {
  if (!children) return null;
  return (
    <section className="info-card">
      <h2>
        <Icon name={icon} /> {title}
      </h2>
      {children}
    </section>
  );
}

function StoryArt({ src, alt, onOpen }) {
  if (!src) return null;
  return (
    <figure className="story-art">
      <button type="button" onClick={() => onOpen({ src, alt, caption: "" })}>
        <img src={src} alt={alt} />
      </button>
    </figure>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const [zoom, setZoom] = useState(null);

  useEffect(() => {
    if (!project) {
      document.title = "ATS Baniyas";
      return;
    }
    const view = localizeProject(project, lang);
    document.title = `${view.name} · ATS Baniyas`;
  }, [project, lang]);

  if (!project) return <NotFound />;

  const view = localizeProject(project, lang);
  const meta = metaFor(project.slug);
  const category = categoryById(meta.categories[0]);
  const related = projects.filter((item) => item.slug !== project.slug && !item.placeholder).slice(0, 3);
  const visuals = (project.images || []).filter((image) => !image.rollup);
  const pageUrl = `${window.location.origin}/projects/${project.slug}`;

  async function share() {
    if (navigator.share) {
      try {
        await navigator.share({ title: project.name, url: pageUrl });
        return;
      } catch {
        /* fall through to copy */
      }
    }
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
  }

  return (
    <main id="main" className="project-page">
      <section
        className={meta.scene ? "project-hero has-scene" : "project-hero"}
        style={meta.scene ? { backgroundImage: `url(${meta.image})` } : undefined}
      >
        <div className="project-hero-shade">
          <div className="hero-main">
            <Link className="back-link" to="/#projects">
              ← {t("back")}
            </Link>
            {category ? <p className="media-badge static">{categoryLabel(category, t)}</p> : null}
            <h1>{view.fullName || view.name}</h1>
            <p>{view.tagline}</p>
            <button className="btn btn-solid" type="button" onClick={share}>
              {copied ? t("copied") : t("share")}
            </button>
          </div>
          <aside className="hero-qr">
            <QrImage value={pageUrl} src={project.qr} label={view.fullName || view.name} size={188} />
          </aside>
        </div>
      </section>

      <div className="info-stack">
        {project.placeholder ? (
          <Block icon="doc" title={t("overview")}>
            <p>{t("coming")}</p>
          </Block>
        ) : (
          <>
            <Block icon="doc" title={t("overview")}>
              <p>{project.overview}</p>
            </Block>
            <div className="story-pair">
              <Block icon="alert" title={t("problem")}>
                {project.problem?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Block>
              <StoryArt src={meta.problem || meta.image} alt={`${view.name} problem visual`} onOpen={setZoom} />
            </div>
            <div className="story-pair is-flip">
              <StoryArt src={meta.visual || meta.image} alt={`${view.name} solution visual`} onOpen={setZoom} />
              <Block icon="spark" title={t("solution")}>
                {project.solution?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </Block>
            </div>
            {project.objectives?.length ? (
              <Block icon="target" title={t("objectives")}>
                <ul className="clean-list">
                  {project.objectives.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.features?.length ? (
              <Block icon="spark" title={t("features")}>
                <ul className={`feature-board${project.features.length % 2 ? " has-odd" : ""}`}>
                  {project.features.map((feature) => (
                    <li key={feature.title}>
                      <span className="card-icon"><Icon name="spark" /></span>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.tools?.length ? (
              <Block icon="cpu" title={project.toolsHeading || t("tech")}>
                {project.toolsNote ? <p>{project.toolsNote}</p> : null}
                <ul className="tag-row">
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.resources?.length ? (
              <Block icon="layers" title={t("architecture")}>
                <ul className="feature-grid">
                  {project.resources.map((item) => (
                    <li key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.steps?.length ? (
              <Block icon="flow" title={t("workflow")}>
                <ol className="flow-board">
                  {project.steps.map((step, index) => (
                    <li key={step.title} className="flow-card">
                      <span className="flow-rail" aria-hidden="true">
                        <span className="flow-num">{index + 1}</span>
                      </span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Block>
            ) : null}
            {visuals.length ? (
              <Block icon="image" title={t("visuals")}>
                <ul className="visual-grid">
                  {visuals.map((image) => (
                    <li key={image.src}>
                      <button type="button" onClick={() => setZoom(image)}>
                        <img src={image.src} alt={image.alt} />
                      </button>
                      {image.caption ? <p>{image.caption}</p> : null}
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.prototypes?.length ? (
              <Block icon="image" title={t("prototype")}>
                <ul className={`prototype-grid count-${Math.min(project.prototypes.length, 4)}${project.slug === "ai-aero-biome" ? " is-phone" : ""}`}>
                  {project.prototypes.map((image) => (
                    <li key={image.src}>
                      <button type="button" onClick={() => setZoom({ src: image.src, alt: image.alt, caption: "" })}>
                        <img src={image.src} alt={image.alt} />
                      </button>
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.video ? (
              <Block icon="play" title={t("demoClipBadge")}>
                <p>{t("demoClip")}</p>
                <video className="exhibit-video" src={project.video} poster={meta.image || undefined} controls playsInline preload="metadata" />
              </Block>
            ) : null}
            {project.disclaimer ? (
              <Block icon="alert" title={project.disclaimerTitle || t("testing")}>
                <p>{project.disclaimer}</p>
              </Block>
            ) : null}
            {project.limitations?.length ? (
              <Block icon="alert" title={t("limits")}>
                <ul className="clean-list">
                  {project.limitations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            ) : null}
            {project.users ? (
              <div className="story-pair">
                <Block icon="users" title={t("audience")}>
                  <p>{project.users}</p>
                </Block>
                <StoryArt src={meta.audience} alt={`${view.name} audience visual`} onOpen={setZoom} />
              </div>
            ) : null}
            {project.impact ? (
              <Block icon="bulb" title={t("impact")}>
                <p>{project.impact}</p>
              </Block>
            ) : null}
            {project.scope?.include?.length ? (
              <Block icon="target" title={t("objectives")}>
                <ul className="clean-list">
                  {project.scope.include.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Block>
            ) : null}
            <Block icon="users" title={t("meet")}>
              {project.team?.length ? (
                <div className={`member-grid count-${project.team.length}`}>
                  {project.team.map((member) => (
                    <article className="member-card" key={member.name}>
                      <strong>{member.name}</strong>
                    </article>
                  ))}
                </div>
              ) : (
                <p>{t("teamSoon")}</p>
              )}
            </Block>
          </>
        )}
      </div>

      <section className="panel related">
        <h2>
          <Icon name="layers" /> {t("related")}
        </h2>
        <div className="innov-grid">
          {related.map((item) => (
            <ProjectCard key={item.slug} project={item} />
          ))}
        </div>
      </section>

      {zoom ? (
        <dialog className="lightbox" open onClick={() => setZoom(null)}>
          <img src={zoom.src} alt={zoom.alt} />
          {zoom.caption ? <p>{zoom.caption}</p> : null}
        </dialog>
      ) : null}
    </main>
  );
}
