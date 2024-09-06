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
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/logout-button/button';
import { font } from '../components/font/poppins';
import { IoMdArrowBack } from "react-icons/io";

const page = () => {

    const [dropdownValue, setDropdownValue] = useState("");
    const [dropdownTwo, setDropdownTwo] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredTwo, setIsHoveredTwo] = useState(false);
    const [isHoveredThree, setIsHoveredThree] = useState(false);

    const handleDropdownChange = (event) => setDropdownValue(event.target.value);
    const handleDropdownChangeTwo = (event) => setDropdownTwo(event.target.value);

    const { primaryColor, secondaryColor } = useColor();

  return (
    <div className={`${font.className} flex-1 flex-col flex  min-h-screen`}>
      {/* Header */}
      <header className="flex items-center justify-between px-12 bg-blue-50 w-full border border-gray-100">
        <img src="/dafnia-png.png" className='w-auto h-24 p-2' />
        <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
        <Link href='/'>
          <CustomButton title="Logout" />
        </Link>
      </header>
      <hr className='w-full border-gray-600'/>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex space-x-4 items-center">
          <Link href="/users"><IoMdArrowBack size={36} className='mt-1 border-2 border-blue-600 p-2 rounded-full'/></Link>
          <p className="text-2xl font-bold mt-1 text-black">Create User</p>
          </div>
          <hr className="border-gray-700 w-full mt-4" />
              <form onSubmit="" className='bg-white p-6 pb-8 pt-1 rounded-xl mt-2 min-h-52 '>
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      sx={{
                        backgroundColor: '#f7fafc',
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      
                      id="email"
                      name="email"
                      label="User Name"
                      type="text"
                      variant="outlined"
                      sx={{
                        backgroundColor: '#f7fafc',
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="SAP"
                      name="SAP"
                      label="User Email"
                      rows={4}
                      variant="outlined"
                      sx={{
                        backgroundColor: '#f7fafc',
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="file"
                      type='text'
                      name="file"
                      label="Department"
                      disabled
                      rows={4}
                      variant="outlined"
                      sx={{
                        backgroundColor: '#f7fafc',
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="dropdown-label">Select Role</InputLabel>
                        <Select
                        labelId="dropdown-label"
                        id="dropdown"
                        value={dropdownValue}
                        label="Select Option"
                        onChange={handleDropdownChange}
                        sx={{
                          backgroundColor: '#f7fafc',
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="option1">Inventory</MenuItem>
                        <MenuItem value="option2">Sales</MenuItem>
                        <MenuItem value="option3">Procurement</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="dropdown-label">Select Line Manager</InputLabel>
                        <Select
                        labelId="dropdown-label"
                        id="dropdown"
                        value={dropdownTwo}
                        label="Select Option"
                        onChange={handleDropdownChangeTwo}
                        sx={{
                          backgroundColor: '#f7fafc',
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="option1">Ayan Rabbani</MenuItem>
                        <MenuItem value="option2">Ali Ahmed</MenuItem>
                        <MenuItem value="option3">Fasih Siddiqui</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                  <Grid item xs={10}></Grid>
                  <Grid item xs={1} className='mt-44'>
                  <Link href='/users' >
                  <CustomButton title="Back"/>
                </Link>
              </Grid>
              <Grid item xs={1} className='mt-44'>
                <Link href='/users'>
                  <CustomButton title="Save"/>
                </Link>
                  </Grid>
                </Grid>
              </form>
            
        </main>     
      </div>
    </div>
  )
}

export default page 