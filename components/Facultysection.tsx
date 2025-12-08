"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const facultyData = [
    {
        name: "Dr. Sowmya Narayanan",
        title: "Professor ",
        university: "Sona School of Business & Management",
        logo: "https://www.sonabusinessschool.com/images/about/logo.webp",
        image: "/images/faculty/image-4.webp",
    },
    {
        name: "Sheelan Misra",
        title: "Professor ",
        university: "Sona School of Business & Management",
        logo: "https://www.sonabusinessschool.com/images/about/logo.webp",
        image: "/images/faculty/image-3.webp",
    },

];

export default function FacultyGrid() {
    return (
        <div className="bg-gray-50 text-maroon-100 py-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

                {/* HEADER */}
                <div className="flex justify-between items-start mb-12">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-500">
                        Faculty Model at <em className="text-maroon-400">Masters’ Union</em>
                    </h2>
                    <button className="flex items-center gap-2 border border-maroon-400 text-maroon-400 px-4 py-2 rounded-full hover:bg-maroon-400 hover:text-maroon-900 transition">
                        See all our Masters <FaArrowRight />
                    </button>
                </div>

                <div className="grid md:grid-cols-5 gap-10">

                    {/* LEFT SIDE TIMELINE (Animated) */}
                    <div className="col-span-2 flex flex-col justify-start items-start relative ">

                        {[
                            { num: "40%", title: "Industry Practitioners", desc: "Leaders and entrepreneurs sharing real-world insights" },
                            { num: "30%", title: "Full-Time Faculty", desc: "Dedicated educators shaping core learning" },
                            { num: "30%", title: "Visiting Faculty", desc: "Professors from Harvard, Stanford and Wharton" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="mb-12 last:mb-0 relative "
                                variants={fadeLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                            >
                                <div className="text-3xl font-bold text-maroon-400">{item.num}</div>
                                <div className="text-lg mt-1 text-grayText">{item.title}</div>
                                <div className="text-[15px] mt-1 text-maroon-300 border-b border-maroon">{item.desc}</div>
                            </motion.div>
                        ))}

                    </div>

                    {/* RIGHT SIDE FACULTY CARDS (Animated) */}
                    <motion.div
                        className="col-span-3 grid grid-cols-1 sm:grid-cols-2  gap-6"
                    >
                        {facultyData.map((f, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="bg-maroon-300/80 rounded-xl overflow-hidden shadow-soft"
                            >
                                <div className="relative w-full h-48">
                                    <div className="absolute inset-0 bg-maroon-400 opacity-40"></div>
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className="w-full h-full object-contain bg-[radial-gradient(circle,_#b86c4c_0%,_#8a3f24_60%,_#65230b_100%)]
 relative z-10"
                                    />

                                </div>


                                <div className="p-4">
                                    <h3 className="text-maroon font-semibold text-lg">{f.name}</h3>
                                    <p className="text-white text-[15px] mt-1">{f.title}</p>

                                    <div className="mt-2 border-t pt-2">
                                        <img src={f.logo} alt={f.university} className="h-5 opacity-80" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
