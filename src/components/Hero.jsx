import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import HeroBackground from "./HeroBackground";

/**
 * Hero section. This is the one place the design spends its "boldness":
 * an animated burst of light behind a live-looking product panel,
 * echoing the brand name (a nova is a sudden burst of light).
 * Every other section stays deliberately quieter than this one.
 */
export default function Hero({ onOpenDemo }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper dark:bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* 3D ambient animated background layer (Canvas + Flowing Gradients) */}
      <HeroBackground />

      <div className="container-page relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <p className="text-sm font-medium text-signal-dim dark:text-signal mb-5">
            AI productivity platform for growing teams
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold tracking-tight text-balance">
            Build better.
            <br />
            Work smarter.
          </h1>
          <p className="mt-6 text-lg text-ink/70 dark:text-paper/70 max-w-[46ch]">
            NOVA gives your team one place to plan projects, automate the
            busywork and see what's actually happening, so nothing sits
            waiting on a status update again.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3.5">
            <a
              href="#final-cta"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper dark:bg-signal dark:text-ink font-semibold hover:opacity-90 transition-opacity"
            >
              Start your free trial
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <button
              type="button"
              onClick={onOpenDemo}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-paper-line dark:border-ink-line font-semibold hover:border-signal transition-colors"
            >
              <Play
                size={15}
                className="text-signal-dim dark:text-signal fill-current transition-transform group-hover:scale-110"
              />
              Watch 2-min demo
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-ink/70 dark:text-paper/70 hover:text-ink dark:hover:text-paper font-medium transition-colors"
            >
              See how it works
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60 dark:text-paper/60">
            {["No credit card required", "14-day free trial", "Cancel anytime"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-signal-dim dark:text-signal" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Product preview panel */}
        <div className="relative">
          <div className="rounded-2xl border border-paper-line dark:border-ink-line bg-white dark:bg-ink-soft shadow-[0_30px_80px_-30px_rgba(14,16,22,0.35)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-paper-line dark:border-ink-line">
              <span className="h-2.5 w-2.5 rounded-full bg-ember/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-line dark:bg-paper/30" />
              <span className="ml-3 text-xs text-ink/40 dark:text-paper/40">
                nova.app/workspace/aperture
              </span>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-sm font-semibold">
                  Q3 Launch — Aperture
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-signal/15 text-signal-dim dark:text-signal font-medium">
                  On track
                </span>
              </div>

              {[
                { label: "Landing page redesign", pct: 82, owner: "P. Nair" },
                { label: "Onboarding automation", pct: 54, owner: "D. Osei" },
                { label: "Beta feedback review", pct: 27, owner: "M. Vega" },
              ].map((row) => (
                <div key={row.label} className="space-y-1.5">
                  <div className="flex justify-between text-xs text-ink/60 dark:text-paper/60">
                    <span>{row.label}</span>
                    <span>{row.owner}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-paper-soft dark:bg-ink-line overflow-hidden">
                    <div
                      className="h-full rounded-full bg-signal"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-2 flex items-center gap-2 text-xs text-ink/50 dark:text-paper/50">
                <span className="h-1.5 w-1.5 rounded-full bg-ember animate-pulse" />
                NOVA routed 3 new tasks while you were away
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
