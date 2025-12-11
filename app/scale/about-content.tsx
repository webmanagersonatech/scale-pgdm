"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ICONS - Smaller sizes
import { FiInfo, FiEye, FiClock, FiUsers } from "react-icons/fi";
import {
  FaRocket,
  FaLaptopCode,
  FaStar,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaBuilding,
} from "react-icons/fa";

import {
  FaRobot,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaBullseye,
  FaCogs,
  FaCoins,
} from "react-icons/fa";
import {
  FaPlane,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaUsers,
} from "react-icons/fa";

import {
  FaClock,
  FaHandshake,
  FaUniversity,
  FaFlagCheckered,
} from "react-icons/fa";

import {
  FaMicrochip,
  FaIndustry,
  FaFlask,
  FaSync,
  FaMagic,
} from "react-icons/fa";

import { MdOutlineAutoFixHigh } from "react-icons/md";

// Custom CSS for colors
const customStyles = `
  .text-primary {
    color: #B98A5A !important;
  }
  
  .bg-primary {
    background-color: #B98A5A !important;
  }
  
  .border-primary {
    border-color: #B98A5A !important;
  }
  
  .hover\\:text-primary:hover {
    color: #B98A5A !important;
  }
  
  .text-primary-light {
    color: rgba(185, 138, 90, 0.1) !important;
  }
  
  .bg-primary-light {
    background-color: rgba(185, 138, 90, 0.1) !important;
  }
  
  .bg-primary-50 {
    background-color: rgba(185, 138, 90, 0.05) !important;
  }
  
  .text-primary-dark {
    color: #9a6f3c !important;
  }
  
  .bg-primary-dark {
    background-color: #9a6f3c !important;
  }
`;

type TabId =
  | "why-ssbm"
  | "industry-designed"
  | "tech-driven"
  | "global-exposure"
  | "startup-incubation"
  | "residential-learning"
  | "sona-legacy"
  | "future-proof-careers"
  | "leadership-development"
  | "future-ready-school";

interface Section {
  id: TabId;
  title: string;
  icon: any;
}

export default function ScalePage({ activeSlug }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<TabId>("why-ssbm");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // ALL TABS
  const sections: Section[] = [
    { id: "why-ssbm", title: "Why SSBM", icon: FiInfo },
    {
      id: "industry-designed",
      title: "Industry-Designed B-School",
      icon: FiEye,
    },
    {
      id: "tech-driven",
      title: "Tech-Driven Business School",
      icon: FaLaptopCode,
    },
    { id: "global-exposure", title: "Global Exposure", icon: FaGlobe },
    {
      id: "startup-incubation",
      title: "Startup Incubation Centre",
      icon: FaRocket,
    },
    {
      id: "residential-learning",
      title: "Residential Learning",
      icon: FiUsers,
    },
    { id: "sona-legacy", title: "Sona Legacy", icon: FaStar },
    {
      id: "future-proof-careers",
      title: "Future-Proof Careers",
      icon: FaChartLine,
    },
    {
      id: "leadership-development",
      title: "Leadership Development",
      icon: MdOutlineAutoFixHigh,
    },
    {
      id: "future-ready-school",
      title: "Future-Ready School",
      icon: FaLightbulb,
    },
  ];

  // URL SYNC
  useEffect(() => {
    if (activeSlug && sections.some((s) => s.id === activeSlug)) {
      setActiveTab(activeSlug);
    }
  }, [activeSlug]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && sections.some((s) => s.id === tab)) {
      setActiveTab(tab as TabId);
    }
  }, [searchParams]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    router.push(`/scale/${tabId}`);
  };

  // CURRENT SECTION TITLE
  const currentSection = sections.find((s) => s.id === activeTab);

  const tabImages: any = {
    "why-scale": "/images/banner/about-banners/about-us.webp",
    "industry-designed": "/images/banner/about-banners/about-us.webp",
    "tech-driven": "/images/banner/about-banners/about-us.webp",
    "global-exposure": "/images/banner/about-banners/about-us.webp",
    "startup-incubation": "/images/banner/about-banners/about-us.webp",
    "residential-learning": "/images/banner/about-banners/about-us.webp",
    "sona-legacy": "/images/banner/about-banners/about-us.webp",
    "future-proof-careers": "/images/banner/about-banners/about-us.webp",
    "leadership-development": "/images/banner/about-banners/about-us.webp",
    "future-ready-school": "/images/banner/about-banners/about-us.webp",
  };

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
      <style jsx global>
        {customStyles}
      </style>

      <section className="w-full min-h-screen bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289] py-12 flex flex-col items-center">
        {/* BANNER */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <img
              src="/images/banner/about-banners/11.webp"
              alt="Scale Banner"
              className="w-full h-auto max-h-96 object-contain"
            />
          </AnimatePresence>

          {/* TITLE */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
              {currentSection?.title}
            </h1>

            <div className="mt-3 sm:mt-4 w-full">
              <nav
                className="flex flex-wrap text-white text-xs sm:text-[14px]"
                aria-label="Breadcrumb"
              >
                <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                  {/* Home */}

                  <li className="inline-flex items-center">
                    <Link
                      href="/"
                      className=" cursor-pointer transition-colors text-white"
                    >
                      Home
                    </Link>
                    <span className="text-white mx-1">{">"}</span>
                  </li>

                  {/* About Scale*/}

                  <li className="inline-flex items-center">
                    <Link
                      href="/scale"
                      className="cursor-pointer transition-colors text-white"
                    >
                      About SSBM
                    </Link>
                    <span className="text-white mx-1">{">"}</span>
                  </li>

                  {/* Current Section */}
                  <li className="inline-flex items-center text-white font-semibold">
                    {currentSection?.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        {/* TABS */}

        <div className="w-full bg-gray-50 relative border-b border-gray-300 pt-6">
          <div
            ref={containerRef}
            className="relative flex flex-wrap justify-center gap-2 sm:gap-4 w-full max-w-7xl mx-auto px-2 sm:px-0"
          >
            {sections.map((sec, index) => {
              const Icon = sec.icon;
              const isActive = activeTab === sec.id;

              return (
                <button
                  key={sec.id}
                  ref={(el) => {
                    tabsRef.current[index] = el;
                  }}
                  onClick={() => handleTabChange(sec.id)}
                  className={`relative flex items-center gap-2 px-3 sm:px-4 py-1 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                    ? "text-maroon scale-105"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                >
                  <Icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                      }`}
                  />
                  <span className="relative flex flex-col items-center">
                    <span>{sec.title}</span>
                    <span
                      className={`block h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                        }`}
                    ></span>
                    {isActive && (
                      <span className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon -mt-px"></span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>




        {/* CONTENT */}
        <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 relative flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-6">
          <AnimatePresence mode="wait">
            {/* ---------------- WHY SCALE ---------------- */}
            {activeTab === "why-ssbm" && (
              <motion.div
                key="why-scale"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="p-6 md:p-8 space-y-6"
              >
                <div className="text-start mb-8">
                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-start">
                    Why Students Should Join Sona School of Business &
                    Management - SSBM
                  </h3>
                  <p className="text-[14px] text-primary-700">
                    India's First Truly Tech-Driven, Industry-Built Business
                    School
                  </p>
                  <p className="text-primary-600 mt-2 text-[14px]">
                    Sona Business School is not another B-school. It is a
                    new-age, high-impact leadership factory created for students
                    who want to lead the future—not catch up to it.
                  </p>
                </div>

                <div className=" border-primary">
                  <h3 className="text-[17px] font-bold text-primary-800 mb-4">
                    Here is what makes SCALE truly unique:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sections.slice(1).map((sec, index) => (
                      <button
                        key={sec.id}
                        onClick={() => handleTabChange(sec.id)}
                        className="flex items-center gap-3 p-4   shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]
 transition-shadow text-left text-[14px]"
                      >
                        <div className="bg-primary-light p-2 rounded-lg">
                          <sec.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary-800">
                            {sec.title}
                          </p>
                          <p className="text-xs md:text-sm text-primary-600 mt-1">
                            Click to learn more
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------- INDUSTRY DESIGNED ---------------- */}
            {activeTab === "industry-designed" && (
              <motion.div
                key="industry-designed"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">

                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    A Business School Built by the Industry, for the Industry,
                    to the Industry
                  </h3>
                </div>

                <p className="text-[14px] text-primary-700">
                  Most business schools teach industry. SCALE-SSBM is designed
                  by industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div >
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800 text-[14px]">
                          Curriculum co-created with CXOs, founders, and tech
                          leaders
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Learn from the people who shape industries
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <span className="font-semibold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800 text-[14px]">
                          Real-world case labs instead of textbook theory
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Solve actual business problems from day one
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800 text-[14px]">
                          Industry mentors are part of everyday learning
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Guidance from experienced professionals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <span className="font-bold text-primary">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800 text-[14px]">
                          Corporate-backed live projects every semester
                        </h4>
                        <p className="text-primary-600 text-xs md:text-sm mt-1">
                          Work on real projects with real companies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8  font-serif italic">
                  <div className="bg-primary-50  px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">

                    <p className="text-maroon text-[16px]  leading-relaxed">
                      “ Students learn exactly what companies want <br />
                      <span className="text-maroon">RIGHT NOW.”</span>
                    </p>

                  </div>
                </div>

              </motion.div>
            )}

            {/* ---------------- TECH DRIVEN ---------------- */}
            {activeTab === "tech-driven" && (
              <motion.div
                key="tech-driven"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">

                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    India's Only Tech-Infused Business School Model
                  </h3>
                </div>

                <p className="text-[14px] text-primary-700">
                  In tomorrow's leadership landscape, technology = power. SCALE
                  integrates:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* AI */}
                  <div className=" shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaRobot className="w-4 h-4" />
                      </span>
                      Artificial Intelligence
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      AI-powered business solutions and decision making
                    </p>
                  </div>

                  {/* Data Science */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaChartBar className="w-4 h-4" />
                      </span>
                      Data Science
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Data-driven insights and analytics
                    </p>
                  </div>

                  {/* Cloud & Cybersecurity */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary flex items-center gap-1">
                        <FaCloud className="w-4 h-4" />
                        <FaShieldAlt className="w-4 h-4" />
                      </span>
                      Cloud & Cybersecurity
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Secure cloud infrastructure and protection
                    </p>
                  </div>

                  {/* Digital Business Strategy */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBullseye className="w-4 h-4" />
                      </span>
                      Digital Business Strategy
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Digital transformation and online business models
                    </p>
                  </div>

                  {/* Automation Tools */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaCogs className="w-4 h-4" />
                      </span>
                      Automation Tools
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Process automation and efficiency tools
                    </p>
                  </div>

                  {/* FinTech */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaCoins className="w-4 h-4" />
                      </span>
                      FinTech & Industry 4.0
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Modern financial technology and smart manufacturing
                    </p>
                  </div>
                </div>


                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50  px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">

                    <p className="text-maroon text-[16px]  leading-relaxed">
                      “ Every graduate leaves SCALE-SSBM with dual strength: <br />
                      <span className="text-maroon">Business + Technology. ”</span>
                    </p>

                  </div>
                </div>

              </motion.div>
            )}

            {/* ---------------- GLOBAL EXPOSURE ---------------- */}
            {activeTab === "global-exposure" && (
              <motion.div
                key="global-exposure"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    Global Exposure From Day One
                  </h3>
                </div>

                <p className="text-[14px] text-primary-700">
                  Sona Business School is built on global academic and industry partnerships, offering:
                </p>

                {/* GRID SAME STYLE AS TECH-DRIVEN */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                  {/* International Faculty */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaGlobe className="w-4 h-4" />
                      </span>
                      International Faculty
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Learn from global experts and professors
                    </p>
                  </div>

                  {/* Global Immersion */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaPlane className="w-4 h-4" />
                      </span>
                      Global Immersion Programs
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Study abroad opportunities and exchanges
                    </p>
                  </div>

                  {/* Cross-border Business Labs */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBuilding className="w-4 h-4" />
                      </span>
                      Cross-Border Business Labs
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      International business simulations
                    </p>
                  </div>

                  {/* Foreign Universities & Innovation Hubs */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaGraduationCap className="w-4 h-4" />
                      </span>
                      Foreign Universities & Innovation Hubs
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Connect with global educational institutions
                    </p>
                  </div>

                  {/* Multinational Internships */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBriefcase className="w-4 h-4" />
                      </span>
                      Multinational Internship Pathways
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Intern with global companies
                    </p>
                  </div>
                </div>

                {/* Bottom Highlight Box (Same UI as Tech-Driven) */}
                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ Students graduate with a global mindset <br />
                      <span className="text-maroon">and worldwide opportunities. ”</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            )}


            {/* ---------------- STARTUP INCUBATION ---------------- */}
            {activeTab === "startup-incubation" && (
              <motion.div
                key="startup-incubation"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    A Startup Incubation Centre Inside the Campus
                  </h3>
                </div>

                <p className="text-primary-600 mt-2 text-[14px]">
                  SCALE doesn't just prepare students for jobs—it prepares them to create jobs.
                </p>

                {/* CARDS (Same UI as Tech-Driven) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                  {/* Dedicated Incubator */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBuilding className="w-4 h-4" />
                      </span>
                      A Dedicated Startup Incubator
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      State-of-the-art facilities for budding entrepreneurs
                    </p>
                  </div>

                  {/* Mentorship */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaUsers className="w-4 h-4" />
                      </span>
                      Mentorship from Entrepreneurs & Venture Capitalists
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Guidance from successful founders and investors
                    </p>
                  </div>

                  {/* Funding */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaCoins className="w-4 h-4" />
                      </span>
                      Startup Funding Opportunities
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Access to seed funding and investment networks
                    </p>
                  </div>

                  {/* Hackathons */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaLightbulb className="w-4 h-4" />
                      </span>
                      Innovation Hackathons
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Regular competitions to solve real-world problems
                    </p>
                  </div>

                  {/* Product Bootcamps */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg md:col-span-2">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaTools className="w-4 h-4" />
                      </span>
                      Product-Building Bootcamps
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Hands-on training to build and launch products
                    </p>
                  </div>

                </div>

                {/* Bottom Highlight Box (same as tech-driven) */}
                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ SCALE is the perfect choice for future founders, innovators, <br />
                      <span className="text-maroon">and problem-solvers. ”</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            )}

            {/* ---------------- RESIDENTIAL LEARNING ---------------- */}
            {activeTab === "residential-learning" && (
              <motion.div
                key="residential-learning"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-6"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    A Fully Residential, High-Performance Learning Environment
                  </h3>
                </div>

                <p className="text-primary-600 text-[14px]">
                  Two years at SCALE = A complete leadership immersion experience.
                </p>

                {/* CARDS MATCHING TECH-DRIVEN UI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                  {/* 24/7 Learning */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaClock className="w-4 h-4" />
                      </span>
                      24/7 Learning Culture
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Continuous learning and development
                    </p>
                  </div>

                  {/* Peer Collaboration */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaHandshake className="w-4 h-4" />
                      </span>
                      Peer Collaboration
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Learn from and with fellow students
                    </p>
                  </div>

                  {/* Leadership Labs */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaBullseye className="w-4 h-4" />
                      </span>
                      Leadership Labs
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Practical leadership training sessions
                    </p>
                  </div>

                  {/* Corporate-style Campus */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaUniversity className="w-4 h-4" />
                      </span>
                      Corporate-Style Campus Life
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Professional environment preparation
                    </p>
                  </div>

                  {/* Workshops & Events */}
                  <div className="shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] p-4 rounded-lg md:col-span-2">
                    <h4 className="font-bold text-primary-800 mb-3 flex items-center gap-2 text-[14px]">
                      <span className="bg-primary-light p-2 rounded text-primary">
                        <FaFlagCheckered className="w-4 h-4" />
                      </span>
                      Workshops, Clubs, Competitions & Simulations
                    </h4>
                    <p className="text-primary-600 text-xs md:text-sm">
                      Holistic development activities and experiential learning
                    </p>
                  </div>

                </div>

                {/* Bottom Highlight Box (same UI as all tabs) */}
                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ Students experience the real world of leadership—<br />
                      <span className="text-maroon">not just a classroom. ”</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            )}


            {/* ---------------- SONA LEGACY ---------------- */}
            {activeTab === "sona-legacy" && (
              <motion.div
                key="sona-legacy"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="p-6 md:p-8 space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">

                  <h3 className="text-[17px] font-semibold text-maroon  text-center">
                    Powered by Sona Group's 100-Year Legacy
                  </h3>
                </div>

                <p className="text-[14px] text-primary-700">
                  Backed by one of India's most respected names in:
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Technology */}
                  <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] text-center">
                    <FaMicrochip className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-[14px]">
                      Technology
                    </h4>
                  </div>

                  {/* Innovation */}
                  <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] text-center">
                    <FaLightbulb className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-[14px]">
                      Innovation
                    </h4>
                  </div>

                  {/* Manufacturing */}
                  <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] text-center">
                    <FaIndustry className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-[14px]">
                      Manufacturing
                    </h4>
                  </div>

                  {/* Education */}
                  <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] text-center">
                    <FaGraduationCap className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-[14px]">
                      Education
                    </h4>
                  </div>

                  {/* Research */}
                  <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] text-center">
                    <FaFlask className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-[14px]">
                      Research
                    </h4>
                  </div>

                  {/* Digital Transformation */}
                  <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] text-center">
                    <FaRocket className="text-3xl mb-2 text-primary mx-auto" />
                    <h4 className="font-bold text-primary-800 text-[14px]">
                      Digital Transformation
                    </h4>
                  </div>
                </div>


                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ SCALE stands on a century-old foundation of <br />
                      <span className="text-maroon">credibility,
                        quality, and trust.” </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------- FUTURE CAREERS ---------------- */}
            {activeTab === "future-proof-careers" && (
              <motion.div
                key="future-proof-careers"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" p-6 md:p-8 space-y-6"
              >
                {/* HEADER */}
                <div className="flex items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-[17px] font-semibold text-maroon mb-3 text-start">
                      Future-Proof Career Opportunities
                    </h3>
                    <p className="text-primary-600 mt-1 text-[14px] leading-relaxed">
                      Because of the tech-enabled curriculum + global exposure + incubation +
                      industry integration
                    </p>
                  </div>
                </div>

                {/* GRID LIST */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    "Consulting",
                    "Management",
                    "Technology roles",
                    "Business analysis",
                    "Digital transformation",
                    "Product roles",
                    "Finance",
                    "Marketing",
                    "HR",
                    "Entrepreneurship",
                  ].map((role, index) => (
                    <div
                      key={index}
                      className=" p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)] hover:bg-primary-light transition-colors "
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-maroon text-sm font-bold">✓</span>
                        <h4 className="font-semibold text-primary-800 text-[14px]">
                          {role}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>




                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ SSBM graduates are multi-skilled, employable, adaptable, and
                      future-ready. ” <br />

                    </p>
                  </div>
                </div>
              </motion.div>
            )}



            {/* ---------------- LEADERSHIP DEVELOPMENT ---------------- */}
            {activeTab === "leadership-development" && (
              <motion.div
                key="leadership-development"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" p-6 md:p-8  space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">

                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    Leadership Development at the Core
                  </h3>
                </div>

                <p className="text-[14px] text-primary-700">
                  SSBM focuses deeply on developing essential leadership
                  qualities:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {[
                      "Critical thinking",
                      "Problem solving",
                      "Communication",
                      "Decision-making",
                      "Emotional intelligence",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className=" p-1 rounded">
                          <span className="text-maroon  text-xs">✓</span>
                        </div>
                        <span className="font-medium text-primary-800 text-[14px]">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {[
                      "Teamwork",
                      "Ethics & values",
                      "Strategic thinking",
                      "Adaptability",
                      "Innovation mindset",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className=" p-1 rounded">
                          <span className="text-maroon  text-xs">✓</span>
                        </div>
                        <span className="font-medium text-primary-800 text-[14px]">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ Students evolve into purpose-driven, confident, and
                      ethical leaders. ” <br />

                    </p>
                  </div>
                </div>

              </motion.div>
            )}

            {/* ---------------- FUTURE READY SCHOOL ---------------- */}
            {activeTab === "future-ready-school" && (
              <motion.div
                key="future-ready-school"
                variants={tabVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="p-6 md:p-8 space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">

                  <h3 className="text-[17px] font-semibold text-maroon mb-4 text-center">
                    A School Designed for Tomorrow's World
                  </h3>
                </div>

                <p className="text-[14px] text-primary-700">
                  SSBM prepares students for the future with a forward-looking
                  approach:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-[14px]">
                        <FaRobot className="text-primary text-lg" /> AI-driven
                        workplaces
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Master AI tools and work alongside intelligent systems
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-[14px]">
                        <FaGlobe className="text-primary text-lg" /> Digital
                        global ecosystems
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Navigate interconnected digital business environments
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-[14px]">
                        <FaRocket className="text-primary text-lg" />{" "}
                        Innovation-led industries
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Lead in sectors driven by continuous innovation
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-[14px]">
                        <FaBriefcase className="text-primary text-lg" />{" "}
                        Entrepreneurial careers
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Build your own ventures and startups
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-[14px]">
                        <FaSync className="text-primary text-lg" /> New business
                        models
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Create and adapt to emerging business paradigms
                      </p>
                    </div>

                    <div className="bg-primary-50 p-4 shadow-[0_6px_6px_-4px_rgba(0,0,0,0.18)]">
                      <h4 className="font-bold text-primary-800 mb-2 flex items-center gap-2 text-[14px]">
                        <FaMagic className="text-primary text-lg" /> Roles that
                        don't even exist yet
                      </h4>
                      <p className="text-primary-600 text-xs md:text-sm">
                        Prepare for future job titles and industries
                      </p>
                    </div>
                  </div>
                </div>



                <div className="mt-8 font-serif italic">
                  <div className="bg-primary-50 px-6 py-5 text-center shadow-[0_4px_10px_-3px_rgba(0,0,0,0.12)]">
                    <p className="text-maroon text-[16px] leading-relaxed">
                      “ Students leave SCALE ready to lead the unknown and shape
                      the new. ”<br />

                    </p>
                  </div>
                </div>


              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
