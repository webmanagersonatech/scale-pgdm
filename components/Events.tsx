"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { newsData } from "../data/newsdata";
import { eventsData } from "../data/eventdata";

import "swiper/css";
import "swiper/css/pagination";

interface EventItem {
  title: string;
  date: string;
  type?: "Upcoming" | "Present" | "Past";
  description: string;
  image: string;
  slug: string;
  showFront?: boolean;
}

interface NewsItem {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  showFront?: boolean;
}

const MotionLink = motion(Link);

const tabTypes = ["News", "Events", "Upcoming"] as const;

export default function NewsEvents() {
  const [activeTab, setActiveTab] = useState<"News" | "Events" | "Upcoming">(
    "News"
  );

  const today = new Date();

  const filteredItems = () => {
    if (activeTab === "News") {
      return newsData.filter((n) => n.showFront);
    }

    if (activeTab === "Upcoming") {
      return eventsData.filter((e) => e.showFront && new Date(e.date) > today);
    }

    if (activeTab === "Events") {
      return eventsData.filter((e) => e.showFront && new Date(e.date) <= today);
    }

    return [];
  };

  const items = filteredItems();

  const renderCard = (item: NewsItem | EventItem, i: number) => {
    const dateObj = new Date(item.date);
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();

    const href = newsData.includes(item as any)
      ? `/news/${item.slug}`
      : `/events/${item.slug}`;

    return (
      <SwiperSlide key={i}>
        <Link href={href as any} className="block h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm lg:max-w-md min-h-[280px] flex flex-col mx-auto"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-36 object-cover"
            />
            <div className="flex p-3 gap-3 items-start">
              <div className="flex flex-col items-center w-14 rounded-lg border shadow">
                <span className="bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B] text-white w-full text-center rounded-t-lg text-xs font-bold py-1">
                  {month}
                </span>
                <span className="text-lg font-bold leading-tight text-maroon-300">
                  {day}
                </span>
                <span className="text-[10px] text-gray-500">{year}</span>
              </div>
              <div className="flex flex-col flex-1 overflow-hidden">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-1 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
      </SwiperSlide>
    );
  };

  return (
    <section className="relative py-12 text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl   font-serif font-bold text-center mb-10 text-white"
        >
          News & Events
        </motion.h1>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap relative">
          {tabTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveTab(type)}
              className="relative px-5 sm:px-7 py-1 font-semibold text-sm sm:text-base"
            >
              {activeTab === type && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400  rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${activeTab === type ? "text-maroon" : "text-white"
                  }`}
              >
                {type}
              </span>
            </button>
          ))}
        </div>

        {/* If items exist */}
        {items.length > 0 ? (
          <>
          <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={8}                 // 🔥 reduced gap
  slidesPerView={1}
  centeredSlides={items.length === 1}
  loop={items.length > 1}
  slidesOffsetBefore={0}
  slidesOffsetAfter={0}
  autoplay={{
    delay: 2800,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: Math.min(items.length, 2) },
    1024: { slidesPerView: Math.min(items.length, 2) }, // 🔥 keep 2 max
  }}
  className="custom-swiper pb-12"
>
  {items.map((item, i) => renderCard(item, i))}
</Swiper>


            {/* Button */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mt-6"
              >
                <MotionLink
                  href={
                    activeTab === "News"
                      ? "/news"
                      : activeTab === "Events"
                        ? "/events?tab=events"
                        : "/events?tab=upcomingevents"
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block mt-6 "
                >




                  <button
                    className="flex items-center gap-2 border-[0.5px] text-[15px]  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[radial-gradient(circle_at_top_left,#f5e9e2_0%,#e2c7b7_40%,#b88b6b_80%,#65230b_100%)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
                  >
                    {activeTab === "News"
                      ? "View All News"
                      : activeTab === "Events"
                        ? "View All Events"
                        : "View All Upcoming Events"}
                    <svg
                      className="w-8 h-8 group-hover:rotate-90 text-white ease-linear duration-300 rounded-full border border-white p-2 rotate-45"
                      viewBox="0 0 16 19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        className="fill-white"
                      ></path>
                    </svg>

                  </button>
                </MotionLink>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <div className="flex justify-center items-center mt-12">
            <p className="text-lg font-semibold text-gray-200">
         
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-swiper .swiper-pagination-bullet {
          background: #ddd !important;
          opacity: 1 !important;
        }
        .custom-swiper .swiper-pagination-bullet-active {
          background: #1F130B !important;
        }
        @media (max-width: 640px) {
          .custom-swiper .swiper-slide > div {
            width: 90%;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
