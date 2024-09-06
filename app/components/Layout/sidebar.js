"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { font } from '../font/poppins';
import { useColor } from '../../context/ColorContext'; 

const Sidebar = () => {
  const { primaryColor } = useColor();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  const renderLink = (href, Icon, label) => (
    <Link href={href}>
      <p
        className="flex items-center py-2 px-4 mt-2 rounded transition duration-200"
        style={{
          backgroundColor: activeTab === href ? primaryColor : 'transparent',
          color: activeTab === href ? 'white' : 'black',
        }}
        onMouseEnter={(e) => {
          if (activeTab !== href) {
            e.target.style.backgroundColor = primaryColor;
            e.target.style.color = 'white';
          }
        }}
        onMouseLeave={(e) => {
          if (activeTab !== href) {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }
        }}
        onClick={() => setActiveTab(href)}
      >
        <Icon />&nbsp;&nbsp;{label}
      </p>
    </Link>
  );

  return (
    <aside className={`${font.className} w-80 h-full text-black bg-white flex flex-col`}>
      <nav className="flex-1 px-4 mt-6 space-y-4">
        {renderLink('/dashboard', FaHome, 'Home')}
        {renderLink('/company', GoGraph, 'Company')}
        {renderLink('/users', FaUser, 'Users')}
        {renderLink('/roles', FaUsers, 'Roles')}
      </nav>
    </aside>
  );
};

export default Sidebar;
