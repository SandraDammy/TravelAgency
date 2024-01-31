import React from 'react'
interface IProps {
    iconUrl: string;
    title: string;
    description: string;
  }

const TripStepCard: React.FC<IProps> = ({
    iconUrl,
    title,
     description,
  }: IProps) => {

  return (
    <div className="flex gap-8 items-center">
      <div>
        <img src={iconUrl} alt="trip step" />
      </div>
      <div className="flex flex-col">
        <p className="text-lightGray text-[1rem] font-[700] capitalize">{title}</p>
        <p className="text-lightGray text-[1rem] font-[400] w-[30rem]">{description}</p>
      </div>
    </div>
  )
}

export default TripStepCard
