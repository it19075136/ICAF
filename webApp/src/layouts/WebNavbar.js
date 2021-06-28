import React, { Component } from 'react'
import './WebNavbar.css';
import { MenuItems } from './MenuItems';
import { Button } from './Button'

class WebNavbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render() {
        const handleSingup=()=>{
            // Window.href();
            window.location.href ='/singup';
        }
        const handleSingin=()=>{
            window.location.href='/singin';
        }
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ICAF</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="btn-list">
                    <Button onclick={handleSingup}>Sign Up</Button>
                </div>
                <div className="btn-list">
                    <Button onclick={handleSingin}>Log In</Button>
                </div>
            </nav>
        )
    }
}

export default WebNavbar;