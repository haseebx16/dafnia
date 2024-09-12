import React from 'react'
import { useState } from 'react'
import { useColor } from '@/app/context/ColorContext';

const CustomButton = ({ title, func }) => {

  const [createCompany, setCreateCompany] = useState(false);
  const { primaryColor, secondaryColor } = useColor();

  return (
    <>
        <button 
              className="px-4 py-2 text-white text-xl rounded"
              onMouseEnter={() => setCreateCompany(true)} 
              onMouseLeave={() => setCreateCompany(false)}
              onClick={func}
              style={{ backgroundColor: createCompany ? secondaryColor : primaryColor }}
            >
              {title}
        </button>
    </>
  )
}

export default CustomButton