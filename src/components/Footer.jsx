import { Link } from "react-router-dom";
import { Icon } from "./Icons";
import { useLang } from "../context/Language";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="brand" to="/#top">
            <span className="brand-mark">ATS</span>
            <span>
              <strong>{t("brand")}</strong>
              <small>{t("brandSub")}</small>
            </span>
          </Link>
          <p className="footer-tag">{t("footerTag")}</p>
        </div>

        <div className="footer-meta">
          <article>
            <p className="footer-label">{t("address")}</p>
            <p>
              <Icon name="pin" />
              <span>{t("addressValue")}</span>
            </p>
          </article>
          <article>
            <p className="footer-label">{t("websiteCreators")}</p>
            <p>
              <Icon name="spark" />
              <span className="footer-people">
                <span>{t("creatorName1")}</span>
                <span>{t("creatorName2")}</span>
              </span>
            </p>
          </article>
        </div>
      </div>
      <p className="rights">{t("rights")}</p>
    </footer>
  );
}
