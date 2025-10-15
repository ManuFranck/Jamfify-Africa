import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function App() {
  const logoUrl = "/logo.png";
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", { method: "POST", body: formData });
      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent.",
      });
      form.reset();
    } catch (error) {
      setStatus({ state: "error", message: "Form submission failed." });
    }
  }

  // ✅ Stop video at 2:15 (135s)
  useEffect(() => {
    const video = document.getElementById("hero-video");
    if (video) {
      const stopAt = 135;
      const stopVideo = () => {
        if (video.currentTime >= stopAt) video.pause();
      };
      video.addEventListener("timeupdate", stopVideo);
      return () => video.removeEventListener("timeupdate", stopVideo);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[var(--jamf-bg)] text-[var(--jamf-text)] antialiased scroll-smooth">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoUrl} alt="Jamfify Africa Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-semibold text-[var(--jamf-navy)]">
                Jamfify Africa
              </h1>
              <p className="text-sm text-gray-500">Certified Jamf Now Partner</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#services" className="hover:text-[var(--jamf-blue)]">
              Services
            </a>
            <a href="#solutions" className="hover:text-[var(--jamf-blue)]">
              Solutions
            </a>
            <a href="#pricing" className="hover:text-[var(--jamf-blue)]">
              Pricing
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-[var(--jamf-navy)] text-white shadow hover:bg-[#162141]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[var(--jamf-navy)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-inner flex flex-col items-center py-4 gap-4 border-t border-gray-100">
            <a
              href="#services"
              className="hover:text-[var(--jamf-blue)]"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#solutions"
              className="hover:text-[var(--jamf-blue)]"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#pricing"
              className="hover:text-[var(--jamf-blue)]"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-[var(--jamf-navy)] text-white shadow hover:bg-[#162141]"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/nRZDWm2UMic?autoplay=1&mute=1&loop=1&playlist=nRZDWm2UMic&controls=0&modestbranding=1&showinfo=0"
            title="Jamf Now Intro"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 py-32 md:py-48 text-center"></div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-gradient-to-br from-[var(--jamf-navy)] to-[var(--jamf-blue)] text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Empowering Africa with Jamf Now Expertise
          </h2>
          <p className="text-lg text-gray-100 mb-10">
            Onboarding and Managed Services to deploy, secure, and manage Apple devices with
            confidence.
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

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[var(--jamf-navy)]">
            Our Jamf Now Services
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            From launch to maintenance, we support your Jamf Now journey end-to-end.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-[var(--jamf-bg)] rounded-2xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)]">
                Onboarding Services
              </h4>
              <p className="mt-3 text-gray-600">
                Setup, Apple Business Manager, enrollment, configuration.
              </p>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Apple Business Manager linking</li>
                <li>Device enrollment / policies</li>
                <li>Security & compliance profiles</li>
              </ul>
            </div>

            <div className="p-8 bg-[var(--jamf-bg)] rounded-2xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)]">
                Managed Services
              </h4>
              <p className="mt-3 text-gray-600">
                Ongoing operations, security, updates, optimization.
              </p>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Continuous monitoring & updates</li>
                <li>Policy reviews & compliance</li>
                <li>Priority support & optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="py-24 bg-gradient-to-br from-[#F8FAFC] to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h3
            className="text-3xl md:text-4xl font-extrabold text-[var(--jamf-navy)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Apple Management Solutions from a Professional and Certified Jamf Now Affiliate
          </motion.h3>

          <motion.p
            className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            As a trusted Jamf Now Affiliate, <strong>Jamfify Africa</strong> empowers businesses
            across Africa to seamlessly deploy, manage, and secure Apple devices — combining Jamf’s
            best-in-class tools with expert onboarding and ongoing optimization.
          </motion.p>

          {/* Solution Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              {
                title: "Deployment & Configuration",
                desc: "Streamline Apple device rollout with zero-touch deployment using Apple Business Manager and Jamf Now.",
                img: "https://cdn.jamf.com/images/solutions/jamf-now-deployment.png",
              },
              {
                title: "Security & Compliance",
                desc: "Protect company data and enforce compliance with Jamf’s advanced security frameworks for Apple devices.",
                img: "https://cdn.jamf.com/images/solutions/jamf-now-security.png",
              },
              {
                title: "Ongoing Support & Optimization",
                desc: "Get continuous support and performance insights to keep your Apple ecosystem efficient and secure.",
                img: "https://cdn.jamf.com/images/solutions/jamf-now-dashboard.png",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-40 object-contain mb-5 rounded-xl"
                />
                <h4 className="text-xl font-semibold text-[var(--jamf-navy)] mb-3">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[var(--jamf-navy)] text-white font-semibold rounded-xl shadow hover:bg-[#162141] transition"
            >
              Explore Jamf Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
