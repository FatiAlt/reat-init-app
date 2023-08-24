import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <div className="navigation"></div>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propos</li> 
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;
