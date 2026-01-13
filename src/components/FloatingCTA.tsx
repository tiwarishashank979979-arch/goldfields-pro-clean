"use client";

export default function FloatingCTA() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3 sm:flex-row">
      <a
        href="tel:0457335628"
        className="group flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-all hover:scale-110 hover:bg-primary-light hover:shadow-xl focus-visible:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-primary dark:hover:bg-primary-light sm:px-5 sm:py-3"
        aria-label="Call Goldfields Pro Clean at 0457 335 628"
      >
        <span className="text-base transition-transform group-hover:scale-110 sm:text-lg">📞</span>
        <span className="hidden sm:inline">Call Now</span>
      </a>
      <a
        href="#free-quote"
        onClick={(e) => handleScroll(e, "#free-quote")}
        className="group flex items-center justify-center gap-2 rounded-full bg-amber-500 px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-all hover:scale-110 hover:bg-amber-600 hover:shadow-xl focus-visible:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 dark:bg-amber-600 dark:hover:bg-amber-700 sm:px-5 sm:py-3"
        aria-label="Get a free quote"
      >
        <span className="text-base transition-transform group-hover:scale-110 sm:text-lg">💬</span>
        <span className="hidden sm:inline">Free Quote</span>
      </a>
    </div>
  );
}
