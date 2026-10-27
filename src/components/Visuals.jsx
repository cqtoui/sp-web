export function FieldIcon({ name }) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    "aria-hidden": true,
  };
  if (name === "ml") {
    return (
      <svg {...common}>
        <circle cx="12" cy="30" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="14" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="30" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 28 L20.5 17 M27.5 17 L32 28" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (name === "nlp") {
    return (
      <svg {...common}>
        <rect x="8" y="10" width="22" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M14 26 L12 34 L22 26" stroke="currentColor" strokeWidth="2" />
        <path d="M14 18 H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (name === "vision") {
    return (
      <svg {...common}>
        <path d="M6 24 C12 14 20 12 24 12 C28 12 36 14 42 24 C36 34 28 36 24 36 C20 36 12 34 6 24 Z" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="16" y="8" width="16" height="12" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="14" r="1.4" fill="currentColor" />
      <circle cx="28" cy="14" r="1.4" fill="currentColor" />
      <path d="M24 20 V28 M14 34 H34 M18 28 H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProjectArt({ theme }) {
  if (theme === "safeguard") return <ShieldArt />;
  if (theme === "shopwise") return <CartArt />;
  if (theme === "aero") return <RouteArt />;
  if (theme === "simulation") return <ChamberArt />;
  if (theme === "safespace") return <CareArt />;
  if (theme === "sanad") return <SanadArt />;
  if (theme === "astronaut") return <OrbitArt />;
  return <SoonArt />;
}

function ShieldArt() {
  return (
    <svg className="art art-shield" viewBox="0 0 220 240" aria-hidden="true">
      <path className="shield-body" d="M110 22 L176 50 V118 C176 162 148 196 110 214 C72 196 44 162 44 118 V50 Z" />
      <path className="shield-inner" d="M110 42 L160 64 V116 C160 150 138 176 110 190 C82 176 60 150 60 116 V64 Z" />
      <path className="shield-check" d="M88 118 L104 134 L136 96" />
      <rect className="shield-scan" x="68" y="70" width="84" height="6" rx="3" />
    </svg>
  );
}

function CartArt() {
  return (
    <svg className="art art-cart" viewBox="0 0 260 220" aria-hidden="true">
      <g className="product product-a">
        <rect x="28" y="36" width="72" height="52" rx="10" />
        <path d="M40 54 H88 M40 68 H74" />
      </g>
      <g className="product product-b">
        <rect x="96" y="18" width="64" height="46" rx="10" />
        <path d="M108 36 H146 M108 48 H134" />
      </g>
      <g className="product product-c">
        <rect x="154" y="42" width="70" height="48" rx="10" />
        <path d="M166 60 H210 M166 74 H196" />
      </g>
      <path className="cart-basket" d="M48 150 H188 L176 188 H64 Z" />
      <path className="cart-handle" d="M70 150 L86 112 H150" />
      <circle className="cart-wheel" cx="86" cy="200" r="8" />
      <circle className="cart-wheel" cx="164" cy="200" r="8" />
    </svg>
  );
}

function RouteArt() {
  return (
    <svg className="art art-route" viewBox="0 0 280 180" aria-hidden="true">
      <path className="route-short" d="M24 130 C80 130 120 48 250 48" />
      <path className="route-health" d="M24 130 C90 150 150 150 250 70" />
      <circle cx="24" cy="130" r="6" className="route-dot" />
      <circle cx="250" cy="48" r="6" className="route-end" />
      <circle cx="250" cy="70" r="6" className="route-end health" />
      <circle className="pollen" cx="70" cy="40" r="3" />
      <circle className="pollen delay" cx="140" cy="28" r="2.4" />
      <circle className="pollen delay-2" cx="190" cy="96" r="2.6" />
    </svg>
  );
}

function ChamberArt() {
  return (
    <svg className="art art-chamber" viewBox="0 0 220 220" aria-hidden="true">
      <circle className="ring" cx="110" cy="110" r="78" />
      <circle className="ring delay" cx="110" cy="110" r="58" />
      <path className="cross" d="M110 62 V158 M70 110 H150 M86 86 H134 V134 H86 Z" />
      <path className="slash" d="M78 148 L146 74" />
    </svg>
  );
}

function CareArt() {
  return (
    <svg className="art art-care" viewBox="0 0 220 200" aria-hidden="true">
      <path className="heart" d="M110 168 C70 136 38 112 38 76 C38 52 56 38 76 38 C92 38 104 48 110 62 C116 48 128 38 144 38 C164 38 182 52 182 76 C182 112 150 136 110 168 Z" />
      <rect className="bubble" x="78" y="78" width="64" height="36" rx="12" />
      <circle cx="98" cy="96" r="3" />
      <circle cx="110" cy="96" r="3" />
      <circle cx="122" cy="96" r="3" />
    </svg>
  );
}

function SanadArt() {
  return (
    <svg className="art art-sanad" viewBox="0 0 220 220" aria-hidden="true">
      <path className="sanad-shield" d="M110 28 L176 54 V112 C176 156 148 186 110 202 C72 186 44 156 44 112 V54 Z" />
      <circle className="node n1" cx="110" cy="78" r="8" />
      <circle className="node n2" cx="78" cy="118" r="8" />
      <circle className="node n3" cx="142" cy="118" r="8" />
      <circle className="node n4" cx="110" cy="154" r="8" />
      <path d="M110 86 V108 M86 118 H102 M134 118 H118 M110 126 V146" />
    </svg>
  );
}

function OrbitArt() {
  return (
    <svg className="art art-orbit" viewBox="0 0 240 200" aria-hidden="true">
      <ellipse className="orbit" cx="120" cy="100" rx="92" ry="36" />
      <ellipse className="orbit tilt" cx="120" cy="100" rx="70" ry="70" />
      <circle className="planet" cx="120" cy="100" r="18" />
      <path className="eeg" d="M48 156 H78 L90 138 L104 170 L118 146 L132 162 L146 150 H192" />
      <circle className="sat" cx="200" cy="78" r="6" />
    </svg>
  );
}

function SoonArt() {
  return (
    <svg className="art art-soon" viewBox="0 0 280 220" aria-hidden="true">
      <circle className="soon-node a" cx="70" cy="70" r="8" />
      <circle className="soon-node b" cx="150" cy="48" r="6" />
      <circle className="soon-node c" cx="214" cy="92" r="8" />
      <circle className="soon-node d" cx="120" cy="120" r="10" />
      <circle className="soon-node e" cx="196" cy="160" r="7" />
      <circle className="soon-node f" cx="64" cy="156" r="6" />
      <path d="M78 74 L112 112 M156 54 L128 110 M206 98 L130 118 M128 128 L190 156 M112 128 L70 152" />
    </svg>
  );
}
