"use client";

import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useColor } from '@/app/context/ColorContext';

const TextBar = ({ id, name, label, type, grids, ...props }) => {

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
          fontSize: '14px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            height: '36px',
            padding: '0px 8px',
            '& input': {
              height: '24px',
              padding: '4px 8px',
              fontSize: '14px',
            }
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px',
            top: '-6px',
          },
          '& .MuiFormLabel-filled': {
            top: '0px',
          },
        }}
        {...props}
      />
    </Grid>
  );
};

export default TextBar;
