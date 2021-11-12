import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer-border">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <h3>INFORMATION</h3>
                        <ul className="footer-nav">
                            <li>Shipping</li>
                            <li>Warranty & Authenticity</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>HELP</h3>
                        <ul className="footer-nav">
                            <li>Contact Us</li>
                            <li>About Us</li>
                            <li>Reviews</li>
                            <li>Terms of Service</li>
                            <li>Refund policy Contact</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>SERVICES</h3>
                        <ul className="footer-nav">
                            <li>Sale</li>
                            <li>Quick Ship</li>
                            <li>New Designs</li>
                            <li>Protection Plan</li>
                            <li> Gift Cards</li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <h3>CATEGORIES</h3>
                        <ul className="footer-nav">
                            <li>Watches</li>
                            <li>Watch Accessories</li>
                            <li>Clocks</li>
                            <li>Jewellery</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Copyright © 2021. All Right Reserved </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;