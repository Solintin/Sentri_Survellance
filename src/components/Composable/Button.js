import React from "react";

function Button({ isActive, text, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${
          isActive
            ? "bg-[#01C38D] text-white"
            : "bg-[#D0D0D0] border border-[#ABABAB] text-[#292D3259]"
        }  px-8 rounded-md w-full flex space-x-2 items-center p-2 bg-primary-100 text-white`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}

export default Button;
