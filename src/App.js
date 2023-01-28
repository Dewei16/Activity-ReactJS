import React from 'react';
import logo from './logo1.png';
import { useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"; 


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive-nav");
    }
    
    return ( 
        <header>
            <img src={logo} width={120} height={60} />
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Featured</a>
                <a href="/#">Arrivals</a>
                <a href="/#">Blogs</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;