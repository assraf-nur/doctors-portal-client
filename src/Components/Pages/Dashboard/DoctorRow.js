import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, image, specialty, email } = doctor;

  const handleDocRemove = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <th>
        <div class="avatar">
          <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt="" />
          </div>
        </div>
      </th>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <button
          onClick={() => handleDocRemove(email)}
          class="btn btn-xs btn-error"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
