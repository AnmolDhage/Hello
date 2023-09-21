import './navbar.css'
import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Links from '../../assets/links/links';

const Navbar = () => {
  return (
    <div className='navbar justify-bet '>
      <div>Navbar</div>
      <div className='justify-bet gp1 nav-links'>
        <ul className='justify-bet gp1'>
          <Links />
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? 'current' : ''
              }
            >SignUp</NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'current' : ''
              }
            >Login</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar