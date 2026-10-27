export default function Globe() {
  return (
    <div className="globe" aria-hidden="true">
      <div className="globe-glow" />
      <svg viewBox="0 0 640 640" className="globe-svg">
        <defs>
          <radialGradient id="sea" cx="38%" cy="36%" r="70%">
            <stop offset="0%" stopColor="#1d4e89" />
            <stop offset="42%" stopColor="#0c2748" />
            <stop offset="100%" stopColor="#06101e" />
          </radialGradient>
          <radialGradient id="shine" cx="32%" cy="30%" r="45%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="net" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7ee7ff" />
            <stop offset="100%" stopColor="#6d7cff" />
          </linearGradient>
        </defs>
        <circle cx="320" cy="320" r="214" fill="url(#sea)" />
        <ellipse cx="250" cy="250" rx="70" ry="28" fill="#16385f" opacity="0.55" transform="rotate(-18 250 250)" />
        <ellipse cx="360" cy="300" rx="90" ry="34" fill="#1a4d78" opacity="0.45" transform="rotate(16 360 300)" />
        <ellipse cx="300" cy="390" rx="80" ry="26" fill="#123556" opacity="0.7" transform="rotate(-8 300 390)" />
        <g className="globe-spin" fill="none" stroke="url(#net)" strokeWidth="1.4">
          <ellipse cx="320" cy="320" rx="214" ry="70" />
          <ellipse cx="320" cy="320" rx="214" ry="140" />
          <ellipse cx="320" cy="320" rx="70" ry="214" />
          <ellipse cx="320" cy="320" rx="140" ry="214" />
          <path d="M120 250 C220 180 420 180 520 270" />
          <path d="M140 400 C240 330 430 360 530 300" />
        </g>
        <g className="globe-nodes" fill="#9aefff">
          <circle cx="230" cy="250" r="4" />
          <circle cx="390" cy="230" r="3.5" />
          <circle cx="450" cy="320" r="4.5" />
          <circle cx="300" cy="360" r="3.5" />
          <circle cx="210" cy="340" r="3" />
          <circle cx="360" cy="410" r="3" />
        </g>
        <circle cx="320" cy="320" r="214" fill="url(#shine)" />
        <circle cx="320" cy="320" r="214" fill="none" stroke="rgba(140,210,255,0.35)" strokeWidth="2" />
      </svg>
    </div>
  );
}
