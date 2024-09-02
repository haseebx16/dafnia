"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { useColor } from '../../context/ColorContext'; 

const Sidebar = () => {
  const { primaryColor, secondaryColor } = useColor(); // Access colors from context
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  return (
    <div className='flex min-h-screen'>
      <aside
        className="w-80 text-white flex flex-col bg-white"
        
        
      >
        <div className='flex justify-center items-center'>
          <img src="/logo-dafnia.png" className='w-auto h-36 mt-6' />
        </div>
        <nav className="flex-1 px-4 mt-6 space-y-4">
          <Link href="/dashboard">
          <p
            className="flex py-2 px-4 mt-2 rounded transition duration-200"
            style={{
              backgroundColor: activeTab === '/dashboard' ? primaryColor : 'transparent',
              color: activeTab === '/dashboard' ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== '/dashboard') {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== '/dashboard') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab('/dashboard')}
          >
              <FaHome />&nbsp;&nbsp;Home
            </p>
          </Link>
          <Link href="/company">
          <p
            className="flex py-2 px-4 mt-2 rounded transition duration-200"
            style={{
              backgroundColor: activeTab === '/company' ? primaryColor : 'transparent',
              color: activeTab === '/company' ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== '/company') {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== '/company') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab('/company')}
          >
              <GoGraph />&nbsp;&nbsp;Company
            </p>
          </Link>
          <Link href="/users">
          <p
            className="flex py-2 px-4 mt-2 rounded transition duration-200"
            style={{
              backgroundColor: activeTab === '/users' ? primaryColor : 'transparent',
              color: activeTab === '/users' ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== '/users') {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== '/users') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab('/users')}
          >
              <FaUser />&nbsp;&nbsp;Users
            </p>
          </Link>
          <Link href="/roles">
          <p
            className="flex py-2 px-4 mt-2 rounded transition duration-200"
            style={{
              backgroundColor: activeTab === '/roles' ? primaryColor : 'transparent',
              color: activeTab === '/roles' ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== '/roles') {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== '/roles') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab('/roles')}
          >
              <FaHome />&nbsp;&nbsp;Roles
            </p>
          </Link>
          <Link href="/settings">
          <p
            className="flex py-2 px-4 mt-2 rounded transition duration-200"
            style={{
              backgroundColor: activeTab === '/settings' ? primaryColor : 'transparent',
              color: activeTab === '/settings' ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (activeTab !== '/settings') {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== '/settings') {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setActiveTab('/settings')}
          >
              <IoMdSettings />&nbsp;&nbsp;Settings
            </p>
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
