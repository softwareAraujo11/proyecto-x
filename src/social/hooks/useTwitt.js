import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { socialType } from "../types/socialTypes";

export const useTwitt = (loggedUser, dispatch) => {
  const saveTwit = async (twitts) => {
    try {
      const newDoc = doc(collection(FirebaseDB, "posts"));
      await setDoc(newDoc, { ...twitts, userId: loggedUser.uid }); // Agrega el userId al tweet

      twitts.id = newDoc.id;
      const action = { type: socialType.saveTwit, payload: twitts };
      dispatch(action);
    } catch (error) {
      dispatch({ type: socialType.error, payload: error.message });
    }
  };

  const loadTwitts = async () => {
    const collectionRef = collection(FirebaseDB, "posts");
    const fbDocs = await getDocs(collectionRef);

    const tweets = [];
    fbDocs.forEach((doc) => {
      tweets.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    const action = {
      type: socialType.loadTwitts,
      payload: tweets,
    };
    dispatch(action);
  };

  // Función para cargar solo los tweets del usuario loggeado (para el perfil)
  const loadUserTwitts = async () => {
    const collectionRef = collection(FirebaseDB, "posts");
    const fbDocs = await getDocs(collectionRef);

    const tweets = [];
    fbDocs.forEach((doc) => {
      const tweetData = doc.data();
      // Filtra los tweets que pertenecen al usuario autenticado
      if (tweetData.userId === loggedUser.uid) {
        tweets.push({
          id: doc.id,
          ...tweetData,
        });
      }
    });

    const action = {
      type: socialType.loadTwitts,
      payload: tweets,
    };
    dispatch(action);
  };

  const loadUsers = async () => {
    try {
      const collectionRef = collection(FirebaseDB, "users");
      const fbDocs = await getDocs(collectionRef);
      const users = [];
      fbDocs.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      console.log("Usuarios antes de dispatch:", users); // Asegúrate de que se están cargando los usuarios

      const action = {
        type: socialType.loadUsers,
        payload: users,
      };
      dispatch(action);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    }
  };
  return { saveTwit, loadTwitts, loadUserTwitts, loadUsers };
};
