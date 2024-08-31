"use client"
import Link from 'next/link';
import { FaHome, FaUser, FaRegEye } from "react-icons/fa";
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
import { useState } from "react"; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material'
import Sidebar from '../components/Layout/sidebar';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
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

const rows = [
  createData('Company 1', "Pinnacle", ""),
  createData('Company 2', "Dafnia", ""),
  createData('Company 3', "i-MSC", ""),
  
];


const page = () => {

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar/>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-6 bg-white border border-gray-100">
          <h1 className="text-3xl font-semibold">Welcome to Dafnia Portal</h1>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <p className="text-xl mt-1 text-black">Manage Company</p>
           <Link href="/create-company"> <button className="p-2 mt-5 bg-sky-600 text-mb font-medium rounded-md mb-6 text-white shadow-gray-400 shadow-md">Create Company</button></Link>
          </div>
          <hr className="border-gray-700 w-full" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full p-3 border mt-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 1200,
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h5" align='center' component="h2">
                Create Company
              </Typography>
              <hr className="border-gray-700 w-full mt-2" />
              <form onSubmit="">
                <Grid container spacing={2} mt={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      id="name"
                      name="name"
                      label="Company Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      id="email"
                      name="email"
                      label="Description"
                      type="text"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="SAP"
                      name="SAP"
                      label="SAP Company"
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      id="file"
                      type='file'
                      name="file"
                      
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={8}></Grid>
                  <Grid item xs={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={handleClose}
                      sx={{ bgcolor: '#0284c7', '&:hover': { bgcolor: 'deepskyblue' } }}
                    >
                      Close
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={handleClose}
                      sx={{ bgcolor: '#0284c7', '&:hover': { bgcolor: 'deepskyblue' } }}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Modal>
          <TableContainer component={Paper} className="mt-8">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Company ID</StyledTableCell>
                  <StyledTableCell align="left">Company Name</StyledTableCell>
                  <StyledTableCell align="edit">Edit</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">
                      <div className="flex ">
                        <FaRegEye />
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </main>
      </div>
    </div>
  );
};

export default page;
