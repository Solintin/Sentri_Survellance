import React from "react";
import Container from "../../container/container";
import clients from "../../../assets/svg/clients.svg";
import edit from "../../../assets/svg/edit.svg";
import { MdNavigateNext } from "react-icons/md";
import satelite from "../../../assets/png/satelite.png"

const ClientProfile = () => {
  return (
    <Container>
      <div className="w-full h-full pb-[100px] space-y-3 pt-[83px]">
        <div className="text-[#132D46] text-lg font-semibold">Jane's Doe</div>
        <div className="w-full h-full bg-white rounded-md py-4">
          <div className="grid grid-cols-10 w-full ">
            <div className="col-span-4 w-full flex space-y-4 flex-col">
              <div className="flex flex-col w-full">
                <div className="flex space-x-2 items-center">
                  <div className="w-[48px] rounded-full h-[48px] ">
                    <img
                      src={clients}
                      alt=""
                      className="w-full rounded-full h-full "
                    />
                  </div>
                  <div className="font-semibold ">Jane Doe</div>
                </div>
                <button className="w-fit flex item-center bg-[#01C38D] justify-center space-x-2 text-sm">
                <div className="w-[18px] h-[18px] ">
               <img className="w-full h-full" src={edit} alt="" />

           </div>
               <span className="text-white">Edit Profile</span>
                </button>

                <div className="w-full flex flex-col">
                    <div className="w-full justify-between text-sm text-[#132D46] items-center flex">
                        <span className="font-semibold">Style</span>
                        <button className="flex items-center  space-x-2 justify-center w-fit p-1 border rounded-md">
                            <span>Satelite</span>
                            <MdNavigateNext className="rotate-90 text-[#01C38D] text-[20px]"/>
                        </button>
                    </div>
                </div>
                <div className="w-full rounded-md h-[300px]">
                    <img src={satelite} alt="" className="w-full h-full rounded-md object-fill" />
                </div>
              </div>

              {/** user detail */}
              <div className="flex flex-col space-y-2">

              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientProfile;
