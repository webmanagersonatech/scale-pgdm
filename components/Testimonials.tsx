"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  role: string;
  video: string;
};

export default function TestimonialsPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const testimonials: Testimonial[] = [
    {
      role: "Aarti Rani Shares Her Inspiring Experience at Sona Campus, Salem | From Ranchi to Tamil Nadu",
      video: "https://www.youtube.com/embed/jgsIevEcRWc",
    },
    {
      role: "Empowering Faculty Through Hands-On Learning | Mr. Ravanan at Sona School of Business and Management",
      video: "https://www.youtube.com/embed/bGrLXpdN5Qg",
    },
    {
      role: "Why Sona Business School Stands Out | Dr. Partha Priya Das Shares His Inspiring Experience",
      video: "https://www.youtube.com/embed/VrrDiMAcmbA",
    },
    {
      role: "SPSS & AMOS Workshop Experience | Rubini from Knowledge Institute of Technology | Sona College",
      video: "https://www.youtube.com/embed/nLUY_bAgqSs",
    },
    {
      role: "Gp Capt Vijayakumar VSM (Retd.) Shares His Experience at Sona College of Technology",
      video: "https://www.youtube.com/embed/ah4y-yP1zrY",
    },
    {
      role: "Inspiring Campus Experience | A Heartfelt Note on Leadership & Innovation",
      video: "https://www.youtube.com/embed/jxOUt_KIlwk",
    },
    {
      role: "A Heartfelt Experience at Sona Valliappa Group of Institutions | Mr. Akhil Narayan’s Testimonial",
      video: "https://www.youtube.com/embed/LcoFGNBGUC0",
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-8 flex flex-col items-center bg-white">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100 to-white pointer-events-none" />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-white pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 z-10"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b3370]">
          Testimonials
        </h1>
      </motion.div>

      {/* Swiper */}
      <div className="w-full max-w-7xl z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
            bulletClass:
              "swiper-pagination-bullet w-3 h-3 sm:w-4 sm:h-4 bg-maroon opacity-40",
            bulletActiveClass:
              "swiper-pagination-bullet-active bg-[#0b3370] opacity-100",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl shadow-md px-4 py-7 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 w-[90%] mx-auto cursor-pointer"
                onClick={() => setSelectedVideo(`${t.video}?autoplay=1`)} // ✅ popup on click
              >
                <div className="w-full h-40 sm:h-44 md:h-48 mb-3">
                  <iframe
                    src={t.video} // ✅ inline preview (no autoplay)
                    title={`testimonial-${i}`}
                    className="w-full h-full rounded-lg pointer-events-none"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium">
                  {t.role}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={selectedVideo} // ✅ autoplay when opened
                title="testimonial-player"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
