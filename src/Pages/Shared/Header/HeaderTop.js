import React from 'react';
import './Header.css';

const HeaderTop = () => {
    return (
        <div className="container-fluid top-border">
            <div className="row">
                <div className="col-md-6">
                    <ul className="top-nav">
                        <li>Order Tracking </li>
                        <li>FAQs</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="top-nav justify-content-end">
                        <li>Store Location </li>
                        <li>support@wrish.com</li>
                    </ul>
                </div> 
            </div>
        </div>
    );
};

export default HeaderTop;