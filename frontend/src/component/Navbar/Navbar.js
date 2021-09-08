import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '../Utils/Button.js'

import './Navbar.css'

const Navbar = () => {
    const [nav, setNav] = useState(true);

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 50) {
            setNav(false)
        }
        else 
            setNav(true)
    })

    return (
            <div>
                <nav className= {nav ? "navbar-active" : "navbar"}>
                    <h2>LOGO</h2>
                    <ul className="nav">
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/product"> Product </Link></li>
                        <li><Link to="/info"> Info </Link></li>
                    </ul>
                    <form>
                        <input type="text" name="search" placeholder="Search.." />
                    </form>
                    <Button buttonSize='btn--medium' buttonStyle='btn--primary'>Log in</Button>
                </nav>
            </div>
    )
}

export default Navbar
