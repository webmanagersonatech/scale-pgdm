"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import AdmissionForm from "./AdmissionForm";
import Link from "next/link";
// Safe cubic bezier easing
const cubicEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

// Content items to loop
const heroContents = [
  {
    title:
      "India’s New-Age Techno Business School for the Next Generation of Global Leaders",
    desc: "By the Industry, for the Industry, to the Industry",
    btn: "Apply Now →",
    link: "https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589",
    blank: true,
  },
  {
    title: "The Two-Year Fully Residential PGDM Programme",
    desc: "The flagship PGDM is a fully residential, immersive journey ",
    btn: "Learn More",
    link: "/admission/eligibility/",
    blank: false,
  },
];
const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.6, ease: cubicEase },
  },
};

const letterVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: cubicEase },
  },
};

const descVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: cubicEase },
  },
};

const buttonVariant: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: cubicEase },
  },
};

export default function Hero() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Dynamic header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      const topHeader = document.querySelector("#top-header");
      const totalHeight =
        (header?.clientHeight || 0) + (topHeader?.clientHeight || 0);
      setHeaderHeight(totalHeight);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("scroll", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("scroll", updateHeaderHeight);
    };
  }, []);

  // Loop content animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // fade-out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroContents.length);
        setShow(true); // fade-in next
      }, 600);
    }, 9000); // each block visible for 4 sec

    return () => clearTimeout(timer);
  }, [index]);
  // Splits text into characters safely typed
  const splitWords = (text: string) => {
    return text.split(" "); // split by whole words
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/hero/download-1.webm"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              key={index}
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              {/* LETTER ANIMATION TITLE */}
              <motion.h1
                className="text-white text-3xl sm:text-5xl font-bold leading-tight flex flex-wrap "
                style={{ wordBreak: "keep-all" }}
              >
                {splitWords(heroContents[index].title).map(
                  (word: string, i: number) => (
                    <motion.span
                      key={i}
                      variants={letterVariant}
                      className="mr-2 inline-block"
                    >
                      {word}
                    </motion.span>
                  )
                )}
              </motion.h1>

              {/* DESCRIPTION */}
              <motion.p
                variants={descVariant}
                className="mt-4 text-gray-200 text-lg sm:text-xl max-w-xl"
              >
                {heroContents[index].desc}
              </motion.p>

              {/* BUTTON */}
              {heroContents[index].blank ? (
                // Apply Now →  (opens in new tab)
                <motion.div
                  variants={buttonVariant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center border border-white mt-6 px-6 py-3 overflow-hidden rounded group cursor-pointer"
                  onClick={() => setIsModalOpen(true)} // OPEN MODAL ON CLICK
                >
                  <span
                    className="w-48 h-48 rounded-xl rotate-[-40deg] 
          bg-white/40 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.6)]
          absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9
          transition-all duration-500 ease-out
          group-hover:translate-x-0 group-hover:-translate-y-10 group-hover:ml-0"
                  />
                  <span className="relative text-white">
                    {heroContents[index].btn}
                  </span>
                </motion.div>
              ) : (
                // Learn More (specialization) — NO BLANK
                <Link href={heroContents[index].link as any} passHref>
                  <motion.a
                    variants={buttonVariant}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center border border-white mt-6 px-6 py-3 overflow-hidden rounded group"
                  >
                    <span
                      className="w-48 h-48 rounded-xl rotate-[-40deg] 
        bg-white/40 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.6)]
        absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9
        transition-all duration-500 ease-out
        group-hover:translate-x-0 group-hover:-translate-y-10 group-hover:ml-0"
                    />
                    <span className="relative text-white">
                      {heroContents[index].btn}
                    </span>
                  </motion.a>
                </Link>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Admission</h2>
          <AdmissionForm />
        </Modal>
      </div>
    </section>
  );
}
