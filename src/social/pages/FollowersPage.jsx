import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/FollowersPage.css";
import { CommonHeader } from "../../components/CommonHeader";
import axios from "axios";

const FollowersPage = () => {
  const [followers, setFollowers] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=30");
      const users = response.data.results.map((user, index) => ({
        fullName: `${user.name.first} ${user.name.last}`,
        UserName: user.login.username,
        isFollowing: false,
        profilePicture: `https://picsum.photos/40/40?random=${index}`,
      }));
      setFollowers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  const totalPages = Math.ceil(followers.length / itemsPerPage);
  const currentFollowers = followers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleFollow = (index) => {
    const updatedFollowers = [...followers];
    updatedFollowers[index].isFollowing = !updatedFollowers[index].isFollowing;
    setFollowers(updatedFollowers);
  };

  return (
    <div className="followers-page">
      <CommonHeader />
      <h1>Followers</h1>
      <ul className="followers-list">
        {currentFollowers.map((user, index) => (
          <li key={index} className="follower-item">
            <img
              src={user.profilePicture}
              alt={user.fullName}
              className="profile-picture"
            />
            <div>
              <Link to={`/profile/${user.UserName}`} className="follower-name">
                {user.fullName}
              </Link>
              <p></p>
              <span className="username">@{user.UserName}</span>{" "}
              {/* Nombre de usuario en una nueva línea */}
            </div>
            <button
              className="follow-button"
              onClick={() =>
                toggleFollow((currentPage - 1) * itemsPerPage + index)
              }
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

export default FollowersPage;
