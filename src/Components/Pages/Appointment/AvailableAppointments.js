import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointService from "./AppointService";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-center text-secondary font-bold text-3xl py-12">
          Available Appointments on {format(date, "PP")}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {services.map((service) => (
          <AppointService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointments;
