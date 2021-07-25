import { useReducer, createContext } from "react";
import authReducer from "../reducers/auth.reducer.js";

const defaultUser = {
  user_id: "",
  username: "",
  isAuthenticated: false,
};

export const UserContext = createContext();

export function UserProvider(props) {
  const [user, dispatch] = useReducer(authReducer, defaultUser);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
