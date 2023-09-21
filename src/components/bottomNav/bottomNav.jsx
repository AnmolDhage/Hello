import { NavLink } from 'react-router-dom'
import './bottonNav.css'
import React from 'react'
import Links from '../../assets/links/links'

const BottomNav = () => {



  return (
    <div className='navbar btm-nav'>
      <div className='btm-nav-body'>
        <div>
          <ul className='justify-bet gp1'>
            <Links />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BottomNav