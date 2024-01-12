import React, { useState, useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerStyle = {
        backgroundColor: scrolling ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
    };

    /* SideBar */
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header style={headerStyle}>
            <div className="logo">
                <h1>GR</h1>
            </div>
            <nav ref={navRef}>
            <img className='nav-btn nav-close-btn' onClick={showNavbar} src="src\assets\close-btn.svg" alt="" />
                <a href="" className='nav-item'>Psicól. Gabriel Rolón</a>
                <a href="" className='nav-item'>Testimonios</a>
                <a href="" className='nav-item'>Contacto</a>
                    
                <span className="rrss">
                    <a href="https://www.instagram.com/gabriel.rolon/">
                        <img src="src\assets\insta.svg" alt="instagram icon" />
                    </a>
                    <a href="https://www.facebook.com/gabrielrolonoficial/">
                        <img src="src\assets\facebook.svg" alt="facebook icon" />
                    </a>
                </span>
            </nav>
            <img onClick={showNavbar} className='nav-btn' src="src\assets\menu.svg" alt="" />
            
        </header>
    );
};

export default Header;
