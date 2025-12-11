"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { eventsData } from "../data/eventdata";

interface EventsProps {
    title: string;
}

const Events = ({ title }: EventsProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const today = new Date();
    const isUpcomingView = title.toLowerCase().includes("upcomingevents");

    // ===== Filtering logic =====
    const filteredEvents = eventsData
        .filter((event) => {
            const matchesSearch =
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory =
                selectedCategory === "All" || event.category === selectedCategory;

            const isUpcoming = new Date(event.date) >= today;

            const matchesDateRange = (() => {
                if (startDate && new Date(event.date) < new Date(startDate)) return false;
                if (endDate && new Date(event.date) > new Date(endDate)) return false;
                return true;
            })();

            return (
                matchesSearch &&
                matchesCategory &&
                matchesDateRange &&
                (isUpcomingView ? isUpcoming : true)
            );
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const categories = ["All", ...new Set(eventsData.map((e) => e.category))];

    // ===== Pagination =====
    const itemsPerPage = 4;
    const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const currentEvents = filteredEvents.slice(startIdx, startIdx + itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // ===== Recent Events =====
    const recentEvents = eventsData
        .filter((e) => e.showFront)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);

    return (
        <motion.section
            key={title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white p-6 sm:p-10 md:p-14 max-w-7xl mx-auto rounded-xl"
        >
            {/* ===== Filters ===== */}
            <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-auto focus:ring-2 focus:ring-maroon-600 focus:outline-none"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); 
                        }}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:w-auto focus:ring-2 focus:ring-maroon-600 focus:outline-none"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto focus:ring-2 focus:ring-maroon-600 focus:outline-none"
                    />
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-full sm:w-auto focus:ring-2 focus:ring-maroon-600 focus:outline-none"
                    />
                </div>
            </div>

            {/* ===== Two-column layout ===== */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* ===== Left: Main Events ===== */}
                <div className="w-full lg:w-3/4 flex flex-col gap-8">
                    <AnimatePresence>
                        {currentEvents.length > 0 ? (
                            currentEvents.map((event:any, idx) => (
                                <Link href={`/events/${event.slug}`} key={event.slug}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                                        className="flex flex-col md:flex-row bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer "
                                    >
                                        {/* Left: Image */}
                                        <motion.img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full md:w-72 h-52 object-cover"
                                        />

                                        {/* Right: Content */}
                                        <div className="flex-1 p-6 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 hover:text-maroon-700 transition-colors mb-2">
                                                    {event.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                                                    <p>
                                                        📅{" "}
                                                        {new Date(event.date).toLocaleDateString("en-US", {
                                                            month: "long",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        })}
                                                    </p>
                                                    <p>
                                                        ⏰ {event.startTime} - {event.endTime}
                                                    </p>
                                                </div>

                                                <p className="text-gray-700 leading-relaxed line-clamp-3">
                                                    {event.excerpt}
                                                </p>
                                            </div>

                                            <p className="text-maroon-700 text-sm font-semibold mt-4 hover:underline">
                                                Read More →
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">🚫 No events found.</p>
                        )}
                    </AnimatePresence>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-3 mt-4">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded-lg text-sm font-medium border ${currentPage === 1
                                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-maroon-100"
                                    }`}
                            >
                                Prev
                            </button>

                            <span className="text-sm font-medium text-gray-600">
                                Page {currentPage} of {totalPages}
                            </span>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded-lg text-sm font-medium border ${currentPage === totalPages
                                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-maroon-100"
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>

                {/* ===== Right: Recent Events (same height) ===== */}
                <aside className="w-full lg:w-1/4 bg-gray-50 border border-gray-200  p-5 flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
                        Recent Events
                    </h2>

                    {/* Scrollable list */}
                    <ul className="flex-1 space-y-4 overflow-y-auto max-h-[500px] pr-1">
                        {recentEvents.map((event) => (
                            <li key={event.id}>
                                <Link
                                    href={`/events/${event.slug}`}
                                    className="flex items-start gap-3 group"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-20 h-16 object-cover rounded-md"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-900 group-hover:text-maroon-700 transition">
                                            {event.title}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-1">
                                            {new Date(event.date).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                        {/* Truncated description */}
                                        <p className="text-xs text-gray-600 line-clamp-2">
                                            {event.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>


            </div>
        </motion.section>
    );
};

export default Events;
