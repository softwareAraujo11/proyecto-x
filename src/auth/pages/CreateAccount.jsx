// CreateAccount.jsx
import React, { useContext, useState } from "react"; // Importa React, useContext y useState.
import "../../Styles/CreateAccount.css"; // Importa los estilos para la página de creación de cuenta.
import { useNavigate, Link } from "react-router-dom"; // Importa funciones de enrutamiento.
import { AuthContext } from "../contexts/AuthContext"; // Importa el contexto de autenticación.
import { useForm } from "../../hooks/useForm"; // Importa un hook personalizado para manejar formularios.
import miLogo from "../../assets/x.png"; // Importa el logo para mostrar en la página.

const initForm = {
  fullName: "", // Inicializa el campo de nombre completo.
  UserName: "", // Inicializa el campo de nombre de usuario.
  email: "", // Inicializa el campo de correo electrónico.
  password: "", // Inicializa el campo de contraseña.
};

// Componente para crear una nueva cuenta de usuario.
export const CreateAccount = ({ setUsers }) => {
  const navigate = useNavigate(); // Hook para navegar a diferentes rutas.
  const {
    authState: { errorMessage },
    signUpUser,
  } = useContext(AuthContext);
  const { fullName, UserName, email, password, onInputChange } =
    useForm(initForm); // Desestructura los valores del formulario y la función para manejarlos.
  const [error, setError] = useState(""); // Estado para manejar mensajes de error.

  // Función que se ejecuta al enviar el formulario.
  const onRegister = async (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario.

    // Verifica que la contraseña tenga al menos 8 caracteres y una mayúscula
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres y una letra mayúscula."
      );
      return;
    }

    // Intenta registrar al usuario y guarda el resultado en isValidLogin
    const isValidLogin = await signUpUser(email, password, fullName);

    if (isValidLogin) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push({ UserName, fullName, email });
      localStorage.setItem("users", JSON.stringify(existingUsers));
      localStorage.setItem("username", UserName);
      setUsers(existingUsers);
      navigate("/feed", { replace: true });
    }
  };

  return (
    <div className="CreateAccount">
      <div className="createAccount-div">
        <div className="logo-div">
          <Link to="/" id="buttonx">
            {" "}
            {/* Enlace para volver a la página de inicio */}
            <p>X</p>
          </Link>
          <img src={miLogo} alt="logo" id="imgX" /> {/* Muestra el logo */}
        </div>
        <h1 id="textCreate1">Create your account</h1>{" "}
        {/* Título de la página */}
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Muestra un mensaje de error si existe */}
        <form onSubmit={onRegister} id="register-form">
          {" "}
          {/* Formulario para crear cuenta */}
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={onInputChange} // Maneja cambios en el input
          />
          <input
            type="text"
            placeholder="UserName"
            id="UserName"
            name="UserName"
            value={UserName}
            onChange={onInputChange} // Maneja cambios en el input
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange} // Maneja cambios en el input
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange} // Maneja cambios en el input
          />
          <button type="submit" className="button" id="buttonNext">
            {" "}
            {/* Botón para enviar el formulario */}
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
