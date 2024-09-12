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
     
{/* Main Section */}
<div className="bg-white p-6 rounded-lg mt-2 flex flex-col space-y-1">
  
  {/* Section for left and right columns */}
  <div className="flex">
    
    {/* left section */}
    <div className="flex-1 p-2">                  
      <h1 className='font-bold text-xl mb-2'>Sending Site:</h1>             
      <RoundedField id="company" name="company" label="Ship-From Site ID" type="text" className='bg-bl' status='' />
    </div>
    
    {/* Right Column */}
    <div className="flex-1 p-2">                  
      <h1 className='font-bold text-xl mb-2'>Receiving Site:</h1>
      <RoundedField id="company" name="company" label="Ship-To Site ID" type="text" className='bg-bl' status='' />
    </div>

  </div>

  {/* General Column */}
  <h1 className='font-bold text-xl mb-2 p-2'>General</h1>
  <div className="flex flex-wrap gap-4 pl-2">
   
    <div className="flex-1 col-start-4"> {/* Adjust min-width to account for gaps */}
      <RoundedField id="company" name="company" label="Business Partner" type="text" className='w-full' status='' />
    </div>
   
    <div className="flex-1 col-start-4">
      <RoundedField id="company" name="company" label="Name" type="text" className='w-full' status='' />
    </div>
   
    <div className="flex-1 col-start-4">
      <RoundedField id="company" name="company" label="Number" type="text" className='w-full' status='' />
    </div>

    <div className="flex-1"> {/* Adjust min-width to account for gaps */}
      <RoundedField id="company" name="company" label="Document Date" type="text" className='w-full' status='' />
    </div>
   
    <div className="flex-1">
      <RoundedField id="company" name="company" label="Dua Date" type="text" className='w-full' status='' />
    </div>
   
    <div className="flex-1">
      <RoundedField id="company" name="company" label="Posting date" type="text" className='w-full' status='' />
    </div>

    <div className="flex-1">
      <RoundedField id="company" name="company" label="Status" type="text" className='w-full' status='' />
    </div>

  </div>

</div>




        {/* Items Table */}
        <div className='mt-8'>
          <div className="mt-4">
            <Table component={Paper}>
              <TableHead>
                <TableRow>
                  <TableCell className='text-blue-600 text-lg font-bold'>S.#</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>                 
                  <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                  <TableCell className='text-blue-600 text-lg font-bold'>UOM </TableCell>
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
                        name="quantity"
                        value={row.quantity}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="uom"
                        value={row.uom}
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
