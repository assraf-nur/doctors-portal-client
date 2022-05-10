import React from 'react';

const Testi = ({review}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <p>{review.des}</p>
          <div className='flex items-center'>
          <div class="avatar">
                <div class="w-18 mt-5 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                    <img src={review.img} alt='im'/>
                </div>
            </div>
            <div>
                <h4>{review.name}</h4>
                <p>{review.country}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Testi;