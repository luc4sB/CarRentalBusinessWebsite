import "./styles/Login.css";
import GoogleLogin from "react-google-login";
import { useState } from "react";

function setLoginState() {
  
}

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  const [login, setLogin] = useState("LoggedOut");

  return (
    <>
      <section id="LoginPage">
        <div id="LoginPage-container">
          
          <h1>Login</h1>
          
          <div id="Login-Inputs">
            <p>Username: </p>
            <input type="text" id="fname" name="fname"/>
            <p>Password: </p>
            <input type="text" id="fname" name="fname"/>
            <button id="login-button" onClick={() => setLogin("LoggedIn")}>
              Login
            </button>
            <a>Forgot Password</a>
          </div>
          <hr className="divider"></hr>
          
          <div id="OtherLoginMethods">
            <GoogleLogin
              clientId="984330246636-2cp3h0fti4q2u2n2kq73r0jue5v5b5qf.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
          
        </div>
        
      </section>
    </>
  );
}


export default Login;