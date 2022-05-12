import React from "react";

const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border-4">
      <figure className="px-10 pt-10">
        <img
          className=" w-20"
          src={service.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service.name}</h2>
        <p>{service.des}</p>
      </div>
    </div>
  );
};

export default Service;
