import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../Styles/Profile.css";
import imgProfile from "../../assets/fotoPerfil.jpg";
import { CommonHeader } from "../../components/CommonHeader";
import SidebarMenu from "../../components/SidebarMenu";
import { TwittsContext } from "../contexts/TwittsContext";

const Profile = () => {
  const {
    twittState: { twitts, errorMessage },
    loadUserTwitts,
  } = useContext(TwittsContext);

  useEffect(() => {
    loadUserTwitts(); // Llama a loadUserTwitts para obtener solo los tweets del usuario
  }, [loadUserTwitts]);

  const [currentPage, setCurrentPage] = useState(1);
  const tweetsPerPage = 10;
  const startIndex = (currentPage - 1) * tweetsPerPage;
  const endIndex = startIndex + tweetsPerPage;
  const currentTweets = Array.isArray(twitts)
    ? twitts.slice(startIndex, endIndex)
    : [];

  const { username: paramUsername } = useParams();
  const [username, setUsername] = useState(paramUsername);

  useEffect(() => {
    setUsername(paramUsername);
  }, [paramUsername]);

  const followersCount = 150;
  const followingCount = 75;

  return (
    <div className="Profile">
      <CommonHeader />
      <div className="Feed">
        <div className="izqFeed">
          <SidebarMenu />
        </div>
        <div className="centerFeed">
          <div className="profile-container">
            <div className="profile-header">
              <img
                src={imgProfile}
                alt="fotoPerfil"
                className="profile-picture"
              />
              <h2 className="username">{username}</h2>
            </div>
            <div className="buttons-container">
              <Link to={`/followers`} className="profile-button">
                Seguidores: {followersCount}
              </Link>
              <Link to={`/following`} className="profile-button">
                Seguidos: {followingCount}
              </Link>
            </div>
            {currentTweets.length > 0 ? (
              currentTweets.map((tweet) => (
                <div key={tweet.id} className="tweet-card">
                  <h5 className="card-title">{tweet.name}</h5>
                  <h4 className="tweet-content">{tweet.twitt}</h4>
                  <p className="card-text">Fecha: {tweet.date}</p>
                </div>
              ))
            ) : (
              <p>No hay tweets disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
