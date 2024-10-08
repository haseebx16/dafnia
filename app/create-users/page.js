"use client"

import React from 'react';
import { useState } from "react"
import Link from 'next/link';
import { Button, Grid, TextField } from '@mui/material';
import {Select, MenuItem, InputLabel, FormControl} from "@mui/material"
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/buttons/customButton/customButton';
import { IoMdArrowBack } from "react-icons/io";
import Layout from '../components/layout/layout';
import CancelButton from '../components/buttons/cancelButton/cancelButton';
import TextBar from '../components/fields/textField/textBar';
import UserDropdown from '../components/fields/dropDown/userDropdown';
import SapDropDown from '../components/fields/dropDown/customDropDown';

const page = () => {

    const [dropdownValue, setDropdownValue] = useState("");
    const [dropdownTwo, setDropdownTwo] = useState('');

    const { secondaryColor } = useColor()

    const handleDropdownChange = (event) => setDropdownValue(event.target.value);
    const handleDropdownChangeTwo = (event) => setDropdownTwo(event.target.value);

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
                  
                  <TextBar grids={6} id="User" name="User ID" label="User ID" type="text" />
                  
                  <TextBar grids={6} id="User-Name" name="User Name" label="User Name" type="text" />
                  <TextBar grids={6} id="User-Email" name="User Email" label="User Email" type="text" />
                  <TextBar grids={6} id="Department" name="Department" label="Department" type="text" />
                  <div style={{ display: "flex", marginLeft: '10px', gap: '80px', marginTop: '4px' }}>
                    <SapDropDown
                      label="Role"
                      option="Select Role"
                      option1="Inventory"
                      option2="Procurement"
                      option3="Sales"
                      secondaryColor={secondaryColor}
                      containerStyles={{
                        padding: "4px",
                        background: secondaryColor,
                        borderRadius: "6px",
                        border: "2px solid #ccc",
                        width: "500px",
                        margin: "8px 0",
                        marginLeft: "8px"
                      }}
                      labelStyles={{
                        fontSize: "14px",
                      }}
                    />
                    <SapDropDown
                      label="Line Manager"
                      option="Select Line Manager"
                      option1="Manager A"
                      option2="Manager B"
                      option3="Manager C"
                      secondaryColor={secondaryColor}
                      containerStyles={{
                        padding: "4px",
                        background: secondaryColor,
                        borderRadius: "6px",
                        border: "2px solid #ccc",
                        width: "500px",
                        margin: "8px 0",
                        marginLeft: "8px"
                      }}
                      labelStyles={{
                        fontSize: "14px",
                      }}
                    />
                  </div>

              
                {/* <UserDropdown grids={6} label="Select Line Manager" option1="Ayan Rabbani" option2="Ali Ahmed" option3="Ahmed Raza" labelSpace="Select Line Manager"/> */}
                    
                  <Grid item xs={10}></Grid>
                  <Grid item xs={1} className='mt-44'>
                  <Link href='/users' >
                  <CancelButton title="Cancel"/>
                </Link>
              </Grid>
              <Grid item xs={1} className='mt-44'>
                <Link href='/users'>
                  <CustomButton title="Save" primaryEnabled={true} classes="p-2"/>
                </Link>
                  </Grid>
                </Grid>
              </form>          
        </main>
        </Layout>     
  )
}

export default page 