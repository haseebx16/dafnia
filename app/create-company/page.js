"use client";

import React, { useState } from 'react';  // useState is imported
import Link from 'next/link';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';
import Sidebar from '../components/Layout/sidebar';
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/logout-button/button';
import RoundedField from '../components/text-field/field';
import { font } from '../components/font/poppins';
import { IoMdArrowBack } from 'react-icons/io';
import Layout from '../components/Layout/Layout';

const Page = () => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useColor(); // Get colors from context
  const [createCompany, setCreateCompany] = useState(false);  // For Logout button hover effect
  const [isSaveHovered, setIsSaveHovered] = useState(false);  // Hover state for Save button
  const [isCancelHovered, setIsCancelHovered] = useState(false);  // Hover state for Cancel button

  return (
        <Layout>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex space-x-4 items-center">
          <Link href="/company"><IoMdArrowBack size={36} className='mt-1 border-2 border-blue-600 p-2 rounded-full'/></Link>
          <p className="text-2xl font-bold mt-1 text-black">Create Company</p>
          </div>
          <hr className="border-gray-700 w-full mt-4" />
          <form onSubmit="" className='bg-white p-6 pb-8 pt-1 rounded-xl mt-2 min-h-52 '>
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
                  <CustomButton title="Back"/>
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
        </Layout>
  );
};

export default Page;