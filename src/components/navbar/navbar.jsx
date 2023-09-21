import './navbar.css'
import React from 'react'
import { Link, NavLink } from "react-router-dom";
  
const Navbar = () => {
  return (
    <div className='navbar justify-bet '>
        <div>Navbar</div>
        <div className='justify-bet gp1 nav-links'>    
          <ul className='justify-bet gp1'>
            <li>
              <NavLink
              to="/"
              className={({isActive})=>
               `${isActive? 'current' : ''}`
              }
              >Link 1</NavLink>
            </li>
            <li>
              <NavLink
              to="/link/2"
              className={({isActive})=>
                `${isActive? 'current' : ''}`
              }
              >Link 2</NavLink>
            </li>
            <li>
              <NavLink
              to="/link/3"
              className={({isActive})=>
               isActive? 'current' : ''
              }
              >Link 3</NavLink>
            </li>
            <li>
              <NavLink
              to="/signup"
              className={({isActive})=>
               isActive? 'current' : ''
              }
              >SignUp</NavLink>
            </li>
            <li>
              <NavLink
              to="/login"
              className={({isActive})=>
               isActive? 'current' : ''
              }
              >Login</NavLink>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar