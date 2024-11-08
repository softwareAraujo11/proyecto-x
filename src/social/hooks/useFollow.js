//useFollow.js
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const useFollow = (loggedUser) => {
  // Función para seguir a un usuario
  const followUser = async (userIdToFollow) => {
    try {
      const newDoc = doc(collection(FirebaseDB, "follows"));
      await setDoc(newDoc, {
        followerId: loggedUser.uid,
        followingId: userIdToFollow,
      });
      console.log("Usuario seguido correctamente");
    } catch (error) {
      console.error("Error al seguir al usuario:", error);
    }
  };

  // Función para dejar de seguir a un usuario
  const unfollowUser = async (userIdToUnfollow) => {
    try {
      const followsRef = collection(FirebaseDB, "follows");
      const q = query(
        followsRef,
        where("followerId", "==", loggedUser.uid),
        where("followingId", "==", userIdToUnfollow)
      );
      const followDocs = await getDocs(q);

      followDocs.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      console.log("Usuario dejado de seguir correctamente");
    } catch (error) {
      console.error("Error al dejar de seguir al usuario:", error);
    }
  };

  // Función para cargar los seguidores de un usuario
  const loadFollowers = async (userId) => {
    const followersRef = collection(FirebaseDB, "follows");
    const q = query(followersRef, where("followingId", "==", userId));
    const followersDocs = await getDocs(q);

    const followers = followersDocs.docs.map((doc) => doc.data().followerId);
    return followers;
  };

  // Función para cargar los seguidos de un usuario
  const loadFollowing = async (userId) => {
    const followingRef = collection(FirebaseDB, "follows");
    const q = query(followingRef, where("followerId", "==", userId));
    const followingDocs = await getDocs(q);

    const following = followingDocs.docs.map((doc) => doc.data().followingId);
    return following;
  };

  return { followUser, unfollowUser, loadFollowers, loadFollowing };
};
