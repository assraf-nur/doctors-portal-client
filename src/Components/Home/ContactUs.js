import React from 'react';
import docBack from '../../assets/images/appointment.png'

const ContactUs = () => {

    return (
        <div style={{
            background: `url(${docBack})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
         }} className='text-center p-8'>
            <div>
                <h1 className='text-secondary text-xl font-bold'>Contact Us</h1>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <div className='mt-8'>
                <input type="email" placeholder='Email Address' className='border rounded w-4/12 p-2'/>
                <br />
                <input type="text" placeholder='Subject' className='border rounded w-4/12 p-2 mt-4'/>
                <br />
                <textarea name="message" placeholder='Your Message' id="" className='border rounded w-4/12 p-2 mt-4' cols="30" rows="10"></textarea>

                <br />
                <button className='btn btn-secondary px-12 text-white mt-4'>Send</button>
            </div>
        </div>
    );
};

export default ContactUs;