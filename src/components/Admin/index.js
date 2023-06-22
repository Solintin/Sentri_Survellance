import React from "react";
import Container from "../container/container";
import officer from "../../assets/svg/officer.svg";
// import Card from "../Composable/card";

function Index() {
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 py-14 sm:py-24">
        <h2 className="text-lg font-bold">Overview</h2>
        <div className="grid grid-cols-12 gap-6 items-start mt-3">
          <div className="col-span-9 grid grid-cols-4 gap-6 bg-white p-4 rounded-md">
            <div className={`bg-[#01C38D14] py-6 text-center rounded-md`}>
              <h2 className={`text-2xl font-black  text-[#01C38D]`}>1387</h2>
              <p className={`text-[#01C38D]`}>ONLINE</p>
            </div>
            <div className={`bg-[#E1363617] py-6 text-center rounded-md`}>
              <h2 className={`text-2xl font-black  text-[#E31D1C]`}>2</h2>
              <p className={`text-[#E31D1C]`}>NEEDS ASSIST</p>
            </div>
            <div className={`bg-[#FFA84217] py-6 text-center rounded-md`}>
              <h2 className={`text-2xl font-black  text-[#FFA842]`}>2</h2>
              <p className={`text-[#FFA842]`}>IN PROGRESS</p>
            </div>
            <div className={`bg-[#132D4617] py-6 text-center rounded-md`}>
              <h2 className={`text-2xl font-black  text-[#132D46]`}>401</h2>
              <p className={`text-[#132D46]`}>RESOLVED</p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-[#fff] p-4">
              <h2 className="text-lg font-bold">Officer on duty</h2>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
            </div>

            <div className="bg-[#fff] p-4 mt-6">
              <h2 className="text-lg font-bold">Clients online</h2>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={officer} alt="" />
                <p className="text-xs font-bold">officer Jim foxx</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;
