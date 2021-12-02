import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav class='header-nav'>
                <div>
                    <NavLink to = '/Login' activeStyle>
                        Login
                    </NavLink>
                    <NavLink to = '/Pets' activeStyle>
                        Mascotas
                    </NavLink>
                    <NavLink to = '/Contact' activeStyle>
                        Contacto
                    </NavLink>
                    <NavLink to = '/Services' activeStyle>
                        Servicios
                    </NavLink>
                    <NavLink to = '/Price' activestyle>
                        Precios
                    </NavLink>
                </div>
                <NavLink to='/' >
                    <img src='#' />
                </NavLink>
            </nav>
        </>
    )
}

export default Header