"use client";
import Link from 'next/link';
import { FaRegEye } from "react-icons/fa";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import Sidebar from '../components/Layout/sidebar';
import { useColor } from '../context/ColorContext';
import { Pagination } from '@mui/material';    
import CustomButton from '../components/logout-button/button';
import { font } from '../components/font/poppins';
import { IoMdAdd } from "react-icons/io";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(id, name, action) {
  return { id, name, action };
}

const initialRows = [
  createData('U-001', "Ali Arif", ""),
  createData('U-002', "Ali Ahmed", ""),
  createData('U-003', "Ayan Rabbani", ""),
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState(initialRows);
  const [isHovered, setIsHovered] = useState(false);
  const [isCreateHovered, setIsCreateHovered] = useState(false); 

  const { primaryColor, secondaryColor } = useColor();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    
      <div className={`${font.className} flex-1 flex flex-col min-h-screen`}>
      <header className="flex items-center justify-between px-12 bg-blue-50 w-full border border-gray-100">
        <img src="/dafnia-png.png" className='w-auto h-24 p-2' />
        <h1 className="text-3xl font-semibold">Welcome To Dafnia Portal</h1>
        <Link href='/'>
          <CustomButton title="Logout" />
        </Link>
      </header>
      <hr className='w-full border-gray-600'/>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />
        <main className="flex-1 p-5 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold  text-black">Manage Users</p>
            <Link href="/create-users">
              <button
                className="p-2 mt-5 text-mb flex rounded-md mb-6 text-white shadow-gray-400 shadow-md font-semibold"
                onMouseEnter={() => setIsCreateHovered(true)} 
                onMouseLeave={() => setIsCreateHovered(false)}
                style={{ backgroundColor: isCreateHovered ? secondaryColor : primaryColor }}
              >
                <IoMdAdd size={24} />
                Create Users
              </button>
            </Link>
          </div>
          <hr className="border-gray-700 w-full" />
          <input 
            type="text" 
            placeholder="Search by User ID" 
            value={searchQuery} 
            onChange={handleSearch} 
            className="w-full p-3 border mt-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <TableContainer component={Paper} className="mt-8 ">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell className="font-bold text-2xl">User ID</StyledTableCell>
                  <StyledTableCell className="font-bold text-2xl" align="left">User Name</StyledTableCell>
                  <StyledTableCell className="font-bold text-2xl" align="left">Edit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">
                    <div className="flex">
                   <FaRegEye size={36} className="border-2 border-blue-600 p-2 rounded-full" />
                  </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="flex justify-end my-5">
            <Pagination count={2} variant="outlined" color="primary" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
