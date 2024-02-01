import { createContext, useContext, useState, useEffect } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export { UserProvider, useUserContext };
