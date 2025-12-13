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

    MdLaptopMac,
    MdCurrencyRupee,
    MdPublic,
    MdRocketLaunch,
    MdBarChart, MdPieChart, MdAutorenew, MdPrecisionManufacturing, MdFactory, MdTimeline, MdShoppingCart, MdPayments, MdSecurity, MdAccountBalance, MdCreditCard,
    MdGroup, MdAssessment, MdSchool, MdEmojiEmotions, MdSupervisedUserCircle, MdCampaign, MdManageAccounts, MdStackedLineChart, MdAccountBalanceWallet

} from "react-icons/md";
type TabId =
    | "general"
    | "marketing"
    | "analytics"
    | "supplychain"
    | "fintech"
    | "hrtech"



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
    const [activeTab, setActiveTab] = useState("marketing");


    const [isModalOpen, setIsModalOpen] = useState(false);


    /** Sections / Tabs */
    const sections: Section[] = [
        {
            id: "general",
            title: "General",
            icon: MdSchool,
            metaDescription:
                "MBA in Finance at Sona School: Master corporate finance, investments, and strategic financial skills for a successful career.",
            canonical: "finance",
            image: "/images/banner/about-banners/3.webp",
        },

        {
            id: "marketing",
            title: "Martech Innovation & Automation",
            icon: MdCampaign, // PERFECT for marketing, campaigns, branding
            metaDescription:
                "Explore the MBA Marketing specialization at Sona School. Gain practical skills in branding, digital ecosystems, analytics, AI-driven marketing & strategy.",
            canonical: "marketing",
            image: "/images/specilization/speaclization-1.webp",
        },

        {
            id: "hrtech",
            title: "HR Tech & Digital Transformation",
            icon: MdManageAccounts, // Best icon for HR + leadership + systems
            metaDescription:
                "Master HR analytics, HR tech platforms, AI-enabled talent systems, workforce intelligence, and digital transformation strategies.",
            canonical: "hr-tech",
            image: "/images/specilization/speaclization-2.webp",
        },

        {
            id: "analytics",
            title: "AI, Data Analytics & Business Intelligence",
            icon: MdStackedLineChart, // BEST icon for analytics + BI
            metaDescription:
                "Master data analytics, visualization, AI tools, predictive modeling, and business intelligence for high-impact decision making.",
            canonical: "business-analytics",
            image: "/images/specilization/speaclization-2.webp",
        },

        {
            id: "supplychain",
            title: "AI, IoT & Big Data in Supply Chain Operations",
            icon: MdLocalShipping, // best supply chain/logistics icon
            metaDescription:
                "Master Industry 4.0 supply chain technologies: smart logistics, IoT, RPA, analytics, demand planning, procurement, and warehousing automation.",
            canonical: "supply-chain",
            image: "/images/specilization/speaclization-3.webp",
        },

        {
            id: "fintech",
            title: "Fin-Tech, AI & Digital Finance",
            icon: MdAccountBalanceWallet, // perfect for digital payments + fintech
            metaDescription:
                "Learn FinTech systems, blockchain, digital payments, AI-driven financial analytics, fraud detection, and corporate finance strategy.",
            canonical: "fintech",
            image: "/images/specilization/speaclization-4.webp",
        },
    ];


    /** Load tab from URL */
    useEffect(() => {
        if (activeSlug && sections.some((s) => s.id === activeSlug)) {
            setActiveTab(activeSlug);
        }
    }, [activeSlug, sections]);

    /** Handle tab change */
    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
        // router.replace(`/admission/${tabId}`);
    };

    const currentSection = sections.find((s) => s.id === activeTab);

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

        // Robots
        let metaRobots = document.querySelector(
            'meta[name="robots"]'
        ) as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement("meta");
            metaRobots.name = "robots";
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";

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
        <section className="w-full min-h-screen bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289] pt-12   flex flex-col items-center">
            {/* Banner */}
            <div className="w-full relative">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentSection?.image}
                        src={currentSection?.image || ""}
                        alt={`${currentSection?.title} Banner`}
                        className="w-full h-auto max-h-96 object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}

                    />
                </AnimatePresence>

                {/* Banner Text & Breadcrumb */}
                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                        Admission
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
                                        className=" cursor-pointer transition-colors text-white"
                                    >
                                        Home
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/admission"
                                        className=" cursor-pointer transition-colors text-white font-semibold"
                                    >
                                        Admission
                                    </Link>

                                </li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>



            {/* Content Section */}
            <div className="w-full max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">

                    <motion.section
                        key="general"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative max-w-7xl mx-auto p-6  rounded-2xl overflow-hidden"
                    >

                        {/* Hero */}

                        {/* ---------------- Your Wave Card ---------------- */}
                        <motion.div
                            initial={{ y: 12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full text-center"
                        >
                            <div className="grid grid-cols-1 gap-2 md:gap-3 items-center mb-6">

                                {/* Heading */}
                                <h2 className="text-sm md:text-[15px] font-semibold text-maroon">
                                    Admission Eligibility
                                </h2>

                                {/* Eligibility Text */}
                                <p className="text-gray-600 text-sm leading-snug">
                                    <span className="font-semibold italic">
                                        Graduation in any discipline with a minimum aggregate of 50%.
                                    </span>
                                </p>

                                {/* Arrow */}
                                <div className="flex justify-center -mt-1">
                                    <motion.div
                                        animate={{ y: [0, 6, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    >
                                        <svg
                                            className="w-4 h-4 text-maroon-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.div>
                                </div>

                                {/* Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.96 }}
                                    onClick={() => setIsModalOpen(true)}
                                    className="
    justify-self-center
    w-fit inline-flex
    bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400
    text-maroon font-semibold
    px-4 py-2
    rounded-lg shadow-sm
    hover:shadow-md transition
  "
                                >
                                    Apply Now
                                </motion.button>




                            </div>
                        </motion.div>



                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center mb-6"
                        >
                            <h2 className="text-[17px] font-semibold text-maroon  mb-2">
                                PGDM Specialisations at SSBM
                            </h2>
                            <p className="text-gray-600">
                                <span className="font-semibold italic text-[14px]">Tech-Enabled. Industry-Driven. Future-Ready</span>

                            </p>
                        </motion.div>

                        {/* Program Overview */}
                        <motion.div
                            className="bg-maroon-100/20 p-6 md:p-10   mb-12"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >

                            <p className="text-gray-700 text-[14px] leading-relaxed">
                                SSBM offers cutting-edge PGDM specialisations built around technologies, digital business skills, and future competencies demanded by global enterprises and GCCs.
                                Each programme blends business fundamentals with AI, analytics, cloud, automation, and digital tools—ensuring graduates are job-ready from Day 1.

                            </p>
                        </motion.div>
                        <motion.div className="mb-12">
                            <h3 className="text-[17px] font-semibold text-maroon mb-6 text-center">
                                The Two-Year Fully Residential PGDM Programme
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                {[
                                    "Build tech-driven managers and innovators",
                                    "Equip learners with industry-aligned skills",
                                    "Create confident, ethical, future-ready leaders",
                                    "Provide hands-on experience through live projects, internships, hackathons, and global immersion",
                                ].map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex items-start gap-3 p-2"
                                    >
                                        <span className="text-maroon-300 text-sm font-bold leading-none">✓</span>

                                        <p className="text-gray-700 text-[14px]">{point}</p>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                        {/* Three Pillars */}
                        <motion.div className="mb-12">
                            <h3 className="text-[17px] font-semibold text-maroon mb-6 text-center">
                                Three Pillars of SSBM
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                {[
                                    {
                                        title: "A Tech-Powered Business School",
                                        desc: "In today’s world, business leadership is impossible without deep technological fluency. At SSBM, management learning is fused with AI, Data Science, Digital Transformation, Cloud, Cybersecurity, FinTech, and Industry 4.0 tools—ensuring every student graduates with the superpower of tech-enabled decision making.",
                                        icon: <MdLaptopMac className="h-7 w-7 text-maroon" />
                                    },
                                    {
                                        title: "Global Collaboration & Exposure",
                                        desc: " SSBM’s global partnerships bring international faculty, industry mentors, real-world case labs, and cross-border learning experiences directly into the classroom.Students gain insights into global business landscapes, cross-cultural leadership, and international market dynamics, preparing them for careers without boundaries.",
                                        icon: <MdPublic className="h-7 w-7 text-maroon" />
                                    },
                                    {
                                        title: "Startup Incubation & Innovation Centre",
                                        desc: "At , early-stage founders, student innovators, and ideators gain access to the Sona Startup Hub—a launchpad that fuels real entrepreneurship. With mentorship from global experts, corporate accelerators, investors, and technology partners, SSBM transforms students into creators of jobs, not seekers of jobs",
                                        icon: <MdRocketLaunch className="h-7 w-7 text-maroon" />
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        className=" border border-maroon/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-maroon/10 w-12 h-12 rounded-full flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                            <h4 className=" font-semibold text-maroon text-[17px]">{item.title}</h4>
                                        </div>
                                        <p className="text-gray-600 text-[14px] text-justify leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}

                            </div>
                        </motion.div>


                        <div className="max-w-7xl mx-auto">


                            <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8">

                                {/* LEFT SIDE – TABS */}
                                <div className="sticky top-24 h-fit">
                                    <h3 className="text-[17px] font-semibold text-maroon mb-6 text-center">
                                        Specializations
                                    </h3>
                                    <div className="shadow border border-maroon-200 rounded-xl p-3 space-y-2">
                                        {sections
                                            .filter((sec) => sec.id !== "general") // 🔥 hide General
                                            .map((sec) => {
                                                const Icon = sec.icon;
                                                const isActive = activeTab === sec.id;

                                                return (
                                                    <button
                                                        key={sec.id}
                                                        onClick={() => handleTabChange(sec.id)}
                                                        className={`w-full flex items-start justify-start gap-3 px-4 py-3 rounded-lg 
  text-sm font-medium transition-all text-left
  ${isActive
                                                                ? "bg-maroon/10 text-maroon"
                                                                : "text-gray-700 hover:bg-gray-100"
                                                            }`}
                                                    >

                                                        <Icon
                                                            className={`w-5 h-5 ${isActive ? "text-maroon" : "text-gray-500"
                                                                }`}
                                                        />
                                                        {sec.title}
                                                    </button>
                                                );
                                            })}
                                    </div>
                                </div>


                                {/* RIGHT SIDE – CONTENT */}
                                <div>
                                    {activeTab === "marketing" && (
                                        <motion.section
                                            key="marketing"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="relative   rounded-3xl max-w-7xl mx-auto overflow-hidden"
                                        >

                                            {/* Header */}
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-center mb-10"
                                            >
                                                <h2 className="text-[17px] font-semibold text-maroon  mb-2">
                                                    Martech Innovation & Automation
                                                </h2>
                                                <p className="text-gray-600">
                                                    <span className="font-semibold italic text-[14px]">Where Creativity Meets AI.</span>
                                                    <br />Where Brands Scale with Data.
                                                </p>
                                            </motion.div>

                                            {/* Timeline UI */}
                                            <div className="relative  grid grid-cols-12 gap-10 items-stretch">

                                                {/* LEFT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col space-y-8">

                                                    {/* Intro */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdLightbulb className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="text-[14px] text-gray-700 leading-relaxed">
                                                            This specialisation prepares learners to become
                                                            <span className="font-semibold text-maroon"> modern marketing strategists</span> who master
                                                            consumer psychology, digital ecosystems, analytics, and AI-driven growth.
                                                        </p>
                                                    </div>

                                                    {/* Core Learning Areas */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdMenuBook className="text-maroon h-6 w-6" />
                                                        </div>

                                                        <div className="text-[14px] text-gray-700">
                                                            <p className="font-semibold text-maroon">Core Learning Areas</p>
                                                            <ul className="list-disc ml-5 mt-2 space-y-1">
                                                                <li>Digital Marketing, Social Media Intelligence & Performance Analytics</li>
                                                                <li>AI-Enabled MarTech Tools & Automation Platforms</li>
                                                                <li>Consumer Behaviour, Neuromarketing & Behavioural Insights</li>
                                                                <li>Predictive Marketing Analytics & Customer Segmentation</li>
                                                                <li>Omni-channel Experience Design & E-Commerce Technologies</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* RIGHT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col">

                                                    {/* Career Title */}
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdWork className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="font-semibold text-maroon">Career Trajectories</p>
                                                    </div>

                                                    {/* Career Cards */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                                                        {[
                                                            { title: "Brand Manager", icon: <MdStar /> },
                                                            { title: "Digital Marketing Analyst", icon: <MdAnalytics /> },
                                                            { title: "Product Marketing Lead", icon: <MdTrackChanges /> },
                                                            { title: "CRM Specialist", icon: <MdPeople /> },
                                                            { title: "Growth Strategist", icon: <MdTrendingUp /> },
                                                            { title: "Marketing Insights Analyst", icon: <MdInsights /> },
                                                        ].map((role, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center gap-3 p-3 shadow-sm hover:shadow-md transition"
                                                            >
                                                                <div className="bg-maroon/10 w-10 h-10 rounded-full flex items-center justify-center text-maroon">
                                                                    {role.icon}
                                                                </div>
                                                                <p className="text-gray-700 text-[14px]">{role.title}</p>
                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>

                                            </div>



                                        </motion.section>
                                    )}



                                    {activeTab === "analytics" && (
                                        <motion.section
                                            key="analytics"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="relative    rounded-3xl max-w-7xl mx-auto overflow-hidden"
                                        >

                                            {/* Header */}
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-center mb-10"
                                            >
                                                <h2 className="text-[17px] font-semibold text-maroon mb-2">
                                                    AI, Data Analytics & Business Intelligence
                                                </h2>

                                                <p className="text-gray-600 italic">
                                                    <span className="font-semibold text-[14px]">Turning Data Into Decisions.</span>
                                                    <br />Turning Decisions Into Impact.
                                                </p>
                                            </motion.div>

                                            {/* Timeline UI */}
                                            <div className="relative  grid grid-cols-12 gap-10 items-stretch">

                                                {/* LEFT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col space-y-8">

                                                    {/* Intro */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdAnalytics className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="text-[14px] text-gray-700 leading-relaxed">
                                                            A high-impact analytics and AI-driven specialization that gives learners
                                                            mastery over data science, modelling, storytelling, automation, and
                                                            business insights—skills powering today’s leading GCCs.
                                                        </p>
                                                    </div>

                                                    {/* Core Learning Areas */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdMenuBook className="text-maroon h-6 w-6" />
                                                        </div>

                                                        <div className="text-[14px] text-gray-700">
                                                            <p className="font-semibold text-maroon">Core Learning Areas</p>
                                                            <ul className="list-disc ml-5 mt-2 space-y-1">
                                                                <li>Python, R, SQL & Statistical Modelling</li>
                                                                <li>Data Visualization: Tableau, Power BI & Storytelling Dashboards</li>
                                                                <li>Machine Learning for Classification, Forecasting & Optimization</li>
                                                                <li>Predictive, Prescriptive & Real-Time Analytics</li>
                                                                <li>Cloud Capabilities, Big Data Ecosystems & AI Applications</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* RIGHT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col">

                                                    {/* Career Title */}
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdWork className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="font-semibold text-maroon">Career Trajectories</p>
                                                    </div>

                                                    {/* Career Cards */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">

                                                        {[
                                                            { title: "Business Analyst", icon: <MdInsights /> },
                                                            { title: "Data Analyst", icon: <MdBarChart /> },
                                                            { title: "BI Specialist", icon: <MdPieChart /> },
                                                            { title: "Analytics Consultant", icon: <MdTrendingUp /> },
                                                            { title: "Digital Transformation Analyst", icon: <MdAutorenew /> },
                                                            { title: "AI / ML Project Associate", icon: <MdPrecisionManufacturing /> },
                                                        ].map((role, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                                                className="flex items-center gap-3 p-3 shadow-sm hover:shadow-md transition"
                                                            >
                                                                <div className="bg-maroon/10 w-10 h-10 rounded-full flex items-center justify-center text-maroon">
                                                                    {role.icon}
                                                                </div>
                                                                <p className="text-gray-700 text-[14px]">{role.title}</p>
                                                            </motion.div>
                                                        ))}

                                                    </div>

                                                </div>

                                            </div>


                                        </motion.section>
                                    )}

                                    {activeTab === "supplychain" && (
                                        <motion.section
                                            key="supplychain"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="relative   rounded-3xl max-w-7xl mx-auto overflow-hidden"
                                        >

                                            {/* Header */}
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-center mb-10"
                                            >
                                                <h2 className="text-[17px] font-semibold text-maroon mb-2">
                                                    AI, IoT & Big Data in Supply Chain Operations
                                                </h2>

                                                <p className="text-gray-600 italic">
                                                    <span className="font-semibold text-[14px]">Mastering the Systems That Move the World.</span>

                                                </p>
                                            </motion.div>

                                            {/* Timeline UI */}
                                            <div className="relative grid grid-cols-12 gap-10 items-stretch">

                                                {/* LEFT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col space-y-8">

                                                    {/* Intro */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdPrecisionManufacturing className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="text-[14px] text-gray-700 leading-relaxed">
                                                            This specialization prepares students for the Industry 4.0 supply chain
                                                            revolution, where automation, analytics, robotics, and smart logistics
                                                            shape global business.
                                                        </p>
                                                    </div>

                                                    {/* Core Learning Areas */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdMenuBook className="text-maroon h-6 w-6" />
                                                        </div>

                                                        <div className="text-[14px] text-gray-700">
                                                            <p className="font-semibold text-maroon">Core Learning Areas</p>
                                                            <ul className="list-disc ml-5 mt-2 space-y-1">
                                                                <li>Digital Logistics, Smart Warehousing & Distribution Systems</li>
                                                                <li>Supply Chain Analytics, KPI Dashboards & Optimization Models</li>
                                                                <li>Procurement Strategy, E-Sourcing Tools & Vendor Intelligence</li>
                                                                <li>Inventory Management, Demand Forecasting & Planning Technologies</li>
                                                                <li>Industry 4.0 Tools: IoT, RPA, Blockchain, Automation & Smart Logistics</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* RIGHT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col">

                                                    {/* Career Title */}
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdWork className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="font-semibold text-maroon">Career Trajectories</p>
                                                    </div>

                                                    {/* Career Cards */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">

                                                        {[
                                                            { title: "Supply Chain Analyst", icon: <MdInsights /> },
                                                            { title: "Operations Manager", icon: <MdFactory /> },
                                                            { title: "Procurement Specialist", icon: <MdShoppingCart /> },
                                                            { title: "Demand Planner", icon: <MdTimeline /> },
                                                            { title: "Logistics Coordinator", icon: <MdLocalShipping /> },
                                                            { title: "Supply Chain Consultant", icon: <MdTrendingUp /> },
                                                        ].map((role, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                                                className="flex items-center gap-3 p-3 shadow-sm hover:shadow-md transition"
                                                            >
                                                                <div className="bg-maroon/10 w-10 h-10 rounded-full flex items-center justify-center text-maroon">
                                                                    {role.icon}
                                                                </div>
                                                                <p className="text-gray-700 text-[14px]">{role.title}</p>
                                                            </motion.div>
                                                        ))}

                                                    </div>

                                                </div>

                                            </div>


                                        </motion.section>
                                    )}

                                    {activeTab === "fintech" && (
                                        <motion.section
                                            key="fintech"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="relative  rounded-3xl max-w-7xl mx-auto overflow-hidden"
                                        >

                                            {/* Header */}
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-center mb-10"
                                            >
                                                <h2 className="text-[17px] font-semibold text-maroon mb-2">
                                                    Fin-Tech, AI & Digital Finance
                                                </h2>

                                                <p className="text-gray-600 italic">
                                                    <span className="font-semibold text-[14px]">Where Banking Meets Code.</span>
                                                    <br />Where Finance Becomes Intelligent.
                                                </p>
                                            </motion.div>

                                            {/* Timeline UI */}
                                            <div className="relative  grid grid-cols-12 gap-10 items-stretch">

                                                {/* LEFT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col space-y-8">

                                                    {/* Core Learning Areas */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdMenuBook className="text-maroon h-6 w-6" />
                                                        </div>

                                                        <div className="text-[14px] text-gray-700">
                                                            <p className="font-semibold text-maroon">Core Learning Areas</p>
                                                            <ul className="list-disc ml-5 mt-2 space-y-1">
                                                                <li>FinTech Systems, Digital Payments & Blockchain</li>
                                                                <li>AI in Finance: Risk Models, Fraud Analytics & Robo-Advisory</li>
                                                                <li>Financial Analytics, Investment Insights & Corporate Finance Strategy</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* RIGHT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col">

                                                    {/* Career Title */}
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdWork className="text-maroon h-6 w-6" />
                                                        </div>
                                                        <p className="font-semibold text-maroon">Career Trajectories</p>
                                                    </div>

                                                    {/* Career Cards */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">

                                                        {[
                                                            { title: "FinTech Analyst", icon: <MdPayments /> },
                                                            { title: "Risk Analyst", icon: <MdSecurity /> },
                                                            { title: "Corporate Finance Associate", icon: <MdAccountBalance /> },
                                                            { title: "Financial Data Specialist", icon: <MdBarChart /> },
                                                            { title: "Digital Banking Consultant", icon: <MdCreditCard /> },
                                                        ].map((role, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                                                className="flex items-center gap-3 p-3 shadow-sm hover:shadow-md transition"
                                                            >
                                                                <div className="bg-maroon/10 w-10 h-10 rounded-full flex items-center justify-center text-maroon">
                                                                    {role.icon}
                                                                </div>
                                                                <p className="text-gray-700 text-[14px]">{role.title}</p>
                                                            </motion.div>
                                                        ))}

                                                    </div>

                                                </div>

                                            </div>




                                        </motion.section>
                                    )}

                                    {activeTab === "hrtech" && (
                                        <motion.section
                                            key="hrtech"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="relative p-6  rounded-3xl max-w-7xl mx-auto overflow-hidden"
                                        >
                                            {/* Header */}
                                            <motion.div
                                                initial={{ y: 30, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="text-center mb-10"
                                            >
                                                <h2 className="text-[17px] font-semibold text-maroon mb-2">
                                                    HR Tech & Digital Transformation
                                                </h2>

                                                <p className="text-gray-600 italic text-[14px]">
                                                    <span className="font-semibold">
                                                        Building Leaders Who Shape the Workforce of the Future.
                                                    </span>
                                                </p>
                                            </motion.div>

                                            {/* Timeline UI */}
                                            <div className="relative  grid grid-cols-12 gap-10 items-stretch">

                                                {/* LEFT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col space-y-8">

                                                    {/* Core Learning Areas */}
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdMenuBook className="w-5 h-5 text-maroon" />
                                                        </div>

                                                        <div className="text-[14px] text-gray-700">
                                                            <p className="font-semibold text-maroon">Core Learning Areas</p>
                                                            <ul className="list-disc ml-5 mt-2 space-y-1">
                                                                <li>HR Analytics, Workforce Intelligence & Predictive People Modelling</li>
                                                                <li>AI-Enabled Talent Acquisition & Competency Mapping</li>
                                                                <li>Total Rewards Design, Performance Architecture & EX Strategy</li>
                                                                <li>Organizational Development, Culture Engineering & Change Leadership</li>
                                                                <li>HR Technology Platforms (HRMS, ATS, LMS, People Analytics Tools)</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>

                                                {/* RIGHT COLUMN */}
                                                <div className="col-span-12 lg:col-span-6 h-full flex flex-col">

                                                    {/* Career Title */}
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <div className="w-10 h-10 rounded-full bg-maroon/20 flex items-center justify-center">
                                                            <MdWork className="w-5 h-5 text-maroon" />
                                                        </div>
                                                        <p className="font-semibold text-maroon">Career Trajectories</p>
                                                    </div>

                                                    {/* Career Cards */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">

                                                        {[
                                                            { title: "HRBP", icon: <MdPeople className="w-5 h-5 text-maroon" /> },
                                                            { title: "Talent Acquisition Lead", icon: <MdGroup className="w-5 h-5 text-maroon" /> },
                                                            { title: "HR Analyst", icon: <MdAssessment className="w-5 h-5 text-maroon" /> },
                                                            { title: "L&D Specialist", icon: <MdSchool className="w-5 h-5 text-maroon" /> },
                                                            { title: "Employee Experience Manager", icon: <MdEmojiEmotions className="w-5 h-5 text-maroon" /> },
                                                            { title: "People Operations Strategist", icon: <MdSupervisedUserCircle className="w-5 h-5 text-maroon" /> },
                                                        ].map((role, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ opacity: 0, y: 15 }}
                                                                whileInView={{ opacity: 1, y: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                                                className="flex items-center gap-3 p-3 shadow-sm hover:shadow-md transition-all rounded-md"
                                                            >
                                                                <div className="bg-maroon/10 w-10 h-10 rounded-full flex items-center justify-center text-maroon">
                                                                    {role.icon}
                                                                </div>
                                                                <p className="text-gray-700 text-[14px]">{role.title}</p>
                                                            </motion.div>
                                                        ))}

                                                    </div>

                                                </div>

                                            </div>


                                        </motion.section>
                                    )}
                                </div>

                            </div>
                        </div>


                        {/* CTA */}
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
                                Join SSBM and unlock global opportunities with world-class learning.

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
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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






                </AnimatePresence>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Admission</h2>
                <AdmissionForm />
            </Modal>
        </section>
    );
}
