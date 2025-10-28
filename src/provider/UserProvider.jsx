import { useState } from "react";
import UserContext from "../context/UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Salam",
    age: "20",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
