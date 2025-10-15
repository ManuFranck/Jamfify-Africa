import React, { useState } from "react";
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
      setStatus({ state: "success", message: "Thanks! Your message has been sent." });
      form.reset();
    } catch (error) {
      setStatus({ state: "error", message: "Form submission failed." });
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-[var(--jamf-bg)] text-[var(--jamf-text)] antialiased scroll-smooth">

      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logoUrl} alt="Jamfify Africa Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-semibold text-[var(--jamf-navy)]">Jamfify Africa</h1>
              <p className="text-sm text-gray-500">Certified Jamf Now Partner</p>
            </div>
          </a>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--jamf-navy)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col text-center py-4 space-y-3">
              {["services", "solutions", "pricing", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMenu}
                  className="py-2 hover:text-[var(--jamf-blue)]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="top"
        className="bg-gradient-to-br from-[var(--jamf-navy)] to-[var(--jamf-blue)] text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
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
            <div className="mt-8 flex flex-wrap gap-4">
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

          {/* RIGHT - VIDEO */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-sm aspect-video rounded-xl overflow-hidden shadow-lg border border-white/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nRZDWm2UMic?autoplay=1&mute=1&loop=1&playlist=nRZDWm2UMic&controls=0&modestbranding=1&showinfo=0"
                title="Jamf Now Overview"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section id="solutions" className="py-20 bg-[var(--jamf-bg)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl font-bold mb-6 text-[var(--jamf-navy)]">
            Apple Management Solutions from a Professional and Certified Jamf Now Affiliate
          </h3>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-12">
            Jamfify Africa brings Jamf’s trusted device management capabilities to Africa — automating Apple deployment, 
            security, and user empowerment with modern cloud simplicity.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: "Zero-Touch Deployment", desc: "Automate Apple device setup with preconfigured policies.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-deployment.svg" },
              { title: "Centralized Dashboard", desc: "Unified view of all devices, compliance, and health metrics.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-management.svg" },
              { title: "Remote Security Enforcement", desc: "Lock, wipe or enforce policies remotely to protect your data.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-security.svg" },
              { title: "App Distribution & Updates", desc: "Deploy and update apps centrally, keeping your fleet current.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-apps.svg" },
              { title: "User Self Service", desc: "Users install approved apps and updates without IT help.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-selfservice.svg" },
              { title: "Apple Business Manager Integration", desc: "Seamless sync with Apple Business Manager for auto-assignment.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-abm.svg" },
              { title: "Compliance Monitoring", desc: "Track device status, configuration drift, and alerts.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-compliance.svg" },
              { title: "Cloud-Based Simplicity", desc: "Jamf Now runs securely in the cloud — no servers needed.", iconUrl: "https://www.jamf.com/assets/img/icons/icon-cloud.svg" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(10,37,64,0.15)] transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
              >
                <img src={item.iconUrl} alt={item.title} className="w-12 h-12 mb-4" />
                <h4 className="text-xl font-semibold text-[var(--jamf-navy)] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8 text-[var(--jamf-navy)]">Pricing Plans</h3>
          <p className="mb-12 text-gray-600">
            Choose a plan that fits your organization’s size, needs, and growth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "€9 /device/month",
                features: ["Zero-touch deployment", "Basic remote commands", "Email support"],
              },
              {
                name: "Professional",
                price: "€19 /device/month",
                features: ["All Starter features", "Compliance policies", "App distribution", "Priority support"],
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom pricing",
                features: ["All Pro features", "Custom integrations", "Dedicated account manager"],
              },
            ].map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl shadow-md ${
                  plan.highlight
                    ? "bg-gradient-to-br from-[var(--jamf-blue)] to-[var(--jamf-navy)] text-white"
                    : "bg-[var(--jamf-bg)]"
                }`}
              >
                <h4 className="text-2xl font-semibold mb-4">{plan.name}</h4>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-2 text-left">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3">✔️</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-block px-6 py-3 rounded-lg font-medium ${
                    plan.highlight
                      ? "bg-white text-[var(--jamf-navy)] hover:bg-gray-100"
                      : "bg-[var(--jamf-navy)] text-white hover:bg-[#162141]"
                  }`}
                >
                  Select Plan
                </a>
              </motion.div>
            ))}
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

            <input type="text" name="name" placeholder="Your name" required className="p-3 border rounded-md" />
            <input type="email" name="email" placeholder="Your email" required className="p-3 border rounded-md" />
            <textarea name="message" placeholder="How can we help you?" required className="p-3 border rounded-md h-32" />

            <button
              type="submit"
              className="px-6 py-3 bg-[var(--jamf-navy)] text-white rounded-lg font-medium hover:bg-[#162141]"
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
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Jamfify Africa Logo" className="w-10 h-10" />
              <span className="font-semibold text-white text-lg">Jamfify Africa</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Certified Jamf Now Partner helping African businesses deploy, manage, and secure Apple devices efficiently.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                📧 <a href="mailto:info@jamfifyafrica.com" className="hover:text-white underline">info@jamfifyafrica.com</a>
              </li>
              <li>
                📞 <a href="tel:+48517100019" className="hover:text-white underline">+48 517 100 019</a>
              </li>
            </ul>
          </div>

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
