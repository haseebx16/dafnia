"use client"

import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, FormControl, Select, MenuItem, Button, Grid, Paper } from '@mui/material';
import Sidebar from '../components/Layout/sidebar';
import Link from 'next/link';

const Page = () => {
  const [role, setRole] = useState('Select A Role');
  const [permissions, setPermissions] = useState({
    vendors: false,
    users: false,
    quotationRequest: false,
    invoiceRequest: false,
    accountRequest: false,
    shipmentRequest: false,
    downPaymentRequest: false,
    documents: false,
    purchaseRequest: false,
    quotationComparison: false,
    notifications: false,
    vendorLedger: false,
    payableAgeingReport: false,
    roles: false,
    vendorRegistration: false
  });

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handlePermissionChange = (event) => {
    setPermissions({
      ...permissions,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
           <Link href='/'><button className=" px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-600">
              Logout
            </button> </Link>

          
        </header>
        <main className="flex-1 p-3 bg-gray-100 flex justify-center items-center">
          {/* Main form container with background and border */}
          <Paper
            elevation={3}
            style={{
              backgroundColor: 'white', // Light background similar to image
              border: '1px solid #d0d0d0', // Subtle border
              borderRadius: '8px', // Slightly rounded corners
              padding: '20px', // Space inside the container
              width: '100%', // Ensure it adjusts on smaller screens
              height: '100%'
            }}
          >
            <div>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <p className="text-xl mt-1 text-black">Roles</p>
                  <hr className="border-gray-700 w-full" />
                </Grid>
                <Grid item xs={6} md={6}>
                  <FormControl fullWidth>
                    <Select
                      value={role}
                      onChange={handleRoleChange}
                      displayEmpty
                      style={{
                        backgroundColor: '#ffffff', // White background for the dropdown
                        border: '1px solid #d0d0d0', // Light grey border
                        borderRadius: '4px', // Rounded corners
                        padding: '10px', // Padding inside the select box
                        height: '48px', // Set height to match the form
                        width: '660px'
                      }}
                    >
                      <MenuItem value="Select A Role">
                        <em>Select a Role</em>
                      </MenuItem>
                      <MenuItem value="Finance">Inventory</MenuItem>
                      <MenuItem value="Admin">Sales</MenuItem>
                      <MenuItem value="User">Procurement</MenuItem>

                      {/* Add more roles as needed */}
                    </Select>
                  </FormControl>
                </Grid>
                { role != "Select A Role" && (
                <Grid item xs={12} md={6} className='ml-4'>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={permissions.vendors} onChange={handlePermissionChange} name="Sales Quotation" />}
                      label="Sales Quotation"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={permissions.users} onChange={handlePermissionChange} name="Sales Order" />}
                      label="Sales Order"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={permissions.quotationRequest} onChange={handlePermissionChange} name="quotationRequest" />}
                      label="A/R Down Payment Invoice"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={permissions.invoiceRequest} onChange={handlePermissionChange} name="invoiceRequest" />}
                      label="Incoming Payment"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.purchaseRequest} onChange={handlePermissionChange} name="purchaseRequest" />}
                      label="A/R Reserve Invoice"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.downPaymentRequest} onChange={handlePermissionChange} name="downPaymentRequest" />}
                      label="Inventory Transfer"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.shipmentRequest} onChange={handlePermissionChange} name="shipmentRequest" />}
                      label="Delivery"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.accountRequest} onChange={handlePermissionChange} name="accountRequest" />}
                      label="Return"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.documents} onChange={handlePermissionChange} name="documents" />}
                      label="A/R Invoice"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.notifications} onChange={handlePermissionChange} name="notifications" />}
                      label="A/R Credit Memo"
                    />
                    
                  </FormGroup>
                </Grid>
            ) }
            </Grid>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{ marginTop: '20px' }}
              >
                Submit
              </Button> */}
            </div>
          </Paper>
        </main>
      </div>
    </div>
  );
};

export default Page;
