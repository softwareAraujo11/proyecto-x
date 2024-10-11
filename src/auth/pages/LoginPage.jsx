// LoginPage.jsx
import React, { useContext } from "react"; // Importa React y useContext para gestionar el contexto de autenticación.
import { Link, useNavigate } from "react-router-dom"; // Importa Link para navegación y useNavigate para redirigir tras el login.
import { useForm } from "../../hooks/useForm"; // Importa el hook personalizado useForm para manejar el formulario.
import { AuthContext } from "../contexts/AuthContext"; // Importa el contexto de autenticación.
import miLogo from "../../assets/x.png"; // Importa el logo de la aplicación.
import "../../Styles/LoginPage.css"; // Importa los estilos específicos de la página de login.

// Estado inicial para el formulario de login.
const initForm = {
  UserName: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate(); // Hook para navegar a otras rutas después de iniciar sesión.
  const { logInUser } = useContext(AuthContext); // Extrae la función logInUser del contexto de autenticación.
  const { UserName, password, onInputChange } = useForm(initForm); // Extrae los valores y la función onInputChange del hook de formulario.

  // Función que maneja el envío del formulario de login.
  const onLogin = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario.
    
    const isValidLogin = logInUser(UserName, password); // Verifica si las credenciales son correctas usando la función logInUser.
    if (isValidLogin) {
      navigate("/Feed", { replace: true }); // Si las credenciales son correctas, navega a la página de Feed.
    } else {
      alert("Credenciales incorrectas"); // Muestra un mensaje de error si las credenciales no son válidas.
    }
  };

  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage-div">
          <div className="logo-div"> {/* Contenedor del logo y botón de regreso */}
            <Link to="/" id="buttonx">
              <p>X</p> {/* Letra "X" como botón para regresar */}
            </Link>
            <img src={miLogo} alt="logo" id="imgX" /> {/* Imagen del logo */}
          </div>
          <h1 id="textLogin1">Sign in to X</h1> {/* Título de la página */}
          <button className="button" id="buttonGoogleLogin"> {/* Botón para login con Google */}
            Sign in with Google
          </button>
          <form action="" id="register-form" onSubmit={onLogin}> {/* Formulario de login */}
            <input
              type="text"
              placeholder="UserName"
              name="UserName"
              value={UserName}
              onChange={onInputChange} // Llama a onInputChange para actualizar el estado del formulario
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange} // Llama a onInputChange para actualizar el estado del formulario
            />
            <button className="button" id="buttonNext" type="submit"> {/* Botón de envío del formulario */}
              Next
            </button>
          </form>
          <p> {/* Enlace para registrarse si no se tiene una cuenta */}
            Don't have an account? <Link to="/CreateAccount">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};
