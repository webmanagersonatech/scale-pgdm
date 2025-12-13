"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

import AdmissionForm from "../../components/AdmissionForm";
import Modal from "../../components/Modal";
import {
  MdTrendingUp,
  MdPeople,
  MdInsights,
  MdTrackChanges,
  MdStar,
  MdLocalShipping,
  MdAnalytics,
  MdMenuBook,
  MdWork,
  MdLightbulb,
  MdVerified,
  MdAutoFixHigh,
  MdLaptopMac,
  MdCurrencyRupee,
  MdPublic,
  MdRocketLaunch,
  MdBarChart,
  MdPieChart,
  MdAutorenew,
  MdPrecisionManufacturing,
  MdFactory,
  MdTimeline,
  MdShoppingCart,
  MdPayments,
  MdSecurity,
  MdAccountBalance,
  MdCreditCard,
  MdGroup,
  MdAssessment,
  MdSchool,
  MdEmojiEmotions,
  MdSupervisedUserCircle,
  MdCampaign,
  MdManageAccounts,
  MdStackedLineChart,
  MdAccountBalanceWallet,
  MdMenu,
  MdClose,
  MdCategory,
} from "react-icons/md";

type TabId =
  | "eligibility"
  | "general"
  | "marketing"
  | "analytics"
  | "supplychain"
  | "fintech"
  | "hrtech";

interface Section {
  id: TabId;
  title: string;
  metaDescription: string;
  canonical: string;
  image: string;
  icon: any;
}

export default function SpecializationPageContent({ activeSlug }: any) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /** Sections / Tabs */
  const sections: Section[] = [
    {
      id: "eligibility",
      title: "Admission",
      icon: MdSchool,
      metaDescription:
        "Graduation in any discipline with a minimum aggregate of 50%.",
      canonical: "finance",
      image: "/images/banner/about-banners/3.webp",
    },
    {
      id: "general",
      title: "PGDM Specialisations",
      icon: MdCategory,
      metaDescription:
        "MBA in Finance at Sona School: Master corporate finance, investments, and strategic financial skills for a successful career.",
      canonical: "finance",
      image: "/images/banner/about-banners/3.webp",
    },
    {
      id: "marketing",
      title: "Martech Innovation & Automation",
      icon: MdCampaign,
      metaDescription:
        "Explore the MBA Marketing specialization at Sona School. Gain practical skills in branding, digital ecosystems, analytics, AI-driven marketing & strategy.",
      canonical: "marketing",
      image: "/images/specilization/speaclization-1.webp",
    },
    {
      id: "hrtech",
      title: "HR Tech & Digital Transformation",
      icon: MdManageAccounts,
      metaDescription:
        "Master HR analytics, HR tech platforms, AI-enabled talent systems, workforce intelligence, and digital transformation strategies.",
      canonical: "hr-tech",
      image: "/images/specilization/speaclization-2.webp",
    },
    {
      id: "analytics",
      title: "AI, Data Analytics & Business Intelligence",
      icon: MdStackedLineChart,
      metaDescription:
        "Master data analytics, visualization, AI tools, predictive modeling, and business intelligence for high-impact decision making.",
      canonical: "business-analytics",
      image: "/images/specilization/speaclization-2.webp",
    },
    {
      id: "supplychain",
      title: "AI, IoT & Big Data in Supply Chain Operations",
      icon: MdLocalShipping,
      metaDescription:
        "Master Industry 4.0 supply chain technologies: smart logistics, IoT, RPA, analytics, demand planning, procurement, and warehousing automation.",
      canonical: "supply-chain",
      image: "/images/specilization/speaclization-3.webp",
    },
    {
      id: "fintech",
      title: "Fin-Tech, AI & Digital Finance",
      icon: MdAccountBalanceWallet,
      metaDescription:
        "Learn FinTech systems, blockchain, digital payments, AI-driven financial analytics, fraud detection, and corporate finance strategy.",
      canonical: "fintech",
      image: "/images/specilization/speaclization-4.webp",
    },
  ];

  /** Load tab from URL */
  // ✅ Declare ONCE only
  const [activeTab, setActiveTab] = useState<string>("eligibility");

  /** Load tab from URL */
  /** Load tab from URL - client-side only */
  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get("tab") || activeSlug || "eligibility";

      if (sections.some((s) => s.id === tabParam)) {
        setActiveTab(tabParam);
      } else {
        setActiveTab("eligibility");
      }
    }
  }, [activeSlug, sections]);

  /** Handle tab change */
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.replace(`/admission/${tabId}`);
  };

  const currentSection = sections.find((s) => s.id === activeTab);

  /** Update SEO dynamically */
  useEffect(() => {
    if (!currentSection) return;

    // Document title
    document.title = `${currentSection.title} | MBA Specialization | Sona School of Business & Management`;

    // Meta description
    let metaDesc = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = currentSection.metaDescription;

    // Canonical
    let linkCanonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = `https://www.sonabusinessschool.com/specialization?tab=${currentSection.canonical}`;
  }, [currentSection]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289] pt-12 flex flex-col items-center">
      {/* Banner */}
      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSection?.image}
            src={currentSection?.image || ""}
            alt={`${currentSection?.title} Banner`}
            className="w-full h-auto max-h-96 object-cover md:object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {/* Banner Text & Breadcrumb */}
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
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="cursor-pointer transition-colors text-white"
                  >
                    Home
                  </Link>
                  <span className="text-white mx-1">{">"}</span>
                </li>
                <li className="inline-flex items-center">
                  <Link
                    href="/admission"
                    className="cursor-pointer transition-colors text-white"
                  >
                    Specializations
                  </Link>
                  <span className="text-white mx-1">{">"}</span>
                </li>
                <li className="inline-flex items-center text-white font-semibold">
                  {currentSection?.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="w-full md:hidden bg-gray-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-maroon text-white rounded-lg font-medium"
          >
            {isMobileMenuOpen ? (
              <>
                <MdClose className="w-5 h-5" />
                Close Menu
              </>
            ) : (
              <>
                <MdMenu className="w-5 h-5" />
                {currentSection?.title || "Menu"}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs & Content Container */}
      <div className="w-full bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289] border-b border-gray-300 pt-6">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-gray-300"
            >
              <div className="flex flex-col gap-2 p-4">
                {sections
                  .filter((sec) => sec.id !== "eligibility")
                  .map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeTab === sec.id;

                    return (
                      <button
                        key={sec.id}
                        onClick={() => handleTabChange(sec.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all ${isActive
                            ? "bg-maroon/10 text-maroon border-l-4 border-maroon"
                            : "text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${isActive ? "text-maroon" : "text-gray-500"
                            }`}
                        />
                        <span className="text-sm sm:text-base font-medium">
                          {sec.title}
                        </span>
                      </button>
                    );
                  })}
              </div>
            </motion.div>
          )}

          {/* Desktop Sidebar Tabs - Hidden on Mobile */}

          <div className="hidden md:flex w-64 border-r border-gray-300 py-4 flex-col gap-2">
            <h3 className="font-bold text-gray-700 px-4">Eligibility:</h3>
            {sections
              .filter((sec) => sec.id !== "eligibility")
              .map((sec) => {
                const Icon = sec.icon;
                const isActive = activeTab === sec.id;

                return (
                  <button
                    key={sec.id}
                    onClick={() => handleTabChange(sec.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md text-left transition-all 
          ${isActive
                        ? "bg-maroon/10 text-maroon"
                        : "text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive ? "text-maroon" : "text-gray-500"
                        }`}
                    />
                    <span className="font-medium">{sec.title}</span>
                  </button>
                );
              })}
          </div>

          {/* Content Section */}
          <div className="flex-1 md:pl-6 md:mt-6 px-4 md:px-0 pb-8 md:pb-0">
            <AnimatePresence mode="wait">
              {activeTab === "eligibility" && (
                <motion.section
                  key="eligibility"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative max-w-7xl mx-auto p-4 md:p-6 rounded-2xl overflow-hidden"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center"
                  >
                    <div className="grid grid-cols-1 gap-8 md:gap-12 items-center">
                      <h2 className="text-lg md:text-[17px] font-semibold text-maroon mb-2">
                        Admission Eligibility
                      </h2>

                      <p className="text-gray-600 text-sm md:text-base">
                        <span className="font-semibold italic">
                          Graduation in any discipline with a minimum aggregate
                          of 50%.
                        </span>
                      </p>

                      {/* Arrow + Button Centered */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        >
                          <svg
                            className="w-6 h-6 text-maroon-300"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>

                        <motion.button
                          whileHover={{ scale: 1.06 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsModalOpen(true)}
                          className="
            mt-4 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400
            text-maroon font-semibold px-8 py-3 rounded-xl shadow-md
            hover:shadow-lg transition-transform duration-300
          "
                        >
                          Apply Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.section>
              )}

              {/* All other tab contents remain the same but with responsive padding */}
              {activeTab === "general" && (
                <motion.section
                  key="general"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative max-w-7xl mx-auto p-4 md:p-6 rounded-2xl overflow-hidden"
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6"
                  >
                    <h2 className="text-lg md:text-[17px] font-semibold text-maroon mb-2">
                      PGDM Specialisations at SSBM
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base">
                      <span className="font-semibold italic">
                        Tech-Enabled. Industry-Driven. Future-Ready
                      </span>
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-maroon-100/20 p-4 md:p-6 lg:p-8 rounded-xl mb-8 md:mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-gray-700 text-sm md:text-[14px] leading-relaxed">
                      SSBM offers cutting-edge PGDM specialisations built around
                      technologies, digital business skills, and future
                      competencies demanded by global enterprises and GCCs. Each
                      programme blends business fundamentals with AI, analytics,
                      cloud, automation, and digital tools—ensuring graduates
                      are job-ready from Day 1.
                    </p>
                  </motion.div>

                  <motion.div className="mb-8 md:mb-12">
                    <h3 className="text-lg md:text-[17px] font-semibold text-maroon mb-4 md:mb-6 text-center">
                      The Two-Year Fully Residential PGDM Programme
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      {[
                        "Build tech-driven managers and innovators",
                        "Equip learners with industry-aligned skills",
                        "Create confident, ethical, future-ready leaders",
                        "Provide hands-on experience through live projects, internships, hackathons, and global immersion",
                      ].map((point, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="flex items-start gap-3 p-3 bg-white/50 rounded-lg"
                        >
                          <span className="text-maroon-300 text-sm font-bold leading-none mt-1">
                            ✓
                          </span>
                          <p className="text-gray-700 text-sm md:text-[14px]">
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Three Pillars - Stack on mobile */}
                  <motion.div className="mb-8 md:mb-12">
                    <h3 className="text-lg md:text-[17px] font-semibold text-maroon mb-4 md:mb-6 text-center">
                      Three Pillars of SSBM
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {[
                        {
                          title: "A Tech-Powered Business School",
                          desc: "In today's world, business leadership is impossible without deep technological fluency. At SSBM, management learning is fused with AI, Data Science, Digital Transformation, Cloud, Cybersecurity, FinTech, and Industry 4.0 tools—ensuring every student graduates with the superpower of tech-enabled decision making.",
                          icon: (
                            <MdLaptopMac className="h-6 w-6 md:h-7 md:w-7 text-maroon" />
                          ),
                        },
                        {
                          title: "Global Collaboration & Exposure",
                          desc: "SSBM's global partnerships bring international faculty, industry mentors, real-world case labs, and cross-border learning experiences directly into the classroom. Students gain insights into global business landscapes, cross-cultural leadership, and international market dynamics, preparing them for careers without boundaries.",
                          icon: (
                            <MdPublic className="h-6 w-6 md:h-7 md:w-7 text-maroon" />
                          ),
                        },
                        {
                          title: "Startup Incubation & Innovation Centre",
                          desc: "At SSBM, early-stage founders, student innovators, and ideators gain access to the Sona Startup Hub—a launchpad that fuels real entrepreneurship. With mentorship from global experts, corporate accelerators, investors, and technology partners, SSBM transforms students into creators of jobs, not seekers of jobs.",
                          icon: (
                            <MdRocketLaunch className="h-6 w-6 md:h-7 md:w-7 text-maroon" />
                          ),
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="border border-maroon/10 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-all bg-white"
                        >
                          <div className="flex items-center gap-3 mb-3 md:mb-4">
                            <div className="bg-maroon/10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                              {item.icon}
                            </div>
                            <h4 className="font-semibold text-maroon text-[15px] md:text-[17px]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-gray-600 text-sm md:text-[14px] text-justify leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Desktop CTA - Bottom of content */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center my-10  py-2 "
                  >
                    <h2 className="text-3xl font-bold mb-3 text-maroon">
                      Ready to Transform Your Career?
                    </h2>
                    <p className="text-gray-600 max-w-lg mx-auto">
                      Join SSBM and unlock global opportunities with world-class
                      learning.
                    </p>
                    <motion.div
                      className="flex justify-center"
                      animate={{ y: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <svg
                        className="w-6 h-6 text-maroon-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.div>

                    <motion.button
                      whileHover={{ scale: 1.06 }}
                      onClick={() => setIsModalOpen(true)}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4  items-center gap-3 
     bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400
      text-maroon font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                    >
                      Apply Now
                    </motion.button>
                  </motion.div>
                </motion.section>
              )}

              {/* Other specialization tabs with similar responsive adjustments */}
              {[
                "marketing",
                "analytics",
                "supplychain",
                "fintech",
                "hrtech",
              ].includes(activeTab) && (
                  <motion.section
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative p-4 md:p-6 rounded-3xl max-w-7xl mx-auto"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center mb-8 md:mb-10"
                    >
                      <h2 className="text-lg md:text-[17px] font-semibold text-maroon mb-2">
                        {currentSection?.title}
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base">
                        <span className="font-semibold italic">
                          {activeTab === "marketing" &&
                            "Where Creativity Meets AI. Where Brands Scale with Data."}
                          {activeTab === "analytics" &&
                            "Turning Data Into Decisions. Turning Decisions Into Impact."}
                          {activeTab === "supplychain" &&
                            "Mastering the Systems That Move the World."}
                          {activeTab === "fintech" &&
                            "Where Banking Meets Code. Where Finance Becomes Intelligent."}
                          {activeTab === "hrtech" &&
                            "Building Leaders Who Shape the Workforce of the Future."}
                        </span>
                      </p>
                    </motion.div>

                    <div className="space-y-6 md:space-y-8">
                      {activeTab === "marketing" && (
                        <>
                          {/* Marketing content sections */}
                          <motion.div
                            className="bg-white/50 p-4 md:p-6 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center flex-shrink-0">
                                <MdLightbulb className="text-maroon h-5 w-5 md:h-6 md:w-6" />
                              </div>
                              <div className="text-sm md:text-[14px] text-gray-700 leading-relaxed">
                                This specialisation prepares learners to become{" "}
                                <span className="font-semibold text-maroon">
                                  modern marketing strategists
                                </span>{" "}
                                who master consumer psychology, digital
                                ecosystems, analytics, and AI-driven growth.
                              </div>
                            </div>
                          </motion.div>

                          <motion.div
                            className="bg-white/50 p-4 md:p-6 rounded-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center flex-shrink-0">
                                <MdMenuBook className="text-maroon h-5 w-5 md:h-6 md:w-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-maroon mb-3">
                                  Core Learning Areas
                                </h4>
                                <ul className="list-disc ml-5 space-y-2 text-gray-700 text-sm md:text-[14px]">
                                  <li>
                                    Digital Marketing, Social Media Intelligence &
                                    Performance Analytics
                                  </li>
                                  <li>
                                    AI-Enabled MarTech Tools & Automation
                                    Platforms
                                  </li>
                                  <li>
                                    Consumer Behaviour, Neuromarketing &
                                    Behavioural Insights
                                  </li>
                                  <li>
                                    Predictive Marketing Analytics & Customer
                                    Segmentation
                                  </li>
                                  <li>
                                    Omni-channel Experience Design & E-Commerce
                                    Technologies
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        </>
                      )}

                      {/* Add similar structure for other tabs... */}

                      {/* Career Trajectories - Responsive grid */}
                      <motion.div
                        className="bg-white/50 p-4 md:p-6 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center flex-shrink-0">
                            <MdWork className="text-maroon h-5 w-5 md:h-6 md:w-6" />
                          </div>
                          <h4 className="font-semibold text-maroon text-lg">
                            Career Trajectories
                          </h4>
                        </div>

                        {/* Responsive grid for career cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                          {/* Career cards for each specialization */}
                          {getCareerRoles(activeTab).map((role, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: index * 0.05 }}
                              className="flex items-center gap-3 p-3 bg-white shadow-sm hover:shadow-md rounded-lg transition-all"
                            >
                              <div className="bg-maroon/10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0">
                                {role.icon}
                              </div>
                              <p className="text-gray-700 text-sm md:text-[14px]">
                                {role.title}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Desktop CTA - Bottom of content */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center my-10  py-2 "
                    >
                      <h2 className="text-3xl font-bold mb-3 text-maroon">
                        Ready to Transform Your Career?
                      </h2>
                      <p className="text-gray-600 max-w-lg mx-auto">
                        Join SSBM and unlock global opportunities with world-class
                        learning.
                      </p>
                      <motion.div
                        className="flex justify-center"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        <svg
                          className="w-6 h-6 text-maroon-300"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>

                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        onClick={() => setIsModalOpen(true)}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4  items-center gap-3 
     bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400
      text-maroon font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                      >
                        Apply Now
                      </motion.button>
                    </motion.div>
                  </motion.section>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 md:hidden z-50">
        <div className="flex justify-around p-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex flex-col items-center p-2 ${isMobileMenuOpen ? "text-maroon" : "text-gray-600"
              }`}
          >
            <MdMenu className="w-6 h-6" />
            <span className="text-xs mt-1">Menu</span>
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-col items-center p-2 text-maroon"
          >
            <MdSchool className="w-6 h-6" />
            <span className="text-xs mt-1">Apply</span>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Admission</h2>
        <AdmissionForm />
      </Modal>
    </section>
  );
}

// Helper function to get career roles for each specialization
function getCareerRoles(tabId: string) {
  switch (tabId) {
    case "marketing":
      return [
        {
          title: "Brand Manager",
          icon: <MdStar className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Digital Marketing Analyst",
          icon: <MdAnalytics className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Product Marketing Lead",
          icon: (
            <MdTrackChanges className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
        {
          title: "CRM Specialist",
          icon: <MdPeople className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Growth Strategist",
          icon: <MdTrendingUp className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Marketing Insights Analyst",
          icon: <MdInsights className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
      ];
    case "analytics":
      return [
        {
          title: "Business Analyst",
          icon: <MdInsights className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Data Analyst",
          icon: <MdBarChart className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "BI Specialist",
          icon: <MdPieChart className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Analytics Consultant",
          icon: <MdTrendingUp className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Digital Transformation Analyst",
          icon: <MdAutorenew className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "AI / ML Project Associate",
          icon: (
            <MdPrecisionManufacturing className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
      ];
    case "supplychain":
      return [
        {
          title: "Supply Chain Analyst",
          icon: <MdInsights className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Operations Manager",
          icon: <MdFactory className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Procurement Specialist",
          icon: (
            <MdShoppingCart className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
        {
          title: "Demand Planner",
          icon: <MdTimeline className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Logistics Coordinator",
          icon: (
            <MdLocalShipping className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
        {
          title: "Supply Chain Consultant",
          icon: <MdTrendingUp className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
      ];
    case "fintech":
      return [
        {
          title: "FinTech Analyst",
          icon: <MdPayments className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Risk Analyst",
          icon: <MdSecurity className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Corporate Finance Associate",
          icon: (
            <MdAccountBalance className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
        {
          title: "Financial Data Specialist",
          icon: <MdBarChart className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Digital Banking Consultant",
          icon: <MdCreditCard className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
      ];
    case "hrtech":
      return [
        {
          title: "HRBP",
          icon: <MdPeople className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Talent Acquisition Lead",
          icon: <MdGroup className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "HR Analyst",
          icon: <MdAssessment className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "L&D Specialist",
          icon: <MdSchool className="text-maroon w-5 h-5 md:w-6 md:h-6" />,
        },
        {
          title: "Employee Experience Manager",
          icon: (
            <MdEmojiEmotions className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
        {
          title: "People Operations Strategist",
          icon: (
            <MdSupervisedUserCircle className="text-maroon w-5 h-5 md:w-6 md:h-6" />
          ),
        },
      ];
    default:
      return [];
  }
}
