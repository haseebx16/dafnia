// components/Layout/Layout.js

"use client";

import React from 'react';
import Link from 'next/link';
import Sidebar from './sidebar'; // Assuming Sidebar is already implemented
import { useColor } from '../../context/ColorContext';
import CustomButton from '../logout-button/button';
import { font } from '../font/poppins';

export default function Layout({ children }) {
  const { primaryColor } = useColor();

  return (
    <div className={`${font.className} min-h-screen flex flex-col`}>
      {/* Navbar / Header */}
      <header className="flex items-center justify-between px-6 bg-blue-50 w-full border border-gray-100">
        <img src="/dafnia-png.png" className='w-auto h-24 p-2' alt="Dafnia Logo" />
        <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
        <Link href='/'>
          <CustomButton title="Logout" />
        </Link>
      </header>
      <hr className='w-full border-gray-600' />

      {/* Main Content with Sidebar */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-3 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
}
