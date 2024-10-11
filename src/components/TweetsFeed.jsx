// TweetsFeed.jsx
import React, { useState } from 'react'; // Importa React y useState para manejar el estado.
import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades del componente.
import '../Styles/TweetsFeed.css'; // Importa los estilos específicos para el componente de TweetsFeed.

export const TweetsFeed = ({ tweets }) => {
    const [currentPage, setCurrentPage] = useState(1); // Estado para rastrear la página actual.
    const tweetsPerPage = 10; // Número de tweets a mostrar por página.

    // Cálculos de índices para la paginación.
    const indexOfLastTweet = currentPage * tweetsPerPage; // Índice del último tweet en la página actual.
    const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage; // Índice del primer tweet en la página actual.
    const currentTweets = tweets.slice(indexOfFirstTweet, indexOfLastTweet); // Tweets a mostrar en la página actual.

    // Maneja el cambio de página.
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // Actualiza la página actual con el número de página seleccionado.
    };

    return (
        <div className="TweetsFeed"> {/* Contenedor principal del feed de tweets */}
            <div className="tweetsContainer">
                {currentTweets.map((tweet, index) => ( // Mapea los tweets actuales para mostrarlos.
                    <div key={index} className="tweet"> {/* Cada tweet se renderiza en un contenedor */}
                        <strong>{tweet.username}</strong>: {tweet.content} {/* Muestra el nombre de usuario y el contenido del tweet */}
                    </div>
                ))}
            </div>
            <div className="pagination"> {/* Contenedor de paginación */}
                {[1, 2, 3].map((page) => ( // Mapea las páginas disponibles para crear botones de paginación.
                    <button 
                        key={page} 
                        onClick={() => handlePageChange(page)} // Cambia a la página correspondiente al hacer clic.
                        className={page === currentPage ? 'active' : ''} // Añade clase activa al botón de la página actual.
                    >
                        {page} {/* Número de la página */}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Validación de las propiedades del componente.
TweetsFeed.propTypes = {
    tweets: PropTypes.array.isRequired, // 'tweets' debe ser un arreglo y es requerido.
};
