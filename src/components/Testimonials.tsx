const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Kalgoorlie",
    rating: 5,
    text: "Goldfields Pro Clean transformed our home! They're thorough, reliable, and always leave everything sparkling. Highly recommend!"
  },
  {
    name: "James T.",
    location: "Boulder",
    rating: 5,
    text: "Professional service from start to finish. Our office has never looked better. They work around our schedule and always deliver."
  },
  {
    name: "Lisa K.",
    location: "Kalgoorlie-Boulder",
    rating: 5,
    text: "Used them for our end-of-lease clean and passed inspection first time. Great communication and attention to detail. Thank you!"
  }
];

export default function Testimonials() {
  return (
    <div className="animate-fade-in">
      <div className="mb-10 text-center sm:mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          Real feedback from satisfied customers across Kalgoorlie-Boulder
        </p>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="group animate-slide-up rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:p-6"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 flex items-center gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span 
                  key={i} 
                  className="text-lg text-amber-400 drop-shadow-sm dark:text-amber-500 sm:text-xl" 
                  aria-label={`${testimonial.rating} stars`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">"{testimonial.text}"</p>
            <div className="border-t border-slate-100 pt-4 dark:border-slate-700">
              <p className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
