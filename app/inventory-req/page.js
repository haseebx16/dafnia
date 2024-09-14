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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

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
 {/* Attachment Section */}

  const [rowsA, setRowsA] = useState([
    { itemNo: 1, targetpath: '', filename: '', attacheddate: '', freetext: '', copytotargetdocument: '' },
  ]);
  

  const handleInputChangeA = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rowsA];
    updatedRows[index][name] = value;
    setRowsA(updatedRows);
  };

  const handleAddRowA = () => {
    setRowsA([...rowsA, { itemNo: rowsA.length + 1, targetpath: '', filename: '', attacheddate: '', freetext: '', copytotargetdocument: '' }]);
  };

  const handleDeleteRowA = (index) => {
    const updatedRows = rowsA.filter((_, rowIndex) => rowIndex !== index);
    setRowsA(updatedRows);
  };
{/* Attachment Section Ends here */}
  const { secondaryColor } = useColor();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { primaryColor } = useColor();

  return (
    <Layout>
      <div className="">
        {/* Title Section */}
        <div className="mt-4">
          <p className="text-2xl font-bold text-black mt-7 ml-4">Inventory Transfer Request</p>
          <hr className="border-t-2 border-gray-700 mt-5 " />
        </div>

        <div className="grid grid-cols-2 mt-2 gap-20 bg-white p-6"
          style={{
            border: '2px solid #d0d0d0',
            borderRadius: '10px',
          }}>

          {/* Left column */}
          <div className="space-y-4">
            
            <UserDropdown 
            grids={4} 
            label="Business Partner" 
            option1="Partner 1" 
            option2="Partner 2" 
            option3="Partner 3" 
            labelSpace="Business Partner" 
            sx={{
              '& .MuiInputLabel-root': { // Align the label text
                textAlign: 'center',       // or 'center', 'right'
              },
              '& .MuiSelect-select': {    // Align the dropdown text
                textAlign: 'center',        // or 'center', 'right'
              }
            }}/>

            <UserDropdown 
            grids={4} 
            label="Name" 
            option1="Name 1" 
            option2="Name 2" 
            option3="Name 3" 
            labelSpace="Name" />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ flex: '1 1 40%' }}>

            <UserDropdown 
            grids={3} 
            label="Contact Person" 
            option1="Person 1" 
            option2="Person 2" 
            option3="Person 3" 
            labelSpace="Contact Person" />
              </div>
              <div style={{ flex: '1 1 40%' }}>
                
            <UserDropdown 
            grids={4} 
            label="Ship To" 
            option1="Location 1" 
            option2="Location 2" 
            option3="Location 3" 
            labelSpace="Ship To" />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ flex: '1 1 40%' }}>

                <UserDropdown 
                grids={6} 
                label="Number" 
                option1="No 1" 
                option2="No 2" 
                option3="No 3" 
                labelSpace="Number" />
              </div>
              <div style={{ flex: '1 1 40%' }}>
                <UserDropdown 
                grids={6} 
                label="Status" 
                option1="Open" 
                option2="Close" 
                labelSpace="Status" />
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'nowrap', gap: '10px', width: '100%' }}>
              <div style={{ flex: '1 1 33%' }}>

                <RoundedField 
                grids={2} 
                label="Posting Date" 
                id="pDate" 
                name="pDate" 
                type="text" />
              </div>
              <div style={{ flex: '1 1 33%' }}>

                <RoundedField 
                grids={2} 
                label="Document Date" 
                id="DocDate" 
                name="DocDate" 
                type="text" />
              </div>
              <div style={{ flex: '1 1 33%' }}>

                <RoundedField 
                grids={2} 
                label="Due Date" 
                id="dDate" 
                name="dDate" 
                type="text" />
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ flex: '1 1 40%' }}>

                <UserDropdown 
                grids={6} 
                label="To Warehouse" 
                option1="Warehouse 1" 
                option2="Warehouse 2" 
                option3="Warehouse 3" 
                labelSpace="To Warehouse" />
              </div>
              <div style={{ flex: '1 1 40%'}}>

                <UserDropdown 
                grids={6} 
                label="From Warehouse" 
                option1="Warehouse 1" 
                option2="Warehouse 2" 
                option3="Warehouse 3" 
                labelSpace="From Warehouse" />
              </div>
            </div>
          </div>
        </div>


        {/* Tabs Section */}
        
        <div className=" mt-2 p-1" 
          style={{
            border: '3px solid #d0d0d0',
            borderRadius: '10px',
            background: secondaryColor ,
          }}>

        <div className='mt-4'>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Content" sx={{ fontWeight: 'bold' }} />
          <Tab label="Attachments" sx={{ fontWeight: 'bold' }} />
        </Tabs>

          {/* Tab Panels */}
          <TabPanel value={tabValue} index={0}>
          
          <Table component={Paper} className="shadow-sm shadow-black">
              <TableHead>
                <TableRow>
                  <TableCell className='text-md font-bold'>S No.</TableCell>
                  <TableCell className='text-md font-bold'>Item no.</TableCell>
                  <TableCell className='text-md font-bold'>Description</TableCell>
                  <TableCell className='text-md font-bold'>From Warehouse</TableCell>
                  <TableCell className='text-md font-bold'>To Warehouse</TableCell>
                  <TableCell className='text-md font-bold'>Quantity</TableCell>
                  <TableCell className='text-md font-bold'>UOM Code</TableCell>
                  <TableCell className='text-md font-bold'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.itemNo}</TableCell>
                    
                    <TableCell>
                      <TextField
                        name="itemno."
                        value={row.item}
                        onChange={(e) => handleInputChange(index, e)}
                      />
                    </TableCell>
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
                      <Button
                        color="primary"
                        onClick={() => handleDeleteRow(index)}
                      >
                        <RiDeleteBin6Line style={{ fontSize: '20px' }} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddRow}
                className="mt-4 m-2"
                style={{
                  whiteSpace: 'nowrap',   // Prevent text wrapping
                  width: '102px', 
                  background: primaryColor,        // Ensure consistent button width
                }}
              >
                Add Item
              </Button>
            </Table>
            
          </TabPanel>
          
          <TabPanel value={tabValue} index={1}>
            {/* Attachments Section */}
            <Table component={Paper} className="shadow-sm shadow-black">
              <TableHead>
                <TableRow>
                  <TableCell className='text-md font-bold'>S No.</TableCell>
                  <TableCell className='text-md font-bold'>Target Path</TableCell>
                  <TableCell className='text-md font-bold'>File Name</TableCell>
                  <TableCell className='text-md font-bold'>Attachment Date</TableCell>
                  <TableCell className='text-md font-bold'>Free Text</TableCell>
                  <TableCell className='text-md font-bold'>Copy to Target Doc.</TableCell>
                  <TableCell className='text-md font-bold'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsA.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.itemNo}</TableCell>
                    <TableCell>
                      <TextField
                        name="targetpath"
                        value={row.targetpath}
                        onChange={(e) => handleInputChangeA(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="filename"
                        value={row.attachmentdate}
                        onChange={(e) => handleInputChangeA(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="attacheddate"
                        value={row.attacheddate}
                        onChange={(e) => handleInputChangeA(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                    <TextField
                        name="freetext"
                        value={row.freetext}
                        onChange={(e) => handleInputChangeA(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="copytotargetdocument"
                        value={row.copytotargetdocument}
                        onChange={(e) => handleInputChangeA(index, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onClick={() => handleDeleteRowA(index)}
                      >
                        <RiDeleteBin6Line style={{ fontSize: '20px' }} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddRowA}
                className="mt-4 m-2"
                style={{
                  whiteSpace: 'nowrap',   // Prevent text wrapping
                  width: '102px', 
                  background: primaryColor,        // Ensure consistent button width
                }}
              >
                Add Item
              </Button>
            </Table>
          </TabPanel>
        </div>
      </div>
      </div>
    </Layout>
  );
}

export default Page;
