import { NavLink } from 'react-router-dom'
import './footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className=' footer'>
      <div className='footer-body'>
      <div>
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
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer