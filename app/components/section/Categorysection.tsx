import React, { useState } from "react";
import CatergoryCard from "../cards/CatergoryCard";
import SubNavBar from "../common/SubNavBar";

const CategorySection = () => {
  const features = [
    {
      id: 0,
      iconUrl: "/images/satellite.png",
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      highlighted: false,
    },
    {
      id: 1,
      iconUrl: "/images/aircraft.png",
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      highlighted: false,
    },
    {
      id: 2,
      iconUrl: "/images/mic.png",
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      highlighted: false,
    },
    {
      id: 3,
      iconUrl: "/images/cog.png",
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      highlighted: false,
    },
  ];

  return (
    <section>
      <SubNavBar title="Category" subtitle="We Offer Best Services" />

      <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-16">
        {features.map((feature) => (
          <CatergoryCard
            key={feature.id}
            iconUrl={feature.iconUrl}
            title={feature.title}
            description={feature.description}
            isHighlighted={feature.highlighted} // Pass isHighlighted as a prop
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
