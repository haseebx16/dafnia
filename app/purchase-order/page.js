'use client'
import Layout from '../components/Layout/Layout';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useColor } from '../context/ColorContext';
import {
    Grid,
    TextField,
    Button,
    Paper,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Tabs,
    Tab,
    Box
} from '@mui/material';
import UserDropdown from '../components/Dropdown/UserDropdown';
import RoundedField from '../components/text-field/field';

function Page() {
  const [formData, setFormData] = useState({
    businessPartner: '',
    name: '',
    contactPerson: '',
    shipTo: '',
    no: '',
    status: '',
    postingDate: '',
    dueDate: '',
    documentDate: '',
    fromWarehouse: '',
    toWarehouse: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [rows, setRows] = useState([
    { itemNo: 1, description: '', fromWarehouse: 'WHS-0001', toWarehouse: 'WHS-0001', quantity: '', uomCode: '', uomName: '', unitPrice: '0.00', rejection: '', tax: '', value: '', ship: '' },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { itemNo: rows.length + 1, description: '', fromWarehouse: '', toWarehouse: '', quantity: '', uomCode: '', uomName: '', unitPrice: '', rejection: '', tax: '', value: '', ship: '' }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  const { secondaryColor } = useColor();
  
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Layout>
      <div className=''>
        {/* Title Section */}
        <div className="mt-4">
          <p className="text-2xl font-bold text-black mt-7">Sales Order</p>
          <hr className="border-t-2 border-gray-700 mt-5 " />
        </div>

        <div className="grid grid-cols-2 gap-36 bg-white p-12">
          {/* Left column */}
          <div className="space-y-4">
            {/* Business Partner Dropdown */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1 1 45%' }}>
                <UserDropdown
                  grids={4}
                  label="Customer"
                  option1="Customer 1"
                  option2="Customer 2"
                  option3="Customer 3"
                  labelSpace="Customer"
                />
              </div>

              {/* Name Dropdown */}
              <div style={{ flex: '1 1 45%' }}>
                <RoundedField 
                  grids={4} label="Customer Ref. Number" 
                  id="customer-ref" 
                  name="customer-ref" 
                  type="text"
                />
              </div>
            </div>
        
            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '20px' }}>
              {/* Contact Person Dropdown */}
              <div style={{ flex: '1 1 45%' }}>
                <UserDropdown
                  grids={4}
                  label="Contact Person"
                  option1="Person 1"
                  option2="Person 2"
                  option3="Person 3"
                  labelSpace="Contact Person"
                />
              </div>

              {/* Ship To Dropdown */}
              <div style={{ flex: '1 1 45%' }}>
                <RoundedField 
                  grids={4} label="Name" 
                  id="name" 
                  name="name" 
                  type="text"
                />
              </div>
              <div style={{ flex: '1 1 45%' }}>
                <UserDropdown
                  grids={4}
                  label="Local Currency"
                  option1="Currency 1"
                  option2="Currency 2"
                  option3="Currency 3"
                  labelSpace="Local Currency"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {/* No. Dropdown */}
              <div style={{ flex: '1 1 45%' }}>
                <UserDropdown
                  grids={6}
                  label="Number"
                  option1="No 1"
                  option2="No 2"
                  option3="No 3"
                  labelSpace="Number"
                />
              </div>

              {/* Status Input */}
              <div style={{ flex: '1 1 45%' }}>
                <UserDropdown
                  grids={6}
                  label="Status"
                  option1="Open"
                  option2="Close"
                  labelSpace="Status"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '20px', width: '100%' }}>
              {/* Posting Date */}
              <div style={{ flex: '1 1 33%' }}>
                <RoundedField 
                  grids={2} label="Posting Date" 
                  id="pDate" 
                  name="pDate" 
                  type="text"
                />
              </div>
              <div style={{ flex: "1 1 33%" }}>
                <RoundedField grids={2} 
                  label="Document Date" 
                  id="DocDate" 
                  name="DocDate" 
                  type="text"
                />
              </div>

              {/* Due Date */}
              <div style={{ flex: '1 1 33%' }}>
                <RoundedField 
                  grids={2} 
                  label="Delivery Date" 
                  id="dDate" 
                  name="dDate" 
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Table */}
        <Box sx={{ width: '100%', marginTop: '12px' }}>
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="tabs">
            <Tab label="Contents" />
            <Tab label="Logistics" />
            <Tab label="Accounting" />
            <Tab label="Attachments" />
          </Tabs>

          <div role="tabpanel" hidden={tabIndex !== 0}>
            <Box >
              {/* Items Table */}
              <div className=''>
                <div className="">
                  <Table component={Paper}>
                    <TableHead>
                      <TableRow>
                        <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Unit Price</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Tax Code</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Total LC</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Whse</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>UOM Code</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Shipping Type</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Value</TableCell>
                        <TableCell className='text-blue-600 text-lg font-bold'>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell>{row.itemNo}</TableCell>
                          <TableCell>
                            <TextField
                              name="description"
                              value={row.description}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="unitPrice"
                              value={row.unitPrice}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="tax"
                              value={row.tax}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="value"
                              value={row.value}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="fromWarehouse"
                              value={row.fromWarehouse}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="quantity"
                              value={row.quantity}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="uomCode"
                              value={row.uomCode}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="ship"
                              value={row.ship}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <TextField
                              name="ship"
                              value={row.ship}
                              onChange={(e) => handleInputChange(index, e)}
                            />
                          </TableCell>
                          <TableCell>
                            <Button
                              color="secondary"
                              onClick={() => handleDeleteRow(index)}
                            >
                              <RiDeleteBin6Line size={"24px"}/>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddRow}
                  className="mt-4"
                >
                  Add Row
                </Button>
              </div>
            </Box>
          </div>
          
          <div role="tabpanel" hidden={tabIndex !== 1}>
            <Box p={3}>
              {/* Logistics content */}
              <p>Logistics content goes here.</p>
            </Box>
          </div>

          <div role="tabpanel" hidden={tabIndex !== 2}>
            <Box p={3}>
              {/* Accounting content */}
              <p>Accounting content goes here.</p>
            </Box>
          </div>

          <div role="tabpanel" hidden={tabIndex !== 3}>
            <Box p={3}>
              {/* Attachments content */}
              <p>Attachments content goes here.</p>
            </Box>
          </div>
        </Box>
      </div>
    </Layout>
  );
}

export default Page;
