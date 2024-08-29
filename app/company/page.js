import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";

const page = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-80 bg-white text-white flex flex-col bg-gradient-to-b from-white from-20% via-blue-300 to-sky-800">
        <div className='flex justify-center items-center'>
          <img src="/logo-dafnia.png" className='w-auto h-36 mt-6'/>
        </div>
        <nav className="flex-1 px-4 mt-6 space-y-4">
          <Link href='/dashboard'><p href="#" className="flex py-2 px-4 rounded transition text-black duration-200 hover:bg-sky-600 hover:text-white">
            <FaHome />&nbsp;&nbsp;{" "}Home
          </p></Link> 
          <Link className='mt-2' href="/company"><p className="flex py-2 mt-2 px-4   rounded  transition duration-200 bg-sky-600 text-white">
            <GoGraph/>&nbsp;&nbsp;{" "}Company
          </p></Link>
          <a href="#" className="flex py-2 px-4 text-black  rounded transition duration-200 hover:bg-sky-600 hover:text-white">
            <FaUser/> &nbsp;&nbsp;{" "}Users
          </a>
          <a href="#" className="flex py-2 px-4 text-black  rounded transition duration-200 hover:bg-sky-600 hover:text-white">
            <IoMdSettings/>&nbsp;&nbsp;{" "}Settings
          </a>
        </nav>
        <div className="p-6">
          <Link href="/">
            {/* <button className="w-full px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-600">
              Logout
            </button> */}
          </Link>
        </div>
      </aside>

      
    </div>
  )
}

export default page