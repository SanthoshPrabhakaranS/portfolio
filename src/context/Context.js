import { createContext, useState } from "react";

export const appContext = createContext();

const AppContext = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <appContext.Provider value={{ open, setOpen }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
