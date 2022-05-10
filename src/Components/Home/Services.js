import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
import treat from '../../assets/images/treatment.png'

const Services = () => {
    const services = [
        {
            _id:1,
            name: 'Fluoride Treatment',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id:2,
            name: 'Cavity Filling',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id:3,
            name: 'Teeth Whitening',
            des: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]
    return (
        <div className='my-10'>
            <h3 className='text-center text-accent text-xl uppercase font-bold'>Our Services</h3>
            <h2 className='text-center text-accent text-4xl mt-2'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 container mx-auto my-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='container mx-auto'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treat} class="max-w-sm rounded-lg shadow-2xl" alt='imag'/>
                    <div className=' w-5/12 ml-10'>
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;