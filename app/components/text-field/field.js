import React from 'react'
import { TextField, Grid } from '@mui/material'

const RoundedField = ({ id, name, label, type, ...props }) => {
  return (
    <Grid item xs={6}>
        <TextField
            fullWidth
            id={id}
            name={name}
            className='rounded-md'
            label={label}
            type={type}
            variant="outlined"
            sx={{ backgroundColor: 'white',
                '& .MuiOutlinedInput-root' : {
                    borderRadius: '8px'
                }
             }}
             {...props}
        />
    </Grid>
  )
}

export default RoundedField
