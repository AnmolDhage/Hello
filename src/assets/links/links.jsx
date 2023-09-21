import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {

    const linkList = [
        {
            link: '/',
            title: 'Link 1'
        },
        {
            link: '/link/2',
            title: 'Link 2'
        },
        {
            link: '/link/3',
            title: 'Link 3'
        }
    ]

    return (
        <>
            {linkList.map((item, key) => {
                return <li>
                    <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                            `${isActive ? 'current' : ''}`
                        }
                    >{item.title}</NavLink>
                </li>
            })}
        </>
    )
}

export default Links