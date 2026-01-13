import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 dark:border-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-24 w-24 flex-shrink-0 sm:h-28 sm:w-28">
                <Image
                  src="/images/logo.png"
                  alt="Goldfields Pro Clean Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white dark:text-slate-100 sm:text-xl">Goldfields Pro Clean</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 sm:text-sm">Kalgoorlie-Boulder, WA</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400 dark:text-slate-500">
              Professional cleaning services for homes and businesses across Kalgoorlie-Boulder, WA. 
              Local, reliable, and flexible cleaning tailored to your needs.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white dark:text-slate-100">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:0457335628"
                  className="flex items-center gap-2 transition-colors hover:text-primary-light dark:hover:text-primary"
                  aria-label="Call Goldfields Pro Clean"
                >
                  <span className="text-lg">📞</span>
                  <span>0457 335 628</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:goldfieldsproclean@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-primary-light dark:hover:text-primary"
                  aria-label="Email Goldfields Pro Clean"
                >
                  <span className="text-lg">✉️</span>
                  <span className="break-all">goldfieldsproclean@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                <span className="text-lg">📍</span>
                <span>Kalgoorlie-Boulder, WA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white dark:text-slate-100">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="transition-colors hover:text-primary-light dark:hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="transition-colors hover:text-primary-light dark:hover:text-primary">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors hover:text-primary-light dark:hover:text-primary">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#free-quote" className="transition-colors hover:text-primary-light dark:hover:text-primary">
                  Free Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center dark:border-slate-700">
          <p className="text-xs text-slate-500 dark:text-slate-600">
            © {new Date().getFullYear()} Goldfields Pro Clean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
