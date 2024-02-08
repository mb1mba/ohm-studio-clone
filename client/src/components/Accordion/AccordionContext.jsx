import React, { useState, useContext, createContext } from "react";
const toggleContext = createContext();

const AccordionContext = ({ children }) => {
  const [toggle, setToggle] = useState(null);

  return (
    <toggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </toggleContext.Provider>
  );
};

export default AccordionContext;

export const useToggleContext = () => {
  const context = useContext(toggleContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
