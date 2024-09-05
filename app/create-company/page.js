"use client";

import React, { useState } from 'react';  // useState is imported
import Link from 'next/link';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';
import Sidebar from '../components/Layout/sidebar';
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/logout-button/button';
import RoundedField from '../components/text-field/field';

const Page = () => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useColor(); // Get colors from context
  const [createCompany, setCreateCompany] = useState(false);  // For Logout button hover effect
  const [isSaveHovered, setIsSaveHovered] = useState(false);  // Hover state for Save button
  const [isCancelHovered, setIsCancelHovered] = useState(false);  // Hover state for Cancel button

  return (
    
      <div className='flex-1 flex-col flex min-h-screen'>
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
          <div className="flex justify-between items-center">
            <p className="text-xl mt-1 text-black">Create Company</p>
          </div>
          <hr className="border-gray-700 w-full mt-4" />
          <form onSubmit="">
            <Grid container spacing={2} mt={2} >
              <RoundedField id="company" name="company" label="Company Name" type="text" />
              <RoundedField id="desc" name="desc" label="Description" type="text"/>
              <RoundedField id="sap" name="sap" label="SAP Company" type="text"/>
              <RoundedField id="file" name="file"  type="file"/>
              <Grid item xs={6}>
                <Typography>Primary Color</Typography>
                <ChromePicker
                  color={primaryColor}
                  onChangeComplete={(color) => setPrimaryColor(color.hex)}
                />
              </Grid>
             
              <Grid item xs={10}></Grid>
              <Grid item xs={1}>
                <Link href='/company'>
                  <CustomButton title="save"/>
                </Link>
              </Grid>
              <Grid item xs={1}>
                <Link href='/company'>
                  <CustomButton title="Save"/>
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