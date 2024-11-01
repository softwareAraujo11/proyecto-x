import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/FollowingPage.css";
import { CommonHeader } from "../../components/CommonHeader";
import axios from "axios";

export const FollowingPage = () => {
  const [following, setFollowing] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const fetchRandomUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=30");
      const users = response.data.results.map((user, index) => ({
        fullName: `${user.name.first} ${user.name.last}`,
        UserName: user.login.username,
        profilePicture: `https://picsum.photos/40/40?random=${index}`,
      }));
      setFollowing(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchRandomUsers();
  }, []);

  const totalPages = Math.ceil(following.length / itemsPerPage);
  const currentFollowing = following.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="following-page">
      <CommonHeader />
      <h1>Following</h1>
      <ul className="followers-list">
        {currentFollowing.map((user, index) => (
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
              <span className="username">@{user.UserName}</span>
            </div>
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
