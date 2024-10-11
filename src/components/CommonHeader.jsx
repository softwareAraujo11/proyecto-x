// CommonHeader.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import miLogo from "../assets/x.png";
import "../Styles/CommonHeader.css";

export const CommonHeader = () => {
  const [username, setUsername] = useState(""); // Estado para almacenar el nombre de usuario.
  const navigate = useNavigate(); // Hook para la navegación.

  // useEffect se usa para cargar el nombre de usuario desde el localStorage cuando se monta el componente.
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Si hay un nombre de usuario en el localStorage, se actualiza el estado.
    }
  }, []);

  // Función que se ejecuta cuando el usuario hace clic en "Log out".
  const handleLogout = () => {
    localStorage.clear(); // Limpia el localStorage para eliminar la información de inicio de sesión.
    navigate("/"); // Redirige al usuario a la página principal (o de inicio de sesión).
  };

  return (
    <div className="CommonHeader">
      <div id="div1-commonHeader">
        <Link to="/Feed">
          <img src={miLogo} alt="Logo" id="logoHeader" />{" "}
          {/* Logo que redirige al Feed */}
        </Link>
      </div>
      <div id="div2-commonHeader">
        <p>{username}</p> {/* Muestra el nombre de usuario */}
      </div>
      <div id="div3-commonHeader">
        <p onClick={handleLogout} id="logOut" style={{ cursor: "pointer" }}>
          Log out
        </p>{" "}
        {/* Enlace de cierre de sesión */}
      </div>
    </div>
  );
};
