import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * HeroBackground — Highly visible, premium 3D ambient background for the NOVA hero.
 *
 * Visual elements:
 * 1. Radiant 3D Glowing Nebulas: Breathing amber (#FFB238) & ember (#FF6A3D) volumetric light fields
 * 2. 3D Flowing Spatial Wave Grid: Undulating perspective sine waves across the lower hero
 * 3. Glowing Constellation Network: 55 crisp luminous nodes with active connecting filaments
 * 4. Interactive Magnetic Cursor Glow: Soft amber spotlight smoothly tracking the cursor
 * 5. Distinct Light/Dark tuning: Bold luminous glow in Dark mode, warm golden radiance in Light mode
 */
export default function HeroBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId;
    let isVisible = true;
    let width = 0;
    let height = 0;

    // Mouse tracking with smooth spring physics
    const mouse = { x: -1000, y: -1000, currentX: -1000, currentY: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (mouse.currentX === -1000) {
        mouse.currentX = mouse.x;
        mouse.currentY = mouse.y;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect() || {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // 55 Crisp Luminous 3D Particles
    const PARTICLE_COUNT = 55;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const z = Math.random() * 0.75 + 0.25; // 3D depth factor
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        radius: (Math.random() * 2.2 + 1.2) * (z * 1.2),
        vx: (Math.random() - 0.5) * 0.45 * z,
        vy: (Math.random() - 0.5) * 0.45 * z,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    });

    let time = 0;

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += prefersReducedMotion ? 0 : 1;
      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";

      // Smooth cursor spring
      if (mouse.x > 0 && mouse.y > 0) {
        mouse.currentX += (mouse.x - mouse.currentX) * 0.08;
        mouse.currentY += (mouse.y - mouse.currentY) * 0.08;
      }

      // ----------------------------------------------------
      // 1. VOLUMETRIC 3D GLOW NEBULAS (Clearly Visible!)
      // ----------------------------------------------------
      const nebulas = [
        {
          // Top-right burst behind the hero product card
          x: width * 0.72 + Math.sin(time * 0.008) * 45,
          y: height * 0.35 + Math.cos(time * 0.006) * 35,
          radius: Math.min(width, height) * 0.65,
          color0: isDark ? "rgba(255, 178, 56, 0.42)" : "rgba(255, 178, 56, 0.30)",
          color1: isDark ? "rgba(255, 106, 61, 0.22)" : "rgba(255, 125, 77, 0.16)",
        },
        {
          // Left-center glow behind the main headline
          x: width * 0.22 + Math.cos(time * 0.007) * 35,
          y: height * 0.55 + Math.sin(time * 0.009) * 30,
          radius: Math.min(width, height) * 0.55,
          color0: isDark ? "rgba(255, 106, 61, 0.28)" : "rgba(255, 160, 60, 0.20)",
          color1: isDark ? "rgba(255, 178, 56, 0.12)" : "rgba(255, 190, 80, 0.08)",
        },
        {
          // Floating ambient light orbiting slowly
          x: width * 0.5 + Math.sin(time * 0.005) * 80,
          y: height * 0.15 + Math.cos(time * 0.007) * 40,
          radius: Math.min(width, height) * 0.45,
          color0: isDark ? "rgba(255, 203, 112, 0.32)" : "rgba(255, 178, 56, 0.22)",
          color1: "transparent",
        },
      ];

      nebulas.forEach((nebula) => {
        const grad = ctx.createRadialGradient(
          nebula.x,
          nebula.y,
          0,
          nebula.x,
          nebula.y,
          nebula.radius
        );
        grad.addColorStop(0, nebula.color0);
        grad.addColorStop(0.5, nebula.color1);
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // ----------------------------------------------------
      // 2. INTERACTIVE CURSOR SPOTLIGHT
      // ----------------------------------------------------
      if (mouse.currentX > 0 && mouse.currentY > 0) {
        const cursorGrad = ctx.createRadialGradient(
          mouse.currentX,
          mouse.currentY,
          0,
          mouse.currentX,
          mouse.currentY,
          260
        );
        cursorGrad.addColorStop(
          0,
          isDark ? "rgba(255, 203, 112, 0.28)" : "rgba(255, 178, 56, 0.22)"
        );
        cursorGrad.addColorStop(
          0.6,
          isDark ? "rgba(255, 106, 61, 0.10)" : "rgba(255, 125, 77, 0.07)"
        );
        cursorGrad.addColorStop(1, "transparent");

        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(mouse.currentX, mouse.currentY, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      // ----------------------------------------------------
      // 3. 3D FLOWING PERSPECTIVE SINE WAVES
      // ----------------------------------------------------
      const waveCount = 5;
      const waveBaseY = height * 0.72;

      for (let w = 0; w < waveCount; w++) {
        const waveProgress = w / waveCount;
        const waveY = waveBaseY + w * 28;
        const waveAlpha = (isDark ? 0.26 : 0.18) * (1 - waveProgress * 0.4);

        ctx.strokeStyle = isDark
          ? `rgba(255, 178, 56, ${waveAlpha})`
          : `rgba(217, 119, 6, ${waveAlpha})`;
        ctx.lineWidth = 1.4 - waveProgress * 0.4;
        ctx.beginPath();

        const step = 20;
        for (let x = 0; x <= width + step; x += step) {
          const freq = 0.0035;
          const speed = time * 0.015 + w * 0.8;
          const yOffset =
            Math.sin(x * freq + speed) * (26 - w * 3) +
            Math.cos(x * 0.006 - speed * 0.6) * 12;

          if (x === 0) {
            ctx.moveTo(x, waveY + yOffset);
          } else {
            ctx.lineTo(x, waveY + yOffset);
          }
        }
        ctx.stroke();
      }

      // ----------------------------------------------------
      // 4. CONSTELLATION NETWORK FILAMENTS (Connecting lines)
      // ----------------------------------------------------
      const maxDist = 135;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / maxDist;
            const lineAlpha =
              factor * (isDark ? 0.38 : 0.28) * Math.min(p1.z, p2.z);

            ctx.strokeStyle = isDark
              ? `rgba(255, 190, 70, ${lineAlpha})`
              : `rgba(180, 100, 10, ${lineAlpha})`;
            ctx.lineWidth = 1.1 * Math.min(p1.z, p2.z);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // ----------------------------------------------------
      // 5. LUMINOUS 3D PARTICLES WITH GLOW HALOS
      // ----------------------------------------------------
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Mouse gentle repel
          if (mouse.currentX > 0 && mouse.currentY > 0) {
            const mdx = p.x - mouse.currentX;
            const mdy = p.y - mouse.currentY;
            const mdist = Math.hypot(mdx, mdy);
            if (mdist < 150 && mdist > 0) {
              const force = (1 - mdist / 150) * 1.1 * p.z;
              p.x += (mdx / mdist) * force;
              p.y += (mdy / mdist) * force;
            }
          }

          // Edge wrap
          if (p.x < -15) p.x = width + 15;
          if (p.x > width + 15) p.x = -15;
          if (p.y < -15) p.y = height + 15;
          if (p.y > height + 15) p.y = -15;
        }

        // Pulsing alpha
        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.25 + 0.75;
        const alpha = pulse * (isDark ? 0.85 : 0.65) * p.z;

        // Outer ambient glow halo
        ctx.fillStyle = isDark
          ? `rgba(255, 178, 56, ${alpha * 0.35})`
          : `rgba(245, 158, 11, ${alpha * 0.28})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fill();

        // Core bright star node
        ctx.fillStyle = isDark
          ? `rgba(255, 225, 145, ${alpha})`
          : `rgba(180, 95, 8, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (canvas) observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      observer.disconnect();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* 3D Ambient Canvas Viewport */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Very soft bottom blend so waves fade seamlessly into the TrustedBy divider */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-paper dark:to-ink pointer-events-none" />
    </div>
  );
}
