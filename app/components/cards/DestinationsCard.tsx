import React from "react";
interface IProps {
  iconUrl: string;
  title: string;
  amount: string;
  duration: string;
  isHighlighted: boolean;
}

const DestinationsCard: React.FC<IProps> = ({
  iconUrl,
  title,
  amount,
  duration,
  isHighlighted,
}: IProps) => {
  return (
    <div className="flex relative flex-col justify-between  pb-[2.63rem] group">
      <div className="object-fill">
        <img
          src={iconUrl}
          alt="category card icon"
          className="w-[314px] h-[20.43rem]  object-cover rounded-t-[1.5rem]"
        />
      </div>
      <div className="bg-white w-full mt-[1.69rem] px-[1.62rem]  group-hover:shadow-md pb-[2rem] group-hover:rounded-[1.5rem]">
        <div className="flex justify-between text-lightGray text-[1.125rem] font-bold">
          <p>{title}</p>
          <p>{amount}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <img src="/images/send-icon.png" alt="" />
          </div>
          <p className="text-lightGray font-bold">{duration}</p>
        </div>
      </div>

      {isHighlighted && (
        <div className="absolute bottom-[5rem] right-[-4rem] -z-10 hidden md:block">
        <img src="/images/stylish-ring.png" alt="stylish-ring" />
        </div>
      )}
    </div>
  );
};

export default DestinationsCard;
