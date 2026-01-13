"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#free-quote", label: "Free Quote" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md shadow-lg transition-all dark:border-slate-700/50 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
        <a 
          href="#hero" 
          className="flex items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3" 
          aria-label="Goldfields Pro Clean home"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <div className="relative h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28">
            <Image
              src="/images/logo.png"
              alt="Goldfields Pro Clean Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold tracking-wide text-white dark:text-slate-100 sm:text-base">
              Goldfields Pro Clean
            </span>
            <span className="text-xs text-slate-200 dark:text-slate-400">
              Kalgoorlie-Boulder, WA
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-100 md:flex dark:text-slate-300" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative transition-colors hover:text-primary-light focus-visible:text-primary-light after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary-light after:transition-all hover:after:w-full dark:hover:text-primary dark:after:bg-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0457335628"
            className="rounded-full border border-primary/60 bg-primary/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-soft transition hover:bg-primary-light hover:shadow-md dark:bg-primary dark:hover:bg-primary-light"
            aria-label="Call Goldfields Pro Clean at 0457 335 628"
          >
            Call Now
          </a>
          <a
            href="#free-quote"
            onClick={(e) => handleNavClick(e, "#free-quote")}
            className="rounded-full border border-accent/80 bg-amber-100/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-amber-200 transition hover:bg-amber-200/20 hover:border-amber-300 dark:bg-amber-900/20 dark:text-amber-300 dark:hover:bg-amber-900/30"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-900/70 p-2 text-slate-100 transition hover:bg-slate-800 md:hidden dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-full bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 text-sm text-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900/95"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                  }}
                  className="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-1 flex gap-2">
              <a
                href="tel:0457335628"
                className="flex-1 rounded-full bg-primary/90 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-primary-light dark:bg-primary dark:hover:bg-primary-light"
                aria-label="Call Goldfields Pro Clean"
              >
                Call Now
              </a>
              <a
                href="#free-quote"
                onClick={(e) => {
                  handleNavClick(e, "#free-quote");
                }}
                className="flex-1 rounded-full border border-amber-400/80 bg-amber-100/5 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-amber-200 transition hover:bg-amber-100/10 dark:bg-amber-900/20 dark:text-amber-300 dark:hover:bg-amber-900/30"
              >
                Free Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
