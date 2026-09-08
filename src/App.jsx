import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQSection from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import DemoModal from "./components/DemoModal";

/**
 * Top-level page composition. Each section is a self-contained
 * component so the page structure here reads like a table of
 * contents for the whole landing page.
 */
export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Accessibility: Skip-to-content link for keyboard & screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:dark:bg-signal focus:dark:text-ink focus:rounded-lg focus:shadow-lg focus:font-semibold focus:outline-none focus:ring-2 focus:ring-signal"
      >
        Skip to main content
      </a>

      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />
      <main id="main-content">
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <TrustedBy />
        <Features />
        <Product />
        <HowItWorks />
        <Stats />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
