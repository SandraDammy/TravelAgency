import React from 'react'
import SubNavBar from '../common/SubNavBar'
import DestinationsCard from '../cards/DestinationsCard'

const TopSellingSection = () => {
  const destination = [
    {
      id: 0,
      iconUrl: "/images/rome.png",
      title: "Rome, Italty",
      amount: "$5,42k",
      duration: "10 Days Trip",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/london.jpg",
      title: "London, UK",
      amount: "$4.2k",
      duration: "12 Days Trip",
      highlighted: false,
    },
    {
      id: 2,
      iconUrl: "/images/europe.png",
      title: "Full Europe",
      amount: "$15k",
      duration: "28 Days Trip",
      highlighted: true,
    },
   
  ];

  return (
    <section>
      <SubNavBar title="Top Selling" subtitle="Top Destinations" />

      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {destination.map((destination) => (
          <DestinationsCard
            key={destination.id}
            iconUrl={destination.iconUrl}
            title={destination.title}
            amount={destination.amount}
            duration={destination.duration}
            isHighlighted={destination.highlighted} 
          />
        ))}
      </div>
    </section>
  );
};

export default TopSellingSection