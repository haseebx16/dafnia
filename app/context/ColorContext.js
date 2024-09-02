"use client"

import { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#0284c7');
  const [secondaryColor, setSecondaryColor] = useState('#0284c7');

  return (
    <ColorContext.Provider value={{ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor }}>
      {children}
    </ColorContext.Provider>
  );
};
