"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2.5xl bg-slate-950/90 shadow-soft dark:bg-slate-800/90 dark:shadow-dark-lg">
      <div className="absolute inset-0">
        <Image
          src="/images/Kalgoorlie.jpg"
          alt="Aerial view over Kalgoorlie-Boulder, Western Australia"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-900/40 to-primary/30 dark:from-slate-950/60 dark:via-slate-900/50 dark:to-primary/40" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 px-6 py-10 sm:gap-10 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:px-14 lg:py-18">
        <div className="max-w-xl animate-fade-in text-slate-50">
          <p className="mb-3 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-100/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-amber-200 dark:border-amber-400/50 dark:bg-amber-900/20 dark:text-amber-300">
            Premium cleaning for Kalgoorlie-Boulder
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Sparkling spaces,{" "}
            <span className="bg-gradient-to-r from-teal-200 to-amber-200 bg-clip-text text-transparent dark:from-teal-300 dark:to-amber-300">
              every clean
            </span>
            .
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg dark:text-slate-300">
            Goldfields Pro Clean delivers reliable home and office cleaning across
            Kalgoorlie-Boulder, WA. Local, detail-focused and flexible to the way
            you live and work.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#free-quote"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#free-quote");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-soft transition-all hover:scale-105 hover:bg-primary-light hover:shadow-lg focus-visible:bg-primary-light sm:px-6 sm:py-3 dark:bg-primary dark:hover:bg-primary-light"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:0457335628"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-2.5 text-sm font-semibold tracking-wide text-slate-50 backdrop-blur transition-all hover:scale-105 hover:bg-white/10 hover:border-white/40 sm:px-5 sm:py-3 dark:border-white/30 dark:bg-white/10 dark:hover:bg-white/20"
            >
              Call Now
              <span className="ml-2 text-xs font-normal text-slate-200 dark:text-slate-300">
                0457 335 628
              </span>
            </a>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-200 sm:flex sm:flex-wrap sm:gap-x-8 dark:text-slate-300">
            <div>
              <dt className="font-medium text-white dark:text-slate-100">Local</dt>
              <dd className="mt-0.5 text-slate-300 dark:text-slate-400">Kalgoorlie-Boulder based</dd>
            </div>
            <div>
              <dt className="font-medium text-white dark:text-slate-100">Flexible</dt>
              <dd className="mt-0.5 text-slate-300 dark:text-slate-400">Once-off & regular cleans</dd>
            </div>
            <div>
              <dt className="font-medium text-white dark:text-slate-100">Tailored</dt>
              <dd className="mt-0.5 text-slate-300 dark:text-slate-400">Homes, offices & more</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 w-full max-w-sm animate-slide-up rounded-2.5xl border border-white/20 bg-slate-900/40 p-5 text-sm text-slate-100 backdrop-blur-sm sm:mt-0 sm:p-6 lg:ml-auto dark:border-slate-700/50 dark:bg-slate-800/60 dark:text-slate-200">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200 dark:text-amber-300">
            Goldfields Pro Clean
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 dark:text-slate-300">
            Regular, deep and vacate cleaning tailored to busy families,
            professionals and local businesses.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-light dark:bg-primary" />
              <span className="dark:text-slate-300">Weekly, fortnightly or one-off visits.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-light dark:bg-primary" />
              <span className="dark:text-slate-300">Homes, units, offices and commercial spaces.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-light dark:bg-primary" />
              <span className="dark:text-slate-300">Move-out and inspection-ready cleaning.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
