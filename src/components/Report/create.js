import Input from "../Composable/input";
import React from "react";
import Container from "../container/container";

function Index() {
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 px-4 sm:px-4 py-[5rem] sm:py-24">
        <div className="bg-white rounded-lg p-4">
          <h1 className="text-[#132D46] font-bold mb-4">Create Report</h1>
          <p className="text-[#132D46]  mb-4">Motion/Person Detected</p>

          <div className="md:w-3/4 w-full">
            <Input
              type={"text"}
              label={"Clients Name"}
              placeholder={"E.g John brown"}
            />
            <Input
              type={"text"}
              label={"Camera"}
              placeholder={"E.g John brown"}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type={"date"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
              <Input
                type={"time"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
            </div>
            <p className="text-[#132D46]  mb-4 mt-10">Motion/Person Detected</p>

            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"date"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
              <Input
                type={"time"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
            </div>
            <p className="text-[#132D46]  mb-4">Officer Responded to Alarm</p>

            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"date"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
              <Input
                type={"time"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
            </div>
            <Input
              type={"text"}
              label={"Camera Link"}
              placeholder={"5DV345fKEMD8"}
            />

            <p className="text-[#132D46]  mb-4 mt-10">Notification</p>
            <Input
              type={"text"}
              label={"Who was notified, if any?"}
              placeholder={"Enter name"}
            />
            <div className="grid md:grid-cols-2 gap-4 ">
              <Input
                type={"date"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
              <Input
                type={"time"}
                label={"Camera"}
                placeholder={"E.g John brown"}
              />
            </div>

            <label htmlFor="input" className="font-bold text-gray-700">
              Narrative of Incident
            </label>

            <textarea
              name=""
              id=""
              rows="5"
              placeholder="Enter narrative"
              className="resize-none outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
            ></textarea>
          </div>

          <p className="text-[#132D46]  mb-4 mt-10">
            Officer Supplemental Report
          </p>
          <button className="px-12 rounded-md flex space-x-2 items-center p-2 bg-primary-100 text-white">
            <span>add/edit to this report</span>
          </button>

          <div className="mt-14 md:w-3/4 w-full">
            <button className="w-full py-2 sm:py-3 bg-[#132D46] text-white rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Index;