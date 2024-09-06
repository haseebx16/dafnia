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
import Layout from '../components/Layout/Layout';  // Ensure this is correctly imported
import CustomButton from '../components/logout-button/button';
import { Pagination } from '@mui/material';
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

const allRows = [
  createData('U-001', "Ali Arif", ""),
  createData('U-002', "Ali Ahmed", ""),
  createData('U-003', "Ayaan Rabbani", ""),
  createData('U-004', "Bilal Khan", ""),
  createData('U-005', "Adnan Syed", ""),
  createData('U-006', "Zubair Kazmi", ""),
];

const rowsPerPage = 3;

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [create, setCreate] = useState(false);

  const { primaryColor, secondaryColor } = useColor();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = allRows.filter((row) =>
    row.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Layout>  {/* Ensure Layout is correctly wrapping your content */}
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold mt-1 text-black">Manage Users</p>
        <Link href="/create-users">
          <button
            onMouseEnter={() => setCreate(true)}
            onMouseLeave={() => setCreate(false)}
            style={{ backgroundColor: create ? secondaryColor : primaryColor }}
            className="p-2 mt-5 flex  bg-sky-600 text-mb font-bold rounded-md mb-6 text-white shadow-gray-400 shadow-md"
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
      <TableContainer component={Paper} className="mt-8">
        <Table sx={{ minWidth: 500, maxwidth:600, }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="font-bold" >Users ID</StyledTableCell>
              <StyledTableCell className="font-bold" align="left">Users Name</StyledTableCell>
              <StyledTableCell className ="font-bold" align="left">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
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
        <Pagination
          count={Math.ceil(filteredRows.length / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </div>
    </Layout>
  );
};

export default Page;
