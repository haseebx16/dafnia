import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const SapDropDown = ({
  label,
  secondaryColor,
  containerStyles,
  labelStyles,
  apiUrl,
  ...props
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, [apiUrl]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "4px",
        background: secondaryColor,
        borderRadius: "6px",
        border: "2px solid #ccc",
        ...containerStyles,
      }}
    >
      <label
        style={{
          flex: 1,
          fontWeight: "bold",
          fontSize: "12px",
          ...labelStyles,
        }}
      >
        {label}
      </label>

      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label || option}
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
        {...props} // Pass remaining props to Autocomplete
      />
    </div>
  );
};

export default SapDropDown;
