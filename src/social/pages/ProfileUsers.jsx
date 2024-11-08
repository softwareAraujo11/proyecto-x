//ProfileUsers.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../Styles/Profile.css";
import imgProfile from "../../assets/fotoPerfil.jpg"; // Asegúrate de tener la imagen de perfil
import { CommonHeader } from "../../components/CommonHeader";
import SidebarMenu from "../../components/SidebarMenu";
import { TwittsContext } from "../contexts/TwittsContext";

export const ProfileUsers = () => {
  const {
    twittState: { twitts },
    loadTwittsByName,
  } = useContext(TwittsContext);

  const { name } = useParams(); // Obtener el nombre del parámetro URL
  const [username, setUsername] = useState(name);

  useEffect(() => {
    setUsername(name); // Actualiza el nombre del usuario cuando cambia la URL
    loadTwittsByName(name); // Cargar los tweets del usuario por nombre
  }, [name, loadTwittsByName]);

  const followersCount = 0;
  const followingCount = 0;

  const [currentPage, setCurrentPage] = useState(1);
  const tweetsPerPage = 10;
  const startIndex = (currentPage - 1) * tweetsPerPage;
  const endIndex = startIndex + tweetsPerPage;
  const currentTweets = Array.isArray(twitts)
    ? twitts.slice(startIndex, endIndex)
    : [];

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
                alt="Foto de perfil"
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
