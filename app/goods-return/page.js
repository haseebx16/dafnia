
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
        fromWarehouse: "WHS-0001",
        toWarehouse: "WHS-0001",
        quantity: "",
        uomCode: "",
        uomName: "",
        moisture: "0.00",
        rejection: "",
        grade: "",
        value: "",
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
          fromWarehouse: "",
          toWarehouse: "",
          quantity: "",
          uomCode: "",
          uomName: "",
          moisture: "",
          rejection: "",
          grade: "",
          value: "",
        },
      ]);
    };
  
    const handleDeleteRow = (index) => {
      const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
      setRows(updatedRows);
    };
  
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
  Goods Return 
    </p>
  <hr className="border-t-2 border-gray-700 mt-5" />


{/* Top Section */}
<div
  className="grid grid-cols-2 mt-2 ml-2 mr-2 gap-80"
  
>
  {/* Your content for the top section goes here */}


  {/* Left column */}
  <div className="space-y-2" style={{ width: "400px" }}>
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
      Vendor:
      </label>
      <select
        style={{
          flex: 2,
          padding: "2px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "2px solid #ccc",
        }}
      >
        <option>Select Vendor</option>
        <option>Vendor 01</option>
        <option>Vendor 02</option>
        <option>Vendor 03</option>
      </select>
    </div>
     {/* Name: column */}

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
        Name:
      </label>
      <select
        style={{
          flex: 2,
          padding: "2px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "2px solid #ccc",
        }}
      >
        <option>Select Name</option>
        <option>Name 1</option>
        <option>Name 2</option>
        <option>Name 3</option>
      </select>
    </div>
            {/* Contact Person: column */}

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
      Contact Person:
    </label>
    <select
      style={{
        flex: 2,
        padding: "2px",
        fontSize: "12px",
        borderRadius: "4px",
        border: "2px solid #ccc",
      }}
    >
      <option>Select Contact Person</option>
      <option>Person 1</option>
      <option>Person 2</option>
      <option>Person 3</option>
    </select>
  </div>

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
        Vendor Ref No.
  </label>
  <input type="text" placeholder="Vendor Ref No." style={{ 
      flex: 2,
      padding: "2px",
      fontSize: "12px",
      borderRadius: "4px",
      border: "2px solid #ccc",
    }}/>
</div>

  </div>

  {/* Right column */}
  
  <div className="space-y-2" style={{ width: "400px" }}>

    {/* Number Dropdown */}
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
        Number:
      </label>
      <select
        style={{
          flex: 2,
          padding: "2px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "2px solid #ccc",
          backgroundColor: "white",
        }}
      >
        <option>Select Number</option>
        <option>No 1</option>
        <option>No 2</option>
        <option>No 3</option>
      </select>
    </div>

    {/* Status Dropdown */}
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
        Status:
      </label>
      <select
        style={{
          flex: 2,
          padding: "2px",
          fontSize: "12px",
          borderRadius: "4px",
          border: "2px solid #ccc",
          backgroundColor: "white",
        }}
      >
        <option>Select Status</option>
        <option>Open</option>
        <option>Close</option>
      </select>
    </div>

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

    {/* Due Date */}
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
    Due Date:
  </label>
  <input type="text" style={{ 
      flex: 2,
      padding: "2px",
      fontSize: "12px",
      borderRadius: "4px",
      border: "2px solid #ccc",
    }}/>
</div>
    <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "40px", 
  }}
>
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
    <Tab label="Content" sx={{ fontWeight: 'bold', fontSize: '12px' }} />
    <Tab label="Logistics" sx={{ fontWeight: 'bold', fontSize: '12px' }} />
    <Tab label="Accounting" sx={{ fontWeight: 'bold', fontSize: '12px' , margin:"10px" }} />
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
              <TableCell className="text-sm font-bold">Quantity</TableCell>
              <TableCell className="text-sm font-bold">Unit  Price</TableCell>
              <TableCell className="text-sm font-bold">Discount %</TableCell>
              <TableCell className="text-sm font-bold">Tax Code</TableCell>
              <TableCell className="text-sm font-bold">Rejection</TableCell>
              <TableCell className="text-sm font-bold">Total</TableCell>
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
                    name="fromWarehouse"
                    value={row.fromWarehouse}
                    onChange={(e) => handleInputChange(index, e)}
                    size="small"
                    inputProps={{ style: { fontSize: "12px" } }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    name="toWarehouse"
                    value={row.toWarehouse}
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
                    name="uomCode"
                    value={row.uomCode}
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
                    <RiDeleteBin6Line size={30} className='mt-1 border-2 border-sky-600 p-1 rounded-full' sx={{ fontSize: "36px", color: `inherit` }} />
                  </Button>
                  <Button
                    onClick={() => handleAddRow(index)}
                    sx={{
                      transition: "background-color 0.3s, color 0.3s",
                      color: `${primaryColor}`,
                      fontSize: "16px",
                    }}
                  >
                    <IoMdAdd size={30} className='mt-1 border-2 border-sky-600 p-1 rounded-full' onClick={handleAddRow} />
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
                    <RiDeleteBin6Line size={30} className='mt-1 border-2 border-sky-600 p-1 rounded-full' sx={{ fontSize: "16px", color: `inherit` }} />
                  </Button>
                  <Button
                    onClick={() => handleAddRowA(index)}
                    sx={{
                      transition: "background-color 0.3s, color 0.3s",
                      color: `${primaryColor}`,
                      fontSize: "16px",
                    }}
                  >
                    <IoMdAdd size={30} className='mt-1 border-2 border-sky-600 p-1 rounded-full' onClick={handleAddRowA} />
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
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Buyer:
              </label>
              <select
                style={{
                  width: '230px', // Fixed width for the select field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
              >
                <option>No Sales Employee</option>
                <option>No Sales Employee 01</option>
                <option>No Sales Employee 02</option>
                <option>No Sales Employee 03</option>
              </select>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Owner
              </label>
              <input
                type="text"
                style={{
                  width: '230px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
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
            <label style={{ fontWeight: 'bold', fontSize: '12px' }}>Remarks:</label>
            <input
              type="text"
              style={{
                marginLeft: '60px',
                width: '80%',
                height: '80px',
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Total Before Discount
              </label>
              <input
                type="text"
                style={{
                  width: '200px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Discount
              </label>
              <input
                type="text"
                style={{
                  width: '183px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
              />
              <span style={{ paddingLeft: '8px', fontSize: '12px' }}>%</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Freight
              </label>
              <input
                type="text"
                style={{
                  width: '200px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Rounding
              </label>
              <input
                type="text"
                style={{
                  width: '200px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
                placeholder="PKR 0.00"
              />
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Tax
              </label>
              <input
                type="text"
                style={{
                  width: '200px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                background: secondaryColor,
                borderRadius: '6px',
                border: '2px solid #ccc',
              }}
            >
              <label style={{ flex: 1, fontWeight: 'bold', fontSize: '12px' }}>
                Total Credit
              </label>
              <input
                type="text"
                style={{
                  width: '200px', // Fixed width for the input field
                  padding: '2px',
                  fontSize: '12px',
                  borderRadius: '4px',
                  border: '2px solid #ccc',
                }}
                placeholder="PKR 0.00"
              />
            </div>

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
        //   position: 'relative', // Added relative positioning for dropdown
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
          {/* <span style={{ fontSize:'10px', marginLeft:'5px' }}>▼</span> */}

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
              onClick={() => handleCopyFromOptionSelect('Purchase Request')}
            >
              Purchase Request
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
              onClick={() => handleCopyFromOptionSelect('Purchase Quotation')}
            >
              Purchase Quotation
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
              onClick={() => handleCopyFromOptionSelect('Blanket Agreement')}
            >
              Blanket Agreement
            </button>
          </div>
        )}
      </div>

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

    </Paper>




  </div>
  </main>
    </Layout>
  );
}

export default Page;