"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, Variants, AnimatePresence } from "framer-motion";
import DiamondStar from "../../components/DiamondStar";
import NewsCarousel from "../../components/NewsCarousel";
import Link from "next/link";

import { FiInfo, FiEye, FiUsers, FiX, FiMaximize } from "react-icons/fi";

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
    | "advisory"


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
        { id: "advisory", title: "Advisory Board", icon: FiUsers }, // added Advisory Board
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
        { icon: <MdBusiness className="text-maroon" />, label: "Automation Strategy", image: "https://img.freepik.com/free-photo/robotic-process-automation-concept-with-bright-light_23-2149311920.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
        { icon: <MdBusiness className="text-maroon" />, label: "GCC Setup & Transformation", image: "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377139.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
        { icon: <FaRocket className="text-maroon" />, label: "Business Growth", image: "https://img.freepik.com/free-photo/business-people-meeting_53876-20927.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_se_enriched&w=740&q=80" },
        { icon: <MdInsights className="text-maroon" />, label: "Innovation Strategy", image: "https://img.freepik.com/premium-photo/businessman-standing-head-table_13339-20093.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_se_enriched&w=740&q=80" },
        { icon: <MdBusiness className="text-maroon" />, label: "Private Equity & Partner Strategy", image: "https://img.freepik.com/premium-photo/company-employees-studying-documents-meeting-office_1358627-55366.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_se_enriched&w=740&q=80" },
        { icon: <MdInsights className="text-maroon" />, label: "Market & Technology Insights", image: "https://img.freepik.com/free-photo/tired-people-working-late-their-office_23-2149006058.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_se_enriched&w=740&q=80" },
    ];
    const industries = [
        { icon: <FaShoppingCart className="text-maroon" />, label: "CPG & Retail", image: "https://img.freepik.com/premium-photo/owner-business-manages-inspect-location-product-transportation-cost-calculation_537132-1806.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
        { icon: <FaLaptopCode className="text-maroon" />, label: "ERP Software", image: "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041853.jpg?t=st=1765429601~exp=1765433201~hmac=78c539b548ddd779cd1d4b17b610f4de6175179e1d8e4ac2a1c486ad0153486a&w=1480" },
        { icon: <FaBuilding className="text-maroon" />, label: "Engineering R&D & Digital Services", image: "https://img.freepik.com/premium-photo/man-hard-hat-is-working-computer-front-blue-background-with-cityscape-b_1316263-154675.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
        { icon: <FaChartLine className="text-maroon" />, label: "Financial Services", image: "https://img.freepik.com/premium-photo/man-is-pressing-button-with-word-finance-it_920245-88.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
        { icon: <FaHospital className="text-maroon" />, label: "Healthcare", image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
        { icon: <FaIndustry className="text-maroon" />, label: "Industrials", image: "https://img.freepik.com/free-photo/environmental-pollution-factory-exterior-night_23-2149057721.jpg?uid=R224290380&ga=GA1.1.1091201869.1763632617&semt=ais_hybrid&w=740&q=80" },
    ];

    // Advisory Board
    const advisoryMembers = [
        { name: "Prof. Atul Sharma", designation: "National Vice President – ISTD", company: "Former SR.GM-HR, BOSCH INDIA", image: "/images/about/advisory/picture1.webp" },
        { name: "Mr. Vanshi Mohan", designation: "Cluster COO", company: "KIMSHEALTH", image: "/images/about/advisory/Picture2.webp" },
        { name: "Prof. Girinarayan", designation: "Former Chairman, NIPM", company: "INSEAD Singapore alumnus", image: "/images/about/advisory/Picture6.webp" },
        { name: "Dr. Mahesh Bhatt", designation: "CEO", company: "Formax Consulting Pvt Ltd", image: "/images/about/advisory/Picture7.webp" },
        { name: "Mr. Suraj Chettri", designation: "Director – HR", company: "Airbus", image: "/images/about/advisory/Picture3.webp" },
        { name: "Dr. Ranjith T.P", designation: "Director, Recruitment – Asia Pacific", company: "VOLVO India", image: "/images/about/advisory/Picture4.webp" },
        { name: "Mr. Glen Dsouza", designation: "VP Human Resources & Head ER", company: "Air India Limited", image: "/images/about/advisory/Picture5.webp" },
        { name: "Mr. Jays Chandy", designation: "Chief People Officer", company: "CensaNext", image: "/images/about/advisory/Picture8.webp" },
        { name: "Mr. Alex Mathews", designation: "Chief HR Officer", company: "KPN Fresh – West Bridge Capital", image: "/images/about/advisory/Picture9.webp" },
        { name: "Mr. Vamshi Guntha", designation: "Founder & CEO", company: "Propl Inventions Ltd (Business Analytics)", image: "/images/about/advisory/Picture10.webp" },
    ];

    // Industry Advisory Council
    const industryAdvisoryMembers = [
        { name: "Mr. Srikanth", designation: "GM & Head – HR", company: "SIEMENS Technology India", image: "/images/about/advisory/Picture11.webp" },
        { name: "Mr. Rathod", designation: "Consultant", company: "Retail Management", image: "/images/about/advisory/Picture12.webp" },
        { name: "Mr. Benny Augustine", designation: "Director - Compliance & Ethics", company: "Global Head - Center of Excellence, Conflicts of Interest", image: "/images/about/advisory/Picture14.webp" },
        { name: "Mr. Sarang Ayachit", designation: "Program Lead - HR Process Automation and Digitalization", image: "/images/about/advisory/Picture13.webp" },
    ];

    // Governing Council
    const governingCouncilMembers = [
        { name: "Mr. Kamal Bali", designation: "MD Volvo", image: "/images/about/advisory/Picture16.webp" },
        { name: "Dr. Augustus (Augie) Azariah", designation: "Regional Director, Kyndryl India", image: "/images/about/advisory/Picture15.webp" },
        { name: "Madhusudan Murthy", designation: "Senior Vice President of Engineering, GlobalLogic", image: "/images/about/advisory/Picture17.webp" },
        { name: "Viswanath PS", designation: "Managing Director & CEO, Randstad India", image: "/images/about/advisory/Picture18.webp" },
        { name: "Dr. Akali Fulma", designation: "Director International Relation, University of West Alabama", image: "/images/about/advisory/Picture19.webp" },
    ];

    // Academic Advisory Council
    const academicAdvisoryMembers = [
        { name: "Dr. M.P. Ganesh Ph.D.", designation: "Head (EM) & Associate Professor, IIT- Hyderabad", image: "/images/about/advisory/Picture20.webp" },
        { name: "Dr. Virajanand Varma", designation: "Professor, IIM- Ranchi", image: "/images/about/advisory/Picture21.webp" },
        { name: "Dr. I Lokananda Reddy", designation: "Professor, Hyderabad Central University", image: "/images/about/advisory/Picture22.webp" },
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
            role: "Chairman ",
            image: "/images/about/Valliappa.jpg",
            fullBio:
                "Mr. C. Valliappa , is the Chairman of this institution and the illustrious son of Founder Chairman. His passion and commitment to the cause of education, able guidance and devoted care of the various needs of this institution has established SONA as a  veritable haven of educational brilliance which is moving towards greater heights of achievement and glory.",
            socials: [],

        },

        {
            name: "Mr. Thyagu Valliappa",
            role: "Founder & Chief Mentor",
            image: "/images/about/Thyagu-Valliappa1.jpg",
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
                    title: "The Future of Technology and Engineering Educaion",
                    date: "22-10-2023",
                    image: "/images/about/thyagu-valliappa-open-mag-article-banner.webp",
                    content: "Open Magazine article discussing emerging trends in technology and engineering education with insights from Thyagu Valliappa."
                }
            ]

        },
    ];
    const tabImages: any = {
        aboutus: "/images/banner/about-banners/6.webp",
        vision: "/images/banner/about-banners/Vision-mission.webp",
        history: "/images/banner/about-banners/history.webp",
        chairman: "/images/banner/about-banners/chairmans-books.webp",
        management: "/images/banner/about-banners/1.webp",
        advisory: "/images/banner/about-banners/8.webp"
    };
    const MemberCard = ({ member }: { member: any }) => (
        <motion.div

            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-[radial-gradient(circle,#f5d6c6_0%,#C9A683_60%,#A88562_100%)] bg-maroon-100 rounded-xl shadow-md overflow-hidden"
        >
            <div className="h-44 mt-4 w-full  flex justify-center items-center">
                <img
                    src={member.image}
                    className="h-44 object-contain object-center"
                />
            </div>





            <div className="p-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-maroon-800 font-bold text-[15px]">{member.name}</h3>

                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            <FaLinkedin className="text-blue-500 text-lg hover:text-blue-700 transition" />
                        </a>
                    )}
                </div>

                <p className="text-sm text-gray-600 border-t border-maroon mt-1 pt-1">
                    {member.title}
                    {member.designation && <p className="text-[13px] text-maroon-800">{member.designation}</p>}
                    {member.company && <p className="text-[12px] text-maroon-800">{member.company}</p>}
                </p>
            </div>
        </motion.div>
    );





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


            <section className="w-full min-h-screen bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289] py-12 flex flex-col items-center">

                <div className="w-full relative">


                    <AnimatePresence mode="wait">
                        <motion.img
                            key={tabImages[activeTab]}
                            src={tabImages[activeTab] || ""}
                            alt="Corporate Banner"
                            className="w-full h-full object-contain"
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
                                            className=" cursor-pointer transition-colors text-white"
                                        >
                                            Home
                                        </Link>
                                        <span className="text-white mx-1">{">"}</span>
                                    </li>


                                    {/* About */}


                                    <li className="inline-flex items-center">
                                        <Link
                                            href="/about"
                                            className="cursor-pointer transition-colors text-white"
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
                                    className={`relative flex items-center gap-2 px-3 sm:px-4 py-1 text-sm sm:text-base font-medium rounded-md transition-all duration-500 transform ${isActive
                                        ? "text-maroon scale-105"
                                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
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
                                className="p-6 md:p-10 flex flex-col gap-12 max-w-7xl mx-auto "
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
                                        className="  border-maroon  transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <FaLightbulb className="text-maroon text-xl" />
                                            <h4 className="text-[17px] font-semibold text-maroon">WHAT WE DO</h4>
                                        </div>

                                        <p className="text-gray-700 text-[14px] leading-relaxed text-justify">
                                            We provide business organisations with the latest technological services and managerial insights fostering transformational strategies, operational performance improvements, competitive advantage and value creation for their customers at the least cost.
                                            <br /><br />
                                            Sona Star Innovation brings robust skills and forward-looking perspectives to solve customer challenges. We use proven knowledge to make recommendations and provide expert guidance to our customers.
                                        </p>
                                    </motion.div>



                                    {/* IT Revolution */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        transition={{ duration: 0.6 }}
                                        variants={fadeUp}
                                        viewport={{ once: true }}
                                        className="  transition-all"
                                    >
                                        <div className="flex items-center gap-2 mb-3">
                                            <RiBuilding4Line className="text-maroon text-xl" />
                                            <h4 className="text-[17px] font-semibold text-maroon">
                                                Sona Group’s Pioneering Role in India’s IT Revolution
                                            </h4>
                                        </div>

                                        <p className="text-gray-700 text-[14px] leading-relaxed text-justify mb-4">
                                            The Sona Group played a foundational role in establishing Bengaluru as the Silicon Valley of India.
                                        </p>

                                        <h5 className="font-semibold text-gray-800 underline mb-2">Key Milestones</h5>

                                        <div className="flex flex-col gap-2">
                                            {milestones.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <span className="flex items-center justify-center w-5 h-5  text-maroon-300 text-[12px] font-bold">
                                                        ✓
                                                    </span>

                                                    <p className="text-gray-700 text-[14px] leading-relaxed text-justify">{item}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-gray-700 text-[14px] leading-relaxed text-justify mt-4">
                                            This catalytic contribution ignited Bengaluru’s IT boom and continues to shape India’s digital leadership today.
                                        </p>
                                    </motion.div>



                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeUp}
                                        viewport={{ once: true }}
                                        className="    transition-all"
                                    >
                                        {/* Header */}
                                        <div className="flex items-center gap-2">
                                            <FaRocket className="text-maroon text-xl" />
                                            <h4 className="text-[17px] font-semibold text-maroon">
                                                Business Transformation Through Technology
                                            </h4>
                                        </div>

                                        <p className="text-gray-700 text-[14px] leading-relaxed mt-2 mb-4 text-justify">
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
                                                        className="ml-8 text-[14px]"
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



                                    {/* Advisory */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className=" transition-all space-y-16"
                                    >
                                        {/* Advisory Board Focus Areas Section */}
                                        <motion.div variants={containerVariants} className="space-y-6">
                                            {/* FIRST TITLE */}
                                            <div className="flex items-center gap-2">
                                                <FaRocket className="text-maroon text-xl" />
                                                <h4 className="text-[17px] font-semibold text-maroon">
                                                    Advisory Board, Offerings & Industries                                            </h4>
                                            </div>
                                            <p className="text-gray-800 font-semibold text-[15px]">
                                                Advisory Board Focus Areas
                                            </p>

                                            {/* SECOND LIST + IMAGES */}
                                            <div className="flex flex-col md:flex-row gap-6">
                                                {/* LEFT LIST */}
                                                <motion.div className="flex-1 flex flex-col gap-2">
                                                    {focusAreas.map((item, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={itemVariants}
                                                            className="flex items-center gap-2 text-gray-700 text-sm px-3 py-2 border-b border-maroon-300"
                                                        >
                                                            {item.icon} <span>{item.label}</span>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>

                                                {/* RIGHT IMAGES */}
                                                <motion.div className="flex-1 flex flex-wrap gap-2">
                                                    {focusAreas.map((item, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={itemVariants}
                                                            className="min-w-[30%] overflow-hidden rounded shadow"
                                                            style={{ flexBasis: 'calc(33% - 0.5rem)' }}
                                                        >
                                                            <img
                                                                src={item.image}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </motion.div>

                                        {/* Industries Served Section */}
                                        <motion.div variants={containerVariants} className="space-y-6">
                                            {/* FIRST TITLE */}
                                            <p className="text-gray-800 font-semibold text-[15px]">
                                                Industries Served
                                            </p>

                                            {/* SECOND LIST + IMAGES */}
                                            <div className="flex flex-col md:flex-row gap-6">
                                                {/* LEFT LIST */}
                                                <motion.div className="flex-1 flex flex-col gap-2">
                                                    {industries.map((item, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={itemVariants}
                                                            className="flex items-center gap-2 text-gray-700 text-sm  px-3 py-2 border-b border-maroon-300"
                                                        >
                                                            {item.icon} <span>{item.label}</span>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>

                                                {/* RIGHT IMAGES */}
                                                <motion.div className="flex-1 flex flex-wrap gap-2">
                                                    {industries.map((item, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            variants={itemVariants}
                                                            className="min-w-[30%] overflow-hidden rounded shadow"
                                                            style={{ flexBasis: 'calc(33% - 0.5rem)' }}
                                                        >
                                                            <img
                                                                src={item.image}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </div>
                                        </motion.div>
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
                                className=" rounded-2xl p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto"
                            >

                                {/* VISION SECTION */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}

                                >
                                    {/* Header */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="flex items-center gap-2 mb-4"
                                    >
                                        <FaEye className="text-maroon text-xl" />
                                        <h3 className="text-[17px] font-semibold text-maroon tracking-wide">
                                            Vision
                                        </h3>

                                    </motion.div>

                                    {/* VISION TEXT (Royal animation) */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, ease: "easeOut" }}
                                        className="text-gray-700 text-[14px] leading-relaxed"
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



                                {/* MISSION SECTION */}
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}

                                >
                                    {/* Header */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center gap-2 mb-4"
                                    >
                                        <FaBullseye className=" text-maroon text-xl" />
                                        <h3 className="text-[17px] font-semibold text-maroon tracking-wide">
                                            Mission
                                        </h3>
                                    </motion.div>

                                    {/* Mission List with Royal Animations */}
                                    <div className="grid grid-cols-1  gap-4">
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
                                                className="flex items-start gap-3   transition-all"
                                            >
                                                <span className="flex items-center justify-center w-6 h-6  text-maroon-300 text-[14px] font-bold ">
                                                    ✓
                                                </span>

                                                {/* Text with HTML + animation */}
                                                <motion.p
                                                    initial={{ opacity: 0, x: 15 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                                                    className="text-gray-700 text-[14px]  text-justify leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: text }}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>




                                </motion.div>
                            </motion.div>
                        )}


                        {activeTab === "advisory" && (
                            <motion.div
                                key="advisory"
                                variants={tabVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="p-6 md:p-10 flex flex-col gap-12 max-w-7xl mx-auto"
                            >
                                <h2 className="text-xl font-bold text-maroon-800">Advisory Board</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {advisoryMembers.map((member, idx) => (
                                        <MemberCard key={idx} member={member} />
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold text-maroon-800 ">Industry Advisory Council</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {industryAdvisoryMembers.map((member, idx) => (
                                        <MemberCard key={idx} member={member} />
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold text-maroon-800 ">Governing Council</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {governingCouncilMembers.map((member, idx) => (
                                        <MemberCard key={idx} member={member} />
                                    ))}
                                </div>

                                <h2 className="text-xl font-bold text-maroon-800 ">Academic Advisory Council</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                    {academicAdvisoryMembers.map((member, idx) => (
                                        <MemberCard key={idx} member={member} />
                                    ))}
                                </div>
                            </motion.div>

                        )}







                        {activeTab === "management" && (
                            <div className=" p-6 md:p-10 flex flex-col gap-10 max-w-7xl mx-auto">


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
                                                className="overflow-hidden  py-2"
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
                                                            <h3 className="text-[17px] font-bold text-maroon">{member.name}</h3>
                                                            <p className="text-gray-700 font-medium">{member.role}</p>
                                                            <p className="text-gray-600 mt-2 text-[14px] text-justify">{member.fullBio}</p>
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
                                                                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-maroon/20 shadow-sm hover:shadow-md transition-all duration-300">
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


















                    </AnimatePresence >
                </div >


            </section>

        </>
    );
}
