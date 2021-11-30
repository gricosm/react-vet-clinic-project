import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav class='header-nav'>
                <Menu>
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
                </Menu>
                <NavLink to='/' >
                    <img src='#' />
                </NavLink>
            </nav>
        </>
    )
}

export default Header