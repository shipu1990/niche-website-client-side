import React, { useState } from 'react';
import {Spinner} from 'react-bootstrap';
import shopBanner from '../../Images/slider-3.jpg';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const commonBanner = {
        width: "100%",
        height: "300px",
        color: "#000",
        paddingTop: "100px",
        backgroundImage: `url(${shopBanner})`
    }
    const [loginData, setLoginData] = useState({})
    const { user, registerUser, authError, isLoading } = useAuth();
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
     }
    return (
        <div>
             <div  style={commonBanner}>
                <div className="container">
                    <div className="row">
                        <h1 className="text-light">Register</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6 from-box">
                        {!isLoading &&  <form onSubmit={handleLoginSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text"  name="name"  onBlur={handleOnBlur} className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input type="email"  name="email" onBlur={handleOnBlur} className="form-control" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password"  onBlur={handleOnBlur} className="form-control"  placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label>Re-Type Password</label>
                                    <input type="password"  name="password2" onBlur={handleOnBlur} className="form-control"  placeholder="Password" />
                                </div>
                                <button type="submit" className="btn common-btn">REGISTER</button>
                                
                                {isLoading && <Spinner animation="grow" />}
                                {user.email && <div className="alert alert-success" role="alert">User Created successfully!</div>}
                                {authError && <div className="alert alert-danger" role="alert">{authError}</div> }
                            </form> }
                            <NavLink to="/login"><button className="btn common-btn">Already Registered? Please Login</button></NavLink>
                        </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    );
};

export default Register