import React from "react";

const InfoCard = ({ img, cardTitle, cardText, bgClass }) => {
  return (
    <div
      className={`card lg:card-side bg-primary-100 shadow-xl mb-10 my-10 ${bgClass}`}
    >
      <figure className="pl-7 pr-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardText}</p>
      </div>
    </div>
  );
};

export default InfoCard;
