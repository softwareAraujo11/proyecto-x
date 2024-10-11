// PrincipalPage.jsx
import { HomePage } from "./components/HomePage"; // Importa el componente de la página de inicio.
import { LoginPage } from "./auth/pages/LoginPage"; // Importa el componente de la página de inicio de sesión.
import { CreateAccount } from "./auth/pages/CreateAccount"; // Importa el componente de la página de creación de cuenta.
import Feed from "./auth/pages/Feed"; // Importa el componente de la página de feed de tweets.
import TweetPage from './auth/pages/TweetPage'; // Importa el componente para publicar un nuevo tweet.
import { Routes, Route } from 'react-router-dom'; // Importa componentes para manejar el enrutamiento.
import React, { useState } from 'react'; // Importa React y el hook useState para manejar el estado.
import Profile from './auth/pages/Profile'; // Importa el componente de la página de perfil.
import FollowersPage from './auth/pages/FollowersPage'; // Importa el componente de la página de seguidores.
import { FollowingPage } from './auth/pages/FollowingPage'; // Importa el componente de la página de seguidos.

// Componente principal que maneja las rutas de la aplicación.
export const PrincipalPage = () => {
  const [tweets, setTweets] = useState([]); // Estado para almacenar los tweets.
  const [users, setUsers] = useState([]); // Estado para almacenar los usuarios.

  // Función para agregar un nuevo tweet al estado.
  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]); // Agrega el nuevo tweet al inicio del array de tweets.
  };

  return (
    <div>
      <Routes>
        {/* Define las rutas de la aplicación */}
        <Route path="/" element={<HomePage />} /> {/* Ruta de la página de inicio */}
        <Route path="CreateAccount" element={<CreateAccount setUsers={setUsers} />} /> {/* Ruta para crear una cuenta */}
        <Route path="LoginPage" element={<LoginPage />} /> {/* Ruta para iniciar sesión */}
        <Route path="Feed" element={<Feed tweets={tweets} />} /> {/* Ruta para la página de feed */}
        <Route path="/tweet" element={<TweetPage addTweet={addTweet} />} /> {/* Ruta para la página de publicar tweet */}
        <Route path="/profile/:username" element={<Profile tweets={tweets} users={users} />} /> {/* Ruta para la página de perfil */}
        <Route path="/followers" element={<FollowersPage />} /> {/* Ruta para la página de seguidores */}
        <Route path="/following" element={<FollowingPage />} /> {/* Ruta para la página de seguidos */}
      </Routes>
    </div>
  );
};
