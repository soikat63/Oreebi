import React from "react";
import Container from "./layer/Container";
import Breadcrumb from "./layer/Breadcrumb";
import Tittle from "./layer/Tittle";
import ButtonS from "./layer/ButtonS";
import Input from "./layer/Input";
import PI01 from "../assets/PI01.png"

const ProductInside = () => {
  return (
    <div className="py-8">
      <Container>
        <Breadcrumb />
        <div className="p-5 bg-slate-100 mt-2 flex gap-x-10">
          <div className="max-w-[560px] h-[600px]  border  ">
            <img
              className="w-full h-full object-cover "
              src={PI01}
              alt=""
            />
          </div>
          <div className="details">
            <Tittle text="Product Tittle" />
            <Tittle className="text-[29px]" text="price....................." />
            <p className="text-[19px] my-8">
              product configaration...................
            </p>
            <p>Review .....................</p>
            <p className="my-6">stutas .....................</p>
            <div className=" flex items-center gap-x-12">
              <ButtonS className="w-[250px] cursor-pointer">
                Add To Wish List
              </ButtonS>
              <ButtonS className="w-[250px] cursor-pointer">
                Add To Cart
              </ButtonS>
            </div>
            <p className="my-10">Categorise: /./../.././../././.</p>
          </div>
        </div>
        <div>
          <div className="lg:mt-[124px] mt-5">
            <Tittle text="Add a Review" />
          </div>
          <div className=" flex  flex-col  gap-y-4 lg:mt-[42px] mt-[18px]">
            <Input
              htmlFor=""
              text="Name"
              type="text"
              placeholder="Your name here"
            />
            <Input
              htmlFor=""
              text="Email"
              type="mail"
              placeholder="Your email here"
            />
            <Input
              className="lg:h-[137px] h-[100px]"
              htmlFor=""
              text="Review"
              type="text"
              placeholder="Your review here"
            />
          </div>
          <ButtonS className="lg:mt-[40px] mt-5 lg:mb-[142px] mb-[30px]">
            Post
          </ButtonS>
        </div>
      </Container>
    </div>
  );
};

export default ProductInside;
