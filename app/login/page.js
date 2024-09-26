"use client";

import React, { useState, useRef } from "react";
import ParticlesComponent from "../components/particles/particles";
import { font } from "../components/font/poppins";
import { useColor } from "../context/ColorContext";

const Login = () => {
  const [selectedCompany, setSelectedCompany] = useState("Dafnia Electronics");
  const [logoSrc, setLogoSrc] = useState("/Main-logo.png");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const { primaryColor } = useColor();
  const logoRef = useRef(null);

  const handleCompanyChange = (event) => {
    const company = event.target.value;
    setSelectedCompany(company);

    if (company === "Dafnia Electronics") {
      setLogoSrc("/Main-logo.png");
    } else if (company === "Dafina Technologies W.L.L") {
      setLogoSrc("/DTQ.png");
    } else if (company === "WEBB Middle East FZCO") {
      setLogoSrc("/webblogo.png");
    } else if (company === "Dafina COM-TEC FZCO") {
      setLogoSrc("/DCT.png");
    } else if (company === "Suleyum Al Kiyumi Trading LLC") {
      setLogoSrc("/SKT_Logo.png");
    } else {
      setLogoSrc("Main-logo.png");
    }
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    let hasError = false;

    if (userName === "" || userName !== "admin") {
      setUserNameError(true);
      hasError = true;
    } else {
      setUserNameError(false);
    }

    if (password === "") {
      setPasswordError(true);
      hasError = true;
    } else {
      setPasswordError(false);
    }

    if (selectedCompany === "Select Company") {
      setCompanyError(true);
      hasError = true;
    } else {
      setCompanyError(false);
    }

    if (!hasError) {
      window.location.href = "/dashboard";
    }
  };

  // Function to scale logo size based on the selected company
  const getLogoScale = (company) => {
    switch (company) {
      case "Dafnia Electronics":
        return 1.6;
      case "Dafina Technologies W.L.L":
        return 1.5;
      case "WEBB Middle East FZCO":
        return 0.8;
      case "Dafina COM-TEC FZCO":
        return 1.6;
      case "Suleyum Al Kiyumi Trading LLC":
        return 0.9;
      default:
        return 1; // Default scale
    }
  };

  const scaleFactor = getLogoScale(selectedCompany);

  return (
    <main
      className={`${font.className} relative min-h-screen flex items-center justify-center`}
    >
      {/* Full Page Animation */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent />
      </div>

      {/* Centered Form Container with Two Partitions */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-6xl w-full flex">
        {/* Left Partition - Main Image */}
        <div className="w-1/2 flex items-center mt-12 justify-center">
          <img
            ref={logoRef}
            src={logoSrc}
            className="h-auto w-auto"
            style={{
              transform: `scale(${scaleFactor})`, // Scale based on selected company
            }}
            alt="Company Logo"
          />
        </div>

        {/* Right Partition - Login Form */}
        <div className="w-1/2 h-auto p-8 flex flex-col justify-center">
          {(selectedCompany === "Dafina Technologies W.L.L" ||
            selectedCompany === "Dafina Technologies W.L.L") && (
            <div className="absolute top-2 left-0">
              <img src="/Main-logo.png" className="h-32 w-auto" />
            </div>
          )}
          {(selectedCompany === "WEBB Middle East FZCO" ||
            selectedCompany === "WEBB Middle East FZCO") && (
            <div className="absolute top-2 left-0">
              <img src="/Main-logo.png" className="h-32 w-auto" />
            </div>
          )}
          {(selectedCompany === "Dafina COM-TEC FZCO" ||
            selectedCompany === "Dafina COM-TEC FZCO") && (
            <div className="absolute top-2 left-0">
              <img src="/Main-logo.png" className="h-32 w-auto" />
            </div>
          )}
          {(selectedCompany === "Suleyum Al Kiyumi Trading LLC" ||
            selectedCompany === "Suleyum Al Kiyumi Trading LLC") && (
            <div className="absolute top-2 left-0">
              <img src="/Main-logo.png" className="h-32 w-auto" />
            </div>
          )}

          {/* Welcome Text */}
          <div className="text-left text-2xl font-bold mb-6">
            {selectedCompany}
          </div>

          {/* Login Form */}
          <form className="space-y-8">
            {companyError && (
              <p className="p-2 bg-red-200 text-red-500 w-full rounded-md">
                Choose A Company
              </p>
            )}
            <div>
              <label
                htmlFor="company"
                className="block text-md font-medium text-gray-700"
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
                <option value="Dafnia Electronics">
                  Dafnia Electronics LLC
                </option>
                <option value="Dafina Technologies W.L.L">
                  Dafina Technologies W.L.L
                </option>
                <option value="WEBB Middle East FZCO">
                  WEBB Middle East FZCO
                </option>
                <option value="Dafina COM-TEC FZCO">
                  Dafina COM-TEC FZCO
                </option>
                <option value="Suleyum Al Kiyumi Trading LLC">
                  Suleyum Al Kiyumi Trading LLC
                </option>
              </select>
            </div>
            {userNameError && (
              <p className="p-2 bg-red-200 text-red-500 w-full rounded-md">
                Invalid User Name or Password
              </p>
            )}
            <div>
              <label
                htmlFor="username"
                className="block text-md font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userName}
                onChange={handleChangeUserName}
                className={`mt-1 block w-full px-3 py-2 border ${
                  userNameError ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-md font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChangePassword}
                className={`mt-1 block mb-4 w-full px-3 py-2 border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              style={{ backgroundColor: primaryColor }}
              className={`w-full text-white py-2 px-4 rounded-md duration-400 focus:outline-none mt-4`}
            >
              Sign In
            </button>

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
``
