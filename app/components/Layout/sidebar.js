"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    // Get the current path from window.location and set the active tab
    const path = window.location.pathname;
    setActiveTab(path);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className='flex min-h-screen'>
      <aside className="w-80 bg-white text-white flex flex-col bg-gradient-to-b from-white from-20% via-blue-300 to-sky-800">
        <div className='flex justify-center items-center'>
          <img src="/logo-dafnia.png" className='w-auto h-36 mt-6'/>
        </div>
        <nav className="flex-1 px-4 mt-6 space-y-4">
          <Link href="/dashboard">
            <p
              className={`flex py-2 px-4 rounded transition duration-200 ${activeTab === '/dashboard' ? 'bg-sky-600 text-white' : 'text-black hover:bg-sky-600 hover:text-white'}`}
              onClick={() => setActiveTab('/dashboard')}
            >
              <FaHome />&nbsp;&nbsp;Home
            </p>
          </Link>
          <Link href="/company">
            <p
              className={`flex py-2 px-4 mt-2 rounded transition duration-200 ${activeTab === '/company' ? 'bg-sky-600 text-white' : 'text-black hover:bg-sky-600 hover:text-white'}`}
              onClick={() => setActiveTab('/company')}
            >
              <GoGraph />&nbsp;&nbsp;Company
            </p>
          </Link>
          <Link href="/users">
            <p
              className={`flex py-2 px-4 mt-2 rounded transition duration-200 ${activeTab === '/users' ? 'bg-sky-600 text-white' : 'text-black hover:bg-sky-600 hover:text-white'}`}
              onClick={() => setActiveTab('/users')}
            >
              <FaUser />&nbsp;&nbsp;Users
            </p>
          </Link>
          <Link href="/roles">
            <p
              className={`flex py-2 px-4 rounded mt-2 transition duration-200 ${activeTab === '/roles' ? 'bg-sky-600 text-white' : 'text-black hover:bg-sky-600 hover:text-white'}`}
              onClick={() => setActiveTab('/roles')}
            >
              <FaHome />&nbsp;&nbsp;Roles
            </p>
          </Link>
          <Link href="/settings">
            <p
              className={`flex py-2 px-4 rounded mt-2 transition duration-200 ${activeTab === '/settings' ? 'bg-sky-600 text-white' : 'text-black hover:bg-sky-600 hover:text-white'}`}
              onClick={() => setActiveTab('/settings')}
            >
              <IoMdSettings />&nbsp;&nbsp;Settings
            </p>
          </Link>
        </nav>
      </aside>
      
    </div>
  );
}

export default Sidebar;
