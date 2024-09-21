import React from "react";

const ButtonS = ({ className, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`lg:max-w-[200px] max-w-[120px] lg:h-[50px] h-[38px] flex items-center justify-center text-[#FFFF]  bg-[#262626] hover:bg-transparent hover:text-[#262626] border border-[#262626] transition-all duration-300 cu  lg:text-base text-sm font-DM ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonS;
