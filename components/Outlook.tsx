"use client";

import { motion, Variants } from "framer-motion"; // <-- add Variants here
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faChartBar,
  faGlobe,
  faLightbulb,
  faBriefcase,
  faChartLine,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { Award, Briefcase, Building2, ShieldCheck } from "lucide-react";

export default function OutlookPage() {
  const features = [
    {
      title: "100% Tech-Integrated Business Curriculum",
      description: "From Day 1, students master the tools that power modern business—analytics, AI, automation, digital strategy, and cloud ecosystems.",
      icon: faTrophy,
      image: "/images/outlook/Top-Ranked.webp"
    },
    {
      title: "Built on a 100-Year Legacy of Excellence",
      description: "The Sona Group’s impact in technology, manufacturing, education, and innovation forms a solid foundation for SCALE’s cutting-edge business education model.",
      icon: faChartBar,
      image: "/images/outlook/Industry-Focused.webp"
    },
    {
      title: "A Launchpad for Global Careers",
      description: "With global partnerships and internationally benchmarked curriculum, SCALE prepares students to pursue leadership roles worldwide.",
      icon: faGlobe,
      image: "/images/outlook/Global.webp"
    },
    {
      title: "A Campus That Breathes Innovation",
      description: "The fully residential program nurtures a thriving environment of collaboration, creativity, and high-energy learning.",
      icon: faLightbulb,
      image: "/images/outlook/Cutting-Edge.webp"
    },
  ];

  const pgdmPrograms = [
    {
      title: "Industry Immersion",
      icon: faBriefcase,
      description:
        "Internships, live projects, and industry exposure for real-world learning.",
    },
    {
      title: "Leadership & Strategy",
      icon: faChartLine,
      description:
        "Build decision-making, analytical, and strategic leadership skills.",
    },
    {
      title: "Professional Development",
      icon: faUserGraduate,
      description:
        "Enhance communication, soft skills, and career readiness.",
    },
  ];



  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier equivalent of "easeOut"
      },
    },
  };


  return (
    <section className="relative min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-10 flex flex-col items-center overflow-hidden bg-gradient-to-b from-gray-100 to-white">
      {/* Background Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-indigo-100 opacity-30 blur-2xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-blue-100 opacity-30 blur-2xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      {/* Header */}
      <motion.div
        className="relative w-full max-w-6xl mb-10 sm:mb-14 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          variants={fadeUp}
          className="text-2xl sm:text-3xl   font-serif font-bold text-maroon"
        >
          WHY SSBM ?
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-3 sm:mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Industry leaders shape the{" "}
          <span className="font-semibold text-maroon">curriculum, mentor students, deliver courses, and co-create real business challenges</span> by{" "}
          <span >Learning here is practical, relevant, and future-proof.</span>
        </motion.p>

      </motion.div>



      {/* Features + JEF */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-44 sm:h-48 relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out hover:scale-110"
                />
              </div>
              {/* Text */}
              <div className="p-5 flex flex-col items-center text-center">
                <FontAwesomeIcon icon={feature.icon} className="text-2xl sm:text-3xl text-maroon mb-2" />
                <h3 className="text-lg  font-semibold text-maroon mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-[15px] text-justify">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* JEF Programs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative"
        >
          <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col">
            {/* Header */}
            <div className="p-6 sm:p-8 text-white 
                bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B]
                rounded-t-xl shadow-md">
              <h2 className="text-2xl font-bold mb-3">
                PGDM
              </h2>

              <p className="mb-4 sm:mb-6 opacity-90 text-[15px] leading-relaxed">
                Our PGDM program builds essential managerial and analytical skills through
                industry-focused learning and practical exposure, preparing you for strong
                leadership roles.
              </p>



            </div>

            {/* Programs */}
            <div className="p-6 sm:p-8 flex-1">
              {pgdmPrograms.map((program, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.2 }}
                  className="mb-5 last:mb-0 flex flex-col sm:flex-row items-start sm:items-center"
                >
                  <FontAwesomeIcon
                    icon={program.icon}
                    className="text-xl sm:text-2xl md:text-3xl text-maroon mr-3 mb-2 sm:mb-0"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg  font-semibold text-gray-800">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-[15px]">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* One Line Summary */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="px-6 sm:px-8 py-2 border-t border-gray-200 bg-white/70"
            >
              <p className="text-[15px] text-justify text-gray-700 leading-relaxed">

                Students should join <span className="font-semibold text-maroon">SCALE – Sona School of Business & Management</span>{" "}
                because it is the only place where business education meets technology, innovation, and global
                industry relevance—creating leaders who are built for the future.
              </p>
            </motion.div>


            {/* Extra */}
            <div className="px-6 sm:px-8  border border-gray-100 ">
              <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                <span className="font-semibold text-maroon">PGDM</span> gives you the skills and mindset to excel in modern business roles.
              </p>

            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
}
