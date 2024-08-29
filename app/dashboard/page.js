import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { PiCashRegisterLight } from "react-icons/pi";
import { IoIosCash } from "react-icons/io";
import { SiCashapp } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";
import { LiaCashRegisterSolid } from "react-icons/lia";

export default function page() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-80 bg-white text-white flex flex-col">
        <div className='flex justify-center items-center'>
          <img src="/logo-dafnia.png" className='w-40 h-36'/>
        </div>
        <nav className="flex-1 px-4 mt-6 space-y-4">
          <a href="#" className="flex py-2 px-4 rounded transition duration-200 bg-blue-500 text-white">
            <FaHome />&nbsp;&nbsp;{" "}Home
          </a>
          <a href="#" className="flex py-2 px-4 text-black  rounded  transition duration-200 hover:bg-blue-500 hover:text-white">
            <GoGraph/>&nbsp;&nbsp;{" "}Analytics
          </a>
          <a href="#" className="flex py-2 px-4 text-black  rounded transition duration-200 hover:bg-blue-500 hover:text-white">
            <FaUser/> &nbsp;&nbsp;{" "}Customers
          </a>
          <a href="#" className="flex py-2 px-4 text-black  rounded transition duration-200 hover:bg-blue-500 hover:text-white">
            <IoMdSettings/>&nbsp;&nbsp;{" "}Settings
          </a>
        </nav>
        <div className="p-6">
          <Link href="/">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Logout
            </button>
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Main Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Notifications
            </button>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
           <div className="bg-white p-6 rounded-lg text-center hover:cursor-pointer hover:bg-gradient-to-r from-blue-400 to-sky-900 hover:text-white duration-400 group shadow-gray-400 shadow-lg" >
           <p className="font-bold shadow-gray-500 shadow-sm bg-sky-600 text-white p-2 rounded-md text-xl mb-4 text-center group-hover:bg-white group-hover:text-black ">
              Open AP Invoices
            </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12 group-hover:text-white">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16 group-hover:text-white">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold group-hover:text-black">
                  SAR
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20 group-hover:text-white">Total</p>
                <p className="text-gray-600 font-medium group-hover:text-white">Value</p>
              </div>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:cursor-pointer hover:bg-gradient-to-r from-blue-400 to-sky-900 hover:text-white duration-400 group shadow-gray-400 shadow-lg">
              <p className="font-bold shadow-gray-500 shadow-sm bg-sky-600 text-white p-2 rounded-md text-xl mb-4 text-center group-hover:bg-white group-hover:text-black">
                Pending AP Invoices
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12 group-hover:text-white">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16 group-hover:text-white">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold group-hover:text-black">
                  SAR
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20 group-hover:text-white">Total</p>
                <p className="text-gray-600 font-medium group-hover:text-white">Value</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:cursor-pointer hover:bg-gradient-to-r from-blue-400 to-sky-900 hover:text-white duration-400 group shadow-gray-400 shadow-lg">
              <p className="font-bold shadow-gray-500 shadow-sm bg-sky-600 text-white p-2 rounded-md text-xl mb-4 text-center group-hover:bg-white group-hover:text-black">
                Approved AP Invoices
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12 group-hover:text-white">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16 group-hover:text-white">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold group-hover:text-black">
                  SAR
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20 group-hover:text-white">Total</p>
                <p className="text-gray-600 font-medium group-hover:text-white">Value</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:cursor-pointer hover:bg-gradient-to-r from-blue-400 to-sky-900 hover:text-white duration-400 group shadow-gray-400 shadow-lg">
              <p className="font-bold shadow-gray-500 shadow-sm bg-sky-600 text-white p-2 rounded-md text-xl mb-4 text-center group-hover:bg-white group-hover:text-black">
                Open Shipments
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12 group-hover:text-white">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16 group-hover:text-white">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold group-hover:text-black">
                  SAR
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20 group-hover:text-white">Total</p>
                <p className="text-gray-600 font-medium group-hover:text-white">Value</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:cursor-pointer hover:bg-gradient-to-r from-blue-400 to-sky-900 hover:text-white duration-400 group shadow-gray-400 shadow-lg">
              <p className="font-bold shadow-gray-500 shadow-sm bg-sky-600 text-white p-2 rounded-md text-xl mb-4 text-center group-hover:bg-white group-hover:text-black">
                Open DP
              </p>
              <div className="flex justify-center items-center flex-wrap">
                <p className="text-gray-600 font-bold text-2xl ml-12 group-hover:text-white">38</p>
                <p className="text-gray-600 font-bold text-2xl ml-16 group-hover:text-white">150M</p>
                <p className="bg-blue-100 text-blue-500 text-xs p-1 rounded-md ml-2 font-bold group-hover:text-black">
                  SAR
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-600 font-medium mr-20 group-hover:text-white">Total</p>
                <p className="text-gray-600 font-medium group-hover:text-white">Value</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}