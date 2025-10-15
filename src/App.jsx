import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const logoUrl = "/logo.png";
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", { method: "POST", body: formData });
      setStatus({ state: "success", message: "Thanks! Your message has been sent." });
      form.reset();
    } catch (error) {
      setStatus({ state: "error", message: "Form submission failed." });
    }
  }

  return (
    <div className="min-h-screen bg-[var(--jamf-bg)] text-[var(--jamf-text)] antialiased scroll-smooth">

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoUrl} alt="Jamfify Africa Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-semibold text-[var(--jamf-navy)]">Jamfify Africa</h1>
              <p className="text-sm text-gray-500">Certified Jamf Now Partner</p>
            </div>
          </a>
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#services" className="hover:text-[var(--jamf-blue)]">Services</a>
            <a href="#solutions" className="hover:text-[var(--jamf-blue)]">Solutions</a>
            <a href="#pricing" className="hover:text-[var(--jamf-blue)]">Pricing</a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-[var(--jamf-navy)] text-white shadow hover:bg-[#162141]"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* 🎬 HERO VIDEO SECTION */}
      <section id="top" className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/nRZDWm2UMic?autoplay=1&mute=1&loop=1&playlist=nRZDWm2UMic&controls=0&modestbranding=1&showinfo=0"
            title="Jamf Now Overview"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--jamf-navy)] to-[var(--jamf-blue)] text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
          >
            Empowering Africa with Jamf Now Expertise
          </motion.h2>
          <p className="text-lg text-gray-100 mb-10">
            Onboarding and Managed Services to deploy, secure, and manage Apple devices with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[var(--jamf-navy)] font-medium rounded-lg shadow hover:bg-gray-100"
            >
              Get Started
            </a>
            <a
              href="https://signup.jamfnow.com?a=51f49dc4-a6ca-4355-938e-3d6eef50bf57"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-[var(--jamf-navy)]"
            >
              Sign up with Jamf Now
            </a>
          </div>
        </div>
      </section>

      {/* The rest of your sections (Services, Solutions, Pricing, Contact, Footer) remain unchanged */}
    </div>
  );
}
