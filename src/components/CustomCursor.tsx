import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";
    
    // Select all clickable elements
    const clickables = document.querySelectorAll(
      "a, button, input, textarea, select, canvas, [role='button'], .skill-card"
    );

    const onMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current || !followerRef.current) return;
      
      // Main dot follows instantly
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Follower has a slight lag/spring effect
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2 });
      gsap.to(followerRef.current, {
        scale: 2.5,
        backgroundColor: "rgba(168, 85, 247, 0.2)", // Purple semi-transparent
        borderColor: "rgba(168, 85, 247, 0.8)",
        borderWidth: "1px",
        mixBlendMode: "difference",
        duration: 0.3,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.2 });
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(56, 189, 248, 0.6)", // Sky blue
        borderWidth: "2px",
        mixBlendMode: "normal",
        duration: 0.3,
      });
    };

    const onMouseDown = () => {
      gsap.to(followerRef.current, { scale: 0.8, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(followerRef.current, { scale: 1, duration: 0.1 });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
      
      // Since elements in React can be dynamic, it's sometimes better to use event delegation or MutationObservers for a perfect implementation, 
      // but for a portfolio this is usually sufficient if called after mount. However, we'll also observe mutations for dynamic content.
    });

    // Cleanup
    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);

      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-sky-400 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)'
        }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 will-change-transform shadow-[0_0_10px_rgba(168,85,247,0.8)]"
      />
    </>
  );
};

export default CustomCursor;
