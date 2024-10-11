import { useContext } from "react";
import { AuthContext } from "../auth/contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  return authState.logged ? children : <Navigate to="/LoginPage" />;
};
