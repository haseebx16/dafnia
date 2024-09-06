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
import Layout from '../components/Layout/Layout';

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
    <Layout>
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
        </Layout>     
  )
}

export default page 