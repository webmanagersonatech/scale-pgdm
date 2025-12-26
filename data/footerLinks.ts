// data/footerLinks.ts
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const footerLinks: { label: string; href: string }[] = [
  { label: "About", href: "/about/aboutus" },
  { label: "Events", href: "/events" },
  { label: "Faculty", href: "/faculty" },
];

export const quickLinks = [
  { label: "Admissions", href: "/admission" },
  { label: "Contact", href: "/contact" },
  { label: "Placement", href: "/placement" },
];

export const alumniFacilities = [
  { label: "Computing Facility", href: "" },
  { label: "Blackboard", href: "" },
  { label: "Sports", href: "" },
  { label: "Hostel", href: "" },
  { label: "Music Club", href: "" },
  { label: "Library", href: "" },
];

export const rankings = [
  { label: "Ranking 2026", href: "" },
  { label: "Ranking 2025", href: "" },
  { label: "Ranking 2024", href: "" },
  { label: "Ranking 2023", href: "" },
  { label: "Ranking 2020", href: "" },
  { label: "Ranking 2019", href: "" },
];

export const socialIcons = [
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/sonamanagement",
    color: "#1877F2",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sona_mba/?hl=en",
    color: "#E4405F",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/school/sona-school-of-management/",
    color: "#0077B5",
  },
  { icon: FaTwitter, href: "https://x.com/sonamba", color: "#1DA1F2" },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/c/SonaSchoolofManagement",
    color: "#FF0000",
  },
];
