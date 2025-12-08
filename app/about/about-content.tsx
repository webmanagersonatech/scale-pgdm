"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import DiamondStar from "../../components/DiamondStar";
import NewsCarousel from "../../components/NewsCarousel";
import Link from "next/link";
import { FiInfo, FiEye, FiBook, FiClock, FiUsers, FiX, FiMaximize } from "react-icons/fi";

import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaFacebook,

} from 'react-icons/fa';

import { FaLightbulb, FaRocket, FaIndustry, FaCogs, FaShieldAlt, FaStar, FaEye, FaShoppingCart, FaBullseye, FaCheckCircle, FaLaptopCode, FaHospital, FaBuilding, FaChartLine } from "react-icons/fa";
import { RiBuilding4Line } from "react-icons/ri";
import { MdAnalytics, MdBusiness, MdOutlineAutoFixHigh, MdInsights } from "react-icons/md";

type TabId =
    | "aboutus"
    | "vision"
    | "history"
    | "chairman"
    | "management"


interface Section {
    id: TabId;
    title: string;
    icon: any;
}
export default function AboutPage({ activeSlug }: any) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("aboutus");
    const [selectedNews, setSelectedNews] = useState<any | null>(null);

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const sections: Section[] = [
        { id: "aboutus", title: "About Us", icon: FiInfo },
        { id: "vision", title: "Vision & Mission", icon: FiEye },
        { id: "management", title: "Management Profile", icon: FiUsers },
    ];
    useEffect(() => {
        if (activeSlug && sections.some((s) => s.id === activeSlug)) {
            setActiveTab(activeSlug);
        }
    }, [activeSlug, sections]);

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",      // ✅ literal, not string
                stiffness: 50,
                damping: 14,
            },
        },
    };
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // each child appears 0.15s after previous
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
    };
    const focusAreas = [
        { icon: <MdBusiness className="text-maroon" />, label: "Automation Strategy" },
        { icon: <MdBusiness className="text-maroon" />, label: "GCC Setup & Transformation" },
        { icon: <FaRocket className="text-maroon" />, label: "Business Growth" },
        { icon: <MdInsights className="text-maroon" />, label: "Innovation Strategy" },
        { icon: <MdBusiness className="text-maroon" />, label: "Private Equity & Partner Strategy" },
        { icon: <MdInsights className="text-maroon" />, label: "Market & Technology Insights" },
    ];

    const industries = [
        { icon: <FaShoppingCart className="text-maroon" />, label: "CPG & Retail" },
        { icon: <FaLaptopCode className="text-maroon" />, label: "ERP Software" },
        { icon: <FaBuilding className="text-maroon" />, label: "Engineering R&D & Digital Services" },
        { icon: <FaChartLine className="text-maroon" />, label: "Financial Services" },
        { icon: <FaHospital className="text-maroon" />, label: "Healthcare" },
        { icon: <FaIndustry className="text-maroon" />, label: "Industrials" },
    ];
    const focusItems = [
        { icon: <FaCogs className="text-white" />, label: "Advanced Technological Services" },
        { icon: <FaChartLine className="text-white" />, label: "Strategic Insights" },
        { icon: <FaLightbulb className="text-white" />, label: "Innovation-driven Solutions" },
        { icon: <FaShieldAlt className="text-white" />, label: "Operational Improvement" },
        { icon: <FaRocket className="text-white" />, label: "Competitive Advantage" },
    ];
    const milestones = [
        "Creation of Valliappa Software Tech Park (VSTP)—now Sona Towers—in the 1980s.",
        "Hosted Texas Instruments, the first global software design centre in India.",
        "Followed by Verifone, Oracle, Cisco, and global technology giants.",
        "Installed India’s first satellite uplink facilities in 1985.",
    ];


    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && sections.some((s) => s.id === tab.toLowerCase())) {
            setActiveTab(tab.toLowerCase());
        }
    }, [searchParams]);

    // Update underline position
    useEffect(() => {
        const updateUnderline = () => {
            const index = sections.findIndex((s) => s.id === activeTab);
            const currentTab = tabsRef.current[index];
            const container = containerRef.current;
            if (currentTab && container) {
                const tabRect = currentTab.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                setUnderlineProps({
                    left: tabRect.left - containerRect.left,
                    width: tabRect.width,
                });
            }
        };
        updateUnderline();
        window.addEventListener("resize", updateUnderline);
        return () => window.removeEventListener("resize", updateUnderline);
    }, [activeTab]);


    const handleTabChange = (tabId: TabId) => {
        setActiveTab(tabId);
        router.push(`/about/${tabId}`);
    };

    const managementData: any[] = [
        {
            name: "Mr. C. Valliappa",
            role: "Chairman",
            image: "/images/about/valliappa-chairman-sona-gro.jpg",
            fullBio:
                "Mr. C. Valliappa , is the Chairman of this institution and the illustrious son of Founder Chairman. His passion and commitment to the cause of education, able guidance and devoted care of the various needs of this institution has established SONA as a  veritable haven of educational brilliance which is moving towards greater heights of achievement and glory.",
            socials: [],

        },

        {
            name: "Mr. Thyagu Valliappa",
            role: "Vice Chairman",
            image: "/images/about/thyagu-valliappa.jpg",
            fullBio:
                "Thyagu Valliappa is a fourth-generation entrepreneur and a transformative leader known for driving innovation across diverse sectors including technology, real estate, textiles, healthcare, logistics, and education. With over four decades of entrepreneurial experience, he has mentored more than 50 startups and played a pivotal role in shaping India’s startup and industry ecosystem. As Founder & Chief Mentor of SCALE, he brings unmatched industry insight, a global mindset, and a passion for developing future-ready leaders. His work spans building world-class infrastructure, pioneering sportainment, advancing heritage healthcare, and strengthening industry–academia partnerships. A visionary strategist and thought leader, he continues to inspire change through innovation, sustainability, and purposeful leadership.",
            socials: [
                { type: "linkedin", url: "https://www.linkedin.com/in/thyagu-valliappa-3616a97/" },
                { type: "twitter", url: "https://x.com/ThyaguValliappa" },
                { type: "facebook", url: "https://www.facebook.com/thyagu.valliappaa" },
                { type: "instagram", url: "https://www.instagram.com/thyaags?igsh=MWszbmI2MHY4YXdtNw==" },
            ],
            news: [

                {
                    title: "Students from Sona Biz School win Think Tank quiz contest",
                    date: "29-10-2024",
                    image: "/images/about/sona-biz-school-think-tank-quiz.webp",
                    content: "MBA students from the Sona School of Business and Management secured top positions in the Think Tank quiz competition organised by the Madras Management Association. Four MBA teams represented the college, with two of them winning first and third place. Around 27 teams from leading institutions took part in the contest, showcasing strong participation and competitive spirit."
                },


                {
                    title: "Unveiling Potential, Embracing Innovation & Research and Fostering Leadership!",
                    date: "21-08-2023",
                    image: "/images/about/thyagu-open-magazine-articles-mba.webp",
                    content: "An in-depth feature in Open Magazine highlighting Thyagu Valliappa's insights on management education and MBA innovations."
                },
                {
                    title: "Breaking Barriers and Shaping the Futures of Generation Next",
                    date: "20-06-2023",
                    image: "/images/about/breaking-barriers-sona.png",
                    content: "Sona College initiative empowering students through mentorship and seed support for startups across manufacturing and AI."
                },
                {
                    title: "Mr. Thyagu Valliappa assumes Chairmanship for MMA Salem Chapter",
                    date: "13-03-2023",
                    image: "/images/about/thyagu-mma-salem-chapter-chairman-tamil-news.webp",
                    content: "Coverage in Tamil news on Thyagu Valliappa’s appointment as Chairman of the MMA Salem Chapter."
                },
                {
                    title: "The Future of Technology and Engineering Educaion",
                    date: "22-10-2023",
                    image: "/images/about/thyagu-valliappa-open-mag-article-banner.webp",
                    content: "Open Magazine article discussing emerging trends in technology and engineering education with insights from Thyagu Valliappa."
                }
            ]

        },
    ];
    const tabImages: any = {
        aboutus: "/images/banner/about-banners/about-us.webp",
        vision: "/images/banner/about-banners/Vision-mission.webp",
        history: "/images/banner/about-banners/history.webp",
        chairman: "/images/banner/about-banners/chairmans-books.webp",
        management: "/images/banner/about-banners/management-profile.webp"
    };



    const tabVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const currentSection = sections.find((s) => s.id === activeTab);

    useEffect(() => {
        if (!currentSection) return;

        const tabId = currentSection.id;

        // Set document title
        document.title = `About | ${currentSection.title} | Sona School of Business and Management`;

        // Meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = `Information about ${currentSection.title} at Sona School of Business and Management.`;


        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.name = 'robots';
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = 'index, follow';

        // Canonical link
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = `https://www.sonabusinessschool.com/about?tab=${tabId}`;
    }, [currentSection]);


    const cardVariants = {
        hidden: { opacity: 0, y: 32 },
        visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4 } }),
    };

    return (
        <>


            <section className="w-full min-h-screen bg-white py-12 flex flex-col items-center">

                <div className="w-full relative">
                    <AnimatePresence mode="wait">

                        <motion.img
                            key={tabImages[activeTab]}
                            src={tabImages[activeTab] || ""}
                            alt="Corporate Banner"
                            className="w-full h-auto max-h-96 object-contain"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatePresence>

                    <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                            {currentSection?.title}
                        </h1>

                        <div className="mt-3 sm:mt-4 w-full">
                            <nav
                                className="flex flex-wrap text-white text-xs sm:text-sm md:text-base"
                                aria-label="Breadcrumb"
                            >
                                <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                                    {/* Home */}


                                    <li className="inline-flex items-center">
                                        <Link
                                            href="/"
                                            className="hover:text-maroon cursor-pointer transition-colors text-white"
                                        >
                                            Home
                                        </Link>
                                        <span className="text-white mx-1">{">"}</span>
                                    </li>


                                    {/* About */}


                                    <li className="inline-flex items-center">
                                        <Link
                                            href="/about"
                                            className="hover:text-maroon cursor-pointer transition-colors text-white"
                                        >
                                            About
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
                                    className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                                        ? "text-maroon scale-105"
                                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                        }`}
                                >
                                    {/* Icon */}
                                    <Icon
                                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isActive ? "text-maroon" : "text-gray-500"
                                            }`}
                                    />

                                    {/* Text wrapper with underline + arrow */}
                                    <span className="relative flex flex-col items-center">
                                        <span>{sec.title}</span>

                                        {/* Underline */}
                                        <span
                                            className={`block h-0.5 bg-maroon transition-all duration-500 rounded-full ${isActive ? "w-full" : "w-0"
                                                }`}
                                        ></span>

                                        {/* Arrow */}
                                        {isActive && (
                                            <span
                                                className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-maroon -mt-px"
                                            ></span>
                                        )}
                                    </span>
                                </button>




                            );
                        })}
                    </div>
                </div>



                {/* Content */}
                <div className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 relative flex flex-col gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 lg:px-6">
                    <AnimatePresence mode="wait">
                        {/* About Section */}
                        {activeTab === "aboutus" && (
                            <motion.div
                                key="aboutus"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-12 max-w-7xl mx-auto "
                            >
                                {/* Introduction */}
                                <div className="flex flex-col gap-10 pt-4">

                                    {/* What We Do */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.5 }}
                                        variants={fadeUp}
                                        viewport={{ once: true }}
                                        className="bg-[#fefcfa] border-l-[6px] border-maroon rounded-l-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaLightbulb className="text-maroon text-xl" />
                                            <h4 className="text-xl font-semibold text-maroon">WHAT WE DO</h4>
                                        </div>

                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                                            We provide business organisations with the latest technological services and managerial insights fostering transformational strategies, operational performance improvements, competitive advantage and value creation for their customers at the least cost.
                                            <br /><br />
                                            Sona Star Innovation brings robust skills and forward-looking perspectives to solve customer challenges. We use proven knowledge to make recommendations and provide expert guidance to our customers.
                                        </p>
                                    </motion.div>

                                    {/* Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-maroon/30 to-transparent"></div>

                                    {/* IT Revolution */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.6 }}
                                        variants={fadeUp}
                                        viewport={{ once: true }}
                                        className="bg-white border border-maroon/30  p-6 md:p-8 shadow-md hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <RiBuilding4Line className="text-maroon text-xl" />
                                            <h4 className="text-xl font-semibold text-maroon">
                                                Sona Group’s Pioneering Role in India’s IT Revolution
                                            </h4>
                                        </div>

                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify mb-4">
                                            The Sona Group played a foundational role in establishing Bengaluru as the Silicon Valley of India.
                                        </p>

                                        <h5 className="font-semibold text-gray-800 underline mb-2">Key Milestones</h5>

                                        <div className="flex flex-col gap-2">
                                            {milestones.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <FaStar className="text-maroon-300 mt-1  w-4 h-4 text-xs flex-shrink-0" />
                                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">{item}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify mt-4">
                                            This catalytic contribution ignited Bengaluru’s IT boom and continues to shape India’s digital leadership today.
                                        </p>
                                    </motion.div>

                                    {/* Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-maroon/30 to-transparent"></div>

                                    {/* Transformation */}


                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeUp}
                                        viewport={{ once: true }}
                                        className="bg-[#fefcfa] p-6 md:p-8 border border-maroon/30  transition-all"
                                    >
                                        {/* Header */}
                                        <div className="flex items-center gap-2">
                                            <FaRocket className="text-maroon text-xl" />
                                            <h4 className="text-xl font-semibold text-maroon">
                                                Business Transformation Through Technology
                                            </h4>
                                        </div>

                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-2 mb-4 text-justify">
                                            We equip enterprises with:
                                        </p>

                                        {/* Card items */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {focusItems.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    variants={fadeUp}
                                                    className="relative bg-maroon-100 text-gray-700 rounded-t-lg p-3 flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
                                                >
                                                    {/* Icon behind */}
                                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-maroon-300 text-xl z-0">
                                                        {item.icon}
                                                    </div>

                                                    {/* Animated Text */}
                                                    <motion.span
                                                        className="ml-8"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * idx }}
                                                    >
                                                        {item.label}
                                                    </motion.span>
                                                </motion.div>
                                            ))}

                                        </div>
                                    </motion.div>

                                    {/* Divider */}
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-maroon/30 to-transparent"></div>

                                    {/* Advisory */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="bg-white border border-maroon/40 p-6 md:p-8 stransition-all "
                                    >
                                        {/* Header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <MdAnalytics className="text-maroon text-2xl" />
                                            <h4 className="text-xl font-semibold text-maroon">
                                                Advisory Board, Offerings & Industries
                                            </h4>
                                        </div>

                                        {/* Two sections side by side */}
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Focus Areas Section (Left) */}
                                            <motion.div className="flex-1" variants={containerVariants}>
                                                <p className="text-gray-800 font-semibold flex items-center gap-2 mb-3">
                                                    Advisory Board Focus Areas
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {focusAreas.map((item, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={itemVariants}
                                                            className="flex items-center gap-1 text-gray-700 text-sm md:text-base bg-gray-50 px-2 py-1 rounded shadow-sm"
                                                        >
                                                            {item.icon} <span>{item.label}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>

                                            {/* Industries Served Section (Right) */}
                                            <motion.div className="flex-1" variants={containerVariants}>
                                                <p className="text-gray-800 font-semibold flex items-center gap-2 mb-3">
                                                    Industries Served
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {industries.map((industry, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={itemVariants}
                                                            className="flex items-center gap-1 text-gray-700 text-sm md:text-base bg-gray-50 px-2 py-1 rounded shadow-sm"
                                                        >
                                                            {industry.icon} <span>{industry.label}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>

                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}





                        {activeTab === "vision" && (
                            <motion.div
                                key="vision"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto"
                            >

                                {/* VISION SECTION */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="bg-[#fefcfa] border-l-[6px] border-maroon rounded-l-xl p-6 md:p-8 shadow-sm"
                                >
                                    {/* Header */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="flex items-center gap-2 mb-4"
                                    >
                                        <FaEye className="text-maroon text-xl" />
                                        <h3 className="text-xl font-semibold text-maroon tracking-wide">
                                            Vision Statement — SCALE
                                        </h3>

                                    </motion.div>

                                    {/* VISION TEXT (Royal animation) */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="text-gray-700 text-sm md:text-base leading-relaxed"
                                    >
                                        To shape a new generation of tech-enabled, ethical, and globally conscious
                                        business leaders who innovate, transform industries, and create meaningful
                                        impact for society.
                                        {/* <br /><br />
                                        OR
                                        <br /><br />
                                        To be India’s most future-ready tech business school—where talent,
                                        technology, and entrepreneurial thinking converge to build leaders for a
                                        rapidly evolving world. */}
                                    </motion.p>
                                </motion.div>

                                {/* Divider */}
                                <div className="h-[1px] bg-gradient-to-r from-transparent via-maroon/30 to-transparent"></div>

                                {/* MISSION SECTION */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="bg-white border border-maroon/40 p-6 md:p-8 shadow-md"
                                >
                                    {/* Header */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center gap-2 mb-4"
                                    >
                                        <FaBullseye className="text-maroon text-xl" />
                                        <h3 className="text-xl font-semibold text-maroon tracking-wide">
                                            Mission Statement — SCALE
                                        </h3>
                                    </motion.div>

                                    {/* Mission List with Royal Animations */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "<strong>Empower students with industry-relevant, technology-driven management education </strong> by integrating AI, digital transformation, analytics, and emerging technologies into every aspect of learning.",
                                            "<strong>Build a vibrant ecosystem of global collaboration </strong>through partnerships with international universities, industry mentors, thought leaders, and cross-border experiential programs.",
                                            "<strong>Foster a culture of entrepreneurship and innovation </strong> through a world-class startup incubation centre that nurtures founders, accelerates ideas, and builds job creators.",
                                            "<strong>Provide a transformative residential learning environment</strong> that develops leadership, character, creativity, teamwork, and lifelong learning habits.",
                                            "<strong>Bridge academia and industry meaningfully </strong>through live projects, corporate internships, labs, problem-solving workshops, and curricula designed in collaboration with industry experts.",
                                            "<strong>Cultivate ethical, socially responsible leaders</strong> who apply their knowledge to build inclusive, sustainable, and community-focused business solutions."
                                        ].map((text, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-3 bg-gray-50 border border-maroon/20 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                                            >
                                                <FaCheckCircle className="text-maroon w-6 h-6 flex-shrink-0 mt-1" />

                                                {/* Text with HTML + animation */}
                                                <motion.p
                                                    initial={{ opacity: 0, x: 15 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                                                    className="text-gray-700 text-sm md:text-base  text-justify leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: text }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>




                                </motion.div>
                            </motion.div>
                        )}





                        {activeTab === "history" && (
                            <motion.div
                                key="history"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-12 max-w-7xl mx-auto"
                            >

                                <p className="text-justify">The <strong>Sona Group </strong> is steeped in more than <strong>100 years</strong> of success and tradition tracing back to pre-Independence. The group was founded by the doyen of textile industries of the early twentieth century, <strong>Karumuttu Thiagarajar Chettiar.</strong> He oozed passion and patriotism for his motherland and fought for Her freedom along with other great freedom fighters of this nation. Karumuttu Thiagarajar Chettiar’s prominence is etched in the tapestry of our nation by the role he played in the transformation of Mohandas Karamchand Gandhi to Gandhiji, The Father of our Nation. This defining moment played out in 1938, within the walls of Karumuttu Thiagarajar Chettiar’s home when <strong>Gandhiji visited Madurai</strong>. Gandhiji wore his trademark Loin cloth, vowing not to wear a shirt every again after seeing daily wage workers who could not afford one.</p>
                                {/* Section 1: Two Columns (Responsive, Centered) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Left */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] md:w-[295px] md:h-[378px] flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                                            <img
                                                src="/images/about/karumuttu-thiagarajan-chettiar.webp"
                                                alt="Karumuttu Thiagarajar Chettiar"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                            <strong>Karumuttu Thiagarajan Chettiar,</strong> saw the plight of workers in the plantations and fought for their liberation. His idea of liberation was to set people free and even to a higher level of setting minds free through education. He envisioned an Indian nation that would stand tall in the global stage built on its robust educated society with its traditional values and wealth. He set this idea in motion by establishing Thiagarajar Engineering College in Madurai, and Thiagarajar Polytechnic College, Salem, and sowed the seeds of quality technical education in India. Those seeds now stand as a global brand called ‘Sona’ whose roots run deep into education, textile, IT, research, manufacturing, outsourcing, logistics and many more. The Sona Group’s quest to cater quality higher education has led to its banyan tree like growth with Thiagarajar Polytechnic College, Sona College of Technology, Sona School of Business and Management, Sona College of Arts and Science , Sona Valliappa Public School and Sona Medical College of Naturopathy and Yoga.
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] md:w-[295px] md:h-[378px] flex items-center justify-center bg-white rounded-xl shadow-lg overflow-hidden mb-4">
                                            <img
                                                src="/images/about/chockalingam-founder-sonaco.jpg"
                                                alt="Shri M.S. Chokalingam"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                                            <strong>Shri. M.S. Chokalingam,</strong> a textile wizard and philanthropist, who always evinced an abiding interest in professional education as a means to industrial and economic growth and prosperity of the country, founded Sona College of Technology. The vision of Sona’s Founder Chairman was to have a vibrant Engineering and Management Institution that is equal in educational excellence to the best in the world that is why this institution has gathered momentum to reach phenomenal height today.
                                        </p>
                                    </div>
                                </div>


                            </motion.div>
                        )}

                        {activeTab === "management" && (
                            <div className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto">


                                {/* Zig-Zag Cards */}
                                <div className="flex flex-col gap-10">
                                    {managementData.map((member, i) => {

                                        return (
                                            <motion.div
                                                key={member.name}
                                                custom={i}
                                                variants={cardVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true, amount: 0.2 }}
                                                className=" border border-gray-200 shadow-sm overflow-hidden bg-white  py-2"
                                            >
                                                {/* Top: Image + Text */}
                                                <div className="flex flex-col md:flex-row md:gap-x-4">

                                                    <div className="md:w-3/12 w-full p-4 flex items-center justify-center">
                                                        <div className="w-40 h-40 md:w-56 md:h-56 shadow-lg overflow-hidden">
                                                            <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                                                        </div>
                                                    </div>


                                                    <div className="md:w-9/12 w-full p-5 flex flex-col gap-4">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-maroon">{member.name}</h3>
                                                            <p className="text-gray-700 font-medium">{member.role}</p>
                                                            <p className="text-gray-600 mt-2 text-justify">{member.fullBio}</p>
                                                        </div>


                                                        {member.socials?.length > 0 && (
                                                            <div className="flex gap-4">
                                                                {member.socials.map((s: any, idx: number) => {
                                                                    let Icon: any = FiUsers;
                                                                    let hoverColor = "";

                                                                    if (s.type === "linkedin") {
                                                                        Icon = FaLinkedin;
                                                                        hoverColor = "hover:text-[#0A66C2]";
                                                                    } else if (s.type === "twitter") {
                                                                        Icon = FaTwitter;
                                                                        hoverColor = "hover:text-[#1DA1F2]";
                                                                    } else if (s.type === "instagram") {
                                                                        Icon = FaInstagram;
                                                                        hoverColor = "hover:text-[#E1306C]";
                                                                    } else if (s.type === "facebook") {
                                                                        Icon = FaFacebook;
                                                                        hoverColor = "hover:text-[#1877F2]";
                                                                    }

                                                                    return (
                                                                        <a
                                                                            key={idx}
                                                                            href={s.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="group"
                                                                        >
                                                                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100/70 shadow-sm hover:shadow-md transition-all duration-300">
                                                                                <Icon
                                                                                    className={`w-5 h-5 text-slate-500 transition-colors duration-300 ${hoverColor}`}
                                                                                />
                                                                            </div>
                                                                        </a>
                                                                    );
                                                                })}
                                                            </div>
                                                        )}


                                                    </div>
                                                </div>

                                                {member.news?.length > 0 && (
                                                    <NewsCarousel
                                                        news={member.news}
                                                        onSelect={(item) => setSelectedNews({ ...item, author: member.name })}
                                                    />
                                                )}

                                                {/* Bottom: Latest News - full width */}


                                            </motion.div>
                                        );
                                    })}

                                </div>

                                {/* News Modal (selected news only) */}
                                <AnimatePresence>
                                    {selectedNews && (
                                        <motion.div
                                            key="news-modal"
                                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setSelectedNews(null)}
                                        >
                                            <motion.div
                                                initial={{ y: "100%", opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: "100%", opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className={`relative w-full ${isFullscreen ? "h-full max-w-full" : "max-w-2xl"
                                                    } bg-white  shadow-2xl overflow-hidden`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {/* Close button */}
                                                <button
                                                    onClick={() => {
                                                        setSelectedNews(null);
                                                        setIsFullscreen(false);
                                                    }}
                                                    className="absolute top-3 right-3 p-2 rounded-full bg-white/80 text-gray-700 hover:text-maroon shadow z-10"
                                                    aria-label="Close"
                                                >
                                                    <FiX className="w-6 h-6" />
                                                </button>

                                                {/* Fullscreen toggle button (if you want a separate icon) */}
                                                {!isFullscreen && (
                                                    <button
                                                        onClick={() => setIsFullscreen(true)}
                                                        className="absolute top-3 right-14 p-2 rounded-full bg-white/80 text-gray-700 hover:text-maroon shadow z-10"
                                                        aria-label="Fullscreen"
                                                    >
                                                        <FiMaximize className="w-6 h-6" />
                                                    </button>
                                                )}

                                                {/* Image */}
                                                <div className={`${isFullscreen ? "w-full h-full flex items-center justify-center bg-black" : "w-full relative flex justify-center bg-gray-100"}`}>
                                                    <img
                                                        src={selectedNews.image}
                                                        alt={selectedNews.title}
                                                        className={`${isFullscreen ? "w-full h-full object-contain" : "w-full h-auto max-h-[60vh] object-contain"}`}
                                                    />
                                                </div>

                                                {/* Content (hide in fullscreen) */}
                                                {!isFullscreen && (
                                                    <div className="p-5 md:p-6 max-h-[70vh] overflow-y-auto">
                                                        <p className="text-xs text-gray-500 mb-1">By {selectedNews.author}</p>
                                                        <h3 className="text-xl md:text-2xl font-bold text-maroon">{selectedNews.title}</h3>
                                                        <p className="text-xs md:text-sm text-gray-500 mt-1">{selectedNews.date}</p>
                                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3 whitespace-pre-line">
                                                            {selectedNews.content}
                                                        </p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>




                            </div>

                        )
                        }
                        {activeTab === "chairman" && (
                            <motion.div
                                key="chairman"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto"
                            >
                                {/* Books Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                                    {/* Book 1 */}
                                    <div className="flex flex-col items-center gap-4 ">
                                        <a
                                            href="https://www.sonatech.ac.in/about-sona/read/?book=verum-vizhudhugalum"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative   block group"
                                        >
                                            <img
                                                src="/images/about/verum-vizhuthugalum.webp"
                                                alt="Verum Vizhuthugalum"
                                                className=" h-[350px] rounded-md shadow-lg transition-transform duration-300 group-hover:scale-105 object-cover"
                                            />
                                            {/* Spine effect */}
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-300 to-transparent rounded-l-md"></div>
                                            {/* Page edges effect */}
                                            <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-gray-200 to-transparent rounded-r-md"></div>
                                        </a>
                                        <p className="text-gray-800 text-center text-sm md:text-base leading-relaxed">
                                            <strong>Verum Vizhuthugalum:</strong> The Inspiring Biography of Mr. C. Valliappa (Tamil).
                                        </p>
                                    </div>

                                    {/* Book 2 */}
                                    <div className="flex flex-col items-center gap-4 ">
                                        <a
                                            href="https://www.sonatech.ac.in/about-sona/read/?book=the-sona-story"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative   block group"
                                        >
                                            <img
                                                src="/images/about/the-sona-story.webp"
                                                alt="The Sona Story"
                                                className=" h-[350px] transition-transform duration-300 group-hover:scale-105 object-cover"
                                            />
                                            {/* Spine effect */}
                                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-gray-300 to-transparent rounded-l-md"></div>
                                            {/* Page edges effect */}
                                            <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-gray-200 to-transparent rounded-r-md"></div>
                                        </a>
                                        <p className="text-gray-800 text-center text-sm md:text-base leading-relaxed">
                                            <strong>The Sona Story:</strong> The Textile to Tech Journey of Chettiar Industrialist C. Valliappa.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

















                    </AnimatePresence >
                </div >


            </section>

        </>
    );
}
