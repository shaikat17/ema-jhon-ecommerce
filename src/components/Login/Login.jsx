import React from "react";
import './Login.css'
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";

const Login = () => {
  const value = useGlobalContext();

  console.log(value);
  return (
    <form action="/action_page.php" method="post">
  <div className="imgcontainer">
    <img src={"https://www.w3schools.com/howto/img_avatar2.png"} alt="Avatar" className="avatar" />
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required />
        
    <button type="submit">Login</button>
  </div>

  <div className="container" style={{backgroundColor:"#f1f1f1"}}>
    <Link to="/register"><button type="button" className="cancelbtn">Register</button></Link>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
  );
};

export default Login;
