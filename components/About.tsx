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
            className="text-gray-700 leading-relaxed text-[15px] text-justify"
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
                <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Know More Button */}
          <Link
            href={{ pathname: "/about/aboutus" }}
            className="inline-block mt-6 px-6 py-3 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-maroon font-medium rounded-xl shadow-lg hover:from-gray-300 hover:to-gray-500 transition-colors transition text-sm sm:text-base text-center"
          >
            Know More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
