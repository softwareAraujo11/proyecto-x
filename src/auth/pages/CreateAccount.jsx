// CreateAccount.jsx
import React, { useContext, useState } from "react";
import "../../Styles/CreateAccount.css";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import miLogo from "../../assets/x.png";

const initForm = {
  fullName: "",
  UserName: "",
  email: "",
  password: "",
};

export const CreateAccount = ({ setUsers }) => { 
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);
  const { fullName, UserName, email, password, onInputChange } = useForm(initForm);
  const [error, setError] = useState('');

  const onRegister = (event) => {
    event.preventDefault();

    if (!fullName || !UserName || !email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    const isRegistered = registerUser(UserName, password);
    
    if (isRegistered) {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push({ UserName, fullName, email });
      localStorage.setItem("users", JSON.stringify(existingUsers));

      localStorage.setItem("username", UserName);
      
      setUsers(existingUsers);

      navigate("/LoginPage", { replace: true });
    } else {
      setError('Error al registrar el usuario. Puede que el usuario ya exista.');
    }
  };

  return (
    <div className="CreateAccount">
      <div className="createAccount-div">
        <div className="logo-div">
          <Link to="/" id="buttonx">
            <p>X</p>
          </Link>
          <img src={miLogo} alt="logo" id="imgX" />
        </div>
        <h1 id="textCreate1">Create your account</h1>
        {error && <p className="error-message">{error}</p>} {}
        <form onSubmit={onRegister} id="register-form">
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
          />
          <input
            type="text"
            placeholder="UserName"
            id="UserName"
            name="UserName"
            value={UserName}
            onChange={onInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
          />
          <button type="submit" className="button" id="buttonNext">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
