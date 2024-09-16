import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useColor } from '@/app/context/ColorContext';

const UserDropdown = ({ label, dropdownValue, handleDropdownChange, option1, option2, option3, labelSpace, grids, ...props }) => {

  const { secondaryColor } = useColor();

  return (
    <Grid item xs={grids}>
      <FormControl fullWidth>
        <InputLabel id="dropdown-label" notched>{label}</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={dropdownValue}
          label={labelSpace}
          onChange={handleDropdownChange}
          className="rounded-md"
          sx={{ 
            backgroundColor: secondaryColor,
            height: '36px',
            fontSize: '14px', 
            padding: '0px 8px',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="option1" sx={{ height: '30px', fontSize: '14px' }}>
            {option1}
          </MenuItem>
          <MenuItem value="option2" sx={{ height: '30px', fontSize: '14px' }}>
            {option2}
          </MenuItem>
          <MenuItem value="option3" sx={{ height: '30px', fontSize: '14px' }}>
            {option3}
          </MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default UserDropdown;