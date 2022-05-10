import React from 'react';
import doc from '../../assets/images/doctor-small.png'
import docBack from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${docBack})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
        
        className='flex justify-center items-center mt-32'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px] mx-auto ml-20 w-10/12' src={doc} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-xl text-secondary font-bold'>Appointment</h1>
                <h1 className='text-3xl text-white mt-2 mb-5'>Make an appointment Today</h1>
                <p className='text-white text-justify w-8/12'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <button className='btn btn-primary mt-5'>GET STARTED</button>
            </div>
            
        </section>
    );
};

export default MakeAppointment;