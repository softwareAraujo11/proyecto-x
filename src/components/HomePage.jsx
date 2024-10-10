//HomePage.jsx
import React from "react";
import miLogo from "../assets/x.png";
import "../Styles/HomePage.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <div className="homePage">
        <div className="principal-div">
          <div className="image-div">
            {" "}
            <img src={miLogo} alt="Logo" id="logoHome" />
          </div>
          <div className="buttoms-div">
            <h1 id="text1">Happening now</h1>
            <h2 id="text2">Join today.</h2>
            <button className="button" id="buttonGoogle">Sign in with Google</button>
            <div className="or-div">
              <hr className="line-or" />
              <p>or</p>
              <hr className="line-or" />
            </div>
            <Link to="/CreateAccount" id="button-register">
              <button className="button button-register" id="button-register">Create Account</button>
            </Link>
            <p id="text3">
              By signing up, you agree to the{" "}
              <a href="https://x.com/en/tos">Terms of Services</a> and{" "}
              <a href="https://x.com/en/privacy">Privacy Policy</a>, including{" "}
              <a href="https://help.x.com/en/rules-and-policies/x-cookies">
                Cookie Use
              </a>
              .
            </p>
            <p id="text4">Already have an account?</p>
            <Link to="/LoginPage" id="button-login">
              <button className="button button-login">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="links-div"></div>
      </div>
    </>
  );
};
