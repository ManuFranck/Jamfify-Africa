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
            <a href="#contact" className="px-5 py-2 rounded-lg bg-[#0A2540] text-white shadow hover:bg-[#162141]">
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
      <section id="top" className="bg-gradient-to-br from-[#0A2540] to-[#0055A4] text-white py-20">
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

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-[#0A2540]">Our Jamf Now Services</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            From setup to continuous management — Jamfify Africa delivers end-to-end Apple device lifecycle services.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Jamf Now Onboarding",
                desc: "We handle the complete Jamf Now setup — from Apple Business Manager integration to first device enrollment.",
                icon: "https://cdn-icons-png.flaticon.com/512/893/893292.png",
              },
              {
                title: "Managed Apple Services",
                desc: "Ongoing monitoring, updates, and troubleshooting for your Apple fleet with certified experts.",
                icon: "https://cdn-icons-png.flaticon.com/512/2991/2991108.png",
              },
              {
                title: "Security & Compliance",
                desc: "We configure and enforce encryption, password policies, and compliance checks across devices.",
                icon: "https://cdn-icons-png.flaticon.com/512/942/942799.png",
              },
              {
                title: "Apple Ecosystem Integration",
                desc: "Seamlessly connect Apple Business Manager, iCloud, and Jamf for full operational efficiency.",
                icon: "https://cdn-icons-png.flaticon.com/512/3094/3094846.png",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[#F5F7FA] rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
                <h4 className="text-lg font-semibold text-[#0A2540] mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
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

      {/* PRICING + CONTACT + FOOTER sections remain same from the last version */}
      {/* ... */}
    </div>
  );
}
