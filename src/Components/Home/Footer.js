import React from 'react';
import backFoot from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='mb-5'
        style={{
            background: `url(${backFoot})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "-150px"
         }}
        >
            <footer class="footer p-10">
        <div>
            <span class="footer-title">Services</span> 
            <a class="link link-hover">Emergency Checkup</a>
            <a class="link link-hover">Monthly Checkup</a>
            <a class="link link-hover">Weekly Checkup</a>
            <a class="link link-hover">Deep Checkup</a>
        </div> 
        <div>
            <span class="footer-title">ORAL HEALTH</span> 
            <a class="link link-hover">Fluoride Treatment</a>
            <a class="link link-hover">Cavity Filling</a>
            <a class="link link-hover">Teath Whitening</a>
        </div> 
        <div>
            <span class="footer-title">OUR ADDRESS</span> 
            <p>New York - 101010 Hudson</p>
        </div>
        </footer>
        <div className='text-center'>
            <small>Copyright 2022 All Rights Reserved</small>
        </div>
        </div>
    );
};

export default Footer;