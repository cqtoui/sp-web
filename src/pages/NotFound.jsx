import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main" className="simple-page">
      <p className="eyebrow">Page not found</p>
      <h1>That page is not part of the showcase.</h1>
      <p>Return to the project gallery to continue.</p>
      <Link className="btn btn-solid" to="/#projects">
        Back to projects
      </Link>
    </main>
  );
}
