import Image from "next/image";

const SERVICES = [
  {
    title: "Home Cleaning",
    description: "Regular maintenance cleaning for your home, including kitchens, bathrooms, and living areas.",
    image: "/images/service-home-stove.jpg",
    alt: "Professional stove cleaning service"
  },
  {
    title: "Office Cleaning",
    description: "Commercial cleaning services to keep your workplace clean and professional.",
    image: "/images/service-office-vacuum.jpg",
    alt: "Office vacuuming and cleaning service"
  },
  {
    title: "Deep Cleaning",
    description: "Thorough deep cleaning for kitchens, bathrooms, and hard-to-reach areas.",
    image: "/images/service-deep-wipe.jpg",
    alt: "Deep cleaning service with detailed wiping"
  },
  {
    title: "Vacate/Move-Out",
    description: "Comprehensive end-of-lease cleaning to help you pass inspections.",
    image: "/images/service-vacate-mop.jpg",
    alt: "Move-out cleaning service with mopping"
  },
  {
    title: "Window & Glass",
    description: "Streak-free window and glass cleaning for crystal-clear views.",
    image: "/images/service-window-glass.jpg",
    alt: "Window and glass cleaning service"
  },
  {
    title: "Custom Requests",
    description: "Tailored cleaning solutions for your specific needs and preferences.",
    image: "/images/service-custom-bathroom.jpg",
    alt: "Custom bathroom cleaning service"
  }
];

export default function Services() {
  return (
    <div className="animate-fade-in">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          Professional cleaning services across Kalgoorlie-Boulder, WA
        </p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            className="group animate-slide-up overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 dark:border-slate-700 dark:bg-slate-800 dark:hover:shadow-primary/20"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-700">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-slate-100 dark:group-hover:text-primary-light sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
