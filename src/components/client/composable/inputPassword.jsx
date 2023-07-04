import React from "react";
import view from "../../../assets/svg/view.svg"

const InputPassword = ({header, type, value, setValue, placeholder}) => {
    return (
        <div className="relative form-group space-y-3 mb-3 w-full">
        <label className="block font-semibold " htmlFor={type}>
          {header}
        </label>
        <input
          className="block form__input input-field border border-gray-200 bg-gray-100 rounded-md focus:outline-none w-full h-11 px-4"
          type={type}
          placeholder={placeholder}
          name={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        
        />
         <div className="cursor-pointer w-[20px] h-[20px] absolute top-8 right-2">
        
        <img src={view} alt="" />
      </div>
      </div>

    )
}

export default InputPassword;