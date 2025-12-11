"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [counts, setCounts] = useState({
    industry: 0,
    recruiters: 0,
    alumni: 0,
    ceo: 0,
  });

  const { ref: counterRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Counter Animation
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const step = 20;

      const target = {
        industry: 500,
        recruiters: 300,
        alumni: 100000,
        ceo: 300,
      };

      let start = 0;
      const interval = setInterval(() => {
        start += step;
        setCounts({
          industry: Math.min(Math.floor((start / duration) * target.industry), target.industry),
          recruiters: Math.min(Math.floor((start / duration) * target.recruiters), target.recruiters),
          alumni: Math.min(Math.floor((start / duration) * target.alumni), target.alumni),
          ceo: Math.min(Math.floor((start / duration) * target.ceo), target.ceo),
        });
        if (start >= duration) clearInterval(interval);
      }, step);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="about" className="relative overflow-hidden bg-transparent">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-0 w-1/4 hidden lg:block bg-[repeating-linear-gradient(135deg,#e5e5e5_0px,#e5e5e5_2px,transparent_2px,transparent_150px)] opacity-40"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 hidden lg:block bg-[repeating-linear-gradient(225deg,#e5e5e5_0px,#e5e5e5_2px,transparent_2px,transparent_150px)] opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 py-12 grid gap-10 md:gap-16 md:grid-cols-2 items-start">

        {/* Mobile + Tablet Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:hidden w-full text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold   font-serif text-gray-900">
            <span className="text-gray-500">About </span>
            <span className="text-maroon">SONA GROUP</span>
          </h2>
        </motion.div>

        {/* Left Column - Image + Badge */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[280px] sm:h-[380px] md:h-full flex flex-col justify-center"
        >
          <div className="relative w-full h-full overflow-hidden">
            <motion.div
              whileHover={{
                scale: 1.02,
                rotate: [-0.5, 0.5, 0],
                transition: { duration: 0.6 },
              }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/about/100-photo.webp"
                alt="Sona SSBM Campus"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </motion.div>
          </div>

          {/* NAAC Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: true }}
            className="absolute bottom-6 sm:bottom-20 left-6 w-[clamp(5rem,8vw,10rem)] h-[clamp(5rem,8vw,10rem)] 
             flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#A0E7E5] via-[#B4F8C8] to-[#FBE7C6]
             text-[#FFD700] font-semibold shadow-2xl border-[3px] sm:border-4 border-maroon 
             p-2 sm:p-3"
          >
            {/* Image scaled to a fraction of the badge size */}
            <img
              src="/images/about/100+-year.png"
              alt="NAAC Accredited"
              className="w-1/2 h-1/2 sm:w-1/2 sm:h-1/2 mb-1 object-contain"
            />

            {/* Text scales with the badge */}
            <div className="text-[clamp(0.5rem,1.5vw,1rem)] text-center leading-tight text-maroon-800">
              INDUSTRY & <br /> ACADEMY
            </div>
          </motion.div>


        </motion.div>

        {/* Right Column - Text + Counters */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-full space-y-6 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl bg-white/60 backdrop-blur-lg flex flex-col justify-between"
        >
          {/* Mobile Heading */}
          <div className="hidden md:flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left space-y-2 md:space-y-0">
            {/* Heading */}
            <div className="inline-block relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900   font-serif relative z-10">
                <span className="text-gray-500 block md:inline">About </span>
                <span className="text-maroon block md:inline">SONA GROUP</span>
              </h2>

              {/* LEFT → CENTER */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute left-0 -bottom-1 h-[3px] w-[51%] bg-maroon origin-left rounded-full"
              />

              {/* RIGHT → CENTER */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                viewport={{ once: true }}
                className="absolute right-0 -bottom-1 h-[3px] w-[51%] bg-maroon origin-right rounded-full"
              />
            </div>
          </div>

          {/* Text */}
          <p data-aos="fade-up"
            className="text-gray-700 leading-relaxed text-[14px] text-justify"
          >
            The Sona Group is steeped in more than 100 years of success and tradition tracing back to pre-Independence.
            The group was founded by the doyen of textile industries of the early twentieth century,
            Karumuttu Thiagarajar Chettiar.
            <br /><br />
            The selfless vision, the noble principles, the mettle, the singleness of purpose,
            and the untiring industriousness of Karumuttu Thiagarajar Chettiar have been the
            solid foundational blocks upon which the towering success of the Sona Group has been built.
            <br /><br />
            The Sona Group has since been toeing the same line of ideology and has emerged as a
            valuable global conglomerate of national importance.
          </p>

          {/* Counters */}
          <motion.div
            ref={counterRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 text-center"
          >
            {[
              { value: counts.industry, label: "Industry Connect" },
              { value: counts.recruiters, label: "Recruiters" },
              { value: counts.alumni, label: "Managerial Exp. Alumnus" },
              { value: counts.ceo, label: "CEO's Talks" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-maroon">{item.value}+</h3>
                <p className="text-gray-600 text-[14px]">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Know More Button */}
          <Link
            href={{ pathname: "/about/aboutus" }}
          >

            <button
              className="flex items-center gap-2 border border-maroon-700  text-[15px]  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[radial-gradient(circle_at_top_left,#f5e9e2_0%,#e2c7b7_40%,#b88b6b_80%,#65230b_100%)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
            >
              Know More
              <svg
                className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </Link>

        </motion.div>
      </div>
    </section>
  );
}
