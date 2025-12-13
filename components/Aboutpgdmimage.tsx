"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Aboutpgdmimage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12  mx-auto">
        {/* 🔥 TOP IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] xl:h-[750px] overflow-hidden">
          <Image
            src="/images/hero/pgdm-image.jpg"
            alt="Students"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
          />
        </div>

        {/* 🔥 4 COLUMN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-4 w-full">
          {/* 1️⃣ COLUMN → #12345a */}
          <div className="bg-white py-12 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold font-serif leading-snug text-black">
              Sona School of
              <br /> Bussiness & Management
            </h2>

            <div className="mt-6 flex gap-4">
              <Link
                href="/admission/eligibility"

              >


                <button
                  className="flex items-center gap-2 border border-maroon-700  text-[15px]  backdrop-blur-md lg:font-semibold isolation-auto  before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[radial-gradient(circle_at_top_left,#f5e9e2_0%,#e2c7b7_40%,#b88b6b_80%,#65230b_100%)] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-1 overflow-hidden border-2 rounded-full group"
                >
                  Apply Now
                  <svg
                    className="w-8 h-8 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    ></path>
                  </svg>
                </button>


              </Link>
            </div>
          </div>

          {/* 2️⃣ COLUMN → #12345a (Black removed) */}
          <div
            className="p-10 flex flex-col justify-center"
            style={{ backgroundColor: "#12345a", color: "white" }}
          >
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-xl mt-2">Years of Excellence</p>
            <p className="text-sm mt-4 opacity-80">
              Academic excellence since 1920
            </p>
          </div>

          {/* 3️⃣ COLUMN → #ffb600 */}
          <div
            className="p-10 flex flex-col justify-center"
            style={{ backgroundColor: "#f8be2bff", color: "black" }}
          >
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-xl mt-2">Corporate </p>
            <p className="text-sm mt-4 opacity-80">Partners</p>
          </div>

          {/* 4️⃣ COLUMN → #12345a */}
          <div
            className="p-10 flex flex-col justify-center"
            style={{ backgroundColor: "#12345a", color: "white" }}
          >
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="text-xl mt-2">Value Added</p>
            <p className="text-sm mt-4 opacity-80">Certification Programs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
