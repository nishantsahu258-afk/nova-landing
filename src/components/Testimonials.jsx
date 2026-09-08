import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";

/**
 * Simple, accessible testimonial carousel:
 * - Arrow buttons and dot indicators both update the same index.
 * - Auto-advances every 6s, but pauses while a user is hovering,
 *   so it doesn't fight someone trying to read.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="section-pad bg-paper dark:bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page">
        <div className="max-w-[52ch] mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Teams trust NOVA with their real work
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Quote className="mx-auto text-signal-dim dark:text-signal mb-6" size={28} />
          <p
            key={index}
            className="text-xl sm:text-2xl font-display leading-snug text-balance"
          >
            "{current.quote}"
          </p>
          <p className="mt-6 font-semibold">{current.name}</p>
          <p className="text-sm text-ink/55 dark:text-paper/55">{current.role}</p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-paper-line dark:border-ink-line hover:border-signal transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-signal"
                      : "w-2 bg-paper-line dark:bg-ink-line"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-paper-line dark:border-ink-line hover:border-signal transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
