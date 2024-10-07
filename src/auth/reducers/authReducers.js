import { authTypes } from "../types/authTypes";

export const authReducers = (state = {}, action = {}) => {
  switch (action.type) {
    case authTypes.logIn:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case authTypes.logOut:
      return {
        ...state,
        logged: false,
        user: {},
      };
    default:
      return state;
  }
};
