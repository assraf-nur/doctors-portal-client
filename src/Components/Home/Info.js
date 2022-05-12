import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 container mx-auto">
      <InfoCard
        bgclassName="bg-primary"
        cardText="Lorem Ipsum is simply dummy text of the pri"
        cardTitle="Opening Hours"
        img={clock}
      ></InfoCard>
      <InfoCard
        bgclassName="bg-accent"
        cardText="Brooklyn, NY 10036, United States"
        cardTitle="Visit our location"
        img={marker}
      ></InfoCard>
      <InfoCard
        bgclassName="bg-secondary"
        cardText="+000 123 456789"
        cardTitle="Contact us now"
        img={phone}
      ></InfoCard>
    </div>
  );
};
export default Info;
