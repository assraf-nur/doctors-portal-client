import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    const myStyle = {
        backgroundImage: "url('https://i.ibb.co/mJ7pfMm/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div style={myStyle}>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img class="chair" src={chair} alt='chair' />
                <div>
                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn uppercase text-white font-bold btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;<h1>Banner</h1>