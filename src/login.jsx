import "./styles/Login.css";
import GoogleLogin from "react-google-login";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import ClientProfile from "./ClientProfile.jsx";





function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    // Checks if the user is already logged in
    const isLoggedInCookie = document.cookie.includes('isLoggedIn=true');
    setIsLoggedIn(isLoggedInCookie);
  }, []);

  const handleLogin = () => {
    // Set a cookie to show the user is logged in
    document.cookie = 'isLoggedIn=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
    setIsLoggedIn(true);
    
    console.log(document.cookie.split(';'));
    window.location.reload();
  };
  const handleLogout = () => {
    document.cookie = 'isLoggedIn=false; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    setIsLoggedIn(false);
    window.location.reload();
  };

  

  
  return (
    <>
      
    {!isLoggedIn ? (
      <section id="LoginPage">
        <div id="LoginPage-container">
          <h1>Login</h1>

          <div id="Login-Inputs">
            <p>Username: </p>
            <input type="text" id="fname" name="fname" />
            <p>Password: </p>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="pass"
                name="pass"
              />
              <i
                className={`password-icon ${
                  showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                }`}
                onClick={() => setShowPassword((prev) => !prev)}
              ></i>
            </div>
            <br></br>
            
              
            
                <button id="login-button" onClick={handleLogin}>
                  
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
    ) : (
      <div>
        
        <ClientProfile/>
        
      </div>
      )}
      
    </>
  );
}

export default Login;
