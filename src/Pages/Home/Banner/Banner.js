import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImgOne from '../../../Images/slider-1-2.jpg'
import bannerImgTwo from '../../../Images/slider-2.jpg'
import bannerImgThree from '../../../Images/slider-3.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bannerImgOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <span>TIMELESS & ELEGANT</span>
                    <h3>THE CLASSICS</h3>
                    <p>Complete your everyday look with a classic leather strap watch.</p>
                    <Link to="/shop">Shop Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bannerImgTwo}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <span>TIMELESS & ELEGANT</span>
                    <h3>BEST SELLER</h3>
                    <p>Complete your everyday look with a classic leather strap watch.</p>
                   <Link to="/shop">Shop Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={bannerImgThree}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <span>TIMELESS & ELEGANT</span>
                    <h3>NEW ARRIVALS</h3>
                    <p>Complete your everyday look with a classic leather strap watch.</p>
                   <Link to="/shop">Shop Now</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;