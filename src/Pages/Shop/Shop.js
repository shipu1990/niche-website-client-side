import React, { useEffect, useState } from 'react';
import {Image, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ShopBanner from './ShopBanner';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/watches')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <ShopBanner></ShopBanner>
            <div className="container">
                <div className="row">
                    <h1 className="mt-5 mb-5">Watch Collection</h1>
                </div>
                <div className="row">
                    {
                    products.map(product =><Col xs={12} md={4} key={product._id}>
                      <div className="product-box">
                        <Image src={product.img} fluid />
                        <h4 className="product-head">{product.name}</h4>
                        <p className="product-price">${product.price}</p>
                        <Link className="read-more-btn"  to ={`booking/${product._id}`}>ORDER NOW</Link>
                    </div>
                    </Col>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;