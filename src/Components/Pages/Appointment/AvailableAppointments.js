import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date, setDate}) => {
    return (
        <div>
            <dir>
                <h2 className='text-center text-secondary font-bold text-3xl py-8'>Available Appointments on {format (date, 'PP')}</h2>
            </dir>
        </div>
    );
};

export default AvailableAppointments;