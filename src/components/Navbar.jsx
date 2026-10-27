import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/Language";

const primary = [
  ["home", "/#top"],
  ["projects", "/#projects"],
];

const moreLinks = [
  ["demos", "/#demos"],
  ["innovators", "/#innovators"],
  ["journey", "/#journey"],
  ["achievements", "/#achievements"],
  ["assistant", "/#assistant"],
  ["contact", "/#contact"],
];

export default function Navbar() {
  const { t, toggle } = useLang();
  const [more, setMore] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function close(event) {
      if (!menuRef.current?.contains(event.target)) setMore(false);
    }
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" to="/#top" onClick={() => setMore(false)}>
          <span className="brand-mark">ATS</span>
          <span>
            <strong>{t("brand")}</strong>
            <small>{t("brandSub")}</small>
          </span>
        </Link>
        <div className="nav-end">
        <nav className="nav-links" aria-label="Primary">
          {primary.map(([key, href]) => (
            <Link key={key} to={href} onClick={() => setMore(false)}>
              {t(key)}
            </Link>
          ))}
          <div className={more ? "nav-more open" : "nav-more"} ref={menuRef}>
            <button
              className="more-btn"
              type="button"
              aria-expanded={more}
              aria-haspopup="true"
              onClick={() => setMore((value) => !value)}
            >
              {t("more")}
              <span aria-hidden="true">{more ? "▴" : "▾"}</span>
            </button>
            <div className="nav-drop" hidden={!more}>
              {moreLinks.map(([key, href]) => (
                <Link key={key} to={href} onClick={() => setMore(false)}>
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>
        </nav>
          <img
            className="nav-actvet"
            src="/media/ats-actvet.png"
            alt="ACTVET, Abu Dhabi Centre for Technical and Vocational Education and Training, and Applied Technology Schools"
          />
          <button className="lang-btn" type="button" onClick={toggle}>
            <span aria-hidden="true">✦</span> {t("lang")}
          </button>
        </div>
      </div>
    </header>
  );
}
