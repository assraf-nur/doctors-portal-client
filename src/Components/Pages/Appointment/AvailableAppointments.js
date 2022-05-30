import { format } from "date-fns";
import React, { useState } from "react";
import AppointService from "./AppointService";
import BookingModal from "./BookingModal";
import Loading from "../Login/Loading";
import { useQuery } from "react-query";

const AvailableAppointments = ({ date, setDate }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://limitless-crag-35256.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // useEffect(() => {
  //   fetch(`https://limitless-crag-35256.herokuapp.com/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);

  return (
    <div>
      <div>
        <h2 className="text-center text-secondary font-bold text-3xl py-12">
          Available Appointments on {format(date, "PP")}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
        {services?.map((service) => (
          <AppointService
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointService>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          date={date}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
