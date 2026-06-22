"use client";

interface GlowProps {
  color?: string;
  blur?: number;
  opacity?: number;
  width?: string;
  height?: string;
  className?: string;
}

export default function Glow({
  color = "white",
  blur = 41,
  opacity = 0.3,
  width = "60%",
  height = "60%",
  className = "",
}: GlowProps) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{
        width,
        height,
        background: color,
        filter: `blur(${blur}px)`,
        opacity,
        borderRadius: "50%",
      }}
    />
  );
}
