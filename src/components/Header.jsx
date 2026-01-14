import React from 'react';
import './Header.css'

// point to about, projects, contact
function Header() {
    return (
        <header className='header'>
            <div className='nameTitle'>arcueun</div>
            <nav className='sectionList' role='navigation' aria-label='Main navigation'>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;