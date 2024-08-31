import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import Sidebar from '../components/Layout/sidebar';

export default function page() {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
           <button className=" px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-600">
              Logout
            </button> 

          
        </header>
          <hr className=" border-gray-700 w-full"/>

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