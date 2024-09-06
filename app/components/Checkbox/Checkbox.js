import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const CheckboxGroup = ({ groupData, handleChange }) => {
  return (
    <FormGroup>
      {Object.keys(groupData).map((key) => (
        <FormControlLabel
          key={key}
          control={
            <Checkbox
              checked={groupData[key]}
              onChange={handleChange}
              name={key}
            />
          }
          label={key.replace(/([A-Z])/g, ' $1').trim()}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxGroup;
