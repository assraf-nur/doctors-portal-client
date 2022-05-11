import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {slots} = treatment;

    const handleBooking = e =>{
        e.preventDefault();
        const slot = e.target.slot.value;
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle text-white absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-accent">{treatment.name}</h3>

                   <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-5' action="">
                       <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
        
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                               {
                                   slots.map(slot => <option value={slot}>{slot}</option>)
                               }
                            </select>
                       <input type="text" name='name' placeholder="Name" class="input input-bordered w-full max-w-xs" />
                       <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                       <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs" />
                       <input type="submit" placeholder="SUBMIT" class="btn text-white font bold bg-accent input-bordered mt-5 w-full max-w-xs" />
                   </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;