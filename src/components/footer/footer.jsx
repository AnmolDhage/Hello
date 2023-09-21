import { NavLink } from 'react-router-dom'
import './footer.css'
import React from 'react'
import Links from '../../assets/links/links'

const Footer = () => {



  return (
    <div className='navbar footer'>
      <div className='footer-body'>
        <div>
          <ul className='justify-bet gp1'>
            <Links />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer