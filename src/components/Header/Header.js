import React from 'react';
import './Header.css'

function Header(props) {
    return (
        <div>
            <header>
                <h3 className='brand_name'>USER INFO<span>.</span></h3>
                    <nav>
                        <ul className='nav_links'>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                <a className='cta' href="/contact"><button>Contact</button></a>
            </header>
        </div>
    );
}

export default Header;