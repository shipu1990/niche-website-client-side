import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <HeaderTop></HeaderTop>
            <div className="container">
                <div className="row">
                    <nav>
                        <Link to="/home">HOME</Link>
                        <Link to="/shop">SHOP</Link>
                        <Link to="/dashboard">DASHBOARD</Link>
                        {user.email? <Link onClick={logOut}>LOGOUT</Link>: <Link to="/login">LOGIN</Link>}
                        <span>{user.email}</span>
                    </nav>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;