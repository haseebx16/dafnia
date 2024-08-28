"use client";

import React, { useState } from "react";
import ParticlesComponent from "../components/particles/particles";
import Link from "next/link";

const Login = () => {
  const [selectedCompany, setSelectedCompany] = useState("Dafnia Electronics");
  const [logoSrc, setLogoSrc] = useState("/logo-dafnia.png");

  const handleCompanyChange = (event) => {
    const company = event.target.value;
    setSelectedCompany(company);

    if (company === "Dafnia Electronics") {
      setLogoSrc("/logo-dafnia.png");
    } else if (company === "Istanbul Electrical") {
      setLogoSrc("/logo-png.png"); // Replace with your actual logo path
    }
  };

  const buttonColor =
    selectedCompany === "Dafnia Electronics"
      ? "bg-gradient-to-r from-customLeft to-customRight"
      : "bg-blue-500";

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Full Page Animation */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      {/* Centered Form Container with Two Partitions */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-6xl w-full flex">
        
        {/* Left Partition - Main Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img src="/login-img.png" alt="Login Illustration" className="w-3/4 h-auto" />
        </div>

        {/* Right Partition - Login Form */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          
          {/* Dafnia Logo in the Top Left of the Form */}
          <div className="absolute top-4 left-4 ml-6">
            <img src='/logo-dafnia.png' alt="logo" className="h-40 w-40" />
          </div>

          <div className="flex justify-center ml-6 mb-6">
            <img src={logoSrc} alt="logo" className="h-44 w-44" />
          </div>

          {/* Welcome Text */}
          <div className="text-left text-2xl font-bold mb-6">
            Welcome To {selectedCompany}
          </div>

          {/* Login Form */}
          <form className="space-y-8">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <select
                id="company"
                name="company"
                value={selectedCompany}
                onChange={handleCompanyChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="Dafnia Electronics">Dafnia Electronics</option>
                <option value="Istanbul Electrical">Istanbul Electrical</option>
              </select>
            </div>
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                className="mt-1 block mb-4 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Enter your password"
                required
              />
            </div>
            <Link href="/dashboard">
              <button
                type="submit"
                className={`w-full ${buttonColor} text-white py-2 px-4 rounded-md duration-400 hover:bg-blue-700 focus:outline-none mt-4 focus:bg-blue-600`}
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
