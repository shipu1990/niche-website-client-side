import React from 'react';
import shopBanner from '../../Images/slider-3.jpg';

const ShopBanner = () => {
    const commonBanner = {
        width: "100%",
        height: "300px",
        color: "#000",
        paddingTop: "100px",
        backgroundImage: `url(${shopBanner})`
    }
    return (
        <div style={commonBanner}>
            <div className="container">
                <div className="row">
                    <h1 className="text-light">Shop</h1>
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;