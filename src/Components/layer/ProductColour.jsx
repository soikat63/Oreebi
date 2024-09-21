import React, { useState } from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";

const ProductColour = () => {
  let [show, setShow] = useState(false);

  return (
    <div>
      <div onClick={() => setShow(!show)}>
        <h3 className="flex items-center justify-between mt-12 mb-8">
          <span className="font-DM font-bold text-xl text-[#262626]  ">
            Shop by Color
          </span>{" "}
          <TiArrowSortedUp className={`${show ? "rotate-0" : "rotate-180"}`} />
        </h3>
      </div>

      <ul className={`flex flex-col gap-y-5 ${show ? "block" : "hidden"}`}>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] pb-10 ">
          <FaCircle />{" "}
          <span className="font-DM text-base leading-7 text-[#765d5d]">
            Color 1
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] pb-10 ">
          <FaCircle className="text-[#FF8686]" />{" "}
          <span className="font-DM text-base leading-7 text-[#765d5d]">
            Color 2
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] pb-10 ">
          <FaCircle className="text-[#7ED321]" />{" "}
          <span className="font-DM text-base leading-7 text-[#765d5d]">
            Color 3
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] pb-10 ">
          <FaCircle className="text-[#B6B6B6]" />{" "}
          <span className="font-DM text-base leading-7 text-[#765d5d]">
            Color 4
          </span>
        </li>
        <li className="flex items-center gap-x-2  border-b border-[#F0F0F0] pb-10 ">
          <FaCircle className="text-[#15CBA5]" />{" "}
          <span className="font-DM text-base leading-7 text-[#765d5d]">
            Color 5
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ProductColour;
