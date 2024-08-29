"use client"
import Link from 'next/link';
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Company 1', "A", "Icon"),
  createData('Company 2', "A", "Icon"),
  createData('Company 3', "A", "Icon"),
  createData('Company 4', "A", "Icon"),
  createData('Company 5', "A", "Icon"),
];

const page = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-80 bg-white text-white flex flex-col bg-gradient-to-b from-white from-20% via-blue-300 to-sky-800">
        <div className='flex justify-center items-center'>
          <img src="/logo-dafnia.png" className='w-auto h-36 mt-6'/>
        </div>
        <nav className="flex-1 px-4 mt-6 space-y-4">
          <Link href='/dashboard'><p href="#" className="flex py-2 px-4 rounded transition text-black duration-200 hover:bg-sky-600 hover:text-white">
            <FaHome />&nbsp;&nbsp;{" "}Home
          </p></Link> 
          <Link className='mt-2' href="/company"><p className="flex py-2 mt-2 px-4   rounded  transition duration-200 bg-sky-600 text-white">
            <GoGraph/>&nbsp;&nbsp;{" "}Company
          </p></Link>
          <a href="#" className="flex py-2 px-4 text-black  rounded transition duration-200 hover:bg-sky-600 hover:text-white">
            <FaUser/> &nbsp;&nbsp;{" "}Users
          </a>
          <a href="#" className="flex py-2 px-4 text-black  rounded transition duration-200 hover:bg-sky-600 hover:text-white">
            <IoMdSettings/>&nbsp;&nbsp;{" "}Settings
          </a>
        </nav>
        <div className="p-6">
          <Link href="/">
            {/* <button className="w-full px-4 py-2 bg-sky-700 text-white rounded hover:bg-sky-600">
              Logout
            </button> */}
          </Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome to Dafnia Portal</h1>
          
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className='text-xl mt-1'>Manage Company</p>
            <button className='p-2 mt-5 bg-sky-600 text-mb font-medium rounded-md mb-6 text-white shadow-gray-400 shadow-md'>Create Company</button>
          </div>
        <hr className=" border-gray-700 w-full"/>
        <TableContainer component={Paper} className='mt-8'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company ID </StyledTableCell>
            <StyledTableCell align="right">Company Name</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </main>
        </div>

      
    </div>
  )
}

export default page