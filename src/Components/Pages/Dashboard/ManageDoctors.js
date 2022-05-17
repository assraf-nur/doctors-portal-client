import React from "react";
import { useQuery } from "react-query";
import Loading from "../Login/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctors", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-5">
        <h2 className="text-2xl font-bold mb-3">Doctor List</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                doctors.map((doctor, index) => <DoctorRow 
                key={doctor._id} 
                doctor={doctor} 
                index={index}
                refetch = {refetch}
                ></DoctorRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
