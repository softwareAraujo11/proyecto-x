import React, { useContext } from "react";
import "../../Styles/CreateAccount.css";
import miLogo from "../assets/x.png";
import { Link } from "react-router-dom";

export const CreateAccount = () => {

  return (<>
    <div className="CreateAccount">
      <div className="createAccount-div">
        <div className="logo-div">
          <Link to="/" id="buttonx"><p>X</p></Link>
          <img src={miLogo} alt="logo" id="imgX" />
        </div>
        <h1 id="textCreate1">Create your account</h1>
        <form action="" id="register-form">
          <input
            type="text"
            placeholder="Full Name"
            id="fullName"
            name="fullName"
          />
          <input
            type="text"
            placeholder="UserName"
            id="UserName"
            name="UserName"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <Link to="/"><button type="submit" className="button" id="buttonNext" >Register</button></Link>
        </form>
      </div>
    </div>
  </>
  );
};
