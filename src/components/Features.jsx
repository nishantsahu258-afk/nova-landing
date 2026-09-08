import {
  GitBranch,
  Timer,
  Mic,
  FileBarChart,
  Users,
  Workflow,
} from "lucide-react";
import { FEATURES } from "../data/content";

const ICONS = [GitBranch, Timer, Mic, FileBarChart, Users, Workflow];

/**
 * Feature grid. Cards use a hairline border rather than a drop shadow,
 * so the hover state (a signal-colored border) reads as a distinct
 * change rather than a generic "card kit" shadow lift.
 */
export default function Features() {
  return (
    <section id="features" className="section-pad bg-paper dark:bg-ink">
      <div className="container-page">
        <div className="max-w-[52ch] mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Everything your team needs to move work forward
          </h2>
          <p className="mt-4 text-ink/65 dark:text-paper/65 text-lg">
            NOVA replaces the spreadsheets, status threads and stray
            documents with one system that keeps itself up to date.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-line dark:bg-ink-line rounded-2xl overflow-hidden border border-paper-line dark:border-ink-line">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={feature.title}
                className="group bg-paper dark:bg-ink p-7 sm:p-8 transition-colors hover:bg-paper-soft dark:hover:bg-ink-soft"
              >
                <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-ink dark:bg-paper text-signal dark:text-ink mb-5 transition-transform group-hover:-translate-y-0.5">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-ink/65 dark:text-paper/65 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
