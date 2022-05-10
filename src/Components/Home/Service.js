import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl border-4">
        <figure class="px-10 pt-10">
            <img className=' w-20' src={service.img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{service.name}</h2>
            <p>{service.des}</p>
        </div>
        </div>
    );
};

export default Service;