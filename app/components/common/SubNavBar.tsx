import React from "react";

interface SubNavBarProps {
  title: string;
  subtitle: string;
}

const SubNavBar: React.FC<SubNavBarProps> = ({
  title,
  subtitle,
}: SubNavBarProps) => {
  return (
    <div>
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        {title}
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        {subtitle}
      </p>
    </div>
  );
};

export default SubNavBar;
