import React, { useContext } from "react";
import "../../Styles/CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
import miLogo from "../../assets/x.png";

const initForm = {
  fullName: "",
  UserName: "",
  email: "",
  password: "",
};

export const CreateAccount = () => {
  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext); // Usamos registerUser en lugar de logInUser

  const { fullName, UserName, email, password, onInputChange } =
    useForm(initForm);

  const onRegister = (event) => {
    event.preventDefault();
    const isRegistered = registerUser(UserName, password); // Llamamos a registerUser

    if (isRegistered) {
      // Navegar a la página de login después de registrar
      navigate("/LoginPage", { replace: true });
    }
  };

  return (
    <>
      <div className="CreateAccount">
        <div className="createAccount-div">
          <div className="logo-div">
            <Link to="/" id="buttonx">
              <p>X</p>
            </Link>
            <img src={miLogo} alt="logo" id="imgX" />
          </div>
          <h1 id="textCreate1">Create your account</h1>
          <form action="" id="register-form">
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
              placeholder="password"
              name="password"
              id="password"
              value={password}
              onChange={onInputChange}
            />

            <button
              type="submit"
              className="button"
              id="buttonNext"
              onClick={onRegister}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
