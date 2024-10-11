// FollowersPage.jsx
import React, { useState } from "react"; // Importa React y useState para gestionar el estado del componente.
import { Link } from "react-router-dom"; // Importa Link para la navegación interna.
import "../../Styles/FollowersPage.css"; // Importa los estilos específicos de la página de seguidores.
import { CommonHeader } from "../../components/CommonHeader"; // Importa el encabezado común de la aplicación.

// Componente principal de la página de seguidores.
const FollowersPage = () => {
  // Definición de la lista inicial de seguidores, incluyendo nombres y estado de seguimiento.
  const initialFollowers = [
    { fullName: "Ana Gómez", UserName: "ana", isFollowing: false },
    { fullName: "Carlos Pérez", UserName: "carlos", isFollowing: true },
    { fullName: "Beatriz López", UserName: "beatriz", isFollowing: false },
    { fullName: "Daniel Ruiz", UserName: "daniel", isFollowing: true },
    { fullName: "Elena Martínez", UserName: "elena", isFollowing: false },
    { fullName: "Fernando Álvarez", UserName: "fernando", isFollowing: true },
    { fullName: "Gabriela Sánchez", UserName: "gabriela", isFollowing: false },
    { fullName: "Hugo Torres", UserName: "hugo", isFollowing: true },
    { fullName: "Isabel Moreno", UserName: "isabel", isFollowing: false },
    { fullName: "Javier Romero", UserName: "javier", isFollowing: true },
    { fullName: "Karla Díaz", UserName: "karla", isFollowing: false },
    { fullName: "Luis Herrera", UserName: "luis", isFollowing: true },
    { fullName: "María Fernández", UserName: "maria", isFollowing: false },
    { fullName: "Natalia Castro", UserName: "natalia", isFollowing: false },
    { fullName: "Oscar Ramírez", UserName: "oscar", isFollowing: true },
    { fullName: "Paola Reyes", UserName: "paola", isFollowing: false },
    { fullName: "Ricardo Ortiz", UserName: "ricardo", isFollowing: true },
    { fullName: "Sandra Lara", UserName: "sandra", isFollowing: false },
    { fullName: "Tomás Gutiérrez", UserName: "tomas", isFollowing: true },
    { fullName: "Valeria Vega", UserName: "valeria", isFollowing: false },
  ];

  // Ordena los seguidores alfabéticamente por nombre completo.
  const sortedFollowers = initialFollowers.sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );

  const [followers, setFollowers] = useState(sortedFollowers); // Estado que contiene la lista ordenada de seguidores.
  const itemsPerPage = 10; // Define cuántos seguidores se muestran por página.
  const totalPages = Math.ceil(followers.length / itemsPerPage); // Calcula el número total de páginas necesarias.
  const [currentPage, setCurrentPage] = useState(1); // Estado que guarda la página actual.

  // Calcula los seguidores que se muestran en la página actual.
  const currentFollowers = followers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cambia la página actual al número de página especificado.
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Alterna el estado de seguimiento de un usuario al hacer clic en el botón de seguir/dejar de seguir.
  const toggleFollow = (index) => {
    const updatedFollowers = [...followers];
    updatedFollowers[index].isFollowing = !updatedFollowers[index].isFollowing;
    setFollowers(updatedFollowers);
  };

  return (
    <div className="followers-page">
      {" "}
      {/* Contenedor principal de la página de seguidores */}
      <CommonHeader /> {/* Renderiza el encabezado común */}
      <h1>Followers</h1> {/* Título de la página */}
      <ul className="followers-list">
        {" "}
        {/* Lista de seguidores */}
        {currentFollowers.map((user, index) => (
          <li key={index} className="follower-item">
            {" "}
            {/* Cada seguidor en la lista */}
            <Link to={`/profile/${user.UserName}`} className="follower-name">
              {" "}
              {/* Enlace al perfil del seguidor */}
              {user.fullName}
            </Link>
            <button
              className="follow-button"
              onClick={() =>
                toggleFollow((currentPage - 1) * itemsPerPage + index)
              } // Alterna el seguimiento
            >
              {user.isFollowing ? "Dejar de seguir" : "Seguir"}{" "}
              {/* Etiqueta del botón según el estado */}
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {" "}
        {/* Controles de paginación */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-button ${i + 1 === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)} // Cambia la página actual
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowersPage; // Exporta el componente para su uso en otras partes de la aplicación.
