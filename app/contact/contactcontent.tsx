"use client";

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import Notiflix from "notiflix";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    captchaAnswer: "", // frontend only
  });

  const [captcha, setCaptcha] = useState("");
  const CAPTCHA_LENGTH = 6;

  useEffect(() => {
    // Set document title
    document.title = "Contact | Sona School of Business and Management";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Contact Sona School of Business and Management for inquiries, admissions, and support.";

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow';

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = "https://www.sonabusinessschool.com/contact";

    // Generate captcha (your existing logic)
    generateCaptcha();
  }, []);


  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < CAPTCHA_LENGTH; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, captchaAnswer } = formData;

    // Validation
    if (!name || !email || !message || !captchaAnswer) {
      return Notiflix.Notify.failure("Please fill in all fields, including CAPTCHA.");
    }

    // Frontend string CAPTCHA validation
    if (captchaAnswer.trim() !== captcha) {
      Notiflix.Notify.failure("CAPTCHA is incorrect. Please try again.");
      setFormData({ ...formData, captchaAnswer: "" });
      generateCaptcha();
      return;
    }

    try {
      const response = await fetch(
        "https://www.sonabusinessschool.com/mba-contact-api/api/contact",
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }

      Notiflix.Notify.success(
        "Your message has been submitted! Our admissions team will respond shortly."
      );

      setFormData({ name: "", email: "", message: "", captchaAnswer: "" });
      generateCaptcha(); // reset CAPTCHA

    } catch (error: any) {
      Notiflix.Notify.failure(error.message || "Something went wrong.");
    }
  };


  return (
    <section className="w-full min-h-screen  bg-gradient-to-b from-white via-[#f5f0eb] to-[#c7a289] py-12 flex flex-col text-gray-600 body-font relative items-center">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map Section */}
        <div className="lg:w-2/3 md:w-1/2 relative rounded-lg overflow-hidden sm:mr-10 ">

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/contact/contactbg.webp')",
            }}
          ></div>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="absolute inset-0 p-10 text-white flex flex-col justify-between">

            {/* Title */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
              <p className="text-sm leading-relaxed text-gray-200">
                Have questions about our MBA programs? Fill out the form and we’ll
                get back to you.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-6">


              <div className="bg-white/90 text-[#4A301C] rounded-lg p-4 shadow flex gap-3">
                <FaMapMarkerAlt className="text-xl" />
                <div>
                  <div className="text-xs font-semibold tracking-widest">ADDRESS</div>
                  <p className="text-sm leading-relaxed mt-2">
                    71 Millers Road <br />
                    Vasanth Nagar, Bengaluru – 560052.<br />

                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white/90 text-[#4A301C] rounded-lg p-4 shadow flex gap-3">
                <FaPhoneAlt className="text-xl " />
                <div>
                  <div className="text-xs font-semibold tracking-widest">PHONE</div>
                  <a
                    href="tel:+918022283008"
                    className="block text-sm font-medium mt-2 hover:underline"
                  >
                    +91 8022283008
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white/90 text-[#4A301C] rounded-lg p-4 shadow flex gap-3">
                <FaEnvelope className="text-xl" />
                <div>
                  <div className="text-xs font-semibold tracking-widest">EMAIL</div>
                  <a
                    href="mailto:contact@scaleindia.in"
                    className="block text-sm font-medium mt-2 hover:underline"
                  >
                    contact@scaleindia.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Form Section */}
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-md p-6">

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                maxLength={200}
                placeholder="Type your message here (max 200 characters)"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>

            {/* String CAPTCHA */}
            <div className="relative mb-4 flex flex-col">
              <label className="leading-7 text-sm text-gray-600 mb-2">
                Enter the text below:
              </label>
              <div className="flex items-center mb-2">
                <span className="bg-gray-200 px-4 py-2 rounded text-lg font-mono tracking-widest select-none">
                  {captcha}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="ml-2 px-2 py-1 bg-[#4A301C] text-white rounded text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582M20 20v-5h-.581M4 9a8 8 0 0112.874-4.644M20 15a8 8 0 01-12.874 4.644"
                    />
                  </svg>
                </button>
              </div>
              <input
                type="text"
                name="captchaAnswer"
                placeholder="Type the text here"
                value={formData.captchaAnswer}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-[#4A301C] focus:ring-2 focus:ring-[#4A301C] text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"

              />
            </div>

            <button
              type="submit"
              className="text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
              style={{ backgroundColor: "#4A301C" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
