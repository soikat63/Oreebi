import React from "react";
import Container from "./layer/Container";
import Tittle from "./layer/Tittle";
import Breadcrumb from "./layer/Breadcrumb";
import ButtonS from "./layer/ButtonS";
import Input from "./layer/Input";

const Login = () => {
  return (
    <div className="px-5 lg:px-0 lg:mt-[124px] mt-6">
      <Container>
        <Tittle className="lg:text-[49px]" text="Login" />
        <Breadcrumb />
        <div className="lg:mt-32 mt-6 lg:mb-16 mb-5 border-b border-[#F0F0F0] lg:pb-16 pb-6">
          <p className="font-DM lg:text-base text-sm text-[#767676] lg:leading-7 leading-5 max-w-[664px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className=" lg:pb-[69px]  lg:border-b ">
          <Tittle className="lg:mb-11 mb-4" text="Returning Customer" />
          <div className="main flex flex-wrap lg:gap-10 gap-5">
            <Input
              htmlFor=""
              text="Email"
              type="email"
              placeholder="company@domain.com"
            ></Input>
            <Input
              htmlFor=""
              text="Password"
              type="Password"
              placeholder="Password"
            ></Input>
          </div>

          <ButtonS className="lg:mt-7 mt-4 lg:mb-96 mb-8 ">Log in</ButtonS>
        </div>

        <div className=" lg:mb-[140px] mb-16">
          <Tittle className="lg:mb-9 mb-3" text="New Customer" />
          <p className="font-DM lg:text-base text-sm text-[#767676] lg:leading-7 leading-5 max-w-[664px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <ButtonS className="lg:mt-[51px] mt-6">Continue</ButtonS>
        </div>
      </Container>
    </div>
  );
};

export default Login;
