export function Icon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  const paths = {
    grid: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1.2" />
        <rect x="14" y="4" width="6" height="6" rx="1.2" />
        <rect x="4" y="14" width="6" height="6" rx="1.2" />
        <rect x="14" y="14" width="6" height="6" rx="1.2" />
      </>
    ),
    heart: <path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />,
    leaf: <path d="M5 19c8 0 14-8 14-14-6 0-14 6-14 14zM5 19c2-5 6-8 10-9" />,
    shield: <path d="M12 3 5 6v6c0 5 3.2 7.8 7 9 3.8-1.2 7-4 7-9V6l-7-3z" />,
    home: (
      <>
        <path d="M4 11.5 12 4l8 7.5" />
        <path d="M7 10.5V20h10v-9.5" />
      </>
    ),
    book: (
      <>
        <path d="M5 5.5h6.5A3.5 3.5 0 0 1 15 9v10.5H8.2A3.2 3.2 0 0 0 5 22.5z" />
        <path d="M19 5.5h-6.5A3.5 3.5 0 0 0 9 9v10.5h6.8A3.2 3.2 0 0 1 19 22.5z" />
      </>
    ),
    city: (
      <>
        <path d="M4 20V10h5v10M9 20V6h6v14M15 20v-7h5v7M3 20h18" />
      </>
    ),
    access: (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="M8 10h8M12 10v4M9 20l3-6 3 6M7 14h10" />
      </>
    ),
    hands: (
      <>
        <path d="M8 13V7a1.5 1.5 0 0 1 3 0v5" />
        <path d="M11 12V6.5a1.5 1.5 0 0 1 3 0V13" />
        <path d="M14 12.5V8a1.5 1.5 0 0 1 3 0v7c0 3-2 5.5-5.5 5.5S6 18 6 15v-3.2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 4 8 4-8 4-8-4 8-4z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M4 18c.6-2.4 2.4-3.5 5-3.5s4.4 1.1 5 3.5" />
        <circle cx="17" cy="10" r="2.2" />
        <path d="M16 18c.4-1.6 1.4-2.5 3-2.8" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M8 14a5 5 0 1 1 8 0c-.8.8-1.5 1.6-1.5 2.5H9.5C9.5 15.6 8.8 14.8 8 14z" />
      </>
    ),
    db: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
        <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
      </>
    ),
    brain: (
      <>
        <path d="M9 7a2.5 2.5 0 0 1 2.2-2.4A2.8 2.8 0 0 1 14.5 7 2.4 2.4 0 0 1 17 9.4c0 1.2-.6 2-1.4 2.6.6.6 1.1 1.4 1.1 2.4A2.6 2.6 0 0 1 14 17a2.7 2.7 0 0 1-2 .9A2.7 2.7 0 0 1 10 17a2.6 2.6 0 0 1-2.7-2.6c0-1 .5-1.8 1.1-2.4A3 3 0 0 1 7 9.4 2.4 2.4 0 0 1 9 7z" />
        <path d="M12 5v13" />
      </>
    ),
    doc: (
      <>
        <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z" />
        <path d="M14 3.5V8h4.5M8 12h8M8 16h6" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4 3.5 19h17L12 4z" />
        <path d="M12 10v4M12 16.5h.01" />
      </>
    ),
    spark: <path d="M12 3v4M12 17v4M4.9 6.5l2.8 2.8M16.3 14.7l2.8 2.8M3 12h4M17 12h4M4.9 17.5l2.8-2.8M16.3 9.3l2.8-2.8" />,
    target: (
      <>
        <circle cx="12" cy="12" r="7" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    cpu: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
      </>
    ),
    flow: <path d="M5 7h8a4 4 0 0 1 0 8H9a3 3 0 0 0 0 6h10" />,
    image: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="m8 15 2.5-3 2 2.2L15 11l3 4" />
        <circle cx="9" cy="9" r="1" />
      </>
    ),
    play: <path d="M9 7.5v9l8-4.5-8-4.5z" />,
    trophy: <path d="M8 4h8v4a4 4 0 0 1-8 0V4zM8 6H5.5A2.5 2.5 0 0 0 8 10M16 6h2.5A2.5 2.5 0 0 1 16 10M10 14h4l-.5 2h-3L10 14zM8 20h8" />,
    chat: (
      <>
        <path d="M6 17.5 4 20V7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v7A2.5 2.5 0 0 1 17.5 17H8z" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
        <circle cx="12" cy="11" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="m5 8 7 5 7-5" />
      </>
    ),
    phone: <path d="M8 4.5h3l1.2 3-2 1.2a12 12 0 0 0 5 5L16.4 12 19.5 13.2V16a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 6 6.7 2 2 0 0 1 8 4.5z" />,
    star: <path d="m12 4 1.8 4.2L18.4 9l-3.2 2.9.9 4.6L12 14.8 7.9 16.5l.9-4.6L5.6 9l4.6-.8L12 4z" />,
    qr: (
      <>
        <rect x="4" y="4" width="6" height="6" />
        <rect x="14" y="4" width="6" height="6" />
        <rect x="4" y="14" width="6" height="6" />
        <path d="M14 14h2v2h-2zM18 14h2v6h-6v-2h4" />
      </>
    ),
    shuffle: <path d="M4 7h4l10 10h2M16 7h4M4 17h4l3-3" />,
    share: <path d="M14 6.5a2.2 2.2 0 1 0-2.1-2.8L7.2 6.4a2.2 2.2 0 1 0 0 3.2l4.7 2.6a2.2 2.2 0 1 0 .7-1.6L8.2 8.2" />,
    search: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4" />
      </>
    ),
    pen: <path d="M4 20h4l10-10-4-4L4 16v4zM13 7l4 4" />,
    flask: <path d="M10 3h4M9 9h6M10 3v5L5.5 18A3 3 0 0 0 8 22h8a3 3 0 0 0 2.5-4L14 8V3" />,
    monitor: (
      <>
        <rect x="3.5" y="5" width="17" height="11" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  };
  return (
    <svg {...common} className="icon">
      {paths[name] || paths.spark}
    </svg>
  );
}
