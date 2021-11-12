import React from 'react';
import Banner from './Banner/Banner';
import HomeShop from './HomeShop/HomeShop';
import HotOffers from './HotOffers/HotOffers';
import Rating from './Rating/Rating';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HomeShop></HomeShop>
           <HotOffers></HotOffers>
           <Rating></Rating>
        </div>
    );
};

export default Home;