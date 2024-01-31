import React from "react";

interface SubsideNavBarProps {
    title: string;
    subtitle: string;
}
const SubsideNavBar: React.FC<SubsideNavBarProps> = ({
  title,
  subtitle,
}: SubsideNavBarProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-lightGray text-[1.125rem] font-[600] ">
        {title}
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] capitalize w-[30rem]">
        {subtitle}
      </p>
    </div>
  );
};

export default SubsideNavBar;
