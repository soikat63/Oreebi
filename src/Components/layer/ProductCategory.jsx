import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  let [show, setShow] = useState(false);
  let [show01, setShow01] = useState(false);

  return (
    <div>
      <h3 className="font-DM font-bold text-xl text-[#262626] mb-8">
        Shop by Category
      </h3>
      <ul className="flex flex-col gap-y-5">
        <li
          className=" border-b border-[#F0F0F0] pb-10 "
          onClick={() => setShow(!show)}
        >
          <Link className=" flex justify-between relative ">
            <span className="font-DM text-base leading-7 text-[#767676]">
              Category 1
            </span>{" "}
            <FaPlus
              className={`absolute top-1/2 translate-y-[-50%] right-0 transition-all duration-400 ${
                show ? "opacity-0 invisible" : "opacity-100 visible rotate-90"
              }`}
            />{" "}
            <FaMinus
              className={`absolute top-1/2 translate-y-[-50%] right-0 ${
                show ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
          </Link>

          <ul className={` py-4 ${show ? "block" : "hidden"}`}>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li className="border-b border-[#F0F0F0] pb-10">
          <Link className=" flex justify-between relative  ">
            <span className="font-DM text-base leading-7 text-[#767676]">
              Category 2
            </span>
          </Link>
        </li>

        <li
          className=" border-b border-[#F0F0F0] pb-10 "
          onClick={() => setShow01(!show01)}
        >
          <Link className=" flex justify-between relative ">
            <span className="font-DM text-base leading-7 text-[#767676]">
              Category 3
            </span>{" "}
            <FaPlus
              className={`absolute top-1/2 translate-y-[-50%] right-0 transition-all duration-400 ${
                show01 ? "opacity-0 invisible" : "opacity-100 visible rotate-90"
              }`}
            />{" "}
            <FaMinus
              className={`absolute top-1/2 translate-y-[-50%] right-0 ${
                show01 ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            />
          </Link>

          <ul className={`py-4 ${show01 ? "block" : "hidden"}`}>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
            <li>
              <Link className="font-DM text-base leading-7 text-[#765d5d] pl-4">
                Sub Category{" "}
              </Link>
            </li>
          </ul>
        </li>

        <li className="border-b border-[#F0F0F0] pb-10">
          <Link className=" flex justify-between relative  ">
            <span className="font-DM text-base leading-7 text-[#767676]">
              Category 4
            </span>
          </Link>
        </li>

        <li className="border-b border-[#F0F0F0] pb-10">
          <Link className=" flex justify-between relative  ">
            <span className="font-DM text-base leading-7 text-[#767676]">
              Category 5
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductCategory;
