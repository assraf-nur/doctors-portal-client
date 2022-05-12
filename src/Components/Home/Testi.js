import React from "react";

const Testi = ({ review }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review.des}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-18 mt-5 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="im" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-xl">{review.name}</h4>
            <p className="font-bold">{review.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;
