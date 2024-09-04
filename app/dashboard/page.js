"use client"

import React from 'react';
import Link from 'next/link';
import Sidebar from '../components/Layout/sidebar';
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/logout-button/button';
import { font } from '../components/font/poppins';

export default function Page() {
  const { primaryColor } = useColor();

  return (
    <div className={`${font.className} min-h-screen flex flex-col`}>
      {/* Header */}
      <header className="flex items-center justify-between px-12 bg-blue-50 w-full border border-gray-100">
        <img src="/dafnia-png.png" className='w-auto h-24 p-2' />
        <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
        <Link href='/'>
          <CustomButton title="Logout" />
        </Link>
      </header>
      <hr className='w-full border-gray-600'/>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Dashboard Content */}
        <main className="flex-1 p-3 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-lg">
              <p className="font-bold text-white p-2 rounded-md text-xl mb-4" style={{ backgroundColor: primaryColor }}>
                Open AP Invoices
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold">SAR</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20">Total</p>
                <p className="text-gray-600 font-medium">Value</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-lg">
              <p className="font-bold text-white p-2 rounded-md text-xl mb-4" style={{ backgroundColor: primaryColor }}>
                Pending AP Invoices
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold">SAR</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20">Total</p>
                <p className="text-gray-600 font-medium">Value</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-lg">
              <p className="font-bold text-white p-2 rounded-md text-xl mb-4" style={{ backgroundColor: primaryColor }}>
                Approved AP Invoices
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold">SAR</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20">Total</p>
                <p className="text-gray-600 font-medium">Value</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-lg">
              <p className="font-bold text-white p-2 rounded-md text-xl mb-4" style={{ backgroundColor: primaryColor }}>
                Open Shipments
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold">SAR</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20">Total</p>
                <p className="text-gray-600 font-medium">Value</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
