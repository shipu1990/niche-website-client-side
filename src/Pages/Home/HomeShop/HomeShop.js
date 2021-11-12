import React, { useEffect, useState } from 'react';
import {Image, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';
const HomeShop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-atoll-76450.herokuapp.com/watches')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className="mt-5 mb-5">Watch Collection</h1>
                </div>
                <div className="row">
                {
                    products.slice(0, 6).map(product =><Col xs={12} md={4} key={product._id}>
                      <div className="product-box">
                        <Image src={product.img} fluid />
                        <h4 className="product-head">{product.name}</h4>
                        <p className="product-price">${product.price}</p>
                        <Link className="read-more-btn" to ={`booking/${product._id}`}>ORDER NOW</Link>
                    </div>
                    </Col>) 
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeShop;