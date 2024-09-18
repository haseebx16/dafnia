"use client"

import React from 'react';
import { useColor } from '../context/ColorContext';
import Layout from '../components/layout/layout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

export default function Page() {
  const { primaryColor , secondaryColor } = useColor();

  return (
    <Layout>
       <main className="flex-1 p-3 bg-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

    {/* Card 1 */}
    <div className="p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-md shadow-slate-400"
         style={{
           backgroundImage: `linear-gradient(to bottom, white 1%, ${secondaryColor} 90%, ${primaryColor} 200%)`,
           color: 'black'
         }}>
      <p className="font-bold text-white p-2 rounded-md text-lg mb-4" style={{ backgroundColor: primaryColor }}>
        Open AP Invoices
      </p>
      <div className="flex justify-center items-center flex-wrap">
        <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
        <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
        <p className="text-xs p-1 rounded-md ml-2 font-bold"
            style={{
              backgroundColor: `${primaryColor}20`,
              color: primaryColor, 
            }}>SAR</p>
      
        
      </div>
      <div className="flex justify-center">
        <p className="text-gray-600 font-medium mr-20">Total</p>
        <p className="text-gray-600 font-medium">Value</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-md shadow-slate-400"
         style={{
           backgroundImage: `linear-gradient(to bottom, white 1%, ${secondaryColor} 90%, ${primaryColor} 200%)`,
           color: 'black'
         }}>
      <p className="font-bold text-white p-2 rounded-md text-lg mb-4" style={{ backgroundColor: primaryColor }}>
        Open Goods Receipt PO
      </p>
      <div className="flex justify-center items-center flex-wrap">
        <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
        <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
        <p className="text-xs p-1 rounded-md ml-2 font-bold"
            style={{
              backgroundColor: `${primaryColor}20`,
              color: primaryColor, 
            }}>SAR</p>
      </div>
      <div className="flex justify-center">
        <p className="text-gray-600 font-medium mr-20">Total</p>
        <p className="text-gray-600 font-medium">Value</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-md shadow-slate-400"
         style={{
           backgroundImage: `linear-gradient(to bottom, white 1%, ${secondaryColor} 90%, ${primaryColor} 200%)`,
           color: 'black'
         }}>
      <p className="font-bold text-white p-2 rounded-md text-lg mb-4" style={{ backgroundColor: primaryColor }}>
        Open Purchase Orders
      </p>
      <div className="flex justify-center items-center flex-wrap">
        <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
        <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
        <p className="text-xs p-1 rounded-md ml-2 font-bold"
            style={{
              backgroundColor: `${primaryColor}20`,
              color: primaryColor, 
            }}>SAR</p>
            </div>
      <div className="flex justify-center">
        <p className="text-gray-600 font-medium mr-20">Total</p>
        <p className="text-gray-600 font-medium">Value</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="p-6 rounded-lg text-center hover:cursor-pointer duration-400 group shadow-md shadow-slate-400"
         style={{
           backgroundImage: `linear-gradient(to bottom, white 1%, ${secondaryColor} 90%, ${primaryColor} 200%)`,
           color: 'black'
         }}>
      <p className="font-bold text-white p-2 rounded-md text-lg mb-4" style={{ backgroundColor: primaryColor }}>
        Total Account Payables
      </p>
      <div className="flex justify-center items-center flex-wrap">
        <p className="text-gray-600 font-bold text-2xl ml-12">38</p>
        <p className="text-gray-600 font-bold text-2xl ml-16">150M</p>
        <p className="text-xs p-1 rounded-md ml-2 font-bold"
            style={{
              backgroundColor: `${primaryColor}20`,
              color: primaryColor, 
            }}>SAR</p>
      </div>
      <div className="flex justify-center">
        <p className="text-gray-600 font-medium mr-20">Total</p>
        <p className="text-gray-600 font-medium">Value</p>
      </div>
    </div>
  </div>
</main>

      </Layout>
  );
}
