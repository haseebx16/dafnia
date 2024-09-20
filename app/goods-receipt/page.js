"use client";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useColor } from "../context/ColorContext";
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
  Box,
} from "@mui/material";
import { font } from "../components/font/poppins";
import AddButton from "../components/buttons/addButton/addButton";
import { IoMdAdd } from "react-icons/io";

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
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function Page() {
  const [formData, setFormData] = useState({
    businessPartner: "",
    name: "",
    contactPerson: "",
    shipTo: "",
    no: "",
    status: "",
    postingDate: "",
    dueDate: "",
    documentDate: "",
    fromWarehouse: "",
    toWarehouse: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [rows, setRows] = useState([
    {
      itemNo: 1,
      description: "",          
      quantity: "",
      unitPrice: "",
      total: "",
      accountcode: "0.00",
      itemcost: "",
      uomName: "",
      
    },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        itemNo: rows.length + 1,
        description: "",
        quantity: "",
      unitPrice: "",
      total: "",
      accountcode: "0.00",
      itemcost: "",
      uomName: "",
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };
  {
    
  }

  const [rowsA, setRowsA] = useState([
    {
      itemNo: 1,
      targetpath: "",
      filename: "",
      attacheddate: "",
      freetext: "",
      copytotargetdocument: "",
    },
  ]);

  const handleInputChangeA = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...rowsA];
    updatedRows[index][name] = value;
    setRowsA(updatedRows);
  };

  const handleAddRowA = () => {
    setRowsA([
      ...rowsA,
      {
        itemNo: rowsA.length + 1,
        targetpath: "",
        filename: "",
        attacheddate: "",
        freetext: "",
        copytotargetdocument: "",
      },
    ]);
  };

  const handleDeleteRowA = (index) => {
    const updatedRows = rowsA.filter((_, rowIndex) => rowIndex !== index);
    setRowsA(updatedRows);
  };
  {
    /* Attachment Section Ends here */
  }


  

  const { secondaryColor, primaryColor } = useColor();
    const [tabValue, setTabValue] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCopyFromDropdown, setShowCopyFromDropdown] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Add and Close');
    const [copyFromOption, setCopyFromOption] = useState('');
  
    const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
    };
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleOptionSelect = (label) => {
      setButtonLabel(label);  // Update the button label to the selected value
      setShowDropdown(false); // Hide the dropdown after selection
    };
  
    const toggleCopyFromDropdown = () => {
      setShowCopyFromDropdown(!showCopyFromDropdown);
    };
  
    const handleCopyFromOptionSelect = (option) => {
      setCopyFromOption(option);
      setShowCopyFromDropdown(false);
    };     

  return (
    <Layout>
 <main className="flex-1 p-3 bg-gray-100 flex justify-center items-center">
      <div className={`${font.className}`}>

  {/* Title Section */}
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
  <p className="text-2xl font-bold text-black mt-3 ml-2">
  Goods Receipt
  </p>
  <hr className="border-t-2 border-gray-700 mt-5" />


{/* Top Section */}
<div
  className="grid grid-cols-2 mt-2 ml-2 mr-2 gap-80"
  
>
  {/* Your content for the top section goes here */}


 {/* Left column */}
<div className="space-y-2" style={{ width: "400px" }}>
  {/* Row for Number and Series */}
  <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: '5px' }}>
    
    {/* Number Input */}
    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <label style={{ fontWeight: "bold", fontSize: "12px", marginRight: "15px" }}>Number:</label>
      <input
        type="text"
        style={{
          width: "70%", // Reduced width
          height: "25px", // Reduced height
          padding: "4px",
          fontSize: "12px",
          border: "2px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>

    {/* Spacing between Number and Series */}
    <div style={{ width: "10px" }}></div>

    {/* Series Input */}
    <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <label style={{ fontWeight: "bold", fontSize: "12px", marginRight: "15px" }}>Series:</label>
      <input
        type="text"
        style={{
          width: "70%", // Reduced width
          height: "25px", // Reduced height
          padding: "4px",
          fontSize: "12px",
          border: "2px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  </div>

  {/* Name Dropdown */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "4px",
      background: secondaryColor,
      borderRadius: "6px",
      border: "2px solid #ccc",
      width: "100%",
      marginTop: '10px', // Adds spacing between inputs and dropdown
    }}
  >
    <label style={{ flex: 1, fontWeight: "bold", fontSize: "12px" }}>Price List:</label>
    <select
      style={{
        flex: 2,
        padding: "5px",
        fontSize: "12px",
        borderRadius: "4px",
        border: "2px solid #ccc",
      }}
    >
      <option>Select Name</option>
      <option>Last Purchase Price 1</option>
      <option>Last Purchase Price 2</option>
      <option>Last Purchase Price 3</option>
    </select>
  </div>
</div>


  {/* Right column */}
  
  <div className="space-y-2" style={{ width: "400px" }}>

    
    {/* Posting Date */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "4px",
        background: secondaryColor,
        borderRadius: "6px",
        border: "2px solid #ccc",
      }}
    >
      <label style={{ flex: 1, fontWeight: "bold", fontSize: "12px" }}>
        Posting Date:
      </label>
      <input
        type="date"
        id="pDate"
        name="pDate"
        style={{
          flex: 2,
          padding: "2px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "2px solid #ccc",
          backgroundColor: "white",
        }}
      />
    </div>


  {/* Document Date */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "4px",
      background: secondaryColor,
      borderRadius: "6px",
      border: "2px solid #ccc",
    }}
  >
    <label style={{ flex: 1, fontWeight: "bold", fontSize: "12px" }}>
      Document Date:
    </label>
    <input
      type="date"
      id="DocDate"
      name="DocDate"
      style={{
        flex: 2,
        padding: "2px",
        fontSize: "12px",
        borderRadius: "4px",
        border: "2px solid #ccc",
        backgroundColor: "white",
      }}
    />
  </div>
  <div
            style={{
              alignItems: 'center',
              padding: '1px',
              width: '100%',
            }}
          >
            <label style={{ fontWeight: 'bold', fontSize: '12px' }}> Ref. 2:</label>
            <input
              type="text"
              style={{
                marginLeft: '20px',
                width: '86%',
                height: '30px',
                padding: '5px',
                marginTop: '4px',
                fontSize: '12px',
                border: '2px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
 
  
  </div>
</div>
</Paper>

<div className="mt-2 mb-0"></div>

{/* bottom Tab section */}

<Paper
  elevation={3}
  style={{
    backgroundColor: secondaryColor,
    border: '1px solid #d0d0d0',
    borderRadius: '8px',
    overflowX: 'auto',
    overflowY: 'hidden',
    width: '100%',
    height: '100%',
  }}
>
  <Tabs
    value={tabValue}
    onChange={handleTabChange}
    sx={{
      fontWeight: 'bold',
      fontSize: '14px',
      '.MuiTab-root': {
        padding: '2px 1px',
      },
      '.MuiTabs-flexContainer': {
        justifyContent: 'left',
      },
    }}
  >
    <Tab label="Contents" sx={{ fontWeight: 'bold', fontSize: '12px' }} />
    <Tab label="Attachments" sx={{ fontWeight: 'bold', fontSize: '12px' }} />
  </Tabs>

  {/* Tab Panels */}
  <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
    <TabPanel
      value={tabValue}
      index={0}
      style={{
        padding: '1px',
        overflowY: 'auto',
      }}
    >
      <div className="table-container" style={{ overflowX: 'auto', width: '99%' }}>
        <Table component={Paper} className="shadow-sm shadow-slate-800 px-12">
          <TableHead>
            <TableRow>
              <TableCell className="text-sm font-bold">S No.</TableCell>
              <TableCell className="text-sm font-bold">Item no.</TableCell>
              <TableCell className="text-sm font-bold">Description</TableCell>
              <TableCell className="text-sm font-bold">Quantity</TableCell>
              <TableCell className="text-sm font-bold">Unit Price</TableCell>
              <TableCell className="text-sm font-bold">Total</TableCell>
              <TableCell className="text-sm font-bold">Account Code</TableCell>
              <TableCell className="text-sm font-bold">Item Cost</TableCell>
              <TableCell className="text-sm font-bold">UOM Code</TableCell>


              <TableCell className="text-sm font-bold text-center">Action</TableCell>
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
                    size="small" // Reduced field size
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="description"
                    value={row.description}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="quantity"
                    value={row.quantity}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="unitPrice"
                    value={row.unitPrice}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="total"
                    value={row.total}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="accountcode"
                    value={row.accountcode}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="itemcost"
                    value={row.accountcode}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="uomName"
                    value={row.uomName}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell className="flex justify-center">
                  <Button
                    onClick={() => handleDeleteRow(index)}
                    sx={{
                      transition: "background-color 0.3s, color 0.3s",
                      color: `${primaryColor}`,
                      fontSize: "16px",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    <RiDeleteBin6Line size={25} className='mt-1 border-2 border-sky-600 p-1 rounded-full' sx={{ fontSize: "36px", color: `inherit` }} />
                  </Button>
                  <Button
                    onClick={() => handleAddRow(index)}
                    sx={{
                      transition: "background-color 0.3s, color 0.3s",
                      color: `${primaryColor}`,
                      fontSize: "16px",
                    }}
                  >
                    <IoMdAdd size={25} className='mt-1 border-2 border-sky-600 p-1 rounded-full' onClick={handleAddRow} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabPanel>

    {/* Attachments Section */}
    <TabPanel
      value={tabValue}
      index={1}
      style={{
        padding: '1px',
        overflowY: 'auto',
      }}
    >
      <div className="table-container">
        <Table component={Paper} className="shadow-sm shadow-black">
          <TableHead>
            <TableRow>
              <TableCell className="text-sm font-bold">S No.</TableCell>
              <TableCell className="text-sm font-bold">Target Path</TableCell>
              <TableCell className="text-sm font-bold">File Name</TableCell>
              <TableCell className="text-sm font-bold">Attachment Date</TableCell>
              <TableCell className="text-sm font-bold">Free Text</TableCell>
              <TableCell className="text-sm font-bold">Copy to Target Doc.</TableCell>
              <TableCell className="text-sm font-bold text-center">Action</TableCell>
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
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="filename"
                    value={row.filename}
                    onChange={(e) => handleInputChangeA(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="attacheddate"
                    value={row.attacheddate}
                    onChange={(e) => handleInputChangeA(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="freetext"
                    value={row.freetext}
                    onChange={(e) => handleInputChangeA(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="copytotargetdocument"
                    value={row.copytotargetdocument}
                    onChange={(e) => handleInputChangeA(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell className="flex">
                  <Button
                    onClick={() => handleDeleteRowA(index)}
                    sx={{
                      transition: "background-color 0.3s, color 0.3s",
                      color: `${primaryColor}`,
                      fontSize: "16px",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    <RiDeleteBin6Line size={25} className='mt-1 border-2 border-sky-600 p-1 rounded-full' sx={{ fontSize: "16px", color: `inherit` }} />
                  </Button>
                  <Button
                    onClick={() => handleAddRowA(index)}
                    sx={{
                      transition: "background-color 0.3s, color 0.3s",
                      color: `${primaryColor}`,
                      fontSize: "16px",
                    }}
                  >
                    <IoMdAdd size={25} className='mt-1 border-2 border-sky-600 p-1 rounded-full' onClick={handleAddRowA} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabPanel>
  </div>
</Paper>
<Paper
      elevation={3}
      style={{
        backgroundColor: 'white',
        border: '1px solid #d0d0d0',
        borderRadius: '8px',
        padding: '20px',
        width: '100%',
        height: '100%',
        marginTop: '4px',
      }}
    >
      {/* Main content container with two columns */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left column */}
        <div style={{ width: '30%' }}>
          <div className="space-y-2" style={{ width: '100%' }}>
          <div
            style={{
              alignItems: 'center',
              padding: '2px',
              width: '100%',
            }}
          >
            <label style={{ fontWeight: 'bold', fontSize: '12px' }}> Remarks:</label>
            <input
              type="text"
              style={{
                marginLeft: '64px',
                width: '65%',
                height: '30px',
                padding: '5px',
                marginTop: '4px',
                fontSize: '12px',
                border: '2px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
            
          </div>

          <div
            style={{
              alignItems: 'center',
              padding: '5px',
              width: '100%',
            }}
          >
            <label style={{ fontWeight: 'bold', fontSize: '12px' }}> Journal Remarks:</label>
            <input
              type="text"
              style={{
                marginLeft: '15px',
                width: '66%',
                height: '30px',
                padding: '5px',
                marginTop: '4px',
                fontSize: '12px',
                border: '2px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        </div>

        {/* Right column */}
        <div style={{ width: '33%' }}>
          <div className="space-y-2">
            

            

           

            {/* Buttons Section */}
            <div style={{ display: 'flex', marginTop: '20px' }}>
              {/* Copy From and Copy To Buttons in one line */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div style={{  marginTop: '10px' }}>
  <div style={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>

    {/* Add and Close and Cancel Buttons */}
    <div style={{ display: 'flex', gap: '8px' }}> {/* Add a container div with flexbox */}
      {/* Add and Close Button with Dropdown */}
      <div
        style={{
          position: 'relative', // Added relative positioning for dropdown
          display: 'inline-block',
        }}
      >
        <button
          style={{
            padding: '6px 12px',
            backgroundColor: primaryColor,
            color: '#fff',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
          onClick={toggleDropdown}
        >
          {buttonLabel}
          <span style={{ fontSize:'10px', marginLeft:'5px' }}>▼</span>
        </button>

        {showDropdown && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: primaryColor,
              color: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px',
              bottom: '100%', // Change from top: '100%' to bottom: '100%'
              left: '0',
              minWidth: '120px',
              zIndex: 1,
              marginBottom: '4px', // Add margin to avoid overlap with button
            }}
          >
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: primaryColor,
                color: '#fff',
                border: '2px solid #ccc',
                borderRadius: '4px',
                fontSize: '12px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
              }}
              onClick={() => handleOptionSelect('Add and Close')}
            >
              Add and Close
            </button>
            <button
              style={{
                padding: '6px 12px',
                backgroundColor: primaryColor,
                color: '#fff',
                border: '2px solid #ccc',
                borderRadius: '4px',
                fontSize: '12px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
              }}
              onClick={() => handleOptionSelect('Add and View')}
            >
              Add and View
            </button>
          </div>
        )}
      </div>

      {/* Cancel Button */}
      <button
        className="bg-slate-500 hover:bg-slate-600 rounded text-white"
        style={{
          padding: '6px 12px',
          fontSize: '12px',
          cursor: 'pointer',
        }}
      >
        Cancel
      </button>
    </div>

    {/* Copy from and Copy to Buttons */}
    
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
      <div
        style={{
          position: 'relative', // Added relative positioning for dropdown
        }}
      >
        <button
          style={{
            padding: '6px 12px',
            backgroundColor: primaryColor,
            color: '#fff',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
          onClick={toggleCopyFromDropdown}
        >
          Copy from
          <span style={{ fontSize:'10px', marginLeft:'5px' }}>▼</span>

        </button>
        
          
        {showCopyFromDropdown && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: primaryColor,
              color: '#fff',
              border: '1px solid #ccc',
              borderRadius: '4px',
              bottom: '100%', // Change from top: '100%' to bottom: '100%'
              left: '0',
              minWidth: '120px',
              zIndex: 1,
              marginBottom: '4px', // Add margin to avoid overlap with button
            }}
          >
            <button
              style={{
                padding: '6px 6px',
                backgroundColor: primaryColor,
                color: '#fff',
                border: '2px solid #ccc',
                borderRadius: '4px',
                fontSize: '12px',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
              }}
              onClick={() => handleCopyFromOptionSelect('Inventory Transfer Request')}
            >
              Inventory Transfer Request
            </button>
            
          
          </div>
        )}
        
      </div>
{/*  Copy to Button */}
<div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
      

      <button
        style={{
          padding: '6px 12px',
          backgroundColor: primaryColor,
          color: '#fff',
          border: '2px solid #ccc',
          borderRadius: '4px',
          fontSize: '12px',
          cursor: 'pointer',
        }}
      >
        Copy to
      </button>
    </div>
      
    </div>
  </div>
</div>

    </Paper>

  </div>
  </main>
    </Layout>
  );
}

export default Page;
