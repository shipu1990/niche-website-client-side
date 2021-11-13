
import React, { useEffect, useState } from 'react';
import {Col } from 'react-bootstrap';
import ratingBackground from '../../../Images/testimonial-bg.jpg';
import Rating from 'react-rating';

const Ratings = () => {
    const ratingBanner = {
        width: "100%",
        height: "400px",
        color: "#000",
        paddingTop: "100px",
        backgroundImage: `url(${ratingBackground})`
    }
    const [ratings, setRatings] = useState([]);
    useEffect(()=>{
        fetch('https://enigmatic-atoll-76450.herokuapp.com/review')
        .then(res => res.json())
        .then(data=> setRatings(data))
    },[])
    return (
        <div style={ratingBanner}>
            <div className="container">
            <div className="row">
                    <h1>Few Words From Customer</h1>
                </div>
                <div className="row">
                {
                    ratings.map(rating =><Col xs={12} md={4} key={rating._id}>
                      <div className="rating-box">
                      <p><Rating initialRating= {rating.point} readonly emptySymbol="far fa-star icon-color"
  fullSymbol="fas fa-star icon-color">
                   </Rating></p>
                        <p>{rating.description}</p>
                        <h4>{rating.name}</h4>
                    </div>
                    </Col>) 
                    }
                </div>
            </div> 
        </div>
    );
};

export default Ratings;