"use client"

import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, FormControl, Select, MenuItem, Button, Grid, Paper } from '@mui/material';
import Sidebar from '../components/Layout/sidebar';

const Page = () => {
  const [role, setRole] = useState('');
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

  const handleSubmit = () => {
    console.log("Role:", role);
    console.log("Permissions:", permissions);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome to Dafnia Portal</h1>
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
                <Grid item xs={12} md={6}>
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
                      <MenuItem value="">
                        <em>Select a Role</em>
                      </MenuItem>
                      <MenuItem value="Finance">Finance</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="User">User</MenuItem>
                      <MenuItem value="Employee">Employee</MenuItem>
                      <MenuItem value="Developer">Developer</MenuItem>
                      <MenuItem value="Software-Enginner">Software Enginner</MenuItem>

                      {/* Add more roles as needed */}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6} className='ml-0'>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={permissions.vendors} onChange={handlePermissionChange} name="vendors" />}
                      label="Vendors"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={permissions.users} onChange={handlePermissionChange} name="users" />}
                      label="Users"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={permissions.quotationRequest} onChange={handlePermissionChange} name="quotationRequest" />}
                      label="Quotation Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={permissions.invoiceRequest} onChange={handlePermissionChange} name="invoiceRequest" />}
                      label="Invoice Request"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.purchaseRequest} onChange={handlePermissionChange} name="purchaseRequest" />}
                      label="PurchaseRequest"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.downPaymentRequest} onChange={handlePermissionChange} name="downPaymentRequest" />}
                      label="DownPaymentRequest"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.shipmentRequest} onChange={handlePermissionChange} name="shipmentRequest" />}
                      label="ShipmentRequest"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.accountRequest} onChange={handlePermissionChange} name="accountRequest" />}
                      label="AccountRequest"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.documents} onChange={handlePermissionChange} name="documents" />}
                      label="Documents"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.notifications} onChange={handlePermissionChange} name="notifications" />}
                      label="Notifications"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.vendorLedger} onChange={handlePermissionChange} name="vendorLedger" />}
                      label="VendorLedger"
                    />
                     <FormControlLabel
                      control={<Checkbox checked={permissions.payableAgeingReport} onChange={handlePermissionChange} name="payableAgeingReport" />}
                      label="PayableAgeingReport"
                    />
                    {/* Add more checkboxes as needed */}
                  </FormGroup>
                </Grid>
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
