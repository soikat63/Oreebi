import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const Productbrand = () => {
  let [show, setShow] = useState(false);
  return (
    <div>
      <div onClick={() => setShow(!show)}>
        <h3 className="flex items-center justify-between mt-12 mb-8">
          <span className="font-DM font-bold text-xl text-[#262626]  ">
            Shop by Price
          </span>{" "}
          <TiArrowSortedUp className={`${show ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>

      <ul className={`flex flex-col gap-y-5 ${show ? "block" : "hidden"}`}>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          $0.00 - $9.99
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          $10.00 - $19.99
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          $20.00 - $29.99
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          $30.00 - $39.99
        </li>
        <li className=" border-b border-[#F0F0F0] pb-10 font-DM text-base leading-7 text-[#765d5d]">
          $40.00 - $69.99
        </li>
      </ul>
    </div>
  );
};

export default Productbrand;
