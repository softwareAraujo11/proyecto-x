import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../contexts/AuthContext";
import miLogo from "../../assets/x.png";
import "../../Styles/LoginPage.css";

const initForm = {
  UserName: "",
  password: "",
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);
  const { UserName, password, onInputChange } = useForm(initForm);

  const onLogin = (event) => {
    event.preventDefault();

    // Llama a logInUser y verifica si las credenciales son válidas
    const isValidLogin = logInUser(UserName, password);
    if (isValidLogin) {
      // Si las credenciales son válidas, redirige al la pagina inicio
      navigate("/Feed", { replace: true });
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage-div">
          <div className="logo-div">
            <Link to="/" id="buttonx">
              <p>X</p>
            </Link>
            <img src={miLogo} alt="logo" id="imgX" />
          </div>
          <h1 id="textLogin1">Sign in to X</h1>
          <button className="button" id="buttonGoogleLogin">
            Sign in with Google
          </button>
          <form action="" id="register-form" onSubmit={onLogin}>
            <input
              type="text"
              placeholder="UserName"
              name="UserName"
              value={UserName}
              onChange={onInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
            <button className="button" id="buttonNext" type="submit">
              Next
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/CreateAccount">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};
