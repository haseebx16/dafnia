'use client'
import Layout from '../components/Layout/Layout';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

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
        <p className="text-2xl font-bold text-black mt-7">Inventory Transfer Request</p>
        <hr className="border-t-2 border-gray-700 mt-5 " />
      </div>

        <div className="grid grid-cols-2 gap-96 bg-white p-6">
        <div className="space-y-2 ml-1">
            {/* Business Partner Dropdown */}
            <div className="flex items-center mt-2 bg-blue-50 py-2 px-4   rounded-md">
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
            </div>

            {/* Name Dropdown */}
            <div className="flex items-center mt-2 bg-blue-50 py-2 px-4 rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Name: </label>
              <select
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Name</option>
                <option value="Name1">Name 1</option>
                <option value="Name2">Name 2</option>
                <option value="Name3">Name 3</option>
              </select>
            </div>

            {/* Contact Person Dropdown */}
            <div className="flex items-center mt-2 bg-blue-50 py-2 px-4 rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Contact Person: </label>
              <select
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Contact Person</option>
                <option value="Person1">Person 1</option>
                <option value="Person2">Person 2</option>
                <option value="Person3">Person 3</option>
              </select>
            </div>

            {/* Ship To Dropdown */}
            <div className="flex items-center mt-2 bg-blue-50 py-2 px-4 rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Ship To: </label>
              <select
                name="shipTo"
                value={formData.shipTo}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Location</option>
                <option value="Location1">Location 1</option>
                <option value="Location2">Location 2</option>
                <option value="Location3">Location 3</option>
              </select>
            </div>
          </div>
          {/* Left Column */}
          <div className="space-y-1 flex flex-col items-end mr-4 justify-end">
            {/* No. Dropdown */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">No: </label>
              <select
                name="no"
                value={formData.no}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select No</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>

            {/* Status Input */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Status: </label>
              <input
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Posting Date */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Posting Date: </label>
              <input
                type="date"
                name="postingDate"
                value={formData.postingDate}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Due Date */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Due Date: </label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {/* Document Date */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">Document Date: </label>
              <input
                type="date"
                name="documentDate"
                value={formData.documentDate}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            
            {/* From Warehouse Dropdown */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">From Warehouse: </label>
              <select
                name="fromWarehouse"
                value={formData.fromWarehouse}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Warehouse</option>
                <option value="WHS-0001">WHS-0001</option>
                <option value="WHS-0002">WHS-0002</option>
              </select>
            </div>

            {/* To Warehouse Dropdown */}
            <div className="flex items-center bg-blue-50 py-2 px-4   rounded-md">
              <label className="block text-gray-700 mb-1 text-sm w-32">To Warehouse: </label>
              <select
                name="toWarehouse"
                value={formData.toWarehouse}
                onChange={handleChange}
                className="w-72 border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="">Select Warehouse</option>
                <option value="WHS-0001">WHS-0001</option>
                <option value="WHS-0002">WHS-0002</option>
              </select>
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
