import React from "react";
import SubsideNavBar from "../common/SubsideNavBar";
import TripStepCard from "../cards/TripStepCard";

const BookNextTripSection = () => {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ];
  return (
    <section className="flex justify-between flex-col md:flex-row items-center mt-[-10rem]">
      <div>
        <div>
          <SubsideNavBar
            title="Easy and Fast"
            subtitle="Book your next trip in 3 easy steps"
          />
        </div>
        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
        {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
          />
          ))}
        </div>
      </div>
      <div>
        <img src="/images/next-trip.png" alt="" />
      </div>
    </section>
  );
};

export default BookNextTripSection;
