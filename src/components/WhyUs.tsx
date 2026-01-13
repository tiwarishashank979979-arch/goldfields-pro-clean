const FEATURES = [
  {
    title: "Local",
    description: "Based in Kalgoorlie-Boulder, we understand the local area and are always nearby when you need us.",
    icon: "📍",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Reliable",
    description: "Consistent, dependable service you can count on. We show up on time and deliver quality results every time.",
    icon: "✓",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Flexible",
    description: "Weekly, fortnightly, or one-off cleans. We work around your schedule to make cleaning hassle-free.",
    icon: "🔄",
    color: "from-amber-500 to-orange-500"
  }
];

export default function WhyUs() {
  return (
    <div className="animate-fade-in rounded-2xl bg-gradient-to-br from-slate-50 via-teal-50/40 to-blue-50/30 px-6 py-10 sm:px-10 sm:py-16 dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-800/80">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          Why Choose Goldfields Pro Clean?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          We bring professionalism, reliability, and local expertise to every clean.
        </p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <div
            key={feature.title}
            className="group animate-scale-in rounded-2xl border border-white/60 bg-white/90 p-6 text-center shadow-sm backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/90 sm:p-8"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-2xl shadow-md transition-transform group-hover:scale-110 sm:h-16 sm:w-16 sm:text-3xl`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
