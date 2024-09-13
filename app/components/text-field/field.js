"use client"

import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useColor } from '@/app/context/ColorContext'

const RoundedField = ({ id, name, label, type, grids,...props }) => {

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
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                padding: '0px'
              },
              '& .MuiOutlinedInput-input': {
                height: '30px',
                padding: '8px 8px', 
              }
            }}
             {...props}
        />
    </Grid>
  )
}

export default RoundedField
