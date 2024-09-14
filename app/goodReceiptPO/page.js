'use client';
import Layout from '../components/Layout/Layout';
import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
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
  Tab
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
    vendorRefNo: '',
    incoterms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [generalRows, setGeneralRows] = useState([
    {
      itemNo: 1,
      description: '',
      quantity: '',
      moisture: '0.00',
      rejection: '',
      uomCode: '',
      grade: '',
      totalLC: '',
      whse: '',
      truckNo: '',
      value: '',
    },
  ]);
  const [logisticsRows, setLogisticsRows] = useState([]);
  const [accountingRows, setAccountingRows] = useState([]);
  const [attachmentsRows, setAttachmentsRows] = useState([]);

  const handleInputChange = (index, e, rows, setRows) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = (setRows, rows) => {
    setRows([
      ...rows,
      {
        itemNo: rows.length + 1,
        description: '',
        quantity: '',
        moisture: '',
        rejection: '',
        uomCode: '',
        grade: '',
        totalLC: '',
        whse: '',
        truckNo: '',
        value: '',
      },
    ]);
  };

  const handleDeleteRow = (index, setRows, rows) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  const [selectedTab, setSelectedTab] = useState(0);

  const { secondaryColor } = useColor();

  return (
    <Layout>
      <div>
        {/* Title Section */}
        <div className='mt-4'>
          <p className='text-2xl font-bold text-black mt-7'>
            Good Receipt PO.
          </p>
          <hr className='border-t-2 border-gray-700 mt-5 ' />
        </div>

        <div className='grid grid-cols-2 gap-8 bg-white p-12 mt-2 '>
          {/* Left column */}
          <div className='space-y-4'>
            {/* Vendor Dropdown */}
            <UserDropdown
              grids={4}
              label='Vendor'
              option1='Vendor 1'
              option2='Vendor 2'
              option3='Vendor 3'
              labelSpace='Vendor'
            />
            {/* Name Dropdown */}
            <UserDropdown
              grids={4}
              label='Name'
              option1='Name 1'
              option2='Name 2'
              option3='Name 3'
              labelSpace='Name'
            />
            {/* Contact Person Dropdown */}
            <UserDropdown
              grids={4}
              label='Contact Person'
              option1='Person 1'
              option2='Person 2'
              option3='Person 3'
              labelSpace='Contact Person'
            />
            {/* Vendor Ref. No. */}
            <RoundedField
              grids={4}
              label='Vendor Ref. No.'
              id='vendorRefNo'
              name='vendorRefNo'
              type='text'
              value={formData.vendorRefNo}
              onChange={handleChange}
            />
            {/* Local Currency */}
            <UserDropdown
              grids={4}
              label='Local Currency'
              option1='USD'
              option2='EUR'
              option3='INR'
              labelSpace='Local Currency'
            />
          </div>

          {/* Right column */}
          <div className='space-y-4'>
            {/* No., Status, Posting Date, Due Date, Document Date, Incoterms */}
            <div className='flex space-x-4'>
              <RoundedField
                grids={4}
                label='No.'
                id='no'
                name='no'
                type='text'
                value={formData.no}
                onChange={handleChange}
              />
              <UserDropdown
                grids={4}
                label='Status'
                option1='Open'
                option2='Close'
                labelSpace='Status '
                value={formData.status}
                onChange={handleChange}
              />
            </div>

            <div className='flex space-x-4'>
              <RoundedField
                grids={4}
                label='Posting Date'
                id='postingDate'
                name='postingDate'
                type='text'
                value={formData.postingDate}
                onChange={handleChange}
              />
              <RoundedField
                grids={6}
                label='Due Date'
                id='dueDate'
                name='dueDate'
                type='text'
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>

            <RoundedField
              grids={4}
              label='Document Date'
              id='documentDate'
              name='documentDate'
              type='text'
              value={formData.documentDate}
              onChange={handleChange}
            />
            <UserDropdown
              grids={4}
              label='Incoterms'
              option1='FOB'
              option2='CIF'
              option3='EXW'
              labelSpace='Incoterms'
              value={formData.incoterms}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className='mt-8'>
          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="General" />
            <Tab label="Logistics" />
            <Tab label="Accounting" />
            <Tab label="Attachments" />
          </Tabs>
        </div>

        {/* Conditional Rendering of Tables */}
        <div className='mt-8'>
          {selectedTab === 0 && (
            <>
              <div className='mt-4'>
                <Table component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Moisture</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Rejection</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>UOM Code</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Grade</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Total (LC)</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Whse</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Truck No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Value</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {generalRows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.itemNo}</TableCell>
                        <TableCell>
                          <TextField
                            name='description'
                            value={row.description}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='quantity'
                            value={row.quantity}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='moisture'
                            value={row.moisture}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='rejection'
                            value={row.rejection}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='uomCode'
                            value={row.uomCode}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='grade'
                            value={row.grade}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='totalLC'
                            value={row.totalLC}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='whse'
                            value={row.whse}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='truckNo'
                            value={row.truckNo}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='value'
                            value={row.value}
                            onChange={(e) => handleInputChange(index, e, generalRows, setGeneralRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleDeleteRow(index, setGeneralRows, generalRows)}
                            variant="contained"
                            color="error"
                            startIcon={<RiDeleteBin6Line />}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddRow(setGeneralRows, generalRows)}
                  className='mt-4'
                >
                  Add Row
                </Button>
              </div>
            </>
          )}

          {selectedTab === 1 && (
            <>
              <div className='mt-4'>
                <Table component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Moisture</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Rejection</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>UOM Code</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Grade</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Total (LC)</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Whse</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Truck No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Value</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {logisticsRows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.itemNo}</TableCell>
                        <TableCell>
                          <TextField
                            name='description'
                            value={row.description}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='quantity'
                            value={row.quantity}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='moisture'
                            value={row.moisture}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='rejection'
                            value={row.rejection}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='uomCode'
                            value={row.uomCode}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='grade'
                            value={row.grade}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='totalLC'
                            value={row.totalLC}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='whse'
                            value={row.whse}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='truckNo'
                            value={row.truckNo}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='value'
                            value={row.value}
                            onChange={(e) => handleInputChange(index, e, logisticsRows, setLogisticsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleDeleteRow(index, setLogisticsRows, logisticsRows)}
                            variant="contained"
                            color="error"
                            startIcon={<RiDeleteBin6Line />}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddRow(setLogisticsRows, logisticsRows)}
                  className='mt-4'
                >
                  Add Row
                </Button>
              </div>
            </>
          )}

          {selectedTab === 2 && (
            <>
              <div className='mt-4'>
                <Table component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Moisture</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Rejection</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>UOM Code</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Grade</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Total (LC)</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Whse</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Truck No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Value</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {accountingRows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.itemNo}</TableCell>
                        <TableCell>
                          <TextField
                            name='description'
                            value={row.description}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='quantity'
                            value={row.quantity}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='moisture'
                            value={row.moisture}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='rejection'
                            value={row.rejection}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='uomCode'
                            value={row.uomCode}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='grade'
                            value={row.grade}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='totalLC'
                            value={row.totalLC}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='whse'
                            value={row.whse}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='truckNo'
                            value={row.truckNo}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='value'
                            value={row.value}
                            onChange={(e) => handleInputChange(index, e, accountingRows, setAccountingRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleDeleteRow(index, setAccountingRows, accountingRows)}
                            variant="contained"
                            color="error"
                            startIcon={<RiDeleteBin6Line />}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddRow(setAccountingRows, accountingRows)}
                  className='mt-4'
                >
                  Add Row
                </Button>
              </div>
            </>
          )}

          {selectedTab === 3 && (
            <>
              <div className='mt-4'>
                <Table component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell className='text-blue-600 text-lg font-bold'>Item No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Description</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Quantity</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Moisture</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Rejection</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>UOM Code</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Grade</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Total (LC)</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Whse</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Truck No.</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Value</TableCell>
                      <TableCell className='text-blue-600 text-lg font-bold'>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {attachmentsRows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.itemNo}</TableCell>
                        <TableCell>
                          <TextField
                            name='description'
                            value={row.description}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='quantity'
                            value={row.quantity}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='moisture'
                            value={row.moisture}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='rejection'
                            value={row.rejection}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='uomCode'
                            value={row.uomCode}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='grade'
                            value={row.grade}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='totalLC'
                            value={row.totalLC}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='whse'
                            value={row.whse}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='truckNo'
                            value={row.truckNo}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            name='value'
                            value={row.value}
                            onChange={(e) => handleInputChange(index, e, attachmentsRows, setAttachmentsRows)}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            onClick={() => handleDeleteRow(index, setAttachmentsRows, attachmentsRows)}
                            variant="contained"
                            color="error"
                            startIcon={<RiDeleteBin6Line />}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddRow(setAttachmentsRows, attachmentsRows)}
                  className='mt-4'
                >
                  Add Row
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Page;
  