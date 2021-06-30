import React, { Component } from 'react'
import './WebNavbar.css';
import { MenuItems } from './MenuItems';
import { Button } from './Button';
import { connect } from 'react-redux'

class WebNavbar extends Component {
    state = { clicked: false, menuItems: MenuItems}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    filterByUser(item){
        if((this.props.user != null || this.props.user != []) && (item.title == 'Log in' || item.title == 'Sign up')){
            return false;
        }
        else{
            return true;
        }
        
    }

    componentDidMount(){
        this.setState({...this.state,menuItems: [...MenuItems.filter((item) => this.filterByUser(item))]})
    }

    render() {
        console.log(this.props.user)
        const handleSingup = () => {
            // Window.href();
            window.location.href = '/singup';
        }
        const handleSingin = () => {
            window.location.href = '/singin';
        }

        return (
            <div> 
                {(this.props.user && this.props.user.type != "ADMIN") || this.props.user == null  ?
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ICAF</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {this.state.menuItems.map((item, index) => {
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
            </nav>:(null)}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user ? state.user.user :null
})

export default connect(mapStateToProps, null)(WebNavbar);