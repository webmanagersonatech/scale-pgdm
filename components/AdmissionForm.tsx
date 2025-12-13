"use client";
import { useEffect, useState } from "react";
const IndianStatesCities = require("indian-states-cities-list");

const COURSES = [
  "MBA in Marketing",
  "MBA in Finance",
  "MBA in HR",
  "MBA in Business Analytics",
];

const CAPTCHA_LENGTH = 6;

export default function AdmissionLoginTabs() {
  const [activeTab, setActiveTab] = useState<"admission" | "login">("admission");

  const [admissionData, setAdmissionData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: "",
    city: "",
    captchaAnswer: "",
  });

  const [captcha, setCaptcha] = useState("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Generate captcha on load
  useEffect(() => {
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

  const handleAdmissionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setAdmissionData((prev) => ({
      ...prev,
      [name]: value,

      // When the state changes, reset the city field
      ...(name === "state" ? { city: "" } : {}),
    }));
  };

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (admissionData.captchaAnswer !== captcha) {
      alert("Captcha incorrect!");
      return;
    }

    console.log("ADMISSION FORM SUBMITTED ↓↓");
    console.table(admissionData);
    alert("Admission form submitted successfully!");

    // reset
    setAdmissionData({
      name: "",
      email: "",
      phone: "",
      course: "",
      state: "",
      city: "",
      captchaAnswer: "",
    });

    generateCaptcha();
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("LOGIN FORM SUBMITTED ↓↓");
    console.table(loginData);
    alert("Login submitted successfully!");
    setLoginData({ email: "", password: "" });
  };

  // Get states list and cities list filtered by selected state
  const statesList = IndianStatesCities.STATES_OBJECT;
  const citiesList =
    admissionData.state && IndianStatesCities.STATE_WISE_CITIES
      ? (IndianStatesCities.STATE_WISE_CITIES as any)[
      admissionData.state.replace(/ /g, "")
      ] || []
      : [];

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {/* Tabs */}
      <div className="flex mb-6 border-b border-gray-300">
        <button
          className={`flex-1 py-2 text-center font-semibold ${activeTab === "admission"
            ? "border-b-2 border-[#4A301C] text-[#4A301C]"
            : "text-gray-500"
            }`}
          onClick={() => setActiveTab("admission")}
        >
          Admission
        </button>
        <button
          className={`flex-1 py-2 text-center font-semibold ${activeTab === "login"
            ? "border-b-2 border-[#4A301C] text-[#4A301C]"
            : "text-gray-500"
            }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
      </div>

      {/* Admission Form */}
      {activeTab === "admission" && (
        <form onSubmit={handleAdmissionSubmit} className="space-y-4" >

          {/* Name */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={admissionData.name}
                onChange={handleAdmissionChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={admissionData.email}
                onChange={handleAdmissionChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
          </div>
          {/* Phone */}

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={admissionData.phone}
              onChange={handleAdmissionChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          {/* Course */}
          <div>
            <label className="text-sm text-gray-600">Choose Your Course</label>
            <select
              name="course"
              value={admissionData.course}
              onChange={handleAdmissionChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select a course</option>
              {COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
</div>
          {/* State */}

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">State</label>
            <select
              name="state"
              value={admissionData.state}
              onChange={handleAdmissionChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select State</option>
              {statesList.map((s: any) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="text-sm text-gray-600">City</label>
            <select
              name="city"
              value={admissionData.city}
              onChange={handleAdmissionChange}
              className="w-full border rounded px-3 py-2"
              required
              disabled={!admissionData.state}
            >
              <option value="">Select City</option>
              {citiesList.map((c: any) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          </div>

          {/* CAPTCHA */}
          <div>
            <label className="text-sm text-gray-600">Enter Captcha</label>
            <div className="flex items-center mb-2">
              <span className="bg-gray-200 px-4 py-2 rounded font-mono select-none">
                {captcha}
              </span>
              <button
                type="button"
                onClick={generateCaptcha}
                className="ml-2 px-2 py-1 bg-[#4A301C] text-white rounded text-sm"
              >
                ⟳
              </button>
            </div>
            <input
              type="text"
              name="captchaAnswer"
              placeholder="Type the captcha"
              value={admissionData.captchaAnswer}
              onChange={handleAdmissionChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button className="w-full bg-[#4A301C] text-white py-2 rounded">
            Submit Application
          </button>
        </form>
      )}

      {/* Login Form */}
      {activeTab === "login" && (
        <form onSubmit={handleLoginSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <button className="w-full bg-[#4A301C] text-white py-2 rounded">
            Login
          </button>
        </form>
      )}
    </div>
  );
}
