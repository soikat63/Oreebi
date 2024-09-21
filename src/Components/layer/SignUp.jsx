import React, { useState } from "react";
import Container from "../layer/Container";
import Tittle from "../layer/Tittle";
import Breadcrumb from "../layer/Breadcrumb";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import yes from "../../assets/cheakbox01.png";
import no from "../../assets/cheakbox02.png";
import Input from "./Input";
import ButtonS from "./ButtonS";

const SignUp = () => {
  let [eye, setEye] = useState(false);
  let [reye, rsetEye] = useState(false);
  // let [cheakbox, setCheakbox]= useState()

  let [name, setName] = useState("");
  let [nameerr, setNameerr] = useState("");

  let changeName = (e) => {
    console.log(e.target.value);
  };
  let submit = () => {
    if (!name) {
      setNameerr("Name is required");
    }
  };

  return (
    <div className="px-5 lg:px-0 lg:mt-[124px] mt-6">
      <Container>
        <Tittle className="lg:text-[49px]" text="SignUp" />
        <Breadcrumb />
        <div className="lg:mt-32 mt-6 lg:mb-16 mb-5 border-b border-[#F0F0F0] lg:pb-16 pb-6">
          <p className="font-DM lg:text-base text-sm text-[#767676] lg:leading-7 leading-5 max-w-[664px] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className=" lg:pb-[69px]  lg:border-b">
          <Tittle className="lg:mb-11 mb-4" text="Your Personal Details" />
          <div className="main flex flex-wrap lg:gap-10 gap-5">
            <Input
              value={name}
              onChange={changeName}
              htmlFor=""
              text="First Name"
              type="text"
              placeholder="First Name"
            ></Input>
            {nameerr}
            <Input
              htmlFor=""
              text="Last Name"
              type="text"
              placeholder="Last Name"
            ></Input>
            <Input
              htmlFor=""
              text="Email address"
              type="email"
              placeholder="company@domain.com"
            ></Input>
            <Input
              htmlFor=""
              text="Telephone"
              type="number"
              placeholder="Your phone number"
            ></Input>
          </div>
        </div>

        <div className=" lg:mt-[58px] mt-[26px] lg:pb-[69px]  lg:border-b">
          <Tittle className="lg:mb-11 mb-6" text="New Customer" />
          <div className="main flex flex-wrap lg:gap-10 gap-5 ">
            <Input
              htmlFor=""
              text="Address 1"
              type="text"
              placeholder="4279 Zboncak Port Suite 6212"
            ></Input>
            <Input
              htmlFor=""
              text="Address 2"
              type="text"
              placeholder="-"
            ></Input>
            <Input
              htmlFor=""
              text="City"
              type="text"
              placeholder="Your city"
            ></Input>
            <Input
              htmlFor=""
              text="Post Code"
              type="text"
              placeholder="05228"
            ></Input>
            <Input
              htmlFor=""
              text="Division"
              type="text"
              placeholder="Please select"
            ></Input>
            <Input
              htmlFor=""
              text="District"
              type="text"
              placeholder="Please select"
            ></Input>
          </div>
        </div>

        <div className=" lg:mt-[58px] mt-[26px] lg:pb-[69px] lg:border-b">
          <Tittle className="lg:mb-11 mb-5" text="Your Password" />
          <div className="main flex flex-wrap lg:gap-10 gap-5 ">
            <Input
              htmlFor=""
              text="Password"
              type={eye ? "text" : "password"}
              placeholder="Password"
            >
              {/* {eye? 
                        (<IoIosEye onClick={()=>setEye(!eye)} className='absolute right-0 top-1/2' />):(<IoIosEyeOff onClick={()=>setEye(!eye)} className='absolute right-0 top-1/2'/>)}  */}
            </Input>
            <Input
              htmlFor=""
              text="Repeat Password"
              type={eye ? "text" : "password"}
              placeholder="Repeat Password"
            >
              {/* {eye? 
                        (<IoIosEye onClick={()=>setEye(!eye)} className='absolute right-0 top-1/2' />):(<IoIosEyeOff onClick={()=>setEye(!eye)} className='absolute right-0 top-1/2'/>)}  */}
            </Input>
          </div>
        </div>

        <div className="flex items-center gap-x-3 lg:mt-[65px] mt-[30px] lg:mb-6 mb-3">
          <input type="checkbox" />
          <p className="font-DM text-sm text-[#767676]">
            I have read and agree to the Privacy Policy
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-DM text-sm text-[#767676]">Subscribe Newsletter</p>

          <label
            htmlFor="yes"
            className="flex items-center font-DM text-sm text-[#767676] "
          >
            {/* <img src={yes} alt="" />  */}
            {/* <img className='hidden' src={no} alt="" /> */}
            <input
              className="font-DM text-sm text-[#767676]"
              id="yes"
              type="radio"
              name="id"
            />
            Yes
          </label>

          <label
            htmlFor="no"
            className="flex items-center font-DM text-sm text-[#767676] "
          >
            {/* <img className="hidden" src={no} alt="" /> */}
            <input id="no" type="radio" name="id" />
            No
          </label>
        </div>

        <ButtonS onclick={submit} className="lg:mt-7 mt-4 lg:mb-96 mb-16">
          Sign Up
        </ButtonS>
      </Container>
    </div>
  );
};

export default SignUp;
