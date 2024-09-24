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
import { IoMdAdd } from "react-icons/io";
import SapTextField from "../components/fields/sapFields/sapTextField";
import SapDropDown from "../components/fields/dropDown/sapDropDown";
import SapDateField from "../components/fields/date/sapDateField";
import CustomButton from "../components/buttons/customButton/customButton";
import SapCopyFromDropDown from "../components/fields/dropDown/sapCopyFromDropDown";
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
    { name: "description", label: "Description" },
    { name: "quanity", label: "Quanity" },
    { name: "unitPrice", label: "Unit Price" },
    { name: "total", label: "Total" },
    { name: "accountCode", label: "Account Code" },
    { name: "itemCost", label: "Item Cost" },
    { name: "uomCode", label: "UOM Code" },
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
              height: "100%",
            }}
          >
            <p className="text-2xl font-bold text-black mt-3 ml-2">
              Goods Receipt
            </p>
            <hr className="border-t-2 border-gray-700 mt-5" />

            {/* Top Section */}
            <div className="grid grid-cols-2 mt-2 ml-2 mr-2 gap-80">
              {/* Your content for the top section goes here */}

              {/* Left column */}
              <div className="space-y-2" style={{ width: "450px" }}>
                {/* Row for Number and Series */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  {/* Number Input */}
                  <SapTextField
                    label="Number:"
                    secondaryColor={secondaryColor}
                  />

                  {/* Spacing between Number and Series */}

                  {/* Series Input */}
                  <SapTextField
                    label="Series:"
                    secondaryColor={secondaryColor}
                  />
                </div>

                {/* Name Dropdown */}
                <SapDropDown
                  secondaryColor={secondaryColor}
                  label="Price List:"
                  option="Select Price"
                  option1="Price 01"
                  option2="Price 02"
                  option3="Price 03"
                />
              </div>

              {/* Right column */}

              <div className="space-y-2" style={{ width: "400px" }}>
                {/* Posting Date */}
                <SapDateField
                  secondaryColor={secondaryColor}
                  label="Posting Date:"
                />

                {/* Document Date */}
                <SapDateField
                  secondaryColor={secondaryColor}
                  label="Document Date:"
                />
                <SapTextField label="Ref 2:" secondaryColor={secondaryColor} />
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
            {/* Main content container with two columns */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Left column */}
              <div style={{ width: "30%" }}>
                <div
                  className="space-y-2"
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  <SapTextField
                    label="Remarks"
                    secondaryColor={secondaryColor}
                  />
                </div>

                <SapTextField
                  label="Journal Remarks"
                  secondaryColor={secondaryColor}
                />
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
                    option1="Add and View"
                    option2="Add and Close"
                    onOptionSelect={(option) => console.log(option)}
                    primaryEnabled={true}
                    padding="6px 12px"
                    fontsize="12px"
                  />
                  <CustomButton
                    title="Cancel"
                    primaryEnabled={false}
                    classes={`bg-slate-500 hover:bg-slate-600 rounded`}
                    padding="6px 12px"
                    fontsize="12px"
                  />
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
                      <SapCopyFromDropDown
                        primaryColor={primaryColor}
                        option1="Inventory Transfer Request"
                        onOptionSelect={handleOptionSelect}
                      />
                    </div>
                  </div>
                  <CustomButton
                    primaryEnabled={true}
                    title="Copy To"
                    padding=" 8px"
                    fontsize="12px"
                  />
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
