import React, { useState } from 'react';
import Footer from '../../Home/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='px-12'>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;