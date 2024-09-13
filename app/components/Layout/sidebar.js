"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { font } from '../font/poppins';
import { useColor } from '../../context/ColorContext'; 
import { MdOutlineInventory2 } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";

const Sidebar = () => {
  const { primaryColor } = useColor();
  const [activeTab, setActiveTab] = useState('');
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [purchase, setPurchase] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  const renderLink = (href, Icon, label, subLink = false) => (
    <Link href={href}>
      <p
        className={`flex items-center py-2 px-4 mt-2 rounded transition duration-200 ${subLink ? 'ml-6' : ''}`}
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
        {Icon && <Icon size={"24px"}/>}&nbsp;&nbsp;{label}
      </p>
    </Link>
  );

  return (
    <aside className={`${font.className} w-64 h-full text-black bg-white flex flex-col`}>
      <nav className="flex-1 px-4 mt-6 space-y-4">
        {renderLink('/dashboard', FaHome, 'Home')}
        {renderLink('/company', GoGraph, 'Company')}
        {renderLink('/users', FaUser, 'Users')}
        {renderLink('/roles', FaUsers, 'Roles')}

        {/* Inventory Main Tab */}
        <div>
          <p
            className="flex items-center py-2 px-4 rounded transition duration-200 cursor-pointer"
            style={{
              backgroundColor: isInventoryOpen ? primaryColor : 'transparent',
              color: isInventoryOpen ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (!isInventoryOpen) {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!isInventoryOpen) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setIsInventoryOpen(!isInventoryOpen)}
          >
            <MdOutlineInventory2 size={"24px"}/>&nbsp;&nbsp;Inventory
          </p>
          {isInventoryOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/inventory-req', null, 'Inventory Transfer Req.', true)}
           </div>
          )}
        </div>
        <div>
          <p
            className="flex items-center py-2 px-4 rounded transition duration-200 cursor-pointer"
            style={{
              backgroundColor: purchase ? primaryColor : 'transparent',
              color: purchase ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (!purchase) {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!purchase) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setPurchase(!purchase)}
          >
            <BiPurchaseTagAlt
            size={"24px"}/>&nbsp;&nbsp;Purchase
          </p>
          {purchase && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/purchase-order', null, 'Purchase Order PO.', true)}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
