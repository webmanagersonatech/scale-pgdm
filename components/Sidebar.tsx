"use client";

import { useState, useEffect } from "react";
import Modal from "./Modal";
import AdmissionForm from "./AdmissionForm";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaClipboardCheck,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingSidebar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const items = [
    {
      id: "apply",
      icon: FaClipboardCheck,
      label: "Apply Online",
      href: "https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589",
    },
    {
      id: "phone",
      icon: FaPhone,
      label: "+91 8022283008",
      href: "tel:+8022283008",
    },
    {
      id: "email",
      icon: FaEnvelope,
      label: "contact@scaleindia.in",
      href: "mailto:contact@scaleindia.in",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/8022283008",
    },
  ];

  // SSR-safe mounting and mobile detection
  useEffect(() => {
    setMounted(true);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null; // prevent SSR errors

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }} // faster
          className="fixed top-1/3 right-0 z-50 flex flex-col"
        >
          <div className="relative flex flex-col bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B] rounded-l-xl p-2 max-h-[80vh] overflow-visible">
            {/* Close Button */}
            <button
              onClick={() => setVisible(false)}
              className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center
                         rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-maroon border border-maroon shadow-lg hover:bg-white transition z-20"
              aria-label="Close Sidebar"
            >
              <FaTimes className="text-lg sm:text-base" />
            </button>

            {/* Vertical Banner */}
            <div className="text-white font-bold px-2 py-3 rotate-180 mt-10">
              <span className="[writing-mode:vertical-rl] tracking-widest text-xs sm:text-sm md:text-base">
                ADMISSIONS OPEN 2026-27
              </span>
            </div>

            {/* Sidebar Items */}
            {items.map(({ id, icon: Icon, label, href }) => (
              <div
                key={id}
                className="relative flex items-end mt-3"
                onMouseEnter={() => !isMobile && setHovered(id)}
                onMouseLeave={() => !isMobile && setHovered(null)}
              >
                {/* Tooltip */}
                <AnimatePresence>
                  {(hovered === id || active === id) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }} // faster tooltip
                      className="absolute right-12 bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B] text-white px-3 py-2 rounded-l-lg shadow 
                                 text-xs sm:text-sm font-medium whitespace-nowrap"
                    >
                      {label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Icon Button */}
                <button
                  aria-label={label}
                  className="text-white p-2 sm:p-2.5 md:p-3 rounded-full 
             hover:bg-white/60 hover:text-maroon-800 transition"
                  onClick={() => {
                    if (id === "apply") {
                      // 👉 OPEN MODAL instead of redirecting
                      setIsModalOpen(true);
                      return;
                    }

                    // Normal redirect for others
                    if (id === "phone" || id === "email" || id === "whatsapp") {
                      window.open(href, "_blank");
                      return;
                    }

                    if (isMobile) {
                      setActive(active === id ? null : id);
                    }
                  }}
                >
                  <Icon className="text-base md:text-lg lg:text-xl" />
                </button>

              </div>
            ))}
          </div>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Admission</h2>
            <AdmissionForm />
          </Modal>

        </motion.div>

      )}
    </AnimatePresence>
  );
}
