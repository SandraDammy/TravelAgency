import React from 'react';

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  isHighlighted: boolean; // Use isHighlighted instead of useState
}

const CatergoryCard: React.FC<IProps> = ({ iconUrl, title, description, isHighlighted }: IProps) => {
  return (
    <div
      className={`flex relative flex-col gap-4 items-center p-[2.5rem] text-center ${
        isHighlighted ? 'bg-white shadow-md rounded-[2.5rem]' : ''
      }`}
    >
      <div>
        <img src={iconUrl} alt="category card icon" className="h-[80px]" />
      </div>
      <p className="text-subtitle text-[1.2rem] font-[600]">{title}</p>
      <p className="text-lightGray text-[1rem] font-bold">{description}</p>
      {isHighlighted && (
        <div className="absolute -bottom-8 -left-10 -z-10">
          <img src="/images/rectangle-shape.png" alt="rectangle shape" />
        </div>
      )}
    </div>
  );
};

export default CatergoryCard;
