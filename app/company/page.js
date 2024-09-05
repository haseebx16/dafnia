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
import { useState } from 'react';
import { useColor } from '../context/ColorContext';
import Layout from '../components/Layout/Layout';
import CustomButton from '../components/logout-button/button';
import { font } from '../components/font/poppins';
import { Pagination } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
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
  createData('CM-001', "Pinnacle", ""),
  createData('CM-002', "Dafnia", ""),
  createData('CM-003', "i-MSC", ""),
];

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [rows, setRows] = useState(initialRows);
  const [create, setCreate] = useState(false);

  const { primaryColor, secondaryColor } = useColor();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row) =>
    row.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout className={`${font.className}`}>
      <div className={`${font.className} flex justify-between items-center`}>
        <p className="text-2xl font-bold mt-1 text-black">Manage Company</p>
        <Link href="/create-company">
          <button
            onMouseEnter={() => setCreate(true)}
            onMouseLeave={() => setCreate(false)}
            style={{ backgroundColor: create ? secondaryColor : primaryColor }}
            className="p-2 mt-5 bg-sky-600 text-mb font-medium rounded-md mb-6 text-white shadow-gray-400 shadow-md"
          >
            Create Company
          </button>
        </Link>
      </div>
      <hr className="border-gray-700 w-full" />
      <input 
        type="text" 
        placeholder="Search by Company ID" 
        value={searchQuery} 
        onChange={handleSearch} 
        className="w-full p-3 border mt-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <TableContainer component={Paper} className="mt-8">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company ID</StyledTableCell>
              <StyledTableCell align="left">Company Name</StyledTableCell>
              <StyledTableCell align="left">Edit</StyledTableCell>
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
                    <FaRegEye />
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-end my-5">
  <Pagination count={5} variant="outlined" color="primary" />
</div>
    </Layout>
  );
};

export default Page;
