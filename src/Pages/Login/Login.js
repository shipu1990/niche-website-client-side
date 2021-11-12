import React , { useState } from 'react';
import {Spinner} from 'react-bootstrap';

import shopBanner from '../../Images/slider-3.jpg';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const commonBanner = {
        width: "100%",
        height: "300px",
        color: "#000",
        paddingTop: "100px",
        backgroundImage: `url(${shopBanner})`
    }
    const location = useLocation();
    const history = useHistory();
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, logOut, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    } 
    return (
        <div>
            <div style={commonBanner}>
                <div className="container">
                    <div className="row">
                        <h1 className="text-light">Login</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6 from-box">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email" name="email" onChange ={handleOnChange} className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" onChange ={handleOnChange} className="form-control"  placeholder="Password" />
                                </div>
                                {user.email?  <button type="submit" onClick={logOut} className="btn common-btn">LOGOUT</button> : <button type="submit" className="btn common-btn">LOGIN</button> }
                                {isLoading && <Spinner animation="grow" />}
                                {user?.email &&<div className="alert alert-success" role="alert">Login successfully!</div>}
                                {authError && <div className="alert alert-danger" role="alert">{authError}</div> }
                            </form>
                            <NavLink to="/register"><button className="btn common-btn">New User ? Please Register</button></NavLink>
                        </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;