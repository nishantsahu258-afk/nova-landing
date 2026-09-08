import { useState } from "react";
import { Check } from "lucide-react";
import { PRICING } from "../data/content";

/**
 * Pricing section with a monthly/annual toggle. The highlighted plan
 * uses solid ink/signal fill so it reads as "the one to pick" without
 * needing a ribbon or badge on every card.
 */
export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="section-pad bg-paper-soft dark:bg-ink-soft">
      <div className="container-page">
        <div className="max-w-[52ch] mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Simple pricing that scales with your team
          </h2>
          <p className="mt-4 text-ink/65 dark:text-paper/65 text-lg">
            Every plan includes unlimited projects and core automations.
            Upgrade as your team grows.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center gap-3 mb-12">
          <span
            className={`text-sm font-medium ${!annual ? "text-ink dark:text-paper" : "text-ink/50 dark:text-paper/50"}`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Toggle annual billing"
            onClick={() => setAnnual((v) => !v)}
            className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full bg-ink dark:bg-paper-line p-1 transition-colors focus:outline-none"
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-signal shadow-sm transition-transform duration-200 ease-in-out ${
                annual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-medium ${annual ? "text-ink dark:text-paper" : "text-ink/50 dark:text-paper/50"}`}
          >
            Annual
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-signal/15 text-signal-dim dark:text-signal">
            Save ~20%
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-ink text-paper dark:bg-paper dark:text-ink shadow-[0_25px_60px_-25px_rgba(14,16,22,0.4)]"
                  : "bg-paper dark:bg-ink border border-paper-line dark:border-ink-line"
              }`}
            >
              <h3 className="font-display font-semibold text-xl">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted
                    ? "text-paper/70 dark:text-ink/70"
                    : "text-ink/60 dark:text-paper/60"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-semibold">
                  ${annual ? plan.annual : plan.monthly}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlighted
                      ? "text-paper/60 dark:text-ink/60"
                      : "text-ink/50 dark:text-paper/50"
                  }`}
                >
                  / member / month
                </span>
              </div>

              <a
                href="#final-cta"
                className={`mt-7 block text-center font-semibold px-5 py-3 rounded-full transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "bg-signal text-ink"
                    : "bg-ink text-paper dark:bg-paper dark:text-ink"
                }`}
              >
                Choose {plan.name}
              </a>

              <ul className="mt-8 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-signal" : "text-signal-dim dark:text-signal"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted
                          ? "text-paper/85 dark:text-ink/85"
                          : "text-ink/70 dark:text-paper/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
