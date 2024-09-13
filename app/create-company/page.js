"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Grid, Typography } from '@mui/material';
import { ChromePicker } from 'react-color';
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/logout-button/button';
import RoundedField from '../components/text-field/field';
import { IoMdArrowBack } from 'react-icons/io';
import Layout from '../components/Layout/Layout';
import CancelButton from '../components/Cancel-Button/CancelButton';

const Page = () => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, tertiaryColor, setTertiaryColor } = useColor(); 
  const [imagePreview, setImagePreview] = useState(null);  

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
        <Layout>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex space-x-4 items-center">
          <Link href="/company"><IoMdArrowBack size={36} className='mt-1 border-2 border-blue-600 p-2 rounded-full'/></Link>
          <p className="text-2xl font-bold mt-1 text-black">Create Company</p>
          </div>
          <hr className="border-gray-700 w-full mt-4" />
          <form onSubmit="" className='bg-white p-6 pb-8 pt-1 rounded-xl mt-2 min-h-52 '>
            <Grid container spacing={2} mt={2}>
              <RoundedField grids={6} id="company" name="company" label="Company Name" type="text" />
              <RoundedField grids={6} id="desc" name="desc" label="Description" type="text"/>
              <RoundedField grids={6} id="sap" name="sap" label="SAP Company" type="text"/>       
              <RoundedField 
                id="file" 
                name="file"  
                type="file" 
                grids={6}
                onChange={handleImageChange} 
              />
              <Grid item xs={4}>
                <Typography>Primary Color</Typography>
                <ChromePicker
                  color={primaryColor}
                  onChangeComplete={(color) => setPrimaryColor(color.hex)}
                  />
              </Grid>
              <Grid item xs={4}>
                <Typography>Secondary Color</Typography>
                <ChromePicker
                  color={secondaryColor}
                  onChangeComplete={(color) => setSecondaryColor(color.hex)}
                  />
              </Grid>
                  {imagePreview && (
                    <Grid item xs={4}>
                      <div className="mt-4">
                        <Typography>Image Preview:</Typography>
                        <img src={imagePreview} alt="Image Preview" className="mt-2 h-48" />
                      </div>
                    </Grid>
                  )}
              <Grid item xs={4}>
                <Typography>Tertiary Color</Typography>
                <ChromePicker
                  color={tertiaryColor}
                  onChangeComplete={(color) => setTertiaryColor(color.hex)}
                />
              </Grid>


              <Grid item xs={10}></Grid>
              <Grid item xs={1}>
                <Link href='/company'>
                  <CancelButton title="Cancel"/>
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
