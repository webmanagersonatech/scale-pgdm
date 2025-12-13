"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";
import { navItems } from "../data/nav";
import {
  footerLinks,
  quickLinks,
  alumniFacilities,
  rankings,
} from "../data/footerLinks";
import { FiMenu, FiX, FiChevronDown, FiSearch } from "react-icons/fi";
import { facultyMembers } from "../data/facultymembers";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import AdmissionForm from "./AdmissionForm";
import Modal from "./Modal";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const flattenedItems = [
    ...navItems.flatMap((item) =>
      item.submenu
        ? [
          { label: item.label, href: item.href },
          ...item.submenu.map((sub) => ({
            label: `${item.label} → ${sub.label}`,
            href: sub.href,
          })),
        ]
        : [{ label: item.label, href: item.href }]
    ),
    ...footerLinks,
    ...quickLinks,
    ...alumniFacilities,
    ...rankings,
    ...facultyMembers.map((f) => ({
      label: f.name,
      href: "/faculty?tab=facultyinfo", // base href
      type: "faculty",
    })),
  ];

  // Fuse.js setup
  const fuse = new Fuse(flattenedItems, {
    keys: ["label"],
    threshold: 0.3,
  });

  useEffect(() => {
    if (searchQuery.trim()) {
      setSearchResults(fuse.search(searchQuery));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSelect = (item: any) => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);

    if (item.type === "faculty") {
      router.push(
        `/faculty?tab=facultyinfo&faculty=${encodeURIComponent(item.label)}`
      );
    } else {
      router.push(item.href as any);
    }
  };

  const socialLinks = [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/sonamanagement",
      color: "#1877F2",
    },
    { icon: FaTwitter, href: "https://x.com/sonamba", color: "#1DA1F2" },
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
    { icon: FaYoutube, href: "https://youtube.com", color: "#FF0000" },
  ];

  const headerHeight = scrolled ? 80 : 112;
  const base64String = "/images/about/logo.webp";
  const handleMobileLinkClick = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const bgClass = scrolled
    ? "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-maroon"
    : pathname === "/"
      ? "bg-transparent text-white"
      : "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 text-maroon";

  return (
    <>
      <div className="fixed left-0 right-0 z-50 w-full">
        {/* Topbar */}
        <div
          className={`w-full text-white relative z-50 transition-all duration-300 ${scrolled
            ? "bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B]"
            : pathname === "/"
              ? "bg-transparent"
              : "bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B]" // other pages default maroon (optional adjust opacity)
            }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 text-sm">
            {/* Left: Social Icons + NAAC */}
            <div className="flex flex-1 min-w-0 items-center gap-2 overflow-hidden">
              {/* Social Icons */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                {socialLinks.map(({ icon: Icon, href, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 transition-all p-1.5 sm:p-2 rounded-full hover:bg-transparent hover:scale-110 flex-shrink-0"
                  >
                    <Icon
                      className="text-white transition-colors duration-500 w-3 h-3 sm:w-4 sm:h-4"
                      style={{ color: "white" }}
                    />
                    <style jsx>{`
                      a:hover svg {
                        color: ${color} !important;
                      }
                    `}</style>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Search */}
            <div className="flex-shrink-0 ml-2 relative">
              {!searchOpen ? (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="bg-white/20 hover:bg-white transition-all p-1 sm:p-2 rounded-full"
                >
                  <FiSearch className="text-white hover:text-maroon w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              ) : (
                <div className="absolute right-0 mt-2 w-[90vw] sm:w-[250px] z-50">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-1 text-sm border-b-2 border-white outline-none bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B] text-white placeholder:text-white/70"
                    autoFocus
                  />
                  {/* Suggestions */}
                  {searchResults.length > 0 && (
                    <ul className="absolute top-full mt-1 w-full bg-white text-gray-800 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
                      {searchResults.map(({ item }) => (
                        <li
                          key={item.label}
                          onClick={() => handleSearchSelect(item)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-2 top-2 text-white/80 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Main Header */}
        <header
          className={`w-full transition-all duration-300 border-gray-200 ${scrolled
            ? "bg-white/80 backdrop-blur shadow-sm"
            : pathname === "/"
              ? ""
              : "bg-white/50 backdrop-blur"
            }`}
          style={{ height: `${headerHeight}px` }}
        >
          <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo + Title */}
            <div className="flex flex-col items-start">
              <Link
                href="/"
                onClick={handleMobileLinkClick}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`transition-all ${scrolled ? "h-12 w-14" : "h-18 w-20"
                      }`}
                  >
                    <img
                      src={base64String}
                      alt="Sona Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p
                    className={`font-semibold leading-tight transition-all w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] ${pathname === "/"
                      ? scrolled
                        ? "text-maroon text-[12px] sm:text-sm md:text-base xl:text-base"
                        : "text-white text-sm sm:text-base md:text-xg xl:text-xl"
                      : "text-maroon text-[12px] sm:text-sm md:text-base xl:text-base"
                      }`}
                  >
                    Sona School of
                    <br />
                    Business & Management
                  </p>

                </div>
              </Link>

              {/* External link for Sona College */}
              <p className={`text-xs  px-6 ${scrolled ? "mt-0" : "mt-2"}`}>
                <a
                  href="https://www.sonatech.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${pathname === "/"
                    ? scrolled
                      ? "text-gray-600"
                      : "text-white"
                    : "text-gray-600"
                    }`}
                >
                  A unit of Sona Valliappa Group
                </a>
              </p>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.label} className="relative group">
                    <div className="flex items-center">
                      {/* Parent Link */}
                      <Link
                        href={item.href as any}
                        className={`relative px-2 py-3 font-medium rounded-lg inline-flex items-center transition-all duration-300
            ${isActive
                            ? "text-maroon-300"
                            : pathname === "/"
                              ? scrolled
                                ? "text-gray-800"
                                : "text-white"
                              : "text-gray-800"
                          }
            hover:text-maroon-300
          `}
                      >
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                          {item.label}
                        </motion.span>

                        {/* Underline */}
                        <span
                          className={`absolute bottom-1 left-0 h-[2px] bg-maroon-300 transition-all duration-500
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}
                        />
                      </Link>

                      {/* Dropdown Arrow */}
                      {item.submenu && (
                        <motion.button
                          type="button"
                          className="mt-0.5 ml-1"
                          onClick={(e) => {
                            e.preventDefault();
                            const submenu = e.currentTarget.parentElement
                              ?.nextElementSibling as HTMLDivElement;
                            submenu?.classList.toggle("hidden");
                          }}
                        >
                          <FiChevronDown
                            className={`transition-transform duration-300 group-hover:rotate-180
                ${isActive
                                ? "text-maroon-300"
                                : pathname === "/"
                                  ? scrolled
                                    ? "text-gray-600"
                                    : "text-white"
                                  : "text-gray-600"
                              }
              `}
                          />
                        </motion.button>
                      )}
                    </div>

                    {/* Submenu */}
                    {item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="
            absolute left-0 top-full z-50 w-56
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            group-hover:translate-y-2
            transition-all duration-300
          "
                      >
                        <div className="border border-gray-200 bg-white rounded-b-xl p-2 shadow-xl">
                          {item.submenu.map((sub, index) => {
                            const isSubActive = pathname === sub.href;

                            return (
                              <motion.div
                                key={sub.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeOut",
                                  delay: index * 0.07,
                                }}
                              >
                                <Link
                                  href={sub.href as any}
                                  className={`block px-3 py-2 text-sm rounded-lg transition-all
                      ${isSubActive
                                      ? "bg-gray-100 text-maroon"
                                      : "text-gray-700 hover:bg-gray-100 hover:text-maroon"
                                    }
                    `}
                                >
                                  {sub.label}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}


              {/* Apply Now Button */}

              <button
                onClick={() => setIsModalOpen(true)}
                className={`group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border border-neutral-200 px-6 font-medium transition-all duration-100
  ${bgClass}
${scrolled
                    ? "shadow-[2px_2px_rgb(200_200_200)]"
                    : pathname === "/"
                      ? "shadow-[2px_2px_rgb(255_255_255)]"
                      : "shadow-[2px_2px_rgb(200_200_200)]"
                  }

  hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_rgb(82_82_82)]
`}
              >
                Apply Now →
              </button>
            </nav>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2 rounded-lg hover:bg-gray-100 ${pathname === "/"
                ? scrolled
                  ? "text-gray-800"
                  : "text-white"
                : "text-gray-800"
                }`}
              animate={{ rotate: mobileOpen ? 180 : 0 }} // rotate 180° when open
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }} // smooth easing
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.button>
          </div>

          {/* Mobile Drawer */}
          <div
            className={`xl:hidden bg-white shadow-inner transition-all duration-500 overflow-hidden ${mobileOpen ? "max-h-screen" : "max-h-0"
              }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, i) => (
                <div key={item.label} className="border-b border-gray-100">
                  {item.submenu ? (
                    <>
                      {/* Parent Button */}
                      <button
                        onClick={() => setOpenMenu(openMenu === i ? null : i)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-gray-800 hover:text-maroon text-left transition"
                      >
                        <span>{item.label}</span>
                        <FiChevronDown
                          className={`transition-transform duration-300 ${openMenu === i ? "rotate-180 text-maroon" : ""
                            }`}
                        />
                      </button>

                      {/* Submenu (expandable area) */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${openMenu === i
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="pl-6 pb-2 space-y-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href as any}
                              onClick={handleMobileLinkClick} // closes drawer
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-maroon rounded-md"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    // Single-level link
                    <Link
                      href={item.href as any}
                      onClick={handleMobileLinkClick}
                      className="block px-4 py-3 rounded-lg text-gray-800 hover:text-maroon transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Apply Now Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="relative mt-4 w-full h-[50px] rounded-lg border-2 border-maroon bg-white text-maroon shadow-2xl overflow-hidden flex items-center justify-center gap-2 font-medium transition-colors duration-500 hover:text-white"
              >
                {/* Hover overlay */}
                <span className="absolute top-0 left-0 h-full w-0 bg-yellow-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>

                {/* Button text */}
                <span className="relative z-10 flex items-center gap-2">
                  Apply Now <span className="text-lg">→</span>
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Spacer for subpages */}
      {pathname !== "/" && <div style={{ height: `${headerHeight}px` }} />}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Admission</h2>
        <AdmissionForm />
      </Modal>
    </>
  );
}
