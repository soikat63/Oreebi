import React, { useState } from "react";
import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import ProductCategory from "../ProductCategory";
import ProductColour from "../ProductColour";
import Productbrand from "../Productbrand";
import ProductPrice from "../ProductPrice";
import Pagination from "../../Pagination";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Tittle from "../Tittle";

const Product = () => {
  let [number, setNumber] = useState(12);
  let selectNumber = (element) => {
    let numberconverter = Number(element.target.value);
    setNumber(numberconverter);
  };

  return (
    <div className="pt-32 ">
      <Container>
        <div className="heading ">
          <Tittle className="lg:text-[49px]" text="Products" />
          <Breadcrumb />
        </div>

        <div className="main pt-32 flex  justify-between">
          <div className="sideber w-[370px]">
            <ProductCategory />
            <ProductColour />
            <Productbrand />
            <ProductPrice />
          </div>

          <div className="products w-[1190px]">
            {/* product-page-top */}
            <div className="w-full flex items-start justify-between mb-[60px]">
              <div className="icon flex  gap-x-5">
                <div className="w-9 h-9 flex items-center justify-center border border-[#F0F0F0] text-[#737373] hover:bg-[#262626] hover:text-white cursor-pointer transition-all duration-400">
                  <IoGrid />
                </div>
                <div className="w-9 h-9 flex items-center justify-center border border-[#F0F0F0] text-[#737373] hover:bg-[#262626] hover:text-white cursor-pointer transition-all duration-400">
                  <FaThList />
                </div>
              </div>

              <div className="right flex gap-x-10">
                <label
                  htmlFor=""
                  className="font-DM text-base text-[#767676] leading-7"
                >
                  Sort by:
                </label>

                <select
                  name=""
                  id=""
                  className="w-[239px] py-1 pl-4 ml-3 bg-transparent font-DM text-base text-[#767676] leading-7 border border-[#F0F0F0] outline-0"
                >
                  <option value="">Featured</option>
                  <option value="">Featured1</option>
                  <option value="">Featured2</option>
                  <option value="">Featured3</option>
                </select>

                <label
                  htmlFor=""
                  className="font-DM text-base text-[#767676] leading-7"
                >
                  Show:
                </label>

                <select
                  onChange={selectNumber}
                  name=""
                  id=""
                  className="w-[139px] py-1 pl-4 ml-3 bg-transparent font-DM text-base text-[#767676] leading-7 border border-[#F0F0F0] outline-0"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="36">36</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
            {/* product-page-top */}
            <Pagination itemsPerPage={number} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
