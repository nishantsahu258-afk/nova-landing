const BRAND_LOGOS = [
  {
    name: "Aperture",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="m14.3 8 5.7 9.9M9.7 8h11.5M7.4 12l5.7-9.9M9.7 16l-5.7-9.9M14.3 16H2.8M16.6 12l-5.7 9.9" />
      </svg>
    ),
  },
  {
    name: "Northwind",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" />
      </svg>
    ),
  },
  {
    name: "Kestrel",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 18 L12 6 L21 18 L12 14 Z" />
      </svg>
    ),
  },
  {
    name: "Fieldstone",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="8" height="7" rx="1.5" />
        <rect x="13" y="4" width="8" height="7" rx="1.5" />
        <rect x="5" y="13" width="14" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    name: "Marbletree",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V11M12 11l-4-4M12 11l4-4M8 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm14 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM12 4a3 3 0 1 1 0-2 3 3 0 0 1 0 2z" />
      </svg>
    ),
  },
  {
    name: "Loom & Co",
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M10.8 10.8l2.4 2.4" />
        <path d="M16 8v0" />
        <path d="M8 16v0" />
      </svg>
    ),
  },
];

/**
 * A quiet strip of partner company logos. Duplicated once so the CSS marquee
 * animation can loop seamlessly at -50%.
 */
export default function TrustedBy() {
  const items = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="border-y border-paper-line dark:border-ink-line py-10 bg-paper-soft/60 dark:bg-ink-soft/40">
      <div className="container-page">
        <p className="text-center text-xs font-medium uppercase tracking-wide text-ink/40 dark:text-paper/40 mb-6">
          Trusted by teams at forward-thinking companies
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex w-max gap-14 sm:gap-20 animate-marquee items-center">
          {items.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-2.5 text-ink/40 dark:text-paper/40 hover:text-ink dark:hover:text-paper transition-colors cursor-default select-none"
            >
              {brand.icon}
              <span className="font-display text-lg sm:text-xl font-semibold tracking-tight whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
