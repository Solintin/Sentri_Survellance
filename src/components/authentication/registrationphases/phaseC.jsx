import React,{ useState} from "react";
import fb from "../../../assets/svg/fb.svg"
import apple from "../../../assets/svg/apple.svg"
import google from "../../../assets/svg/google.svg"
import Loader from "../../UI/Loader";
import { ReactCountries } from "../../../Utils/countrydropdown/countries";
const PhaseC = ({active}) => {
    const [country, setCountry] = useState('United State of America')
    const [loading] = useState(false)
    //const [countries, setCountries] = useState()


    console.log(country)


    const handleContinue = () => {}
    return (
        <div className={active === 2 ? "w-full relative let swipeIn px-6 sm:px-8 py-6 flex h-[500px] flex-col justify-center items-center  sm:rounded-lg bg-white border shadow-xl": "hidden"}>
        
        <div className="absolute top-8 px-6 sm:px-8 inset-x-0 mx-auto w-full">
       <div className="w-full flex items-start mb-6 justify-start">
        <div className="text-2xl font-medium text-black">Get started with <span className="uppercase text-[#01C38D]">sentri</span></div>
          </div>

        <div className="mb-6 w-full flex items-center  space-x-6 justify-center">
          <div className="w-[30px] h-[30px] cursor-pointer">
            <img src={fb} alt="" className="w-full h-full" />
          </div>
          <div className="w-[30px] h-[30px] cursor-pointer">
            <img src={google} alt="" className="w-full h-full" />
          </div>
          <div className="w-[30px] h-[30px] cursor-pointer">
            <img src={apple} alt="" className="w-full h-full" />
          </div>
        </div>
       </div>
       <div className="absolute top-[8rem] px-6 sm:px-8 inset-x-0 mx-auto w-full">
        <div className="form-group space-y-3 mb-3 w-full">
          <label className="block font-medium " htmlFor="country">
            Country
          </label>
          
         <ReactCountries setCountry={setCountry} />
       
          
        
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
    )
}

export default PhaseC