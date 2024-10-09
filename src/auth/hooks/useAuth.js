import { authTypes } from "../types/authTypes";
export const useAuth = (dispach) => {
  const registerUser = (UserName, password) => {
    // Guardar el nuevo usuario en el localStorage
    const newUser = {
      uid: new Date().getMilliseconds(),
      UserName,
      password,
    };
    localStorage.setItem("user", JSON.stringify(newUser));

    return true;
  };

  const logInUser = (UserName, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.UserName === UserName &&
      storedUser.password === password
    ) {
      const action = {
        type: authTypes.logIn,
        payload: storedUser,
      };
      dispach(action);
      return true;
    }

    return false;
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    const action = {
      type: authTypes.logOut,
    };
    dispach(action);
  };

  return { registerUser, logInUser, logOutUser };
};
