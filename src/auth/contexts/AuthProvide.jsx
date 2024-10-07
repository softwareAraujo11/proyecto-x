import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { useAuth } from "../hooks/useAuth";
import { authReducers } from "../reducers/authReducers";

const initialState = {
  logged: false,
  user: {},
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // El estado de 'logged' es false hasta que el usuario se loguee
  return {
    logged: false, // Dejar esto en false hasta que el usuario se loguee
    user: user || {},
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispach] = useReducer(authReducers, initialState, init);

  const { registerUser, logInUser, logOutUser } = useAuth(dispach);

  return (
    <AuthContext.Provider
      value={{ authState, registerUser, logInUser, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
