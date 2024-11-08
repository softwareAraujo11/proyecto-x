//FollowingPage.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../Styles/FollowingPage.css";
import { CommonHeader } from "../../components/CommonHeader";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { AuthContext } from "../../auth/contexts/AuthContext";
import { useFollow } from "../hooks/useFollow";

export const FollowingPage = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [following, setFollowing] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Llamar a useFollow en el nivel superior
  const { followUser, unfollowUser, loadFollowing } = useFollow(user);

  const fetchRegisteredUsers = async () => {
    try {
      const usersCollection = collection(FirebaseDB, "users");
      const querySnapshot = await getDocs(usersCollection);
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        isFollowing: false,
      }));

      // Cargar los seguidos del usuario logueado para determinar el estado de seguimiento
      const followingIds = await loadFollowing(user.uid);
      const usersWithFollowStatus = users.map((user) => ({
        ...user,
        isFollowing: followingIds.includes(user.id),
      }));

      setFollowing(usersWithFollowStatus);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  const totalPages = Math.ceil(following.length / itemsPerPage);
  const currentFollowing = following.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleFollow = async (userId) => {
    try {
      const userIndex = following.findIndex((user) => user.id === userId);
      const isFollowing = following[userIndex].isFollowing;

      // Actualizar en Firestore el estado de seguimiento
      const userDocRef = doc(FirebaseDB, "users", userId);
      await updateDoc(userDocRef, {
        followers: isFollowing
          ? following[userIndex].followers - 1
          : following[userIndex].followers + 1,
      });

      // Actualizar la relación de seguimiento en la colección "follows"
      if (isFollowing) {
        await unfollowUser(userId);
      } else {
        await followUser(userId);
      }

      // Actualizar el estado local de seguimiento
      setFollowing((prevFollowing) =>
        prevFollowing.map((user) =>
          user.id === userId ? { ...user, isFollowing: !isFollowing } : user
        )
      );
    } catch (error) {
      console.error("Error updating follow status:", error);
    }
  };

  return (
    <div className="following-page">
      <CommonHeader />
      <h1>Following</h1>
      <ul className="followers-list">
        {currentFollowing.map((user) => (
          <li key={user.id} className="follower-item">
            <img
              src={
                user.profilePicture ||
                `https://picsum.photos/40/40?random=${user.id}`
              }
              alt={user.fullName}
              className="profile-picture"
            />
            <div>
              <Link to={`/profile/${user.username}`} className="follower-name">
                {user.fullName}
              </Link>
              <span className="username">@{user.username}</span>
            </div>
            <button
              className="follow-button"
              onClick={() => toggleFollow(user.id)}
            >
              {user.isFollowing ? "Dejar de seguir" : "Seguir"}
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-button ${i + 1 === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowingPage;
