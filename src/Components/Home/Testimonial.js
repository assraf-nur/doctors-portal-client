import React from 'react';
import q from '../../assets/icons/quote.svg'
import p1 from '../../assets/images/people1.png'
import p2 from '../../assets/images/people2.png'
import p3 from '../../assets/images/people3.png'
import Testi from './Testi';

const Testimonial = () => {

    const reviews = [
        {
            _id:1,
            name: 'Nur Tesla',
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: p1,
            country: 'Bangladesh'
        },
        {
            _id:2,
            name: 'Tesla',
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: p2,
            country: 'America'
        },
        {
            _id:3,
            name: 'Watson',
            des: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: p3,
            country: 'Russia'
        },
    ]

    return (
        <section className='mt-12'>
            <div className='flex justify-between'>
                <div className='mt-5'>
                    <h4 className='text-secondary font-bold text-xl'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={q} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 container mx-auto py-20'>
            {
                reviews.map(review => <Testi key={review._id} review={review}></Testi>)
            }
            </div>
        </section>
    );
};

export default Testimonial;