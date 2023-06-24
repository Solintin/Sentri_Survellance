import { useState } from "react";
import Container from "../container/container";
import arrowright from "../../assets/svg/arrowright.svg";
import empty from "../../assets/svg/empty.svg";
import refresh from "../../assets/svg/refresh.svg";
// import Card from "../Composable/card";
import FilterModal from "../Composable/FilterModal";

function Index() {
  const [isFilter, setIsFilter] = useState(false);
  function onClose() {
    setIsFilter(!isFilter);
  }
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 min-h-screen pt-[5rem] px-4 sm:px-0 sm:py-24">
        <button
          onClick={() => setIsFilter(!isFilter)}
          className="rounded-md flex space-x-8 items-center p-2 bg-secondary-100 text-white"
        >
          <span>Filters</span>
          <img src={arrowright} alt="" />
        </button>

        <div className="grid place-content-center pt-20 w-full px-4">
          <div className="md:w-[470px] min-w-[300px] h-[380px] bg-[#fff] py-10 rounded-md flex flex-col justify-center items-center">
            <img src={empty} alt="" />
            <h1 className="text-[#696E79] font-bold text-xl">No Events yet</h1>
            <div className="text-sm w-[200px] text-center mt-10">
              Connect your camera or video recorder to view more events.
            </div>
            <button className="mt-14 px-8 rounded-md flex space-x-2 items-center p-2 bg-primary-100 text-white">
              <img src={refresh} alt="" />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </div>
      {isFilter && <FilterModal header={"Filter"} onClose={onClose} />}
    </Container>
  );
}

export default Index;
