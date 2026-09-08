import { HOW_IT_WORKS } from "../data/content";

/**
 * How it works. This content is genuinely sequential (a 4-step
 * onboarding flow), so numbered markers and a connecting line are
 * used deliberately here rather than as generic decoration.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-paper dark:bg-ink">
      <div className="container-page">
        <div className="max-w-[52ch] mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            From scattered tools to one system, in a week
          </h2>
          <p className="mt-4 text-ink/65 dark:text-paper/65 text-lg">
            Teams are usually fully onboarded and automating real work
            within their first week on NOVA.
          </p>
        </div>

        <ol className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-paper-line dark:bg-ink-line"
          />
          {HOW_IT_WORKS.map((step) => (
            <li key={step.step} className="relative">
              <span className="font-display text-sm font-semibold text-signal-dim dark:text-signal relative z-10 bg-paper dark:bg-ink pr-3">
                {step.step}
              </span>
              <h3 className="mt-4 font-display font-semibold text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink/65 dark:text-paper/65 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
