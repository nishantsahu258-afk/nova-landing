import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FOOTER_LINKS } from "../data/content";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Footer with a small newsletter form. Validates the email format
 * client-side and shows an inline error or success state rather than
 * a browser alert, so the feedback stays in context.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="bg-ink text-paper pt-16 pb-10">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] gap-10 pb-14 border-b border-paper/10">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-signal text-ink font-bold">
                N
              </span>
              NOVA
            </a>
            <p className="mt-4 text-sm text-paper/60 max-w-[32ch]">
              The AI productivity platform that keeps your team's work
              current, automatically.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-sm text-paper/60 hover:text-paper transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Stay updated</h4>
            <p className="text-sm text-paper/60 mb-4">
              Product news, once or twice a month. No spam.
            </p>
            <form onSubmit={handleSubmit} noValidate className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-invalid={status === "error"}
                  className="min-w-0 flex-1 rounded-full bg-paper/10 border border-paper/15 px-4 py-2.5 text-sm placeholder:text-paper/40 focus:border-signal outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-signal text-ink text-sm font-semibold px-4 py-2.5 hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </div>
              {status === "error" && (
                <p className="text-xs text-ember">Enter a valid email address.</p>
              )}
              {status === "success" && (
                <p className="text-xs text-signal flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> You're subscribed.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/45">
          <p>© {new Date().getFullYear()} NOVA Labs, Inc. All rights reserved.</p>
          <p>Built for the front-end development internship assignment.</p>
        </div>
      </div>
    </footer>
  );
}
