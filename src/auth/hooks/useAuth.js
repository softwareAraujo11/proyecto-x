//useAuth.js
import {
  authUser,
  registerUser,
  authWithGoogle,
} from "../../firebase/authProviders";
import { authTypes } from "../types/authTypes";
import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const useAuth = (dispatch) => {
  const logInUser = async (email, password) => {
    const { ok, uid, photoURL, displayName, errorMessage } = await authUser(
      email,
      password
    );

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };

    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));

    dispatch(action);

    return true;
  };

  const logOutUser = () => {
    localStorage.removeItem("user");
    const action = {
      type: authTypes.logOut,
    };
    dispatch(action);
  };
  const signUpUser = async (email, password, displayName) => {
    const { ok, uid, photoURL, errorMessage } = await registerUser(
      email,
      password,
      displayName
    );

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = { uid, email, photoURL, displayName };

    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));
    await setDoc(doc(FirebaseDB, "users", uid), {
      displayName,
      email,
      userId: uid,
    });

    dispatch(action);

    return true;
  };
  const logInWithGoogle = async () => {
    const { ok, uid, displayName, email, photoURL, errorMessage } =
      await authWithGoogle();

    if (!ok) {
      dispatch({ type: authTypes.error, payload: { errorMessage } });
      return false;
    }

    const payload = {
      uid,
      email,
      displayName,
      photoURL,
    };

    const action = {
      type: authTypes.logIn,
      payload,
    };

    localStorage.setItem("user", JSON.stringify(payload));
    await setDoc(doc(FirebaseDB, "users", uid), {
      displayName,
      email,
      userId: uid,
    });

    dispatch(action);

    return true;
  };

  return { signUpUser, logInWithGoogle, logInUser, logOutUser };
};
