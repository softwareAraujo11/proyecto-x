// FollowingPage.jsx
import React, { useState } from 'react'; // Importa React y useState para gestionar el estado.
import { Link } from 'react-router-dom'; // Importa Link para navegar a los perfiles de usuario.
import '../../Styles/FollowingPage.css'; // Importa los estilos específicos de esta página.
import { CommonHeader } from '../../components/CommonHeader'; // Importa un encabezado común para la aplicación.

// Componente principal para mostrar la lista de usuarios seguidos.
export const FollowingPage = () => {
  // Lista inicial de usuarios seguidos, con su nombre completo, nombre de usuario y estado de seguimiento.
  const following = [
    { fullName: 'Ana Gómez', UserName: 'ana', isFollowing: false },
    { fullName: 'Carlos Pérez', UserName: 'carlos', isFollowing: true },
    { fullName: 'Beatriz López', UserName: 'beatriz', isFollowing: false },
    { fullName: 'Daniel Ruiz', UserName: 'daniel', isFollowing: true },
    { fullName: 'Elena Martínez', UserName: 'elena', isFollowing: false },
    { fullName: 'Fernando Álvarez', UserName: 'fernando', isFollowing: true },
    { fullName: 'Gabriela Sánchez', UserName: 'gabriela', isFollowing: false },
    { fullName: 'Hugo Torres', UserName: 'hugo', isFollowing: true },
    { fullName: 'Isabel Moreno', UserName: 'isabel', isFollowing: false },
    { fullName: 'Javier Romero', UserName: 'javier', isFollowing: true },
    { fullName: 'Karla Díaz', UserName: 'karla', isFollowing: false },
    { fullName: 'Luis Herrera', UserName: 'luis', isFollowing: true },
    { fullName: 'María Fernández', UserName: 'maria', isFollowing: false },
    { fullName: 'Natalia Castro', UserName: 'natalia', isFollowing: false },
    { fullName: 'Oscar Ramírez', UserName: 'oscar', isFollowing: true },
    { fullName: 'Paola Reyes', UserName: 'paola', isFollowing: false },
    { fullName: 'Ricardo Ortiz', UserName: 'ricardo', isFollowing: true },
    { fullName: 'Sandra Lara', UserName: 'sandra', isFollowing: false },
    { fullName: 'Tomás Gutiérrez', UserName: 'tomas', isFollowing: true },
    { fullName: 'Valeria Vega', UserName: 'valeria', isFollowing: false },
  ];

  const itemsPerPage = 10; // Define cuántos elementos mostrar por página.
  const totalPages = Math.ceil(following.length / itemsPerPage); // Calcula el número total de páginas.
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual.

  // Calcula los usuarios seguidos que se deben mostrar en la página actual.
  const currentFollowing = following.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Función para cambiar la página actual.
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="following-page"> {/* Contenedor principal de la página de seguidos */}
      <CommonHeader /> {/* Encabezado común */}
      <h1>Following</h1> {/* Título de la página */}
      <ul className="following-list"> {/* Lista de usuarios seguidos */}
        {currentFollowing.map((user, index) => (
          <li key={index} className="following-item"> {/* Elemento de lista para cada usuario */}
            <Link to={`/profile/${user.UserName}`} className="following-link"> {/* Enlace al perfil del usuario */}
              {user.fullName}
            </Link>
          </li>
        ))}
      </ul>

      <div className="pagination"> {/* Controles de paginación */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-button ${i + 1 === currentPage ? 'active' : ''}`} // Clase activa para la página actual.
            onClick={() => handlePageChange(i + 1)} // Cambia a la página seleccionada.
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowingPage; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.

