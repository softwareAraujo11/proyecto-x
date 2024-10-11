// HomePage.jsx
import React from "react";
import miLogo from "../assets/x.png"; // Importa el logo de la aplicación desde los assets.
import "../Styles/HomePage.css"; // Importa los estilos específicos para esta página.
import { Link } from "react-router-dom"; // Importa el componente Link para la navegación entre rutas.

export const HomePage = () => {
  return (
    <>
      {/* Contenedor principal de la página */}
      <div className="homePage">
        {/* Contenedor para el contenido principal de la página */}
        <div className="principal-div">
          {/* Sección del logo de la aplicación */}
          <div className="image-div">
            <img src={miLogo} alt="Logo" id="logoHome" />{" "}
            {/* Muestra el logo */}
          </div>

          {/* Sección de botones de registro y otros textos informativos */}
          <div className="buttoms-div">
            <h1 id="text1">Happening now</h1> {/* Título de bienvenida */}
            <h2 id="text2">Join today.</h2>{" "}
            {/* Subtítulo animando al usuario a registrarse */}
            {/* Botón para iniciar sesión con Google */}
            <button className="button" id="buttonGoogle">
              Sign in with Google
            </button>
            {/* Separador visual entre opciones */}
            <div className="or-div">
              <hr className="line-or" />{" "}
              {/* Línea horizontal antes del texto "or" */}
              <p>or</p> {/* Texto "or" que separa las opciones de registro */}
              <hr className="line-or" />{" "}
              {/* Línea horizontal después del texto "or" */}
            </div>
            {/* Botón que lleva a la página de creación de cuenta */}
            <Link to="/CreateAccount" id="button-register">
              <button className="button button-register" id="button-register">
                Create Account
              </button>
            </Link>
            {/* Términos y condiciones, incluyendo enlaces a las políticas */}
            <p id="text3">
              By signing up, you agree to the{" "}
              <a href="https://x.com/en/tos">Terms of Services</a> and{" "}
              {/* Enlace a los Términos de Servicio */}
              <a href="https://x.com/en/privacy">Privacy Policy</a>, including{" "}
              {/* Enlace a la Política de Privacidad */}
              <a href="https://help.x.com/en/rules-and-policies/x-cookies">
                Cookie Use
              </a>{" "}
              {/* Enlace a la política de Cookies */}.
            </p>
            {/* Texto para usuarios con cuenta existente */}
            <p id="text4">Already have an account?</p>
            {/* Botón para navegar a la página de inicio de sesión */}
            <Link to="/LoginPage" id="button-login">
              <button className="button button-login">Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
