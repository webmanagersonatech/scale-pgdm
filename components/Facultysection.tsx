"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const facultyData40 = [
    { name: "Dr. M. Venugopal", image: "/images/faculty/venugopal-1.webp", title: "Vice President", logo: "/images/logo.webp", linkedin: "https://www.linkedin.com/in/johndoe" },
    { name: "Dr. Anna Smith", image: "/images/faculty/image-3.webp", title: "Professor", logo: "/images/logo.webp", linkedin: "https://www.linkedin.com/in/johndoe" },
    { name: "Dr. Michael Lee", image: "/images/faculty/image-4.webp", title: "Professor", logo: "/images/logo.webp", linkedin: "https://www.linkedin.com/in/johndoe" },
];

const facultyData30 = [
    {
        name: "Dr. Arvind Kumar",
        image: "/images/faculty/prof-4.png",
        title: "Professor",
        logo: "/images/logo.webp",
        linkedin: "https://www.linkedin.com/in/arvindkumar"
    },
    {
        name: "Ms. Neha Ramesh",
        image: "/images/faculty/prof-4.png",
        title: "Assistant Professor",
        logo: "/images/logo.webp",
        linkedin: "https://www.linkedin.com/in/neharamesh"
    },
    {
        name: "Dr. Karthik S.",
        image: "/images/faculty/prof-4.png",
        title: "Senior Lecturer",
        logo: "/images/logo.webp",
        linkedin: "https://www.linkedin.com/in/karthiks"
    }

];

const facultyRemaining30 = [
    {
        name: "Dr. Riya Mehta",
        image: "/images/faculty/prof-4.png",
        title: "Assistant Professor",
        logo: "/images/logo.webp",
        linkedin: "https://www.linkedin.com/in/riyamehta"
    },
    {
        name: "Prof. Aditya Varma",
        image: "/images/faculty/prof-4.png",
        title: "Professor",
        logo: "/images/logo.webp",
        linkedin: "https://www.linkedin.com/in/adityavarma"
    },
    {
        name: "Dr. Sneha Kapoor",
        image: "/images/faculty/prof-4.png",
        title: "Associate Professor",
        logo: "/images/logo.webp",
        linkedin: "https://www.linkedin.com/in/snehakapoor"
    }

];

export default function FacultyGrid() {

    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;

            sectionRefs.current.forEach((sec, idx) => {
                if (!sec) return;
                const rect = sec.getBoundingClientRect();

                const start = windowHeight / 2 - rect.height / 2;
                const end = windowHeight / 2 + rect.height / 2;

                if (rect.top >= start - rect.height && rect.top <= end) {
                    setActiveCategory(idx);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const dataList =
        activeCategory === 0 ? facultyData40 :
            activeCategory === 1 ? facultyData30 :
                facultyRemaining30;

    const timelineItems = [
        { num: "40", title: "Industry Practitioners", desc: "Leaders & CEOs sharing real-world insights" },
        { num: "30", title: "Full-Time Faculty", desc: "Dedicated educators shaping learning" },
        { num: "30", title: "Visiting Faculty", desc: "Stanford, Harvard-level masters" },
    ];

    return (
        <div className="
 py-10">
            <div className="max-w-7xl mx-auto  gap-10 md:px-10 px-4">
                <div className="flex justify-between items-start mb-8">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-500">
                        Faculty Model at <em className="text-maroon-400">SSBM</em>
                    </h2>

                    <Link
                        href="/faculty"

                    >
                        <button
                            className="flex items-center gap-2 border border-maroon-700  text-[15px]  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[radial-gradient(circle_at_top_left,#f5e9e2_0%,#e2c7b7_40%,#b88b6b_80%,#65230b_100%)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
                        >
                            See all our Faculty
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
                </div>
                {/* LEFT FIXED LIST */}
                <div className="grid md:grid-cols-5">
                    <div className="col-span-2 relative space-y-10">

                        {timelineItems.map((item, i) => (
                            <div
                                key={i}
                                ref={(el) => {
                                    sectionRefs.current[i] = el;
                                }}

                                className={`
                                transition-all duration-300 cursor-pointer
                                ${activeCategory === i ? "scale-110 text-maroon-600" : "opacity-40"}
                            `}
                            >
                                <div className="flex items-stretch gap-3">
                                    <div className="flex items-center font-classy font-bold text-maroon-400 leading-none
                             text-4xl sm:text-5xl md:text-6xl">
                                        {item.num}
                                    </div>
                                    <div className="flex flex-col gap-[2px] leading-none">

                                        <span className="text-[14px] text-maroon leading-none block">
                                            %
                                        </span>

                                        <span className="text-[14px]  text-grayText leading-none block">
                                            {item.title}
                                        </span>

                                        <span className="text-[14px] text-maroon-300 leading-none block">
                                            {item.desc}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT CHANGING GRID */}
                    <motion.div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
                        {dataList.map((f, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.5 }}
                                className="bg-maroon-100 rounded-xl shadow-md overflow-hidden"
                            >
                                <img
                                    src={f.image}
                                    className="h-44 w-full bg-[radial-gradient(circle,#f5d6c6_0%,#e0a68b_60%,#c9745b_100%)]
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
                </div>

            </div>
        </div>
    );
}
