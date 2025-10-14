import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const logoUrl = "/logo.png"; // hosted by Netlify once deployed
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus({ state: "success", message: "Thanks! Your message has been sent." });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  return (
    <div className="min-h-screen bg-[var(--jamf-bg)] text-[var(--jamf-text)] antialiased scroll-smooth">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center gap-3">
              <img src={logoUrl} alt="Jamfify Africa Logo" className="w-12 h-12" />
              <div>
                <h1 className="text-xl font-semibold text-[var(--jamf-navy)]">Jamfify Africa</h1>
                <p className="text-sm text-gray-500">Certified Jamf Now Partner</p>
              </div>
            </a>
          </div>
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
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="bg-gradient-to-br from-[var(--jamf-navy)] to-[var(--jamf-blue)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Empowering Africa with Jamf Now Expertise
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Onboarding and Managed Services to deploy, secure, and manage Apple devices with confidence.
            </p>
            <div className="mt-8 flex gap-4">
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
          </motion.div>
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

          {/* Netlify form (no backend needed) */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="grid gap-4 text-left"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Your name" required className="p-3 border rounded-md" />
            <input type="email" name="email" placeholder="Your email" required className="p-3 border rounded-md" />
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
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoUrl} alt="Jamfify Africa Logo" className="w-10 h-10" />
            <span className="font-semibold text-white">Jamfify Africa</span>
          </a>
          <p className="text-sm">
            © {new Date().getFullYear()} Jamfify Africa — Certified Jamf Now Partner
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
