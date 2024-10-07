import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import miLogo from "../assets/x.png";
import "../../Styles/LoginPage.css";


export const LoginPage = () => {
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
          <h1 id="textCreate1">Sign in to X</h1>
          <button className="button" id="buttonGoogleLogin">
            Sign in with Google
          </button>
          <form action="" id="register-form">
            <input
              type="text"
              placeholder="UserName"
              name="UserName"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
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
