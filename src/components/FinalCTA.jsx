import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-ink py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-signal/15 blur-[100px]"
      />
      <div className="container-page relative text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-paper text-balance max-w-2xl mx-auto">
          Give your team back its week
        </h2>
        <p className="mt-5 text-paper/70 text-lg max-w-xl mx-auto">
          Start a free 14-day trial. No credit card, no setup call, no
          commitment.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="#top"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-signal text-ink font-semibold hover:opacity-90 transition-opacity"
          >
            Start your free trial
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-paper/25 text-paper font-semibold hover:border-paper/50 transition-colors"
          >
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
}
