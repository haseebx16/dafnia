import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

export default function page() {
  return (
    <div className="flex min-h-screen">
          <aside className="w-72 bg-white text-white flex flex-col">
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
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-chart-line"></i>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Sales</h2>
                <p className="text-gray-600">$24,000</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="bg-green-500 h-12 w-12 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-user-friends"></i>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Customers</h2>
                <p className="text-gray-600">1,200</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="bg-yellow-500 h-12 w-12 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-box"></i>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Products</h2>
                <p className="text-gray-600">300</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="bg-red-500 h-12 w-12 rounded-full flex items-center justify-center text-white">
                <i className="fas fa-chart-pie"></i>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Analytics</h2>
                <p className="text-gray-600">75%</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
