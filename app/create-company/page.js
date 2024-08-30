import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const page = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-80 bg-white text-white flex flex-col bg-gradient-to-b from-white from-20% via-blue-300 to-sky-800">
        <div className='flex justify-center items-center'>
          <img src="/logo-dafnia.png" className='w-auto h-36 mt-6'/>
        </div>
        <nav className="flex-1 px-4 mt-6 space-y-4">
          <Link href='/dashboard'>
            <p className="flex py-2 px-4 rounded transition text-black duration-200 hover:bg-sky-600 hover:text-white">
              <FaHome />&nbsp;&nbsp;Home
            </p>
          </Link> 
          <Link href="/company">
            <p className="flex py-2 mt-2 px-4 rounded transition duration-200 bg-sky-600 text-white">
              <GoGraph/>&nbsp;&nbsp;Company
            </p>
          </Link>
          <a href="#" className="flex py-2 px-4 text-black rounded transition duration-200 hover:bg-sky-600 hover:text-white">
            <FaUser />&nbsp;&nbsp;Users
          </a>
          <a href="#" className="flex py-2 px-4 text-black rounded transition duration-200 hover:bg-sky-600 hover:text-white">
            <IoMdSettings />&nbsp;&nbsp;Settings
          </a>
          <Link href="/roles">
          <p href="#" className="flex py-2 px-4 text-black  rounded  transition duration-200 hover:bg-sky-600 hover:text-white">
            <FaHome />&nbsp;&nbsp;{" "}Roles
          </p>
          </Link>
        </nav>
        <div className="p-6">
          <Link href="/">
            {/* <button className="w-full px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-600">
              Logout
            </button> */}
          </Link>
        </div>
      </aside>
      <div className='flex-1 flex-col flex'>
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome to Dafnia Portal</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-xl mt-1 text-black">Create Company</p>
          </div>
          <hr className="border-gray-700 w-full mt-4" />
              <form onSubmit="">
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      
                      id="name"
                      name="name"
                      label="Company Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      
                      id="email"
                      name="email"
                      label="Description"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="SAP"
                      name="SAP"
                      label="SAP Company"
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="file"
                      type='file'
                      name="file"
                      
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={2}>
                    <Link href='/company'><Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      
                      sx={{ bgcolor: '#0284c7', '&:hover': { bgcolor: 'deepskyblue' } }}
                    >
                      Go Back
                    </Button></Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Link href="/company"><Button
                      type="submit"
                      fullWidth
                      variant="contained"
                
                      sx={{ bgcolor: '#0284c7', '&:hover': { bgcolor: 'deepskyblue' } }}
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