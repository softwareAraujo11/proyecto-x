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
  const { registerUser } = useContext(AuthContext); // Accede a la función de registro del contexto de autenticación.
  const { fullName, UserName, email, password, onInputChange } = useForm(initForm); // Desestructura los valores del formulario y la función para manejarlos.
  const [error, setError] = useState(''); // Estado para manejar mensajes de error.

  // Función que se ejecuta al enviar el formulario.
  const onRegister = (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario.

    // Verifica que todos los campos estén completos.
    if (!fullName || !UserName || !email || !password) {
      setError('Por favor, completa todos los campos.'); // Mensaje de error si falta información.
      return; // Sale de la función si hay campos vacíos.
    }

    // Intenta registrar al usuario y guarda el resultado en isRegistered.
    const isRegistered = registerUser(UserName, password);
    
    // Si el registro es exitoso.
    if (isRegistered) {
      // Obtiene los usuarios existentes del localStorage o inicializa un array vacío.
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      // Agrega el nuevo usuario al array de usuarios existentes.
      existingUsers.push({ UserName, fullName, email });
      // Guarda la lista actualizada de usuarios en el localStorage.
      localStorage.setItem("users", JSON.stringify(existingUsers));

      // Guarda el nombre de usuario en localStorage.
      localStorage.setItem("username", UserName);
      
      // Actualiza el estado de usuarios en el componente padre.
      setUsers(existingUsers);

      // Navega a la página de inicio de sesión.
      navigate("/LoginPage", { replace: true });
    } else {
      // Mensaje de error si el registro falla.
      setError('Error al registrar el usuario. Puede que el usuario ya exista.');
    }
  };

  return (
    <div className="CreateAccount">
      <div className="createAccount-div">
        <div className="logo-div">
          <Link to="/" id="buttonx"> {/* Enlace para volver a la página de inicio */}
            <p>X</p>
          </Link>
          <img src={miLogo} alt="logo" id="imgX" /> {/* Muestra el logo */}
        </div>
        <h1 id="textCreate1">Create your account</h1> {/* Título de la página */}
        {error && <p className="error-message">{error}</p>} {/* Muestra un mensaje de error si existe */}
        <form onSubmit={onRegister} id="register-form"> {/* Formulario para crear cuenta */}
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
          <button type="submit" className="button" id="buttonNext"> {/* Botón para enviar el formulario */}
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
