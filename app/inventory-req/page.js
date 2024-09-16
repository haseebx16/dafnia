"use client";
import Layout from "../components/layout/layout";
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

  const { secondaryColor } = useColor();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { primaryColor } = useColor();

  return (
    <Layout>
      <div className={`${font.className}`}>

  {/* Title Section */}
  <div className="mt-4">
    <p className="text-2xl font-bold text-black mt-7 ml-4">
      Inventory Transfer Request
    </p>
    <hr className="border-t-2 border-gray-700 mt-5 " />
  </div>

  {/* top Section */}
<div
  className="grid grid-cols-2 mt-2 ml-2 mr-2 gap-96 bg-white p-4 shadow-md shadow-slate-400"
  style={{
    border: "2px solid #d0d0d0",
    borderRadius: "8px",
  }}
>
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
        Business Partner:
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
        <option>Select Partner</option>
        <option>Partner 1</option>
        <option>Partner 2</option>
        <option>Partner 3</option>
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

 
        {/* Ship To: column */}
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
    Ship To:
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
    <option>Select Location</option>
    <option>Location 1</option>
    <option>Location 2</option>
    <option>Location 3</option>
  </select>
</div>
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "40px", 
  }}
>
{/* Additional text field below without label */}
<input
  type="text"
  style={{
    width: "100%",
    height: "80px",
    padding: "5px",
    marginTop: "4px",
    fontSize: "12px",
    border: "2px solid #ccc",
    borderRadius: "4px",
  }}
  placeholder="Enter additional info"
/>

      {/* Price List: column */}
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
    Price List:
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
      <option>Last Purchase Price</option>
      <option>Price 1</option>
      <option>Price 2</option>
      <option>Price 3</option>
    </select>
    </div>
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
      <input
        type="date"
        id="dDate"
        name="dDate"
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

  {/* From Warehouse Dropdown */}
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
      From Warehouse:
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
      <option>Select Warehouse</option>
      <option>Warehouse 1</option>
      <option>Warehouse 2</option>
      <option>Warehouse 3</option>
    </select>
  </div>
</div>


    {/* To Warehouse Dropdown */}
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
        To Warehouse:
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
        <option>Select Warehouse</option>
        <option>Warehouse 1</option>
        <option>Warehouse 2</option>
        <option>Warehouse 3</option>
      </select>
    </div>
   
  </div>
</div>


{/* bottom Tab section */}

<div
  className="ml-2 mr-2 mt-2 p-1" 
  style={{
    border: "3px solid #d0d0d0",
    borderRadius: "10px",
    background: secondaryColor,
  }}
>
  <div className="mt-0 mb-0">
    <Tabs value={tabValue} onChange={handleTabChange}>
      <Tab label="Content" sx={{ fontWeight: "bold", fontSize: "12px"  }} /> 
      <Tab label="Attachments" sx={{ fontWeight: "bold", fontSize: "12px" }} />
    </Tabs>

    {/* Tab Panels */}
    <TabPanel value={tabValue} index={0}>
      <Table component={Paper} className="shadow-sm shadow-black">
        <TableHead>
          <TableRow>
            <TableCell className="text-sm font-bold">S No.</TableCell> 
            <TableCell className="text-sm font-bold">Item no.</TableCell>
            <TableCell className="text-sm font-bold">Description</TableCell>
            <TableCell className="text-sm font-bold">From Warehouse</TableCell>
            <TableCell className="text-sm font-bold">To Warehouse</TableCell>
            <TableCell className="text-sm font-bold">Quantity</TableCell>
            <TableCell className="text-sm font-bold">UOM Code</TableCell>
            <TableCell className="text-sm font-bold">Action</TableCell>
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
                <RiDeleteBin6Line sx={{ fontSize: "16px", color: `inherit` }} />
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
            whiteSpace: "nowrap",
            width: "auto",
            background: primaryColor,
            fontSize: "12px", 
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
            <TableCell className="text-sm font-bold">S No.</TableCell>
            <TableCell className="text-sm font-bold">Target Path</TableCell>
            <TableCell className="text-sm font-bold">File Name</TableCell>
            <TableCell className="text-sm font-bold">Attachment Date</TableCell>
            <TableCell className="text-sm font-bold">Free Text</TableCell>
            <TableCell className="text-sm font-bold">Copy to Target Doc.</TableCell>
            <TableCell className="text-sm font-bold">Action</TableCell>
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
              <TableCell>
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
                <RiDeleteBin6Line sx={{ fontSize: "16px", color: `inherit` }} />
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
            whiteSpace: "nowrap",
            width: "auto",
            background: primaryColor,
            fontSize: "12px", 
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
