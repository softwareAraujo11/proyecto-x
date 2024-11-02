// Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // useParams para obtener el nombre de usuario de la URL.
import "../../Styles/Profile.css"; // Importa los estilos específicos del perfil.
import imgProfile from "../../assets/fotoPerfil.jpg"; // Imagen de perfil predeterminada.
import { CommonHeader } from "../../components/CommonHeader"; // Componente de encabezado común.
import SidebarMenu from "../../components/SidebarMenu"; // Menú lateral.
import { TweetsFeed } from "../../components/TweetsFeed"; // Componente para mostrar tweets.
import { TwittsContext } from "../contexts/TwittsContext";

const Profile = ({ tweets, users }) => {
  const {
    twittState: { twitts, errorMessage },
    loadTwitts,
  } = useContext(TwittsContext);

  useEffect(() => {
    loadTwitts();
  }, [loadTwitts]);
  const [currentPage, setCurrentPage] = useState(1);
  const tweetsPerPage = 10;
  const startIndex = (currentPage - 1) * tweetsPerPage;
  const endIndex = startIndex + tweetsPerPage;
  const currentTweets = Array.isArray(twitts)
    ? twitts.slice(startIndex, endIndex)
    : [];

  const { username: paramUsername } = useParams(); // Extrae el nombre de usuario de los parámetros de la URL.
  const [username, setUsername] = useState(paramUsername); // Estado para almacenar el nombre de usuario del perfil.

  useEffect(() => {
    setUsername(paramUsername); // Actualiza el estado de username si cambia el parámetro de la URL.
  }, [paramUsername]);

  const followersCount = 150; // Cantidad de seguidores (estática en este caso).
  const followingCount = 75; // Cantidad de seguidos (estática en este caso).

  // Filtra los tweets que corresponden al usuario actual del perfil.
  const userTweets = tweets.filter((tweet) => tweet.username === username);

  return (
    <div className="Profile">
      <CommonHeader /> {/* Encabezado común de la página */}
      <div className="Feed">
        <div className="izqFeed">
          <SidebarMenu /> {/* Menú lateral izquierdo */}
        </div>
        <div className="centerFeed" id="">
          <div className="profile-container">
            <div className="profile-header">
              <img
                src={imgProfile} // Muestra una imagen de perfil estática.
                alt="fotoPerfil"
                className="profile-picture"
              />
              <h2 className="username">{username}</h2>{" "}
              {/* Muestra el nombre de usuario del perfil */}
            </div>
            <div className="buttons-container">
              {" "}
              {/* Botones para mostrar seguidores y seguidos */}
              <Link to={`/followers`} className="profile-button">
                Seguidores: {followersCount} {/* Cantidad de seguidores */}
              </Link>
              <Link to={`/following`} className="profile-button">
                Seguidos: {followingCount} {/* Cantidad de seguidos */}
              </Link>
            </div>
            {}
            {/* Si el usuario no tiene tweets, muestra un mensaje; de lo contrario, muestra los tweets */}
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
