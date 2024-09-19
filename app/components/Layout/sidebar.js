"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaUsers } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { font } from '../font/poppins';
import { useColor } from '../../context/ColorContext'; 
import { MdOutlineInventory2 } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";
import { TbPackages } from "react-icons/tb";


const Sidebar = () => {
  const { primaryColor, secondaryColor } = useColor();
  const [activeTab, setActiveTab] = useState('');
  const [isInventoryOpen, setIsInventoryOpen] = useState(false); // State to toggle inventory sub-menu
  const [isPurchaseOpen, setIsPurchaseOpen] = useState(false); // State to toggle Purchase sub-menu

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
    <aside  className=
    {`${font.className} w-64 text-black `} 
    style={{ background:`linear-gradient(to bottom, white 10%,${secondaryColor} 60%, ${primaryColor} 200%)`,
    
    }} 
    >

      <nav className="flex-1 px-4 mt-6 space-y-4">
        {renderLink('/dashboard', FaHome, 'Home')}
        {renderLink('/company', GoGraph, 'Company')}
        {renderLink('/users', FaUser, 'Users')}
        {renderLink('/roles', FaUsers, 'Roles')}
        {renderLink('/sales-order', LuPackage, 'Sales Order')}
        {/* {renderLink('/inventory-req', MdOutlineInventory2, "Inventory")} */}

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
            onClick={() => setIsInventoryOpen(!isInventoryOpen)} // Toggle the inventory sub-menu
          >
            <MdOutlineInventory2 size={"24px"}/>&nbsp;&nbsp;Inventory
          </p>
          {isInventoryOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/inventory-req', null, 'Inventory Transfer Req.', true)} {/* Removed the icon */}
            </div>
          )}
        </div>
        <div>
          <p
            className="flex items-center py-2 px-4 rounded transition duration-200 cursor-pointer"
            style={{
              backgroundColor: isPurchaseOpen ? primaryColor : 'transparent',
              color: isPurchaseOpen ? 'white' : 'black',
            }}
            onMouseEnter={(e) => {
              if (!isPurchaseOpen) {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = 'white';
              }
            }}
            onMouseLeave={(e) => {
              if (!isPurchaseOpen) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }
            }}
            onClick={() => setIsPurchaseOpen(!isPurchaseOpen)} // Toggle the inventory sub-menu
          >
            <TbPackages size={"24px"}/>&nbsp;&nbsp;Purchase
          </p>
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/purchase-order', null, 'Purchase  Order', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/purchase-request', null, 'Purchase Request', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/purchase-quotation', null, 'Purchase Quotation', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/goods-receipts-po', null, 'Goods Receipts PO', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/goods-return-request', null, 'Goods Return Request', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/goods-return', null, 'Goods Return', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/ap-credit-memo', null, 'A/P Credit Memo', true)} {/* Removed the icon */}
            </div>
          )}
          {isPurchaseOpen && (
            <div className="mr-4 w-full font-light text-sm">
              {renderLink('/ap-invoice', null, 'A/P Invoice', true)} {/* Removed the icon */}
            </div>
          )}
        </div>
      </nav>
    </aside>
    
  );
};

export default Sidebar;
