import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function App() {
  const logoUrl = "/logo.png";
  const affiliateLink = "https://signup.jamfnow.com?a=51f49dc4-a6ca-4355-938e-3d6eef50bf57";
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await fetch("/", { method: "POST", body: formData });
      setStatus({ state: "success", message: "✅ Message sent successfully!" });
      form.reset();
    } catch (error) {
      setStatus({ state: "error", message: "❌ Something went wrong. Please try again." });
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-gray-900 antialiased scroll-smooth">
      
      {/* HEADER */}
      <header className="backdrop-blur-md bg-white/80 shadow-sm sticky top-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <img src={logoUrl} alt="Jamfify Africa Logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-semibold text-[#0A2540]">Jamfify Africa</h1>
              <p className="text-sm text-gray-500">Certified Jamf Now Partner</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#services" className="hover:text-[#0055A4]">Services</a>
            <a href="#solutions" className="hover:text-[#0055A4]">Solutions</a>
            <a href="#pricing" className="hover:text-[#0055A4]">Pricing</a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-[#0A2540] text-white shadow hover:bg-[#162141]"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-[#0A2540]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col text-center py-4 space-y-3">
              {["services", "solutions", "pricing", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={closeMenu}
                  className="py-2 hover:text-[#0055A4]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="bg-gradient-to-br from-[#0A2540] to-[#0055A4] text-white py-20"
      >
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
              Certified Jamf Now onboarding & managed services for Apple devices across Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-[#0A2540] font-medium rounded-lg shadow hover:bg-gray-100"
              >
                Get Started
              </a>
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-[#0A2540]"
              >
                Try Jamf Now
              </a>
            </div>
          </motion.div>

          {/* VIDEO */}
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

      {/* SOLUTIONS */}
      <section id="solutions" className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-[#0A2540]">
            Apple Management Solutions from a Professional and Certified Jamf Now Affiliate
          </h3>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
            Jamfify Africa empowers organizations to deploy, manage, and secure Apple devices effortlessly with Jamf Now’s trusted cloud platform.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { title: "Zero-Touch Deployment", desc: "Automate device setup straight out of the box.", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
              { title: "Centralized Dashboard", desc: "Manage all your Apple devices from one unified console.", icon: "https://cdn-icons-png.flaticon.com/512/1031/1031976.png" },
              { title: "Remote Security", desc: "Lock, wipe or enforce device policies remotely.", icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png" },
              { title: "App Management", desc: "Push, update, and remove apps seamlessly.", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png" },
              { title: "User Self-Service", desc: "Empower users to install approved apps independently.", icon: "https://cdn-icons-png.flaticon.com/512/921/921347.png" },
              { title: "Apple Business Manager", desc: "Automate assignments and deployment with ABM.", icon: "https://cdn-icons-png.flaticon.com/512/3094/3094846.png" },
              { title: "Compliance Reports", desc: "Stay compliant with live security and configuration reports.", icon: "https://cdn-icons-png.flaticon.com/512/2784/2784065.png" },
              { title: "Cloud Simplicity", desc: "All managed securely via Jamf’s cloud — no servers needed.", icon: "https://cdn-icons-png.flaticon.com/512/4144/4144871.png" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                <h4 className="text-lg font-semibold text-[#0A2540] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8 text-[#0A2540]">Pricing Plans</h3>
          <p className="mb-12 text-gray-600">
            Choose a plan that fits your Apple management needs.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BASIC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-md bg-[#F5F7FA]"
            >
              <h4 className="text-2xl font-semibold mb-3 text-[#0A2540]">Basic</h4>
              <p className="text-3xl font-bold mb-4">Free to Start</p>
              <p className="text-gray-600 mb-6">
                Ideal for small businesses or teams managing under 3 Apple devices.
              </p>
              <ul className="mb-8 text-left space-y-2">
                <li>✔️ Manage up to 3 devices</li>
                <li>✔️ Basic configuration & remote commands</li>
                <li>✔️ Secure Apple ID enrollment</li>
              </ul>
              <a
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#0A2540] text-white rounded-lg hover:bg-[#162141]"
              >
                Sign Up on Jamf Now
              </a>
            </motion.div>

            {/* PROFESSIONAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-md bg-gradient-to-br from-[#0055A4] to-[#0A2540] text-white"
            >
              <h4 className="text-2xl font-semibold mb-3">Professional</h4>
              <p className="text-3xl font-bold mb-4">Custom Pricing</p>
              <p className="text-gray-200 mb-6">
                Perfect for growing businesses managing multiple Apple devices.
              </p>
              <ul className="mb-8 text-left space-y-2">
                <li>✔️ Full Jamf Now integration</li>
                <li>✔️ Security & compliance monitoring</li>
                <li>✔️ App deployment & updates</li>
                <li>✔️ Priority support & optimization</li>
              </ul>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-white text-[#0A2540] rounded-lg hover:bg-gray-100"
              >
                Contact Us for a Quote
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-[#F5F7FA]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0055A4] to-[#0A2540] text-white text-center py-8 px-6">
              <h3 className="text-3xl font-bold mb-2">Let’s Talk Apple Management</h3>
              <p className="text-gray-200">
                Get tailored advice or a custom quote for your organization.
              </p>
            </div>

            <div className="p-8">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="grid gap-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 border rounded-md focus:ring-2 focus:ring-[#0055A4] outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 border rounded-md focus:ring-2 focus:ring-[#0055A4] outline-none"
                />
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  required
                  className="p-3 border rounded-md h-32 focus:ring-2 focus:ring-[#0055A4] outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0A2540] text-white rounded-lg font-medium hover:bg-[#162141]"
                >
                  {status.state === "loading" ? "Sending…" : "Send Message"}
                </button>
                {status.message && (
                  <p
                    className={`text-sm mt-2 ${
                      status.state === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A2540] text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Jamfify Africa Logo" className="w-10 h-10" />
              <span className="font-semibold text-white text-lg">Jamfify Africa</span>
            </div>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Certified Jamf Now Partner empowering African organizations to manage Apple devices efficiently.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <p className="text-sm">
              📧 <a href="mailto:info@jamfifyafrica.com" className="hover:text-white underline">info@jamfifyafrica.com</a><br />
              📞 <a href="tel:+48517100019" className="hover:text-white underline">+48 517 100 019</a>
            </p>
          </div>
          <div className="text-sm text-gray-400 md:text-right">
            <p>© {new Date().getFullYear()} Jamfify Africa — Certified Jamf Now Partner</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
