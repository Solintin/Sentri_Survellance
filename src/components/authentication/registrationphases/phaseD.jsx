import React, { useState } from "react";

import Loader from "../../UI/Loader";
const PhaseD = ({ active }) => {
  const [others, setOthers] = useState();
  const [loading] = useState(false);
  const [selectCategory, setSelectCategory] = useState();

  const categories = ["For Business", "For Home", "For School"];
  const handleContinue = () => {};
  return (
    <div
      className={
        active === 3
          ? "w-full relative let swipeIn h-[500px] px-6 sm:px-8 py-6 flex  flex-col justify-center items-center  sm:rounded-lg bg-white border shadow-xl"
          : "hidden"
      }
    >
      <div className="absolute top-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <div className="w-full flex items-start mb-6 justify-start">
          <div className="text-2xl font-medium text-black ">
            Get started with{" "}
            <span className="uppercase text-[#01C38D]">sentri</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[9rem] px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <div className="flex flex-col justify-between h-[250px]">
          <div className="flex flex-col space-y-5 text-black font-semibold justify-start items-start">
            {categories.map((type, index) => {
              return (
                <label
                  onClick={() => {
                    setSelectCategory(index);
                  }}
                  key={index}
                  class="container"
                >
                  {type}
                  <input type="checkbox" checked={index === selectCategory} />
                  <span className="checkmark"></span>
                </label>
              );
            })}
          </div>

          <div className="form-group space-y-3 mb-3 w-full">
            <label className="block font-medium " htmlFor="name">
              Others
            </label>
            <input
              className="block form__input input-field border  border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
              type="name"
              placeholder="E.g Farm"
              name="name"
              value={others}
              onChange={(e) => {
                setOthers(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <button
          onClick={handleContinue}
          className="w-full py-3 bg-[#132D46] mt-8 rounded-lg text-white flex justify-center items-center space-x-2"
        >
          {loading ? <Loader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default PhaseD;
