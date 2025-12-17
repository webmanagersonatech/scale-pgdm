"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaUserTie, FaChartLine, FaBullhorn, FaDollarSign, FaCogs, FaBriefcase, FaLightbulb, FaUsers } from "react-icons/fa";
import { useEffect } from "react";
import Link from "next/link";



export default function SSBMPage() {

    useEffect(() => {
        // Page Title
        document.title = "Why Choose Sona | Sona School of Business and Management";

        // Meta Description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.content =
            "Discover why Sona School of Business and Management stands out with academic excellence, industry exposure, modern infrastructure, and outstanding placement opportunities.";

        // Robots Meta
        let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!metaRobots) {
            metaRobots = document.createElement("meta");
            metaRobots.name = "robots";
            document.head.appendChild(metaRobots);
        }
        metaRobots.content = "index, follow";

        // Canonical Link
        let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.rel = "canonical";
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = "https://www.sonabusinessschool.com/why-choose-sona";

    }, []);
    const topics = [
        { title: "Generative AI", icon: <FaRobot size={20} /> },
        { title: "HR", icon: <FaUserTie size={20} /> },
        { title: "Data Analytics", icon: <FaChartLine size={20} /> },
        { title: "Marketing", icon: <FaBullhorn size={20} /> },
        { title: "Finance", icon: <FaDollarSign size={20} /> },
        { title: "Operations", icon: <FaCogs size={20} /> },
        { title: "Business Start-ups", icon: <FaLightbulb size={20} /> },
    ];
    const logos = [
        { name: "ey", src: "/images/why-choose-sona/logo1.png" },
        { name: "tcs", src: "/images/why-choose-sona/logo2.webp" },
        { name: "itc", src: "/images/why-choose-sona/logo3.webp" },
        { name: "mrf", src: "/images/why-choose-sona/logo4.webp" },
        { name: "axis", src: "/images/why-choose-sona/logo5.webp" },
        { name: "hdfc", src: "/images/why-choose-sona/logo6.webp" },
        { name: "tata", src: "/images/why-choose-sona/logo7.webp" },
        { name: "amazon", src: "/images/why-choose-sona/logo8.webp" },
        { name: "zoho", src: "/images/why-choose-sona/logo2.webp" },
        { name: "ramco", src: "/images/why-choose-sona/logo9.png" },
        { name: "kr", src: "/images/why-choose-sona/logo10.png" },
        { name: "more", src: "/images/why-choose-sona/logo11.png" }
    ];
    const cards = [
        { title: "Jobs", desc: "Building strong industry-ready professional skills.", icon: <FaBriefcase size={24} color="#0B3370" /> },
        { title: "Entrepreneurship", desc: "Empowering you to create and scale your own venture.", icon: <FaLightbulb size={24} color="#0B3370" /> },
        { title: "Family Business", desc: "Developing leadership to grow and modernize enterprises.", icon: <FaUsers size={24} color="#F9C349" /> },
    ];
    return (
        <section className="w-full min-h-screen bg-gray-50 pt-12  flex flex-col items-center">

            <div className="w-full relative">
                <div className="w-full h-56 sm:h-64 md:h-80 lg:h-96 relative">
                    <AnimatePresence mode="wait">
                        <motion.video
                            src="/images/why-choose-sona/CAMPUS.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                    </AnimatePresence>

                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
                </div>




                <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                        Why Choose Sona
                    </h1>

                    <div className="mt-3 sm:mt-4 w-full">
                        <nav
                            className="flex flex-wrap text-white text-xs sm:text-sm md:text-base"
                            aria-label="Breadcrumb"
                        >
                            <ol className="inline-flex flex-wrap items-center space-x-1 sm:space-x-2">
                                <li className="inline-flex items-center">
                                    <Link
                                        href="/"
                                        className="hover:text-maroon cursor-pointer transition-colors text-white"
                                    >
                                        Home
                                    </Link>
                                    <span className="text-white mx-1">{">"}</span>
                                </li>

                                <li className="inline-flex items-center text-yellow-500 font-semibold">
                                    Why Choose Sona

                                </li>

                            </ol>
                        </nav>
                    </div>
                </div>
            </div>


            {/* ================= Content Section ================= */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* PAGE FADE-IN WRAPPER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >

                    {/* ===================== TITLE ===================== */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-bold text-center mt-10"
                        style={{ color: "#0B3370" }}
                    >
                        Sona School of Business & Management (SSBM)
                    </motion.h1>

                    {/* GOLD LINE */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 96, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-1 mx-auto rounded-full mt-3"
                        style={{ backgroundColor: "#F9C349" }}
                    />

                    {/* INTRO */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-6 text-gray-700 text-lg text-center max-w-2xl mx-auto leading-relaxed"
                    >
                        A premier business school committed to excellence in management education.
                    </motion.p>

                    {/* ===================== ABOUT SECTION ===================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-12 p-6 rounded-xl shadow-sm bg-white border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold mb-2" style={{ color: "#0B3370" }}>
                            About SSBM
                        </h2>
                        <div className="w-16 h-1 rounded-full mb-4" style={{ backgroundColor: "#F9C349" }} />

                        <p className="text-gray-700 leading-relaxed mb-3">
                            Sona School of Business and Management (SSBM), a proud constituent of the esteemed <span className="text-[#0B3370] font-medium">Sona  Valliappa Group of Institutions in Salem,</span> Tamil Nadu, has established itself as a prominent centre for professional education. Rooted in the legacy of Late <span className="text-[#0B3370] font-medium">Shri M.S. Chockalingam—visionary textile industrialist </span> and philanthropist—the institution upholds his belief that high-quality professional education is vital for India’s industrial and economic progress.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-3">
                            Emerging from the strong academic foundation of Sona College of Technology, SSBM has matured into a vibrant business school known for excellence in <span className="text-[#0B3370] font-medium"> teaching, research, consultancy, and training.</span> With a global outlook and steadfast commitment to academic quality, the school delivers value-driven management education on par with top institutions, while benefiting from the supportive environment of a smaller, student-friendly city
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Under the leadership of <span className="text-[#0B3370] font-medium">Mr. C. Valliappa,</span> Chairman of the Sona Valliappa Group, SSBM continues to realize its founding vision by offering world-class management education. Over the years, it has grown into a premier business school recognized for its collaborative faculty–student culture, pursuit of excellence, and managerial grooming aligned with global corporate standards.
                        </p>
                    </motion.div>

                    {/* ===================== JEF PROGRAM ===================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="mt-10"
                    >
                        <h2 className="text-2xl font-bold text-center" style={{ color: "#0B3370" }}>
                            MBA Program Supporting Jobs, Entrepreneurship & Family Business (JEF)
                        </h2>

                        <div className="w-20 h-1 mx-auto rounded-full mt-3 mb-6" style={{ backgroundColor: "#F9C349" }} />

                        <p className="text-gray-700 leading-relaxed bg-white border border-gray-100 p-6 rounded-xl text-sm md:text-base">
                            The MBA program at Sona is meticulously designed to support diverse career
                            aspirations across
                            <span className="font-semibold text-[#0B3370]"> Jobs</span>,
                            <span className="font-semibold text-[#0B3370]"> Entrepreneurship</span>, and
                            <span className="font-semibold text-[#0B3370]"> Family Business (JEF)</span>.
                            The curriculum is strengthened through workshops, guest lectures, CEO interactions,
                            and extensive industry engagement, including projects sponsored by MSMEs and corporates.
                            Students also benefit from expert mentoring and participate in major events such as
                            <span className="font-semibold text-[#0B3370]"> Sales and Marketing (SAM) Summits</span>,
                            <span className="font-semibold text-[#0B3370]"> Logistics and Lean Six Sigma Conclaves</span>, and
                            <span className="font-semibold text-[#0B3370]"> Business Analytics Forums</span>—
                            ensuring comprehensive development of their JEF competencies.
                        </p>
                    </motion.div>

                    {/* ===================== JEF CARDS ===================== */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
                    >
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 bg-white border border-gray-200 shadow-sm cursor-pointer hover:border-[#F9C349] transition"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    {card.icon}
                                    <h3 className="text-xl font-semibold" style={{ color: "#0B3370" }}>
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">{card.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ===================== SCALE ===================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-10 bg-white p-10 rounded-xl border border-gray-100 shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-[#0B3370]">Certifications & Advanced Learning (SCALE)</h2>
                        <div className="w-24 h-1 bg-[#F9C349] rounded-full mt-2 mb-6" />

                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            In collaboration with
                            <span className="font-semibold text-[#0B3370]">
                                {" "}SCALE (Sona Centre for Advanced Learning & Entrepreneurship)
                            </span>,
                            the Sona Finishing School Programme offers industry and global certifications in
                            <span className="font-semibold text-[#0B3370]"> Generative AI for Business</span>,
                            as well as domain specializations in
                            <span className="font-semibold text-[#0B3370]"> HR</span>,
                            <span className="font-semibold text-[#0B3370]"> Data Analytics</span>,
                            <span className="font-semibold text-[#0B3370]"> Marketing</span>,
                            <span className="font-semibold text-[#0B3370]"> Finance</span>,
                            <span className="font-semibold text-[#0B3370]"> Operations</span>,
                            and <span className="font-semibold text-[#0B3370]"> Business Start-ups</span>.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {topics.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 border rounded-xl text-sm font-semibold text-[#0B3370] shadow-sm hover:bg-white hover:shadow-md transition"
                                >
                                    {item.icon}
                                    {item.title}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ===================== MAT / SONAGARAGE ===================== */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-10 bg-white p-10 rounded-xl shadow-sm border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-[#0B3370]">Entrepreneurship & Industry Exposure</h2>
                        <div className="w-24 h-1 bg-[#F9C349] rounded-full mt-2 mb-6" />

                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            Supported by the Management and Technology (MAT) platform and the Sona Garage
                            incubation centre, the institute has nurtured numerous start-ups and family
                            business ventures. This industry-focused, experiential learning ecosystem has
                            enabled Sona MBA graduates to secure placements in leading national and
                            international organizations
                        </p>

                        {/* LOGO GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
                            {logos.map((logo, i) => (
                                <motion.div
                                    key={logo.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="bg-gray-50 p-4 border rounded-xl shadow-sm flex justify-center items-center hover:shadow-md hover:bg-white transition-all duration-300"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="h-10 object-contain opacity-90"
                                    />
                                </motion.div>
                            ))}
                        </div>

                    </motion.div>

                    {/* ===================== CTA ===================== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center my-10"
                    >
                        <h2 className="text-3xl font-bold mb-3 text-[#0B3370]">
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
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.div>

                        <a
                            href="https://www.sonabusinessschool.com/online-application?inst_id=ZFSQSGGCPYXQ9589"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4  items-center gap-3 
      bg-gradient-to-r from-blue-600 to-maroon
      text-white font-semibold
      px-8 py-3 rounded-xl shadow-md
      hover:shadow-lg transition-transform duration-300"
                            >
                                Apply Now
                            </motion.button>
                        </a>

                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}