// Feed.jsx
import React from 'react'; // Importa React para poder usar JSX.
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate para manejar la navegación.
import { CommonHeader } from '../../components/CommonHeader'; // Importa el encabezado común para la página.
import '../../Styles/Feed.css'; // Importa los estilos específicos para el feed.
import { TweetsFeed } from '../../components/TweetsFeed'; // Importa el componente que muestra los tweets.
import SidebarMenu from '../../components/SidebarMenu'; // Importa el menú lateral de navegación.

function Feed({ tweets = [] }) {
    const navigate = useNavigate(); // Inicializa el hook de navegación.

    // Función que se ejecuta al hacer clic en el botón para publicar un tweet.
    const handlePostTweet = () => {
        navigate('/tweet'); // Redirige al usuario a la página de creación de tweets.
    };

    return (
        <>
          <CommonHeader /> {/* Renderiza el encabezado común */}
          <div className='Feed'> {/* Contenedor principal del feed */}
            <div className='izqFeed'> {/* Contenedor del menú lateral */}
                <SidebarMenu /> {/* Renderiza el menú lateral */}
            </div>
            <div className='centerFeed'> {/* Contenedor del contenido principal */}
                <h1 id='Welcome'>Welcome to X</h1> {/* Título de bienvenida */}
                <div className='buttonAndTweets'> {/* Contenedor para el botón y los tweets */}
                    <button className='button' id='buttonPostTweet' onClick={handlePostTweet}> {/* Botón para publicar un tweet */}
                        Post a Tweet
                    </button>
                    {tweets.length === 0 ? ( // Condicional para mostrar un mensaje o los tweets
                        <p>No tweets to show.</p> // Mensaje cuando no hay tweets
                    ) : (
                        <TweetsFeed tweets={tweets} /> // Muestra el componente de TweetsFeed si hay tweets
                    )}
                </div>
            </div>
          </div>
        </>
    );
}

export default Feed; // Exporta el componente para ser utilizado en otras partes de la aplicación.
