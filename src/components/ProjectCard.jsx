import { Link } from "react-router-dom";
import { categoryById, categoryLabel, metaFor } from "../data/hub";
import { localizeProject } from "../data/projects";
import { useLang } from "../context/Language";

export default function ProjectCard({ project }) {
  const { t, lang } = useLang();
  const view = localizeProject(project, lang);
  const meta = metaFor(project.slug);
  const category = categoryById(meta.categories[0]);
  const label = category ? categoryLabel(category, t) : "";

  return (
    <article className="innov-card">
      <Link to={`/projects/${project.slug}`}>
        <div className="innov-media">
          {meta.image ? (
            <img src={meta.image} alt="" />
          ) : (
            <div className="innov-fallback">
              <strong>{view.name}</strong>
            </div>
          )}
          {label ? <span className="media-badge">{label}</span> : null}
        </div>
        <div className="innov-body">
          <h3>{view.name}</h3>
          <p>{view.summary}</p>
          <span className="explore-link">
            {t("exploreProject")} <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
