import React, { useEffect, useState, useRef } from "react";
import logo from "../../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const iconref = useRef();
  const navigate = useNavigate();
  const [timeoutid, setTimeOutId] = useState(0);
  const [timeoutid1, setTimeOutId1] = useState(0);

  useEffect(() => {
    const handleSize = () => {
      setTimeOutId(
        window.setTimeout(() => {
          // iconref.current.style.transformOrigin = "top left";
          //  iconref.current.style.animation = "glide .4s"
        }, 4000)
      );
      setTimeOutId1(
        window.setTimeout(() => {
          navigate("/signup");
        }, 4000)
      );
      // iconref.current.style.transformOrigin = "center";
      iconref.current.style.animation = "bounce .4s 8 alternate";
      //iconref.current.style.transform = "translateX(-50vh) translateY(-40vh)";
    };
    handleSize();
    return () => {
      window.clearTimeout(timeoutid);
      window.clearTimeout(timeoutid1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full h-full fixed inset-0 text-white bg-[#132D46]">
      <div
        ref={iconref}
        className="w-[190px] inset-0 m-auto justify-center h-20 absolute flex items-center space-x-3"
      >
        <img className="h-full w-full" src={logo} alt="" />
        <div className="text-2xl inline-block">
          <div className="whitespace-nowrap w-full animation overflow-hidden tracking-[6px]">
            SENTRI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
