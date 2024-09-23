import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const SapDropDown = ({
  label,
  option,
  option1,
  option2,
  option3,
  secondaryColor,
  containerStyles,  // Accept styles as props
  labelStyles,      // Accept label styles as props
  ...props          // Spread remaining props for flexibility
}) => {
  const options = [option, option1, option2, option3];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "4px",
        background: secondaryColor,
        borderRadius: "6px",
        border: "2px solid #ccc",
        ...containerStyles,  // Apply container styles from props
      }}
    >
      <label style={{ flex: 1, fontWeight: "bold", fontSize: "12px", ...labelStyles }}>
        {label}
      </label>
      
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField 
            {...params}
            variant="outlined"
            size="small"
            InputProps={{
              ...params.InputProps,
              style: {
                padding: "2px 4px",
                fontSize: "12px", 
                height: "28px",
              },
            }}
            inputProps={{
              ...params.inputProps,
              style: {
                fontSize: "12px",
                padding: 0,
              },
            }}
            style={{
              flex: 2,
              fontSize: "12px",
              borderRadius: "4px",
              backgroundColor: "white",
              padding: 0,
            }}
          />
        )}
        style={{ flex: 2 }}
        {...props}  // Pass remaining props to Autocomplete
      />
    </div>
  );
};

export default SapDropDown;
