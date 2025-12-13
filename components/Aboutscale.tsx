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
        industry: 100,
        recruiters: 250,
        alumni: 2500,
        ceo: 300,
      };

      let start = 0;
      const interval = setInterval(() => {
        start += step;
        setCounts({
          industry: Math.min(
            Math.floor((start / duration) * target.industry),
            target.industry
          ),
          recruiters: Math.min(
            Math.floor((start / duration) * target.recruiters),
            target.recruiters
          ),
          alumni: Math.min(
            Math.floor((start / duration) * target.alumni),
            target.alumni
          ),
          ceo: Math.min(
            Math.floor((start / duration) * target.ceo),
            target.ceo
          ),
        });
        if (start >= duration) clearInterval(interval);
      }, step);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* White → Chocolate Smooth Fade */}
      {/* <div
        className="absolute inset-0 bg-gradient-to-b 
      from-white 
      via-[#f5f0eb] 
      to-[#c7a289] 
      opacity-90 pointer-events-none"
      ></div> */}

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 py-14">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 relative z-10   font-serif">
                <span className="text-gray-500">About </span>
                <span className="text-maroon">SSBM</span>
              </h2>

              <motion.div
                className="w-16 h-1 bg-maroon rounded-full mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="space-y-6 text-gray-700 text-[14px] text-justify leading-relaxed">
              <p>
                Welcome to Sona School of Business & Management (SSBM), a bold
                new leap in business education where technology, industry
                wisdom, and entrepreneurial spirit merge to create leaders who
                aren’t just ready for the future—they are built to define it.
              </p>
              <p>
                Located in the heart of Bangalore’s Bidadi industrial hub, SSBM
                offers unparalleled access to industry interactions,
                state-of-the-art infrastructure, and cutting-edge digital
                learning tools. With a GCC-driven curriculum and focus on
                emerging technologies, our Post Graduate Diploma in Management
                is designed to make you not just job-ready, but future-ready.
              </p>
            </div>

            <Link
              href="/scale/why-ssbm"
              className="inline-block mt-6  font-medium  transition text-sm sm:text-base text-center"
            >
              <button className="flex items-center gap-2 border border-maroon-700  text-[15px]  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[radial-gradient(circle_at_top_left,#f5e9e2_0%,#e2c7b7_40%,#b88b6b_80%,#65230b_100%)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group">
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

          {/* RIGHT — Image Slide In */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-t-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/scale-bg.png"
                alt="SCALE Campus"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0  right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <p className="text-xl font-semibold mb-2">
                  Future-Ready Leaders
                </p>
                <p className="text-gray-200">
                  GCC-driven curriculum with focus on emerging technologies
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6  border border-maroon-300 bg-white p-6 rounded-t-xl shadow-xl max-w-[280px]"
            >
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-maroon ">
                  Industry-Integrated Learning
                </span>{" "}
                <span className="italic">
                  in Bangalore's premier industrial ecosystem
                </span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
