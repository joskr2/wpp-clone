import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/80px-WhatsApp.svg.png"
          alt="WhatsApp"
        />
        <div className="login_text">
          <h1>Sign into Wpp-clone</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
