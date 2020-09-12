import React, { useState } from "react";
import "../css/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Login() {
  const [email, setemail] = useState(""); // Added to fetch the email from the text input
  const [RegisterFunctionality, setRegisterShowText] = useState(false); //Added to hide and Unhide content in the form
  const [name, setename] = useState(""); // Added to fetch the name from the text input
  const [password, setpassword] = useState(""); // Added to fetch the password fromt he text input
  const history = useHistory(); //It takes us to a page location from history

  const signIn = (event) => {
    event.preventDefault(); //prevent in refreshing the page

    //Firebase authentication for signIn code
    auth
      .signInWithEmailAndPassword(email, password) //This is return a promise and returns an object
      .then((auth) => {
        console.log(auth);
        auth.user.name = email.split("@")[0];
        history.push("/");
      })
      .catch((error) => alert(error.message)); // This is the handle the error when the user types a wrong password or email
  };

  const registerAccount = (event) => {
    event.preventDefault(); //prevent in refreshing the page
    setRegisterShowText(true);

    if (RegisterFunctionality) {
      //Firebase authentication for creation of account code
      auth
        .createUserWithEmailAndPassword(email, password) //This is return a promise and returns an object
        .then((auth) => {
          auth.user.name = name;
          history.push("/");
        })
        .catch((error) => (setRegisterShowText ? alert(error.message) : null)); // This is the handle the error when the user types a wrong password or email
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      {/* Above code add an image of amazon logo when clicked takes us to home page */}
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          {RegisterFunctionality && (
            <div className="login__AddName">
              <h5>Name</h5>
              <input
                type="text"
                value={name}
                onChange={(event) => {
                  setename(event.target.value);
                }}
              ></input>
            </div>
          )}
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          ></input>
          {!RegisterFunctionality && (
            <button
              type="submit"
              onClick={signIn}
              className="login__signInButton"
              style={{ cursor: "pointer" }}
            >
              Sign In
            </button>
          )}
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          onClick={registerAccount}
          className="login__createButton"
          style={{ cursor: "pointer" }}
        >
          Create your Amazon account
        </button>
        {RegisterFunctionality && (
          <div className="login__registerText">
            <span>Already have an account?</span>
            {/* <Link className="link" to={setSignInShowText(true)}></Link> */}
            <button
              onClick={() => setRegisterShowText(!RegisterFunctionality)}
              className="button__text"
            >
              {" "}
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
