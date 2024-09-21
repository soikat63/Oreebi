import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const Productbrand = () => {
  let [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(!show)}>
        <h3 className="flex items-center justify-between mt-12 mb-8">
          <span className="font-DM font-bold text-xl text-[#262626]  ">
            Shop by Brand
          </span>{" "}
          <TiArrowSortedUp className={`${show ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>

      <ul className={`flex flex-col gap-y-5 ${show ? "block" : "hidden"}`}>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          Brand 1
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          Brand 2
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          Brand 3
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          Brand 4
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          Brand 5
        </li>
      </ul>
    </div>
  );
};

export default Productbrand;
