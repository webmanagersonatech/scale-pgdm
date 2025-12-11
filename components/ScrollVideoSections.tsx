"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaBriefcase, FaChartLine, FaIndustry } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const sections = [
    {
        id: 1,
        tag: "CONSULTING CHALLENGE",
        title: "Solve Real Problems & Learn from Leadership",
        points: [
            "15% of student consultants land PPOs",
            "Over 300+ clients annually",
            "1 in 6 live projects with international firms",
        ],
        video: "/images/handling/download-1.webm",
        icon: <FaBriefcase className="text-white text-[12px]" />,
    },
    {
        id: 2,
        tag: "INVESTMENT FUND",
        title: "Invest From a 5Cr Student Fund",
        points: [
            "10+ investments every year",
            "Trade on stocks, crypto & real estate",
            "65%+ returns generated in 2024–25",
        ],
        video: "/images/handling/download-2.webm",
        icon: <FaChartLine className="text-white text-[12px]" />,
    },
    {
        id: 3,
        tag: "OFF-CAMPUS",
        title: "Visit India's Biggest Factories",
        points: [
            "50+ industrial visits every year",
            "20% engagements convert to consulting projects",
            "Land internships while meeting CEOs",
        ],
        video: "/images/handling/download-3.webm",
        icon: <FaIndustry className="text-white text-[12px]" />,
    },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ScrollVideoSections() {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeVideo, setActiveVideo] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            // Compute scroll progress relative to sections
            sectionRefs.current.forEach((sec, i) => {
                if (!sec) return;
                const rect = sec.getBoundingClientRect();
                const secTop = rect.top;
                const secHeight = rect.height;

                // Define "center range" for video to be active
                const centerStart = windowHeight / 2 - secHeight / 2;
                const centerEnd = windowHeight / 2 + secHeight / 2;

                // If current section is in center range
                if (secTop <= centerEnd && secTop >= centerStart - secHeight) {
                    // Show current section's video
                    setActiveVideo(i);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-gradient-to-t from-[#c7a289] via-[#f5f0eb] to-white
 opacity-90 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold  font-serif">
                        Hands-On Learning:
                    </h2>

                </div>
                <div className="md:hidden space-y-12">
                    {sections.map((sec) => (
                        <motion.div
                            key={sec.id}
                            className="space-y-3"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.3 }}
                        >
                            <div className="text-maroon-300 text-xs tracking-[2px] font-semibold">
                                {sec.tag}
                            </div>

                            <h2 className="text-xl font-bold text-maroon-700">{sec.title}</h2>

                            <ul className="space-y-2 text-gray-700 text-[14px]">
                                {sec.points.map((p, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-maroon-500">•</span>
                                        {p}
                                    </li>
                                ))}
                            </ul>

                            <video
                                src={sec.video}
                                muted
                                playsInline
                                autoPlay
                                loop
                                className="w-full rounded-xl mt-4 shadow"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden md:grid grid-cols-2 gap-10">

                    {/* LEFT TEXT SECTIONS */}
                    <div className="space-y-10 relative">
                        <div className="absolute left-0 top-0 w-[2px] h-full bg-maroon-700/30"></div>

                        {sections.map((sec, i) => (
                            <motion.div
                                key={sec.id}
                                ref={(el) => {
                                    sectionRefs.current[i] = el;
                                }}
                                className="pl-10 relative"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.3 }}
                            >
                                <div className="
                  absolute left-0 top-1
                  w-8 h-8 bg-maroon-600 
                  rounded-full -translate-x-1/2 
                  flex items-center justify-center shadow-md
                ">
                                    {sec.icon}
                                </div>

                                <div className="text-maroon-300 text-[14px] tracking-[2px] font-semibold mt-3">
                                    {sec.tag}
                                </div>

                                <h2 className="text-[17px] font-bold text-maroon-700 mt-1">
                                    {sec.title}
                                </h2>

                                <ul className="space-y-2 mt-4 text-gray-700 text-[14px]">
                                    {sec.points.map((p, i2) => (
                                        <li key={i2} className="flex gap-2">
                                            <span className="text-maroon-500">•</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* RIGHT FIXED VIDEO */}
                    <div
                        className={`
    sticky top-24 h-[70vh] border-x border-maroon-400 flex 
    ${activeVideo === 0 ? "items-start" : ""}
    ${activeVideo === 1 ? "items-center" : ""}
    ${activeVideo === 2 ? "items-end" : ""}
  `}
                    >

                        <div className="relative w-full h-[30vh] border-l border-r border-gray-700/40 overflow-hidden shadow-lg">
                            <motion.video
                                key={activeVideo}
                                src={sections[activeVideo].video}
                                muted
                                autoPlay
                                playsInline
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
