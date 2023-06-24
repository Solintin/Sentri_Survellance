import React from "react";
import Container from "../container/container";
import officer from "../../assets/svg/officer.svg";
import clients from "../../assets/svg/clients.svg";
// import Card from "../Composable/card";

function Index() {
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 py-14 sm:py-24">
        <h2 className="text-lg font-bold">Overview</h2>
        <div className="grid grid-cols-12 gap-6 items-start mt-3">
          <div className="col-span-9 ">
            <div className=" grid grid-cols-4 mb-6 gap-6 bg-white p-4 rounded-md">
              <div className={`bg-[#01C38D14] py-6 text-center rounded-md`}>
                <h2 className={`text-2xl font-bold  text-[#01C38D]`}>1387</h2>
                <p className={`text-[#01C38D]`}>ONLINE</p>
              </div>
              <div className={`bg-[#E1363617] py-6 text-center rounded-md`}>
                <h2 className={`text-2xl font-bold  text-[#E31D1C]`}>2</h2>
                <p className={`text-[#E31D1C]`}>NEEDS ASSIST</p>
              </div>
              <div className={`bg-[#FFA84217] py-6 text-center rounded-md`}>
                <h2 className={`text-2xl font-bold  text-[#FFA842]`}>2</h2>
                <p className={`text-[#FFA842]`}>IN PROGRESS</p>
              </div>
              <div className={`bg-[#132D4617] py-6 text-center rounded-md`}>
                <h2 className={`text-2xl font-bold  text-[#132D46]`}>401</h2>
                <p className={`text-[#132D46]`}>RESOLVED</p>
              </div>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg text-[#132D46]  font-bold">Alerts</h2>
              <h2 className="text-ms text-[#01C38D]  font-bold">View all</h2>
            </div>
            <div className="mt-1 grid grid-cols-5 bg-white p-3 rounded-t-md">
              <div className="flex space-x-2 items-center">
                <input type="checkbox" name="" id="" />
                <h2 className="text-base text-[#132D46] font-bold">Clients</h2>
              </div>
              <div>
                <h2 className="text-base text-[#132D46] font-bold">Address</h2>
              </div>
              <div>
                <h2 className="text-base text-[#132D46] font-bold">View</h2>
              </div>
              <div>
                <h2 className="text-base text-[#132D46] font-bold">
                  Officer Assigned
                </h2>
              </div>
              <div>
                <h2 className="text-base text-[#132D46] font-bold">
                  Information
                </h2>
              </div>
            </div>

            {[1, 2].map((item, i) => (
              <div
                key={i}
                className="mt-2 grid grid-cols-5 gap-4 bg-red-500 text-white p-3 "
              >
                <div className="flex space-x-2 items-center">
                  <input type="checkbox" name="" id="" />

                  <h2 className="text-base  font-bold">Kelvin Hunter</h2>
                </div>
                <div className="truncate">
                  <h2 className="text-base text-ellipsis overflow-hidden w-full whitespace-nowrap  font-bold">
                    12 Maldives Riverside...
                  </h2>
                </div>
                <div>
                  <h2 className="text-base  font-bold">Entrance</h2>
                </div>
                <div>
                  <h2 className="text-base  font-bold">Officer Banks</h2>
                </div>
                <div>
                  <h2 className="text-base  font-bold">Assistant</h2>
                </div>
              </div>
            ))}
            {[1, 2, 3, 4, 56].map((item, i) => (
              <div
                key={i}
                className="mt-2 grid grid-cols-5 gap-4 bg-white p-3 "
              >
                <div className="flex space-x-2 items-center">
                  <input type="checkbox" name="" id="" />

                  <h2 className="text-base  font-bold">Kelvin Hunter</h2>
                </div>
                <div className="truncate">
                  <h2 className="text-base text-ellipsis overflow-hidden w-full whitespace-nowrap  font-bold">
                    12 Maldives Riverside...
                  </h2>
                </div>
                <div>
                  <h2 className="text-base  font-bold">Entrance</h2>
                </div>
                <div>
                  <h2 className="text-base  font-bold">Officer Banks</h2>
                </div>
                <div>
                  <h2 className="text-base  font-bold">Assistant</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-3">
            <div className="bg-[#fff] rounded-md p-4">
              <h2 className="text-lg text-[#132D46] font-bold">
                Officer on duty
              </h2>
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

            <div className="bg-[#fff] rounded-md p-4 mt-6">
              <h2 className="text-lg text-[#132D46] font-bold">
                Clients online
              </h2>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={clients} alt="" />
                <p className="text-xs font-bold">Kelly Sikkkema</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={clients} alt="" />
                <p className="text-xs font-bold">Paul Tamara</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={clients} alt="" />
                <p className="text-xs font-bold">Jane Doe</p>
              </div>
              <div className="flex items-center  space-x-3 mt-3">
                <img src={clients} alt="" />
                <p className="text-xs font-bold">Kelly Sikkkema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;
