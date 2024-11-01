import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import miLogo from "../../assets/x.png"; // Importa el logo de la aplicación.
import "../../Styles/LoginPage.css"; // Importa los estilos específicos de la página de login.

// Estado inicial para el formulario de login.

const initForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate(); // Hook para navegar a otras rutas después de iniciar sesión.
  const { logInUser, logInWithGoogle } = useContext(AuthContext); // Extrae la función logInUser del contexto de autenticación.
  const { email, password, onInputChange } = useForm(initForm); // Extrae los valores y la función onInputChange del hook de formulario.

  const onLoginWithGoogle = async (event) => {
    event.preventDefault();

    const isValidLogin = await logInWithGoogle();

    if (isValidLogin) {
      navigate("/feed", { replace: true });
    }
  };
  // Función que maneja el envío del formulario de login.
  const onLogin = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario.

    const isValidLogin = await logInUser(email, password); // Verifica si las credenciales son correctas usando la función logInUser.
    if (isValidLogin) {
      navigate("/Feed", { replace: true }); // Si las credenciales son correctas, navega a la página de Feed.
    }
  };

  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage-div">
          <div className="logo-div">
            {" "}
            {/* Contenedor del logo y botón de regreso */}
            <Link to="/" id="buttonx">
              <p>X</p> {/* Letra "X" como botón para regresar */}
            </Link>
            <img src={miLogo} alt="logo" id="imgX" /> {/* Imagen del logo */}
          </div>
          <h1 id="textLogin1">Sign in to X</h1> {/* Título de la página */}
          <button
            className="button"
            id="buttonGoogleLogin"
            onClick={onLoginWithGoogle}
          >
            {" "}
            {/* Botón para login con Google */}
            Sign in with Google
          </button>
          <form action="" id="register-form" onSubmit={onLogin}>
            {" "}
            {/* Formulario de login */}
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
              onChange={onInputChange} // Llama a onInputChange para actualizar el estado del formulario
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange} // Llama a onInputChange para actualizar el estado del formulario
            />
            <button className="button" id="buttonNext" type="submit">
              {" "}
              {/* Botón de envío del formulario */}
              Next
            </button>
          </form>
          <p>
            {" "}
            {/* Enlace para registrarse si no se tiene una cuenta */}
            Don't have an account? <Link to="/CreateAccount">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};
