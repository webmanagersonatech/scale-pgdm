"use client";

import Link from "next/link";
import {
  footerLinks,
  quickLinks,
  alumniFacilities,
  rankings,
  socialIcons,
} from "../data/footerLinks";
import { FaChevronRight } from "react-icons/fa6";

export default function Footer() {
  const base64String = "/images/about/logo.webp";

  return (
    <footer className="bg-gradient-to-r from-[#6A4A2F] via-[#4A301C] to-[#1F130B] text-grayText">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Logo + Address + Map */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="h-24 w-20 overflow-hidden grid place-items-center">
                <img
                  src={base64String}
                  alt="Sona Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-semibold  leading-snug">
                Sona School of<br></br>Bussiness & Management
              </span>
            </div>

            <p className="text-sm text-gray-300/80 leading-relaxed">
              71 Millers Road ,Vasanth Nagar
              <br />
              Bengaluru 560052.
            </p>
          </div>

          {/* Links + Socials */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-row lg:justify-between lg:items-start">
              {/* Useful Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Useful Links</h4>
                <ul className="flex flex-col gap-2">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href as any}
                        className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                      >
                        <FaChevronRight className="text-xs" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="flex flex-col gap-2">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                        >
                          <FaChevronRight className="text-xs" />
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href as any}
                          className="flex items-center gap-2 text-sm text-gray-200/90 hover:text-white transition"
                        >
                          <FaChevronRight className="text-xs" />
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Facilities */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialIcons.map(({ icon: Icon, href, color }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="social"
                      className="group p-2 rounded-full bg-white/10 transition hover:bg-transparent hover:scale-110"
                    >
                      <Icon
                        className="text-white transition-colors duration-500 group-hover:text-[var(--hover-color)]"
                        style={
                          { "--hover-color": color } as React.CSSProperties
                        }
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-300/70">
          <span className="text-center">
            © {new Date().getFullYear()} Sona School of Business and Management.
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
