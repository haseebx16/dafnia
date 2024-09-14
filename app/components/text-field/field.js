"use client";

import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useColor } from '@/app/context/ColorContext';

const RoundedField = ({ id, name, label, type, grids, ...props }) => {

  const { secondaryColor } = useColor();

  return (
    <Grid item xs={grids}>
      <TextField
        fullWidth
        id={id}
        name={name}
        className='rounded-md'
        label={label}
        type={type}
        variant="outlined"
        sx={{
          backgroundColor: secondaryColor,
          fontSize: '14px', // Adjust font size for the input
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            height: '36px',  // Adjust the overall height of the TextField
            padding: '0px 8px',  // Adjust padding for more compactness
            '& input': {
              height: '24px',  // Set a specific height for the input text area
              padding: '4px 8px', // Control padding inside the input
              fontSize: '14px', // Reduce font size inside the input
            }
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px',  // Reduce label font size
            top: '-6px',  // Align label better with a reduced height
          },
          '& .MuiFormLabel-filled': {
            top: '0px',  // Adjust when the input is filled
          },
        }}
        {...props}
      />
    </Grid>
  );
};

export default RoundedField;
