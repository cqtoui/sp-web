import { useEffect, useRef } from "react";

export default function HeroField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let width = 0;
    let height = 0;
    const points = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00035,
      vy: (Math.random() - 0.5) * 0.00035,
      r: 1.2 + Math.random() * 1.6,
    }));

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      const nodes = points.map((point) => {
        if (!reduce) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0 || point.x > 1) point.vx *= -1;
          if (point.y < 0 || point.y > 1) point.vy *= -1;
        }
        return { x: point.x * width, y: point.y * height, r: point.r };
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 150) {
            context.strokeStyle = `rgba(74, 150, 196, ${0.18 * (1 - distance / 150)})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(nodes[i].x, nodes[i].y);
            context.lineTo(nodes[j].x, nodes[j].y);
            context.stroke();
          }
        }
      }

      nodes.forEach((node, index) => {
        context.beginPath();
        context.fillStyle = index % 3 === 0 ? "rgba(31, 111, 158, 0.55)" : "rgba(120, 184, 220, 0.8)";
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      });

      if (!reduce) frame = requestAnimationFrame(draw);
      else void time;
    }

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
