import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  query, // Importa query
  where, // Importa where
} from "firebase/firestore/lite";
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

      const action = {
        type: socialType.loadUsers,
        payload: users,
      };
      dispatch(action);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    }
  };
  const followUser = async (userId) => {
    try {
      const followDoc = doc(
        FirebaseDB,
        "follows",
        `${loggedUser.uid}_${userId}`
      );
      await setDoc(followDoc, {
        followerId: loggedUser.uid,
        followedId: userId,
      });

      dispatch({
        type: socialType.updateFollowStatus,
        payload: { userId, isFollowing: true },
      });
    } catch (error) {
      console.error("Error al seguir al usuario:", error);
    }
  };

  const unfollowUser = async (userId) => {
    try {
      const followDoc = doc(
        FirebaseDB,
        "follows",
        `${loggedUser.uid}_${userId}`
      );
      await deleteDoc(followDoc);

      dispatch({
        type: socialType.updateFollowStatus,
        payload: { userId, isFollowing: false },
      });
    } catch (error) {
      console.error("Error al dejar de seguir al usuario:", error);
    }
  };

  const toggleFollowUser = async (userId) => {
    const userDocRef = doc(FirebaseDB, "users", loggedUser.uid);
    const userDoc = await getDocs(userDocRef);

    let followingList = [];
    if (userDoc.exists()) {
      followingList = userDoc.data().following || [];
    }

    // Verifica si ya está siguiendo al usuario
    if (followingList.includes(userId)) {
      // Si ya lo sigue, elimina de la lista de seguidos
      followingList = followingList.filter((id) => id !== userId);
    } else {
      // Si no lo sigue, agrégalo a la lista
      followingList.push(userId);
    }

    // Actualiza la lista en Firestore
    await setDoc(userDocRef, { following: followingList }, { merge: true });

    // Actualiza el estado
    dispatch({
      type: socialType.updateFollowStatus,
      payload: { userId, isFollowing: followingList.includes(userId) },
    });
  };
  const loadTwittsByName = async (name) => {
    try {
      const collectionRef = collection(FirebaseDB, "posts");
      const q = query(collectionRef, where("name", "==", name)); // Filtrando por 'name'

      const fbDocs = await getDocs(q);

      const tweets = [];
      fbDocs.forEach((doc) => {
        console.log("Tweet encontrado:", doc.data()); // Muestra los datos de cada tweet
        tweets.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      if (tweets.length === 0) {
        console.log("No se encontraron tweets para este nombre.");
      }

      const action = {
        type: socialType.loadTwitts,
        payload: tweets,
      };
      dispatch(action);
    } catch (error) {
      console.error("Error cargando tweets por nombre:", error);
    }
  };

  return {
    saveTwit,
    loadTwitts,
    loadUserTwitts,
    loadUsers,
    followUser,
    unfollowUser,
    toggleFollowUser,
    loadTwittsByName,
  };
};
