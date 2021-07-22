import { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider(props) {
  const [authUser, setAuthUser] = useState("Dennie");

  return (
    <UserContext.Provider value={{ authUser, setAuthUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
