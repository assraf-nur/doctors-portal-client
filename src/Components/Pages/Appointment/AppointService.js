import React from 'react';

const AppointService = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mx-auto text-secondary text-xl">{name}</h2>
          <p className='mx-auto'>
              {
                  slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available. Try another day</span>
              }
          </p>
          <p className='mx-auto'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
          <div class="card-actions justify-center">
            <label  disabled={slots.length === 0}  
            onClick = {() => setTreatment(service)}  for="booking-modal" class="btn btn-secondary font-bold text-white px-8 mt-2">BOOK NOW</label>
          </div>
        </div>
      </div>
    );
};

export default AppointService;