import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { useColor } from '@/app/context/ColorContext'
const UserDropdown = ({ label, dropdownValue, handleDropdownChange, option1, option2, option3, labelSpace, grids, ...props}) => {

    const {secondaryColor} = useColor();

  return (
                <Grid item xs={grids}>
                    <FormControl fullWidth>
                        <InputLabel id="dropdown-label">{label}</InputLabel>
                        <Select
                        labelId="dropdown-label"
                        id="dropdown"
                        value={dropdownValue}
                        label={labelSpace}
                        className='rounded-md'
                        onChange={handleDropdownChange}
                        sx={{
                          backgroundColor: secondaryColor,
                        }}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="option1">{option1}</MenuItem>
                        <MenuItem value="option2">{option2}</MenuItem>
                        <MenuItem value="option3">{option3}</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
  )
}

export default UserDropdown