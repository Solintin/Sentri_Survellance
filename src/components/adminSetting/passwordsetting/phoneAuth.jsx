import React from "react";
import Container from "../../container/container";
import {BiArrowBack} from 'react-icons/bi'
import { useState } from "react";
import SettingNav from "../settingNav/settingNav";

import { useNavigate } from "react-router-dom";
import edit from "../../../assets/svg/edit.svg";
import uslogo from "../../../assets/svg/uslogo.svg";
const PhoneAuth = () => {
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  return (
    <Container>
      <div className="w-full h-full sm:px-4 space-y-5 bg-gray-100 py-[6rem] sm:py-[95px]">
        <div className="grid gap-3 grid-cols-1 min-[850px]:grid-cols-9 w-full">
          <SettingNav />

          <div className="bg-white text-[#132D46] rounded-lg h-full min-[850px]:col-span-7 py- sm:py-8">
            <div className="w-[600px] space-y-5 sm:space-y-10  h-full px-2 sm:px-4">
              <div
                onClick={() => {
                  navigate(-1);
                }}
                className="cursor-pointer space-x-2 flex items-center"
              >
                <BiArrowBack className="text-[#01C38D] text-[22px] sm:text-[24px]" />
                <span className="text-sm font-semibold sm:text-[15px]">
                  Back
                </span>
              </div>

              <div className="">
                <div className="text-sm sm:text-lg font-semibold text-[#132D46]">
                  What's your Mobile Number
                </div>
                <div className="text-gray-400 text-[11px] sm:text-[13px]">
                  Please enter your Mobile Number
                </div>
              </div>
              <div className="relative form-group space-y-3 mb-3 w-full">
                <label className="block font-semibold " htmlFor="tel">
                  Mobile Number
                </label>
                <div className="relative w-full">
                <div className="cursor-pointer w-[28px] h-[28px] absolute top-3 left-2">
                  <img src={uslogo} alt="" />
                </div>
                <input
                  className="block  form__input input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 pl-10 pr-8"
                  type="tel"
                  placeholder="(852) 567 332"
                  name="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <div className="cursor-pointer w-[26px] h-[26px] absolute top-4 right-2">
                  <img src={edit} alt="" />
                </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PhoneAuth;
