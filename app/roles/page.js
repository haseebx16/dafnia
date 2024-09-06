"use client";

import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, FormControl, Select, MenuItem, Button, Grid, Paper } from '@mui/material';
import Sidebar from '../components/Layout/sidebar';
import Link from 'next/link';
import { useColor } from '../context/ColorContext';
import CustomButton from '../components/logout-button/button';
import { font } from '../components/font/poppins';

const Page = () => {
  const [role, setRole] = useState('Select A Role');
  const [sales, setSales] = useState({
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
    vendorRegistration: false,
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
  });

  const [inventory, setInventory] = useState({
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

  const [procurement, setProcurement] = useState({
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
    vendorRegistration: false,
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
  });

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSalesChange = (event) => {
    setSales({
      ...sales,
      [event.target.name]: event.target.checked,
    });
  };

  const handleInventoryChange = (event) => {
    setInventory({
      ...inventory,
      [event.target.name]: event.target.checked,
    });
  };

  const handleProcurementChange = (event) => {
    setProcurement({
      ...procurement,
      [event.target.name]: event.target.checked,
    });
  };

  const [isHovered, setIsHovered] = useState(false);
  const { primaryColor, secondaryColor } = useColor();

  return (
    <div className={`${font.className} flex-1 flex flex-col  min-h-screen`}>
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
        <main className="flex-1 p-3 bg-gray-100 flex justify-center items-center">
          <Paper
            elevation={3}
            style={{
              backgroundColor: 'white',
              border: '1px solid #d0d0d0',
              borderRadius: '8px',
              padding: '20px',
              width: '100%',
              height: '100%',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <p className="text-2xl font-bold mt-1 text-black">Roles</p>
                <hr className="border-gray-700 w-full" />
              </Grid>
              <Grid item xs={6} md={6}>
                <FormControl fullWidth>
                  <Select
                    value={role}
                    onChange={handleRoleChange}
                    displayEmpty
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #d0d0d0',
                      borderRadius: '4px',
                      padding: '10px',
                      height: '48px',
                      width: '660px',
                    }}
                  >
                    <MenuItem value="Select A Role">
                      <em>Select a Role</em>
                    </MenuItem>
                    <MenuItem value="Inventory">Inventory</MenuItem>
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="Procurement">Procurement</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {role !== "Select A Role" && role === "Inventory" && (
                <Grid item xs={12} md={6} className='ml-4'>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={inventory.vendors} onChange={handleInventoryChange} name="vendors" />}
                      label="Inventory Counting"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={inventory.users} onChange={handleInventoryChange} name="users" />}
                      label="Goods Receipt"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={inventory.quotationRequest} onChange={handleInventoryChange} name="quotationRequest" />}
                      label="UDO"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={inventory.invoiceRequest} onChange={handleInventoryChange} name="invoiceRequest" />}
                      label="Inventory Transfer Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={inventory.purchaseRequest} onChange={handleInventoryChange} name="purchaseRequest" />}
                      label="Inventory Transfer"
                    />
                  </FormGroup>
                </Grid>
              )}
              {role !== "Select A Role" && role === "Sales" && (
                <Grid item xs={12} md={6} className='ml-4'>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={sales.vendors} onChange={handleSalesChange} name="vendors" />}
                      label="Sales Blanket Agreement"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.users} onChange={handleSalesChange} name="users" />}
                      label="Sales Quotation"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.quotationRequest} onChange={handleSalesChange} name="quotationRequest" />}
                      label="Sales Order"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.invoiceRequest} onChange={handleSalesChange} name="invoiceRequest" />}
                      label="Delivery"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.purchaseRequest} onChange={handleSalesChange} name="purchaseRequest" />}
                      label="Return"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.downPaymentRequest} onChange={handleSalesChange} name="downPaymentRequest" />}
                      label="A/R Down Payment Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.shipmentRequest} onChange={handleSalesChange} name="shipmentRequest" />}
                      label="A/R Down Payment Invoice"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.accountRequest} onChange={handleSalesChange} name="accountRequest" />}
                      label="A/R Credit Memo"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.documents} onChange={handleSalesChange} name="documents" />}
                      label="A/R Reserve Invoice"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.notifications} onChange={handleSalesChange} name="notifications" />}
                      label="Recurring Transactions"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.a} onChange={handleSalesChange} name="a" />}
                      label="UDO"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.c} onChange={handleSalesChange} name="c" />}
                      label="Pick and Pack Manager"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.e} onChange={handleSalesChange} name="e" />}
                      label="Pick List"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.f} onChange={handleSalesChange} name="f" />}
                      label="Inventory Transfer Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.g} onChange={handleSalesChange} name="g" />}
                      label="Inventory Transfer"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.b} onChange={handleSalesChange} name="b" />}
                      label="Down Payment Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={sales.d} onChange={handleSalesChange} name="d" />}
                      label="Incoming Payment"
                    />
                  </FormGroup>
                </Grid>
              )}
              {role !== "Select A Role" && role === "Procurement" && (
                <Grid item xs={12} md={6} className='ml-4'>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox checked={procurement.vendors} onChange={handleProcurementChange} name="vendors" />}
                      label="Purchase Blanket Agreement"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.users} onChange={handleProcurementChange} name="users" />}
                      label="Goods Receipt PO"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.quotationRequest} onChange={handleProcurementChange} name="quotationRequest" />}
                      label="Purchase Order"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.invoiceRequest} onChange={handleProcurementChange} name="invoiceRequest" />}
                      label="Purchase Quotation"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.purchaseRequest} onChange={handleProcurementChange} name="purchaseRequest" />}
                      label="Goods Return"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.accountRequest} onChange={handleProcurementChange} name="accountRequest" />}
                      label="A/P Down Payment Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.documents} onChange={handleProcurementChange} name="documents" />}
                      label="A/P Down Payment Invoice"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.notifications} onChange={handleProcurementChange} name="notifications" />}
                      label="A/P Invoice"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.a} onChange={handleProcurementChange} name="a" />}
                      label="A/P Credit Memo"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.f} onChange={handleProcurementChange} name="f" />}
                      label="A/P Reserve Invoice"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.g} onChange={handleProcurementChange} name="g" />}
                      label="Outgoing Payment"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.b} onChange={handleProcurementChange} name="b" />}
                      label="Landed Costs"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.e} onChange={handleProcurementChange} name="e" />}
                      label="Purchase Quotation Generation Wizard"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.h} onChange={handleProcurementChange} name="h" />}
                      label="UDO"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.c} onChange={handleProcurementChange} name="c" />}
                      label="Inventory Transfer Request"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={procurement.d} onChange={handleProcurementChange} name="d" />}
                      label="Inventory Transfer"
                    />
                  </FormGroup>
                </Grid>
              )}
            </Grid>
          </Paper>
        </main>
      </div>
    </div>
  );
};

export default Page;
