import React from 'react';
import { Link } from 'react-router-dom';
import homeBackground from '../../../Images/hot-offer-bg.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const HotOffers = () => {
    const homeBanner = {
        width: "100%",
        height: "500px",
        paddingTop: "150px",
        backgroundImage: `url(${homeBackground})`
    }
    return (
        <div style={homeBanner}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="banner-info">
                            <h5 className="tagline text-left text-light">SALE UP TO 30% OFF ALL ITEMS</h5>
                            <h1 className="banner-header text-left text-light">BE THE FIRST TO GET LIMITED EDITIONS</h1>
                           <Link to="/shop"> <button className="common-btn-home">Shop Now</button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HotOffers;