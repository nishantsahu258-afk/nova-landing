import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating back-to-top button. Appears once the user has scrolled
 * past one viewport height, and scrolls smoothly back to the hero.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 h-11 w-11 flex items-center justify-center rounded-full bg-ink text-paper dark:bg-signal dark:text-ink shadow-lg transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
