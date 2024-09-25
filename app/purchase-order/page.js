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
import SapDropDown from "../components/fields/dropDown/sapDropDown";
import SapTextField from "../components/fields/sapFields/sapTextField";
import SapDateField from "../components/fields/date/sapDateField";
import SapDropdownButton from "../components/buttons/sapDropdownButton/sapDropdownButton";
import SapCancelButton from "../components/buttons/sapCancelButton/SapCancelButton";
import SapCopyButton from "../components/buttons/sapCopyButton/SapCopyButton";
import SapCopyFromDropDown from "../components/fields/dropDown/sapCopyFromDropDown";
import CustomButton from "../components/buttons/customButton/customButton";
import SapTable from "../components/tables/sapTable";

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
  const [buttonLabel, setButtonLabel] = useState("Add and Close");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  
  const handleOptionSelect = (label) => {
    setButtonLabel(label); // Update the button label to the selected value
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const fieldConfigs = [
    { name: "itemNo", label: "Item no." },
    { name: "description", label: "Item Description" },
    { name: "uomCode", label: "UoM Code" },
    { name: "quantity", label: "Quantity" },
    { name: "unitPrice", label: "Unit Price" },
    { name: "taxCode", label: "Tax Code" },
    { name: "total", label: "Total" },
  ];


  return (
    <Layout>
      <main className="flex-1 p-3 bg-gray-100 flex justify-center items-center">
        <div className={`${font.className}`}>
          {/* Title Section */}
          <Paper
            elevation={3}
            style={{
              backgroundColor: "white",
              border: "1px solid #d0d0d0",
              borderRadius: "8px",
              padding: "20px",
              width: "100%",
            }}
          >
            <p className="text-2xl font-bold text-black mt-3 ml-2">
              Purchase Order
            </p>
            <hr className="border-t-2 border-gray-700 mt-5" />

            <div className="grid grid-cols-2 mt-2 ml-2 mr-2 gap-80">
              {/* Left column */}
              <div className="space-y-2" style={{ width: "400px" }}>
                <SapDropDown
                  label="Vendor:"
                  secondaryColor={secondaryColor}
                  option="Select Vendor"
                  option1="Vendor 1"
                  option2="Vendor 2"
                  option3="Vendor 3"
                />
                <SapDropDown
                  secondaryColor={secondaryColor}
                  label="Name:"
                  option="Select Name"
                  option1="Name 1"
                  option2="Name 2"
                  option3="Name 3"
                />
                <SapDropDown
                  secondaryColor={secondaryColor}
                  label="Contact Person:"
                  option="Select Contact Person"
                  option1="Person 1"
                  option2="Person 2"
                  option3="Person 3"
                />
                <SapTextField
                  label="Vendor Ref. No"
                  secondaryColor={secondaryColor}
                />
              </div>

              {/* Right column */}
              <div className="space-y-2" style={{ width: "400px" }}>
                <SapDropDown
                  secondaryColor={secondaryColor}
                  label="Number:"
                  option="Select Number"
                  option1="No. 1"
                  option2="No. 2"
                  option3="No. 3"
                />
                <SapDropDown
                  secondaryColor={secondaryColor}
                  label="Status:"
                  option="Select Status"
                  option2="Open"
                  option3="Closed"
                />
                <SapDateField
                  secondaryColor={secondaryColor}
                  label="Posting Date"
                />
                <SapDateField
                  secondaryColor={secondaryColor}
                  label="Delivery Date"
                />
                <SapDateField
                  secondaryColor={secondaryColor}
                  label="Document Date"
                />
              </div>
            </div>
          </Paper>

          <div className="mt-2 mb-0"></div>

          {/* bottom Tab section */}

          <Paper
            elevation={3}
            style={{
              backgroundColor: secondaryColor,
              border: "1px solid #d0d0d0",
              borderRadius: "8px",
              overflowX: "auto",
              overflowY: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                ".MuiTab-root": {
                  padding: "2px 1px",
                },
                ".MuiTabs-flexContainer": {
                  justifyContent: "left",
                },
              }}
            >
              <Tab
                label="Content"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              />
            </Tabs>

            {/* Tab Panels */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <SapTable
                tabValue={tabValue}
                rows={rows}
                primaryColor={primaryColor}
                handleInputChange={handleInputChange}
                handleDeleteRow={handleDeleteRow}
                handleAddRow={handleAddRow}
                fieldConfigs={fieldConfigs}
              />
            </div>
          </Paper>
          <Paper
            elevation={3}
            style={{
              backgroundColor: "white",
              border: "1px solid #d0d0d0",
              borderRadius: "8px",
              padding: "20px",
              width: "100%",
              height: "100%",
              marginTop: "4px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "30%" }}>
                <div className="space-y-2" style={{ width: "100%" }}>
                  <SapDropDown
                    label="Buyer:"
                    secondaryColor={secondaryColor}
                    option="Select Buyer"
                    option1="Buyer 1"
                    option2="Buyer 2"
                    option3="Buyer 3"
                  />
                  <SapTextField label="Owner" secondaryColor={secondaryColor} />
                </div>
                <div className="mt-2">
                  <SapTextField
                    label="Remarks"
                    secondaryColor={secondaryColor}
                  />
                </div>
              </div>

              <div style={{ width: "37%" }}>
                <div className="space-y-2">
                  <SapTextField
                    label="Total Before Discount"
                    secondaryColor={secondaryColor}
                  />
                  <SapTextField
                    label="Discount"
                    secondaryColor={secondaryColor}
                  />

                  <SapTextField
                    label="Freight"
                    secondaryColor={secondaryColor}
                  />
                  <SapTextField
                    label="Rounding"
                    secondaryColor={secondaryColor}
                  />
                  <SapTextField label="Tax" secondaryColor={secondaryColor} />
                  <SapTextField
                    label="Total After Discount"
                    secondaryColor={secondaryColor}
                  />
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                <CustomButton 
                  isDropdown={true} 
                  options={["Add & View", "Add & Close"]}
                  onOptionSelect={(option) => console.log(option)} 
                  primaryEnabled={true} 
                  padding="6px 12px" 
                  fontsize="12px" 
                />
                  <CustomButton title="Cancel" primaryEnabled={false} classes={`bg-slate-500 hover:bg-slate-600 rounded`} padding="6px 12px" fontsize="12px"/>
                </div>

                <div  
                  style={{
                    display: "flex",
                    gap: "8px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                  <div>
                  <CustomButton 
                    isDropdown={true} 
                    options={["Purchase Quotation", "Purchase Request", "Blanket Agreement"]}
                    onOptionSelect={(option) => console.log(option)} 
                    primaryEnabled={true} 
                    padding="8px 12px" 
                    fontsize="12px" 
                  />
                  </div>
                  </div>
                  <CustomButton primaryEnabled={true} title="Copy To" padding=" 8px" fontsize="12px"/>
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
