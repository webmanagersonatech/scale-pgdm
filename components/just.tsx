"use client";

import { useRef, useEffect } from "react";

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
    video: "/videos/consulting.mp4",
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
    video: "/videos/investment.mp4",
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
    video: "/videos/factories.mp4",
  },
];

export default function ScrollVideoTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video") as HTMLVideoElement;

          if (entry.isIntersecting) {
            video?.play();
          } else {
            video?.pause();
          }
        });
      },
      { threshold: 0.55 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-black"
    >
      {sections.map((sec) => (
        <div
          key={sec.id}
          className="snap-center h-screen flex items-center justify-center"
        >
          <div className="max-w-7xl w-full mx-auto grid grid-cols-2 gap-12 px-10">

            {/* LEFT TEXT WITH TIMELINE */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 h-full w-[2px] bg-maroon-700/40"></div>

              {/* Bullet */}
              <div className="absolute left-[-6px] top-3 w-3 h-3 rounded-full bg-maroon-400"></div>

              <div className="pl-10">
                <span className="text-maroon-300 text-sm tracking-[2px] font-semibold">
                  {sec.tag}
                </span>

                <h2 className="text-3xl font-bold text-maroon-100 mt-2 leading-snug">
                  {sec.title}
                </h2>

                <ul className="mt-5 space-y-3 text-gray-300 text-[15px]">
                  {sec.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-maroon-400 mt-[2px]">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="flex justify-center">
              <video
                src={sec.video}
                muted
                playsInline
                preload="auto"
                className="h-[360px] w-auto rounded-xl shadow-xl object-cover border border-maroon-800"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
