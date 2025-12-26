import type { Metadata } from "next";
import SpecializationPageContent from "./specializationscontent";

export const metadata: Metadata = {
  title: "World-Class Facilities | Sona School of Business & Management",
  description:
    "Explore the world-class facilities at Sona School of Business & Management including smart classrooms, library, hostels, labs, and campus infrastructure.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sonabusinessschool.com/facilities",
  },
};

export default function FacilitiesPage() {
  return <SpecializationPageContent />;
}
