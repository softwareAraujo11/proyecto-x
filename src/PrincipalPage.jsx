// PrincipalPage.jsx
import { HomePage } from "./components/HomePage"; // Importa el componente de la página de inicio.
import { LoginPage } from "./auth/pages/LoginPage"; // Importa el componente de la página de inicio de sesión.
import { CreateAccount } from "./auth/pages/CreateAccount"; // Importa el componente de la página de creación de cuenta.
import Feed from "./social/pages/Feed"; // Importa el componente de la página de feed de tweets.
import { TweetPage } from "./social/pages/TweetPage";
import { Routes, Route, Navigate } from "react-router-dom"; // Importa componentes para manejar el enrutamiento.
import React, { useState } from "react"; // Importa React y el hook useState para manejar el estado.
import Profile from "./social/pages/Profile"; // Importa el componente de la página de perfil.
import FollowersPage from "./social/pages/FollowersPage"; // Importa el componente de la página de seguidores.
import { FollowingPage } from "./social/pages/FollowingPage"; // Importa el componente de la página de seguidos.
import { PublicRoute } from "./Router/PublicRoute";
import { PrivateRoute } from "./Router/PrivateRoute";
import { TwittsProvider } from "./social/contexts/TwittsProvider";
import { SocialRoutes } from "./social/routes/SocialRoutes";

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
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
          }
        />{" "}
        {/* Ruta de la página de inicio */}
        <Route
          path="CreateAccount"
          element={<CreateAccount setUsers={setUsers} />}
        />{" "}
        {/* Ruta para crear una cuenta */}
        <Route
          path="LoginPage"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />{" "}
        {/* Ruta para iniciar sesión */}
        {/* Ruta para la página de feed */}
        <Route path="/*" element={<PrivateRoute><SocialRoutes /></PrivateRoute>} />
        {/* Ruta para la página de publicar tweet */}
        {/* Ruta para la página de perfil */}
        <Route
          path="/followers"
          element={
            <PrivateRoute>
              {" "}
              <FollowersPage />
            </PrivateRoute>
          }
        />{" "}
        {/* Ruta para la página de seguidores */}
        <Route
          path="/following"
          element={
            <PrivateRoute>
              <FollowingPage />
            </PrivateRoute>
          }
        />{" "}
        {/* Ruta para la página de seguidos */}
      </Routes>
    </div>
  );
};
