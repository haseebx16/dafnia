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
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className='flex-1 flex-col flex'>
      <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
           <Link href='/'>
              <CustomButton title="Logout"/>
            </Link>

          
        </header>
          <hr className=" border-gray-700 w-full"/>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-xl mt-1 text-black">Create User</p>
          </div>
          <hr className="border-gray-700 w-full mt-4" />
              <form onSubmit="">
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      sx={{
                        backgroundColor: 'white',
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
                        backgroundColor: 'white',
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
                        backgroundColor: 'white',
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
                        backgroundColor: 'white',
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
                          backgroundColor: 'white',
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
                          backgroundColor: 'white',
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
                  <Grid item xs={1}>
                    <Link href='/users'><Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      sx={{
                        bgcolor: isHovered ? secondaryColor : primaryColor,
                        textTransform: 'none',
                        '&:hover': { bgcolor: secondaryColor }
                      }}
                    >
                      Cancel
                    </Button></Link>
                  </Grid>
                  <Grid item xs={1}>
                    <Link href="/users">
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onMouseEnter={() => setIsHoveredTwo(true)}
                      onMouseLeave={() => setIsHoveredTwo(false)}
                      sx={{
                        bgcolor: isHoveredTwo ? secondaryColor : primaryColor,
                        textTransform: 'none',
                        '&:hover': { bgcolor: secondaryColor }
                      }}
                    >
                      Save
                    </Button></Link>
                  </Grid>
                </Grid>
              </form>
            
        </main>     
      </div>
    </div>
  )
}

export default page 