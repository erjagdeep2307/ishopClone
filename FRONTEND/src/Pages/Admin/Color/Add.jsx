import Breadcrum from "../../../Components/Admin/Breadcrum";
import { Link } from "react-router-dom";
import axios from "axios";
import {Context} from "../../MainContext";
import { useContext } from "react";
export default function Add() {
  const {COLOR_URL,BASE_URL,showToast} = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    const colorName = (e.target.color_name.value).trim()??"";
    const colorCode = (e.target.color_code.value).trim()??"";
    if(colorCode&&colorName){
      axios.post(`${BASE_URL+COLOR_URL+"/create"}`,{color_name:colorName,color_code:colorCode})
      .then((response)=>{
          showToast(response.data.message,response.data.flag);
          e.target.color_name.value = "";
          e.target.color_code.value  = "#000000";
      })
      .catch((err)=>{
        console.error(err.message);
      })
    }
  };
  return (
    <div className="p-2">
      <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
        <Breadcrum items={["Color", "Add"]} />
        <Link
          to="/admin/color"
          className="bg-sky-500 px-4 py-1 text-white rounded"
        >
          Back To View
        </Link>
      </div>
      <div className="p-4 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="color-name"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the color name"
                name="color_name"
                required

              />
            </div>
            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Code
              </label>
              <input
                type="color"
                id="color_code"
                defaultValue="#000000"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="etc. #000000"
                name="color_code"
                required
              />
            </div>
          </div>

          <button className="py-2 px-4 shadow-sm rounded bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
