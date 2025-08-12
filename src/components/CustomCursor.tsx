import React, { useEffect, useRef } from "react";

const SIZE = 30;

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (ringRef.current && coreRef.current) {
        ringRef.current.style.left = `${e.clientX - SIZE / 2}px`;
        ringRef.current.style.top = `${e.clientY - SIZE / 2}px`;
        coreRef.current.style.left = `${e.clientX - 8}px`;
        coreRef.current.style.top = `${e.clientY - 8}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    // Optional: animate ring rotation
    let animation: number | undefined;
    const rotate = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `rotate(${Date.now() / 24 % 360}deg)`;
      }
      animation = requestAnimationFrame(rotate);
    };
    rotate();
    return () => {
      if (typeof animation === 'number') {
        cancelAnimationFrame(animation);
      }
    };
  }, []);

  return (
    <>
      {/* Glowing core */}
      <div
        ref={coreRef}
        style={{
          position: "fixed",
          zIndex: 10001,
          pointerEvents: "none",
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #7df9ff 60%, #a259ff 100%)",
          boxShadow: "0 0 22px 9px #3d5afeaa",
          mixBlendMode: "screen",
        }}
      />
      {/* Animated neon ring with circuit SVG overlay */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          zIndex: 10000,
          pointerEvents: "none",
          width: SIZE,
          height: SIZE,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(64,174,255,0.13) 52%, transparent 100%)",
          border: "2.5px solid #36eafd",
          boxShadow: "0 0 30px 8px #36eafd, 0 0 4px #fff",
          mixBlendMode: "color-dodge",
          transition: "box-shadow 0.17s, border-color 0.17s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* SVG circuits overlay */}
        <svg width={SIZE} height={SIZE} style={{position: "absolute", left: 0, top: 0, pointerEvents: "none"}}>
          <circle
            cx={SIZE/2}
            cy={SIZE/2}
            r={SIZE/2-5}
            fill="none"
            stroke="url(#neon)"
            strokeDasharray="4 10"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="neon" x1="0" y1="0" x2={SIZE} y2={SIZE} gradientUnits="userSpaceOnUse">
              <stop stopColor="#7df9ff" />
              <stop offset="1" stopColor="#a259ff"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
