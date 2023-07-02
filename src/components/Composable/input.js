import React from "react";

function input({ label, placeholder, type }) {
  return (
    <div className="w-full mb-4">
      <label htmlFor="input" className="font-bold text-gray-700">
        {label}
      </label>
      <div className="w-full mt-1">
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none border-[#D0D0D0] w-full p-4 rounded-md border bg-[#F6F5F5]"
        />
      </div>
    </div>
  );
}

export default input;
