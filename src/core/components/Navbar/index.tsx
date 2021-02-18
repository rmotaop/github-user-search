import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Navbar = () => (

    <nav className="main-nav">
        <h1 className="main-nav-back">
            <NavLink to="/" exact>
                Bootcamp DevSuperior
            </NavLink>
        </h1>
    </nav>
);
export default Navbar;