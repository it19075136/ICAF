import React from 'react';
import '../styles/NavBar.css';

const Navbar = (props) => {

    const {click} = props;

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>ICAF 2021</h2>
            </div>
            <ul className="navbar__links">
                <li>
                    <a href="/#">
                        Item1
                    </a>
                </li>
                <li>
                    <a href="/#">
                        Item2
                    </a>
                </li>
            </ul>
            <div className="hamburger__menu" onClick={click }>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav> 
    )
}

export default Navbar

