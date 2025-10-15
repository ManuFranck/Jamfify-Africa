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

      {/* HERO VIDEO SECTION */}
      <section id="top" className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden flex items-center justify-center text-center text-white">
        {/* Background video */}
        <div className="absolute inset-0 -z-10">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/nRZDWm2UMic?autoplay=1&mute=1&loop=1&playlist=nRZDWm2UMic&controls=0&modestbranding=1&showinfo=0"
            title="Jamf Now Overview"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Empowering Africa with Jamf Now Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Certified Jamf Partner delivering onboarding and managed services for Apple devices — built for businesses across Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-[var(--jamf-navy)] font-medium rounded-lg shadow hover:bg-gray-100 transition"
            >
              Get Started
            </a>
            <a
              href="https://signup.jamfnow.com?a=51f49dc4-a6ca-4355-938e-3d6eef50bf57"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-[var(--jamf-navy)] transition"
            >
              Sign up with Jamf Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[var(--jamf-navy)]">Our Jamf Now Services</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            From launch to maintenance, we support your Jamf Now journey end-to-end.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-8 bg-[var(--jamf-bg)] rounded-2xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)]">Onboarding Services</h4>
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
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)]">Managed Services</h4>
              <p className="mt-3 text-gray-600">Ongoing operations, security, updates, optimization.</p>
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
      <section id="solutions" className="py-20 bg-[var(--jamf-bg)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-[var(--jamf-navy)]">
            Apple Management Solutions from a Certified Jamf Now Partner
          </h3>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-10">
            As a Certified Jamf Now Partner, <strong>Jamfify Africa</strong> empowers organizations across Africa
            to seamlessly deploy, manage, and secure Apple devices — ensuring productivity, compliance, and
            a premium user experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)] mb-3">Deployment & Configuration</h4>
              <p className="text-gray-600 text-sm">
                Streamline Apple device rollout with zero-touch deployment using Apple Business Manager
                and Jamf Now. Configure Wi-Fi, VPN, and security settings in minutes.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)] mb-3">Security & Compliance</h4>
              <p className="text-gray-600 text-sm">
                Protect company data and enforce device compliance. Our managed service ensures your Jamf
                Now environment meets best-practice standards for Apple device security.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)] mb-3">Ongoing Support & Optimization</h4>
              <p className="text-gray-600 text-sm">
                Receive continuous support, updates, and policy reviews from Jamf experts. We help your
                Apple ecosystem evolve with your organization’s needs.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="https://signup.jamfnow.com?a=51f49dc4-a6ca-4355-938e-3d6eef50bf57"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[var(--jamf-navy)] text-white font-medium rounded-lg shadow hover:bg-[#162141]"
            >
              Get Started with Jamf Now
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-[var(--jamf-navy)]">Pricing Plans</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--jamf-bg)] p-8 rounded-2xl shadow">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)]">Onboarding Package</h4>
              <p className="mt-3 text-gray-600">Full setup and configuration services.</p>
              <div className="mt-4 text-2xl font-bold">From €1,000 (one-time)</div>
            </div>

            <div className="bg-[var(--jamf-bg)] p-8 rounded-2xl shadow">
              <h4 className="text-xl font-semibold text-[var(--jamf-navy)]">Managed Services Plan</h4>
              <p className="mt-3 text-gray-600">Monthly plan for ongoing support.</p>
              <div className="mt-4 text-2xl font-bold">From €250 / month</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-[var(--jamf-bg)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-[var(--jamf-navy)] mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-8">
            Ready to get started with Jamf? Reach out or sign up directly.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="grid gap-4 text-left"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="p-3 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="p-3 border rounded-md"
            />
            <textarea
              name="message"
              placeholder="How can we help you?"
              required
              className="p-3 border rounded-md h-32"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-[var(--jamf-navy)] text-white rounded-lg font-medium hover:bg-[#162141] disabled:opacity-60"
              disabled={status.state === "loading"}
            >
              {status.state === "loading" ? "Sending…" : "Send Message"}
            </button>

            {status.state !== "idle" && (
              <p
                className={`text-sm mt-2 ${
                  status.state === "success"
                    ? "text-green-600"
                    : status.state === "error"
                    ? "text-red-600"
                    : "text-gray-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--jamf-navy)] text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Jamfify Africa Logo" className="w-10 h-10" />
              <span className="font-semibold text-white text-lg">Jamfify Africa</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Certified Jamf Now Partner helping African businesses deploy, manage, and secure Apple devices efficiently.
            </p>
          </div>

          {/* Center */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                📧 <a href="mailto:info@jamfifyafrica.com" className="hover:text-white underline">info@jamfifyafrica.com</a>
              </li>
              <li>
                📞 <a href="tel:+48517100019" className="hover:text-white underline">+48 517 100 019</a>
              </li>
              <li className="flex items-center gap-2">
                👍{" "}
                <a
                  href="https://m.facebook.com/61582317331699/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white hover:text-blue-400"
                  >
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.08v-2.89h2.36V9.84c0-2.33 1.4-3.62 3.53-3.62 1.02 0 2.08.18 2.08.18v2.29h-1.17c-1.15 0-1.5.72-1.5 1.45v1.75h2.56l-.41 2.89h-2.15v6.99C18.34 21.19 22 17.06 22 12.07z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2 text-sm text-gray-400 md:items-end">
            <p>© {new Date().getFullYear()} Jamfify Africa — Certified Jamf Now Partner</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
