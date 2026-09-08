import { SOLUTIONS } from "../data/content";

/**
 * Solutions / use cases. Presented as a simple left-aligned list with
 * a rule between items rather than another card grid, so the page
 * doesn't repeat the same "boxed card" treatment for every section.
 */
export default function Solutions() {
  return (
    <section id="solutions" className="section-pad bg-paper-soft dark:bg-ink-soft">
      <div className="container-page">
        <div className="max-w-[52ch] mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Built for how each team already works
          </h2>
          <p className="mt-4 text-ink/65 dark:text-paper/65 text-lg">
            NOVA adapts its automations to the way different teams plan
            and track their work.
          </p>
        </div>

        <div className="divide-y divide-paper-line dark:divide-ink-line border-t border-b border-paper-line dark:border-ink-line">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className="grid sm:grid-cols-[240px_1fr] gap-3 sm:gap-10 py-8"
            >
              <h3 className="font-display font-semibold text-xl">
                {item.title}
              </h3>
              <p className="text-ink/65 dark:text-paper/65 leading-relaxed max-w-[60ch]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
