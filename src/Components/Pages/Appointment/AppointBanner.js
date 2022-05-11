import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointBanner = ({date, setDate}) => {
    
    const myStyle = {
        backgroundImage: "url('https://i.ibb.co/mJ7pfMm/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (
        <div style={myStyle}>
            <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img class="chair ml-5" src={chair} alt='chair' />
                <div className='mr-16 rounded-xl shadow-lg'>
                <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    footer={footer}
                />
                </div>
            </div>
            </div>
        </div>
    );
};

export default AppointBanner;