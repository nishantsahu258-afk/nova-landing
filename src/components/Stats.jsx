import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/content";

/**
 * Counts each stat up from 0 once the section scrolls into view.
 * Uses IntersectionObserver so the animation runs once, on arrival,
 * rather than looping or replaying on every scroll.
 */
function AnimatedStat({ value, suffix, label, active }) {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const duration = 1400;
    const start = performance.now();
    const isDecimal = value % 1 !== 0;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [active, value]);

  return (
    <div>
      <p className="font-display text-4xl sm:text-5xl font-semibold text-signal">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-paper/70">{label}</p>
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-pad bg-ink text-paper">
      <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((stat) => (
          <AnimatedStat key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </section>
  );
}
