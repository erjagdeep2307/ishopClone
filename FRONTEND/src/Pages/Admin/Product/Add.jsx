import Breadcrum from "../../../Components/Admin/Breadcrum";
import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../../Pages/MainContext";
import { handleRef } from "../../../Utility";
import axios from "axios";

export default function Add() {
  const { showToast, fetchCategory, BASE_URL, CATEGORY_URL } = useContext(Context);
  const nameRefs = useRef("");
  const slugRefs = useRef("");
  const actPriceRefs = useRef(0);
  const discountRefs = useRef(0);
  const finalPriceRefs = useRef(0);

  const finalPriceCal = () => {
    if (actPriceRefs.current.value !== undefined && actPriceRefs.current.value !== "") {
      const actualPrice = parseFloat(actPriceRefs.current.value);
      const discount = discountRefs.current.value ? parseFloat(discountRefs.current.value) : 0;
      const finalPrice = actualPrice - (actualPrice * (discount / 100));
      finalPriceRefs.current.value = finalPrice.toFixed(2);
    }
    else{
      finalPriceRefs.current.value=0;
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
        <Breadcrum items={["Product", "Add"]} />
        <Link
          to="/admin/product/view"
          className="bg-sky-500 px-4 py-1 text-white rounded"
        >
          Back To View
        </Link>
      </div>
      <div className="p-4 mt-3">
        <form className="">
          {/* Row 1 */}
          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Name
              </label>
              <input
                ref={nameRefs}
                type="text"
                id="category-name"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the category name"
                required
                onChange={() => handleRef(nameRefs.current, slugRefs.current)}
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
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
          {/* End Row 1 */}
          {/* Row 2 */}
          <div className="flex gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Actual Price
              </label>
              <input
                ref={actPriceRefs}
                type="number"
                id="actual-price"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the category name"
                onChange={finalPriceCal}
                required
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Discount(%)
              </label>
              <input
                ref={discountRefs}
                type="number"
                id="category_slug"
                onChange={finalPriceCal}
                defaultValue={0}
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Original Price
              </label>
              <input
                ref={finalPriceRefs}
                type="number"
                id="original_price"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                readOnly
              />
            </div>
          </div>
          {/* End Row 2 */}
          <div className="relative mb-6">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
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
