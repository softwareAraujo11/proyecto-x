// SidebarMenu.js
// Este componente representa el menú lateral de navegación, que permite a los usuarios acceder a diferentes secciones de la aplicación.

import React from "react"; // Importa la biblioteca React para crear componentes.
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación entre rutas.
import "../Styles/SidebarMenu.css"; // Importa los estilos específicos para el menú lateral.
import { AuthContext } from "../auth/contexts/AuthContext";
import { useContext } from "react";

const SidebarMenu = () => {
  const {
    authState: { user, logged },
    logOutUser,
  } = useContext(AuthContext);
  const userr = user.displayName;

  const username = localStorage.getItem("displayName"); // Obtener el nombre de usuario de localStorage para determinar la ruta del perfil.

  // Define los elementos del menú con sus respectivos nombres, iconos y rutas.
  const menuItems = [
    {
      name: "Perfil",
      icon: "👤",
      path: user ? `/profile/${userr}` : "/LoginPage",
    }, // Enlace al perfil del usuario o a la página de inicio de sesión si no hay usuario.
    { name: "Notificaciones", icon: "🔔", path: "/Feed" }, // Enlace a la sección de notificaciones.
    { name: "Mensajes", icon: "💬", path: "/Feed" }, // Enlace a la sección de mensajes.
    { name: "Explorar", icon: "🌍", path: "/Feed" }, // Enlace a la sección de exploración.
    { name: "Configuración", icon: "⚙️", path: "/Feed" }, // Enlace a la sección de configuración.
  ];

  return (
    <div className="SidebarMenu">
      {" "}
      {/* Contenedor principal del menú lateral */}
      {menuItems.map(
        (
          item,
          index // Mapea cada elemento del menú para crear un enlace.
        ) => (
          <Link key={index} to={item.path} className="menuItem">
            {" "}
            {/* Enlace a la ruta correspondiente */}
            <span className="icon">{item.icon}</span> {/* Icono del menú */}
            <span className="itemName">{item.name}</span>{" "}
            {/* Nombre del elemento del menú */}
          </Link>
        )
      )}
    </div>
  );
};

export default SidebarMenu; // Exporta el componente para ser utilizado en otras partes de la aplicación.
