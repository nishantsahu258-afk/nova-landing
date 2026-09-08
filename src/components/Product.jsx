import { Zap, ShieldCheck, Link2 } from "lucide-react";

/**
 * Product / About section. Explains what NOVA is, in plain terms,
 * paired with a lightweight visual so the section doesn't read as
 * a wall of marketing copy.
 */
export default function Product() {
  return (
    <section id="product" className="section-pad bg-paper-soft dark:bg-ink-soft">
      <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="rounded-2xl border border-paper-line dark:border-ink-line bg-paper dark:bg-ink p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: "Automations", value: "1,240 runs today" },
                { icon: Link2, label: "Connected tools", value: "12 integrations" },
                { icon: ShieldCheck, label: "Data protection", value: "Encrypted end to end" },
                { icon: Users2Placeholder, label: "Active members", value: "86 online now" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-paper-line dark:border-ink-line p-4"
                >
                  <Icon size={18} className="text-signal-dim dark:text-signal mb-3" />
                  <p className="text-xs text-ink/50 dark:text-paper/50">{label}</p>
                  <p className="font-display font-semibold text-sm mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-medium text-signal-dim dark:text-signal mb-4">
            What NOVA is
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-5">
            One workspace that understands how your team actually works
          </h2>
          <p className="text-ink/70 dark:text-paper/70 text-lg leading-relaxed mb-6">
            Most tools ask your team to keep them updated. NOVA does the
            opposite: it watches the tools you already use, learns your
            patterns and keeps your projects current without anyone
            typing a status update.
          </p>
          <p className="text-ink/70 dark:text-paper/70 leading-relaxed">
            That means fewer meetings, fewer forgotten follow-ups, and a
            single source of truth that engineering, marketing and
            operations can all trust at the same time.
          </p>
        </div>
      </div>
    </section>
  );
}

// Small local placeholder icon component so we can reuse the same
// icon-in-a-tile pattern without importing an unrelated icon name.
function Users2Placeholder(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
