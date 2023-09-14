import React, { createContext, useContext } from 'react';

// Create a context
const MyContext = createContext();

// Create a context provider
export const MyContextProvider = ({ children }) => {
  // This is the value that you want to provide through the context
  const contextValue = {
    basename: 'example', // Replace with your desired value
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

// Create a custom hook to consume the context
export const useMyContext = () => useContext(MyContext);
