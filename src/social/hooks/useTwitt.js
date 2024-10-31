import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { socialType } from "../types/socialTypes";

export const useTwitt = (loggedUser, dispatch) => {
  const saveTwit = async (twitts) => {
    try {
      const newDoc = doc(
        collection(FirebaseDB, `${loggedUser.uid}/post-app/post`)
      );
      console.log(twitts);
      await setDoc(newDoc, twitts);

      twitts.id = newDoc.id;

      const action = { type: socialType.saveTwit, payload: twitts };

      dispatch(action);
    } catch (error) {
      dispatch({ type: socialType.error, payload: error.message });
    }
  };
  return { saveTwit };
};
