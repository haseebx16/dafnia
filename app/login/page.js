"use client";

import React, { useState } from "react";
import ParticlesComponent from "../components/particles/particles";
import Link from "next/link";

const Login = () => {
  const [selectedCompany, setSelectedCompany] = useState("Dafnia Electronics");

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const buttonColor =
    selectedCompany === "Dafnia Electronics"
      ? "bg-gradient-to-r from-customLeft to-customRight"
      : "bg-blue-500";
  const backgroundColor =
    selectedCompany === "Dafnia Electronics" ? "bg-gray-200" : "bg-white";
  const logoSrc =
    selectedCompany === "Dafnia Electronics"
      ? "/logo-dafnia.png"
      : "/logo-png.png";
  const round =
    selectedCompany === "Dafnia Electronics" ? "rounded-l-full" : "";

  const particleColors = {
    "Istanbul Electrical": {
      background: "#0054a5",
    },
    "Dafnia Electronics": {
      background: "#1785c0",
    },
  };

  return (
    <main className={`min-h-screen flex`}>
      <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center min-h-screen">
        <h1 className="sm:block text-white z-20 text-7xl font-bold ml-12">
          Welcome To {selectedCompany}
        </h1>
        <div className="absolute inset-0 z-10 min-h-screen">
          <ParticlesComponent />
        </div>
      </div>
      <div
        className={`w-full lg:w-1/2 ${round} rounded-b-sm  flex items-center shadow-black shadow-2xl justify-center sm:${backgroundColor} z-50 min-h-screen`}
      >
        <div className="bg-white rounded-2xl shadow-2xl backdrop-blur-2xl sm:ml-24 shadow-black p-8 max-w-md w-full">
          <div className="flex justify-center">
            <img src={logoSrc} alt="logo" className="h-48 w-48" />
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block mb-4 w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your password"
                required
              />
            </div>
            <Link href="/dashboard">
            <button
              type="submit"
              className={`w-full ${buttonColor} text-white py-2 px-4 rounded-full duration-400 hover:bg-blue-700 focus:outline-none focus:bg-blue-600`}
            >
              Sign In
              </button>
              </Link>
            <p className="text-center text-gray-500 hover:underline">
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
