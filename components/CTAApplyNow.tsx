"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AdmissionForm from "./AdmissionForm";
import Modal from "./Modal";

export default function CTAApplyNow({ fadeUp }: any) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const bubbles = [
    { top: "10%", left: "20%", size: 3, delay: 0 },
    { top: "50%", left: "80%", size: 4, delay: 1 },
    { top: "70%", left: "40%", size: 2.5, delay: 2 },
    { top: "30%", left: "60%", size: 3.5, delay: 0.5 },
  ];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="relative w-full py-8 text-center bg-[linear-gradient(to_bottom,_#A88562_0%,_#8A6645_40%,_#6A4A2F_100%)]"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
          Ready to Transform Your Future?
        </h2>

        <motion.div className="flex justify-center items-center">
          <button
            className="flex items-center gap-2 border-[0.5px]  border-white text-[15px] 
  text-maroon-100 hover:text-white
  backdrop-blur-md lg:font-semibold isolation-auto 
  before:absolute before:w-full before:transition-all before:duration-700 
  before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
  before:bg-[radial-gradient(circle_at_top_left,#f5e9e2_0%,#e2c7b7_40%,#b88b6b_80%,#65230b_100%)] 
  before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 
  relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
            onClick={() => setIsModalOpen(true)}
          >
            Apply Now

            <svg
              className="w-8 h-8 group-hover:rotate-90 text-maroon-100 group-hover:text-white 
    ease-linear duration-300 rounded-full border border-white p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-current"
              ></path>
            </svg>
          </button>

        </motion.div>


        {bubbles.map((bubble, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 0, x: 0, opacity: 0.3, scale: 1 }}
            animate={{
              y: [-5, 5, -5],
              x: [-3, 3, -3],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: bubble.delay,
              repeatType: "loop",
            }}
            className="absolute rounded-full bg-white/30 backdrop-blur-md"
            style={{
              width: `${bubble.size}rem`,
              height: `${bubble.size}rem`,
              top: bubble.top,
              left: bubble.left,
              zIndex: 5,
            }}
          />
        ))}



      </motion.div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Admission</h2>
        <AdmissionForm />
      </Modal>
    </>
  );
}
