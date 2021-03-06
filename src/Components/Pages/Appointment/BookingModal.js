import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { slots, name, _id, price } = treatment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };

    fetch("https://limitless-crag-35256.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `you already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-accent">{treatment.name}</h3>

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center mt-5"
            action=""
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              disabled
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              placeholder="SUBMIT"
              className="btn text-white font bold bg-accent input-bordered mt-5 w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
