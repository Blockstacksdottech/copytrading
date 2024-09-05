import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    username: "",
    email: "",
    tier: 0,
    verified: false,
    isInvestor : false,
    reason : "",
    id: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
