import React from 'react'
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

const Header = () => {
  const { user, logOut } = useGlobalContext()

  const handleSignOut = () => {
    logOut()
        .then(result => { })
        .catch(error => console.error(error));
}

  return (
    <nav className="header">
      <a href="/"><img src={logo} alt="" /></a>
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        {user ? <button className='hButton' onClick={handleSignOut}>Sign Out</button> : <Link to="/login">Login</Link> }
        { user ? <p style={{display: 'inline', color: 'red'}}>Welcome {user.email}</p> : <Link to="/register">Register</Link> }
      </div>
    </nav>
  );
}

export default Header