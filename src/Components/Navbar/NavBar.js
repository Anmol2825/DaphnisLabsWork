import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import LogoDevIcon from '@mui/icons-material/LogoDev';

import { useState } from 'react';

import './NavBar.css'

function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <nav className="NavigationBar_Nav-navbar">
            <Link to="/" className="NavigationBar_Nav-navlogo" onClick={() => setOpen(false)}>
             
                <LogoDevIcon/>
                <span style={{
                    fontSize:"16px",
                    position:"relative",
                    bottom:"6px"
                }}>Medical Darpan</span>
            </Link>
            <ul className={open ? 'NavigationBar_Nav-nav-links active' : 'NavigationBar_Nav-nav-links'}>
                <div style={{ display: "flex", justifyContent: "space-evenly", width: "800px" }}>
                    <li className="NavigationBar_Nav-nav-item">
                        <Link to="/" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li className="NavigationBar_Nav-nav-item">
                        <Link to="/" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                            Products
                        </Link>
                    </li>
                    <li className="NavigationBar_Nav-nav-item">
                        <Link to="/" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                            Distributors
                        </Link>
                    </li>
                    <li className="NavigationBar_Nav-nav-item">
                        <Link to="/" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                            Manufactures
                        </Link>
                    </li>
                    <li className="NavigationBar_Nav-nav-item">
                        <Link to="/" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                            About Us
                        </Link>
                    </li>
                    <li className="NavigationBar_Nav-nav-item">
                        <Link to="/sponsors" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                            Blog
                           
                        </Link>
                    </li>
                </div>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/sponsors" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        Login
                    </Link>
                </li>
                <li className="NavigationBar_Nav-nav-item">
                    <Link to="/sponsors" className="NavigationBar_Nav-nav-link" onClick={() => setOpen(false)}>
                        <AccountCircleIcon />
                    </Link>
                </li>
            </ul>
            <div onClick={() => setOpen(!open)} className="NavigationBar_Nav-nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
        </nav>
    )
}

export default NavBar;