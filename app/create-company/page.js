"use client";

import React from 'react';
import Link from 'next/link';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';
import Sidebar from '../components/Layout/sidebar';
import { useColor } from '../context/ColorContext'; // Import the color context

const Page = () => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useColor(); // Get colors from context

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className='flex-1 flex-col flex'>
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
          <Link href='/'>
            <button className="px-4 py-2  text-white rounded hover:bg-sky-600" style={{ backgroundColor: primaryColor }}>
              Logout
            </button>
          </Link>
        </header>
        <hr className="border-gray-700 w-full" />
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
                  sx={{ backgroundColor: 'white' }}
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
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="SAP"
                  name="SAP"
                  label="SAP Company"
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="file"
                  type="file"
                  name="file"
                  variant="outlined"
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Primary Color</Typography>
                <ChromePicker
                  color={primaryColor}
                  onChangeComplete={(color) => setPrimaryColor(color.hex)}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Secondary Color</Typography>
                <ChromePicker
                  color={secondaryColor}
                  onChangeComplete={(color) => setSecondaryColor(color.hex)}
                />
              </Grid>
              <Grid item xs={10}></Grid>
              <Grid item xs={1}>
                <Link href='/company'>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: primaryColor,
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'deepskyblue' }
                    }}
                  >
                    Cancel
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link href='/company'>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      bgcolor: primaryColor,
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'deepskyblue' }
                    }}
                  >
                    Save
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Page;
