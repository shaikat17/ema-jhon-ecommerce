import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

const formHandler = (e) => {
e.preventDefault()

// console.log('hello')
const form = e.target
const userName = form.uname.value
const email = form.email.value
const password = form.psw.value
const passwordRepeat = form.pswRepeat.value

console.log({userName, email, password, passwordRepeat})
}

    return (
    <form onSubmit={formHandler}>
            <div class="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label for="text"><b>Username</b></label>
            <input type="text" placeholder="Enter an username" name="uname" id="uname" required />

            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" id="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="pswRepeat" id="psw-repeat" required />
            <hr />
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

            <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
  </div>
</form>
    );
};

export default Register;