import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "../data/projects";
import { metaFor } from "../data/hub";
import { useLang } from "../context/Language";

function textOf(project) {
  return [
    project.name,
    project.fullName,
    project.summary,
    project.overview,
    ...(project.tools || []),
    ...(project.features || []).map((item) => `${item.title} ${item.text}`),
  ]
    .filter(Boolean)
    .join(" ");
}

function answerFor(question) {
  const q = question.toLowerCase();
  const live = projects.filter((project) => !project.placeholder);

  const named = live.find((project) => {
    const names = [project.name, project.fullName, project.slug.replace(/-/g, " ")].filter(Boolean);
    return names.some((name) => q.includes(name.toLowerCase()));
  });
  if (named) {
    return `${named.name}. ${named.overview || named.summary}`;
  }

  if (/computer vision|vision|camera|object detection|yolo/.test(q)) {
    const hits = live.filter((project) => /vision|camera|image recognition|yolo|opencv/i.test(textOf(project)));
    if (hits.length) {
      return `Computer vision is used in ${hits.map((project) => project.name).join(", ")}. ${hits
        .map((project) => `${project.name}: ${project.summary}`)
        .join(" ")}`;
    }
  }

  if (/sustain|air quality|aero/.test(q)) {
    const aero = live.find((project) => project.slug === "ai-aero-biome");
    return aero ? `${aero.name}. ${aero.overview}` : "";
  }

  if (/safeguard|safety gear|protective/.test(q)) {
    const item = live.find((project) => project.slug === "ai-safeguard");
    return item ? `${item.name}. ${item.overview} ${item.solution?.[0] || ""}` : "";
  }

  if (/acr|civilization|reconstructor|egypt|maya|rome|heritage/.test(q)) {
    const item = live.find((project) => project.slug === "acr");
    return item ? `${item.fullName || item.name}. ${item.overview}` : "";
  }

  if (/technolog|tools/.test(q)) {
    return live
      .filter((project) => project.tools?.length)
      .map((project) => `${project.name}: ${project.tools.slice(0, 4).join(", ")}.`)
      .join(" ");
  }

  const tokens = q.split(/\s+/).filter((word) => word.length > 3);
  const scored = live
    .map((project) => {
      const hay = textOf(project).toLowerCase();
      const score = tokens.reduce((total, word) => total + (hay.includes(word) ? 1 : 0), 0);
      return { project, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length) {
    return scored
      .slice(0, 2)
      .map(({ project }) => `${project.name}. ${project.summary}`)
      .join(" ");
  }

  return live.map((project) => project.name).join(", ") + ".";
}

function BotReply({ text, animate, logRef }) {
  const [shown, setShown] = useState(animate ? "" : text);
  const [typing, setTyping] = useState(animate);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!animate || reduce) {
      setShown(text);
      setTyping(false);
      return undefined;
    }

    setShown("");
    setTyping(true);
    let index = 0;
    const step = Math.max(1, Math.ceil(text.length / 220));
    const id = window.setInterval(() => {
      index += step;
      setShown(text.slice(0, index));
      if (logRef?.current) logRef.current.scrollTop = logRef.current.scrollHeight;
      if (index >= text.length) {
        window.clearInterval(id);
        setShown(text);
        setTyping(false);
      }
    }, 16);
    return () => window.clearInterval(id);
  }, [text, animate, logRef]);

  return (
    <p className={`bot${typing ? " is-typing" : ""}`}>
      {shown}
      {typing ? <span className="type-caret" aria-hidden="true" /> : null}
    </p>
  );
}

export default function Assistant() {
  const { t } = useLang();
  const prompts = useMemo(() => [t("q1"), t("q3"), t("q4")], [t]);
  const [messages, setMessages] = useState([{ role: "bot", text: t("askHello"), live: false }]);
  const [draft, setDraft] = useState("");
  const logRef = useRef(null);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages]);

  function ask(text) {
    const question = text.trim();
    if (!question) return;
    setMessages((current) => [
      ...current.map((message) => ({ ...message, live: false })),
      { role: "user", text: question, live: false },
      { role: "bot", text: answerFor(question), live: true },
    ]);
    setDraft("");
  }

  return (
    <div className="assistant-layout">
      <div className="orb" aria-hidden="true">
        <i />
        <i />
        <span />
      </div>
      <div className="chat-card">
        <div className="chat-bar">
          <p>{t("askNote")}</p>
          <button type="button" onClick={() => setMessages([{ role: "bot", text: t("askHello"), live: false }])}>
            {t("askClear")}
          </button>
        </div>
        <div className="chat-log" aria-live="polite" ref={logRef}>
          {messages.map((message, index) =>
            message.role === "bot" ? (
              <BotReply
                key={`${message.role}-${index}-${message.text.slice(0, 24)}`}
                text={message.text}
                animate={Boolean(message.live)}
                logRef={logRef}
              />
            ) : (
              <p key={`${message.role}-${index}`} className="user">
                {message.text}
              </p>
            )
          )}
        </div>
        <div className="prompt-row">
          {prompts.map((prompt) => (
            <button key={prompt} type="button" onClick={() => ask(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
        <form
          className="chat-form"
          onSubmit={(event) => {
            event.preventDefault();
            ask(draft);
          }}
        >
          <label className="sr-only" htmlFor="ask">
            {t("askPlaceholder")}
          </label>
          <input
            id="ask"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder={t("askPlaceholder")}
          />
          <button type="submit" aria-label={t("askSend")}>
            ?
          </button>
        </form>
      </div>
    </div>
  );
}

export function projectTags(slug) {
  return metaFor(slug).tags;
}
