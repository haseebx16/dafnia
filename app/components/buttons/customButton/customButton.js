import React, { useState } from 'react';
import { useColor } from '@/app/context/ColorContext';
import { IoMdAdd } from 'react-icons/io';

const CustomButton = ({
  title,
  classes,
  func,
  icon,
  primaryEnabled,
  padding,
  fontsize,
  option1,
  option2,
  onOptionSelect,
  isDropdown = false
}) => {

  const { primaryColor } = useColor();
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState(title || "Add and Close");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionSelect = (option) => {
    setValue(option);
    onOptionSelect && onOptionSelect(option);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        className={`text-white text-md cursor-pointer rounded ${classes}`}
        onClick={isDropdown ? toggleDropdown : func}
        style={{ 
          backgroundColor: primaryEnabled ? primaryColor : "",
          padding: padding,
          fontSize: fontsize
        }}
      >
        {icon && <IoMdAdd size={24} className='text-white mr-2' />}
        {isDropdown ? value : title}
        {isDropdown && <span style={{ fontSize: "10px", marginLeft: "5px" }}>▼</span>}
      </button>

      {isDropdown && showDropdown && (
        <div
          style={{
            position: "absolute",
            backgroundColor: primaryColor,
            color: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            bottom: "100%",
            left: "0",
            minWidth: "120px",
            zIndex: 1,
            marginBottom: "4px",
          }}
        >
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: primaryColor,
              color: "#fff",
              border: "2px solid #ccc",
              borderRadius: "4px",
              fontSize: "12px",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
            onClick={() => handleOptionSelect(option1)}
          >
            {option1}
          </button>
          <button
            style={{
              padding: "6px 12px",
              backgroundColor: primaryColor,
              color: "#fff",
              border: "2px solid #ccc",
              borderRadius: "4px",
              fontSize: "12px",
              width: "100%",
              textAlign: "left",
              cursor: "pointer",
            }}
            onClick={() => handleOptionSelect(option2)}
          >
            {option2}
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomButton;
