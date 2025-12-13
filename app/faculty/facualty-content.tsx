"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { masters, visiting, parttime } from "../../data/facultydataset";
import { FaLinkedin } from "react-icons/fa";

export default function FacultyPage() {
    const tabs = [
        { label: "Faculty-in-Residence", key: "masters", data: masters },
        { label: "International Resource Faculty", key: "visiting", data: visiting },
        { label: "Excellent Research Faculty", key: "parttime", data: parttime },
    ];
    
    const [activeTab, setActiveTab] = useState("masters");
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineLeft, setUnderlineLeft] = useState(0);

    const tabRefs = useRef<{ [key: string]: HTMLElement | null }>({});
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };
    const activeData = tabs.find(t => t.key === activeTab)?.data || [];


    useEffect(() => {
        const el = tabRefs.current[activeTab];
        if (el) {
            setUnderlineWidth(el.offsetWidth);
            setUnderlineLeft(el.offsetLeft);
        }
    }, [activeTab]);


    return (
        <section className="py-10  bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289]">

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-classy italic text-maroon-800">
                    Meet <span className="font-bold">The Faculty</span>
                </h2>
            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto mt-10 px-4 relative border-b">

                <div className="flex justify-center">
                    <div
                        className="inline-flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14 text-[14px] font-medium relative  w-fit"
                    >
                        {tabs.map((t) => (
                            <button
                                key={t.key}
                                ref={(el) => {
                                    tabRefs.current[t.key] = el;
                                }}

                                onClick={() => setActiveTab(t.key)}
                                className={`pb-3 whitespace-nowrap transition ${activeTab === t.key
                                    ? "text-maroon-700 font-semibold"
                                    : "text-gray-600"
                                    }`}
                            >
                                {t.label}
                            </button>
                        ))}

                        {/* Moving underline */}
                        <motion.div
                            className="absolute bottom-0 h-[3px] bg-maroon-700 rounded-full"
                            animate={{
                                width: underlineWidth,
                                left: underlineLeft,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 26,
                            }}
                        />
                    </div>
                </div>

            </div>



            {/* Faculty Cards */}
            <div className="max-w-7xl mx-auto px-6 py-10">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.35 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
                    >
                        {activeData.map((f, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5 }}
                                className="bg-maroon-100 rounded-xl shadow-md overflow-hidden"
                            >
                                <img
                                    src={f.image}
                                    className="h-44 w-full bg-[radial-gradient(circle,#f5d6c6_0%,#C9A683_60%,#A88562_100%)]
                        object-contain bg-transparent"
                                />



                                <div className="p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-maroon-800 font-bold text-[15px]">{f.name}</h3>

                                        {f.linkedin && (
                                            <a
                                                href={f.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center"
                                            >
                                                <FaLinkedin className="text-blue-500 text-lg hover:text-blue-700 transition" />
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-600 border-t border-maroon mt-1 pt-1">
                                        {f.title}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

            </div>

        </section>
    );
}
