'use client'
import Layout from '../components/Layout/Layout';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import RoundedField from '../components/text-field/field';

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
    Select,
    MenuItem,
  } from '@mui/material';
  

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
    { itemNo: 1, description: '', fromWarehouse: 'WHS-0001', toWarehouse: 'WHS-0001', quantity: '', uomCode: '', uomName: '', moisture: '0.00', rejection: '', grade: '', value: '' },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { itemNo: rows.length + 1, description: '', fromWarehouse: '', toWarehouse: '', quantity: '', uomCode: '', uomName: '', moisture: '', rejection: '', grade: '', value: '' }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  return (
    <Layout>
      <div className=''>
        {/* Title Section */}
        <div className="mt-4">
        <p className="text-2xl ml-4  font-bold text-black mt-7">Inventory Transfer Request</p>
        <hr className="border-t-2 border-gray-700 mt-5 " />
      </div>

        <div className="grid grid-cols-2 gap-96 bg-white p-6 rounded-lg mt-2">
        <div className="space-y-2 ml-1">
            {/* Business Partner Dropdown */}
            <h1 className='text-xl font-bold'>Sending Site:</h1>
           
              
              <RoundedField id="company" name="company" label="Ship-From Site ID" type="text" className='bg-bl' status='' />
         
            <div className="grid grid-cols-3 gap-96 bg-white p-6"></div>
              <h1 className='text-xl font-bold'>General:</h1>
            {/* <div className="flex items-center mt-2 bg-blue-50 py-2 px-4   rounded-md">
              
              <label className="block text-gray-700 text-sm w-32">Business Partner: </label>
              <select
                name="businessPartner"
                value={formData.businessPartner}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1  rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Partner</option>
                <option value="Partner1">Partner 1</option>
                <option value="Partner2">Partner 2</option>
                <option value="Partner3">Partner 3</option>
              </select>
            </div> */}
      <div className="space-y-1 flex items-start">
    {/* Status Input */}
    <div className="flex items-center bg-blue-50 py-2 px-4 rounded-md">
      <label className="block text-gray-700 mb-1 text-sm w-32">Ship-To Site ID: </label>
      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
    <div className="flex items-center bg-blue-50 py-2 px-4 rounded-md">
      <label className="block text-gray-700 mb-1 text-sm w-32">Ship-To Site ID: </label>
      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
    <div className="flex items-center bg-blue-50 py-2 px-4 rounded-md">
      <label className="block text-gray-700 mb-1 text-sm w-32">Ship-To Site ID: </label>
      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  </div>
            
           
           

           
          </div>
          {/* right Column */}
       {/* Right Column */}
<div className="flex flex-col">
  <h1 className='font-bold text-xl mb-2'>Receiving Site:</h1>

  <div className="space-y-1 flex flex-col items-start">
    {/* Status Input */}
    <div className="flex items-center bg-blue-50 py-2 px-4 rounded-md">
      <label className="block text-gray-700 mb-1 text-sm w-32">Ship-To Site ID: </label>
      <input
        type="text"
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
    </div>
  </div>
</div>

        </div>

        {/* Items Table */}
        <div className='mt-8'>
          <div className="mt-4">
            <Table component={Paper}>
              <TableHead>
                <TableRow>
                  <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>From Warehouse</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>To Warehouse</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>UOM Code</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>UOM Name</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Moisture</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Rejection</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Grade</TableCell>
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
                        name="fromWarehouse"
                        value={row.fromWarehouse}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="toWarehouse"
                        value={row.toWarehouse}
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
                        name="uomName"
                        value={row.uomName}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="moisture"
                        value={row.moisture}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="rejection"
                        value={row.rejection}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="grade"
                        value={row.grade}
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
                      <Button className='text-blue-600 hover:text-red-600' onClick={() => handleDeleteRow(index)}>
                        <RiDeleteBin6Line size={24} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Button variant="contained" color="primary" onClick={handleAddRow} className="mt-4">
            Add Row
          </Button>
        </div>
      </div>
    </Layout>
  );
}

export default Page;
