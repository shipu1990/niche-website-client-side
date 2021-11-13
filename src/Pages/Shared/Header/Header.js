import React from 'react';
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import './Header.css'
import useAuth from '../../../hooks/useAuth';
import logoImg from '../../../Images/Logo.PNG';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <HeaderTop></HeaderTop>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 logo">
                        <img src ={logoImg} alt="Logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
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
        </div>
    );
};

export default Header;