import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import QuoteForm from "../components/QuoteForm";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-28 sm:gap-20 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <section id="hero" className="scroll-mt-28 sm:scroll-mt-32">
          <Hero />
        </section>
        <section id="services" aria-label="Cleaning services" className="scroll-mt-28 sm:scroll-mt-32">
          <Services />
        </section>
        <section id="why-us" aria-label="Why choose Goldfields Pro Clean" className="scroll-mt-28 sm:scroll-mt-32">
          <WhyUs />
        </section>
        <section id="reviews" aria-label="Customer testimonials" className="scroll-mt-28 sm:scroll-mt-32">
          <Testimonials />
        </section>
        <section id="free-quote" aria-label="Free quote request form" className="scroll-mt-28 sm:scroll-mt-32">
          <QuoteForm />
        </section>
      </main>
      <FloatingCTA />
      <BackToTop />
      <Footer />
    </>
  );
}
