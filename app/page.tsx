import Hero from "../components/Hero";
import About from "../components/About";
import Aboutscale from "../components/Aboutscale";
import OutlookPage from "../components/Outlook";
import EventsPage from "../components/Events";
import CTAApplyNow from "../components/CTAApplyNow";
import ScrollVideoSections from "../components/ScrollVideoSections";
import ScrollFaculty from "../components/Facultysection";


import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "One of the premier MBA departments at Sona College of Technology, located in the heart of Salem, Tamil Nadu, offering excellence in management education and leadership development.",
  description:
    "MBA, premier MBA college, management studies, business administration, MBA department, top MBA college in Salem, leadership development, postgraduate management program, best MBA college in Tamil Nadu",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Aboutscale />

      {/* Static background wrapper */}
      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/banner/mba_slider_1.webp')",
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10">
          <EventsPage />
        </div>
      </div>

      <OutlookPage />
      <ScrollVideoSections/>
      <ScrollFaculty/>
      <CTAApplyNow/>

    </>
  );
}
