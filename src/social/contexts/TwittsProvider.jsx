import React, { useContext, useReducer } from "react";
import { socialReducer } from "../redcers/socialReducer";
import { AuthContext } from "../../auth/contexts/AuthContext";
import { TwittsContext } from "./TwittsContext";
import { useTwitt } from "../hooks/useTwitt";

const initialState = {
  users: [],
  twitts: [],
  errorMessage: null,
};

const init = () => {
  return {
    users: [],
    twitts: [],
    errorMessage: null,
  };
};
export const TwittsProvider = ({ children }) => {
  const [twittState, dispatch] = useReducer(socialReducer, initialState, init);
  const {
    authState: { user },
  } = useContext(AuthContext);
  const { saveTwit, loadTwitts, loadUserTwitts, loadUsers } = useTwitt(
    user,
    dispatch
  );

  return (
    <TwittsContext.Provider
      value={{ twittState, saveTwit, loadTwitts, loadUserTwitts, loadUsers }}
    >
      {children}
    </TwittsContext.Provider>
  );
};
