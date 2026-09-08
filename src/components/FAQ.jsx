import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "../data/content";

/**
 * FAQ accordion. Only one item is open at a time (a single `openIndex`
 * value in state); clicking the open item's question closes it again.
 * The answer panel animates with a max-height transition so it doesn't
 * jump, and the plus icon rotates into a minus to signal state.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="section-pad bg-paper dark:bg-ink">
      <div className="container-page max-w-3xl">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Questions, answered
          </h2>
          <p className="mt-4 text-ink/65 dark:text-paper/65 text-lg">
            Can't find what you're looking for? Reach out and our team
            will get back to you within a day.
          </p>
        </div>

        <div className="border-t border-paper-line dark:border-ink-line">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="border-b border-paper-line dark:border-ink-line">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display font-semibold text-lg">
                    {item.question}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-signal-dim dark:text-signal transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-ink/65 dark:text-paper/65 leading-relaxed max-w-[65ch]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
