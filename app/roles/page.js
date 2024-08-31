"use client"

import React from 'react';
import { useState } from "react"
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { Button, Grid, TextField } from '@mui/material';
import {Select, MenuItem, InputLabel, FormControl} from "@mui/material"
import Sidebar from '../components/Layout/sidebar';

const page = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome to Dafnia Portal</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-xl mt-1 text-black">Roles</p>
          </div>
          <hr className="border-gray-700 w-full" />
        </main>
        </div>
    </div>
  )
}

export default page