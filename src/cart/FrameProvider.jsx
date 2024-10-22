import React, { createContext, useState } from 'react';

export const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
  const [ frameVisible, setFrameVisible] = useState(false);
 const [clickFrameis, setClickFrameIs]=useState(null)
  const [contactInfo, setContactInfo] = useState(null);

  const toggleFrame = (data) => {
    setFrameVisible(true); 
  };
  return (
    <FrameContext.Provider value={{ frameVisible, clickFrameis, toggleFrame, setContactInfo, contactInfo,setFrameVisible, setClickFrameIs }}>
      {children}
    </FrameContext.Provider>
  );
};
