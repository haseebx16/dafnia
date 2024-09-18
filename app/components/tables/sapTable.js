"use client";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useColor } from "@/app/context/ColorContext";
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

const sapTable = () => {

    const { secondaryColor,primaryColor } = useColor();

    const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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

  return (
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
                        inputProps={{ style: { fontSize: "12px" } }} // Reduced font size inside the field
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
                            "&:hover": {
                            color: "red",
                            },
                        }}
                        style={{ fontSize: "14px" }}
                        >
                        <RiDeleteBin6Line style={{ fontSize: "16px" }} />
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
                        color: `${primaryColor}`,  // Force apply the primaryColor
                        fontSize: "14px",
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
  )
}

export default sapTable