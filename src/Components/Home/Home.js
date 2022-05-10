import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;