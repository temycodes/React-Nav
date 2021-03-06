import React, { Component } from 'react';
import {Menu} from './MenuItems';
import './Navbar.css';
import {Button} from '../Button'

class Navbar extends Component {

    state = {clicked: false}
    
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return (
            <nav className='navbarItems'>
                <h1 className="navbar-logo">NAV</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                    {
                        Menu.map((item, index) => { 
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li><a className="nav-links" href="#"><Button>Sign</Button></a></li>
                    <li><a className="nav-links" href="#"><i className="fas fa-shopping-cart"></i></a></li>
                </ul>              
            </nav>
        )
    }
}

export default Navbar;
