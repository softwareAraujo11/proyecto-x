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

  const isLogged = !user ? false : true;

  const state = {
    logged: isLogged,
    user,
  };

  return state;
};

export const AuthProvider = ({ children }) => {
  const [authState, dispach] = useReducer(authReducers, initialState, init);

  const { logInUser, signUpUser, logOutUser, logInWithGoogle, loadFollowers } =
    useAuth(dispach);

  return (
    <AuthContext.Provider
      value={{
        authState,
        logInWithGoogle,
        signUpUser,
        logInUser,
        logOutUser,
        loadFollowers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
