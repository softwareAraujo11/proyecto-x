// FollowersPage.jsx
import React, { useContext, useEffect } from "react";
import { TwittsContext } from "../contexts/TwittsContext";
import "../../Styles/FollowersPage.css";

export const FollowersPage = () => {
  const {
    twittState: { users },
    loadUsers,
    followUser,
    unfollowUser,
  } = useContext(TwittsContext);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const toggleFollow = async (userId, isFollowing) => {
    try {
      if (isFollowing) {
        await unfollowUser(userId);
      } else {
        await followUser(userId);
      }
      loadUsers(); // Recargar los usuarios para reflejar cambios en la interfaz
    } catch (error) {
      console.error("Error al cambiar el estado de seguimiento:", error);
    }
  };

  return (
    <div className="followers-page">
      <h3 className="followers-title">A quién seguir</h3>
      {users && users.length > 0 ? (
        users.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.profilePicture || "https://via.placeholder.com/40"}
              alt={`${user.displayName} profile`}
              className="profile-picture"
            />
            <div className="user-info">
              <p className="display-name">{user.displayName}</p>
              <p className="username">@{user.displayName || "username"}</p>
            </div>
            <button
              onClick={() => toggleFollow(user.id, user.followed)}
              className={`follow-button ${user.followed ? "following" : "follow"}`}
            >
              {user.followed ? "Siguiendo" : "Seguir"}
            </button>
          </div>
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};
