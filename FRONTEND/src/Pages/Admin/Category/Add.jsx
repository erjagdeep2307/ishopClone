import Breadcrum from "../../../Components/Admin/Breadcrum";
import { Link } from "react-router-dom";
import { useRef,useContext } from "react";
import { handleRef } from "../../../Utility";
import { Context } from "../../../Pages/MainContext";
import axios from "axios";
export default function Add() {
  const {showToast,fetchCategory,BASE_URL,CATEGORY_URL} = useContext(Context);
  const slugRefs = useRef("");
  const nameRefs = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData();
    newForm.append("name", nameRefs.current.value,);
    newForm.append("slug", slugRefs.current.value);
    newForm.append("image", e.target.category_image.files[0]);
    e.target.reset();
    axios.post(`${BASE_URL+CATEGORY_URL+"/create"}`, newForm)
    .then((response) => {
      showToast(response.data.message,response.data.flag);
      fetchCategory();
    })
    .catch((err)=>{
      showToast(err.message,false);
      console.error(err.message);
    })
  };
  return (
    <div className="p-2">
      <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
        <Breadcrum items={["Category", "Add"]} />
        <Link
          to="/admin/category"
          className="bg-sky-500 px-4 py-1 text-white rounded"
        >
          Back To View
        </Link>
      </div>
      <div className="p-4 mt-3">
        <form onSubmit={handleSubmit} className="">
          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Name
              </label>
              <input
              ref={nameRefs}
                type="text"
                id="category-name"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the category name"
                required
                onChange={ () => handleRef(nameRefs.current,slugRefs.current)  }
                />
            </div>
            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Slug
              </label>
              <input
               ref={slugRefs}
                type="text"
                id="category_slug"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="etc. accesseries,laptop,phone"
                readOnly
              />
            </div>
          </div>
          <div className="relative mb-6">
            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
              Image
            </label>
            <input
              type="file"
              id="category_image"
              className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
              placeholder=""
            />
          </div>

          <button className="py-2 px-4 shadow-sm rounded bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
