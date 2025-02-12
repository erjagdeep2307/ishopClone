import Breadcrum from "../../../Components/Admin/Breadcrum";
import { Link } from "react-router-dom";
import { useRef, useContext, useEffect, useMemo, useState } from "react";
import { Context } from "../../../Pages/MainContext";
import { handleRef } from "../../../Utility";
import Select from "react-select";
import axios from "axios";
import JoditEditor from "jodit-react";
export default function Add() {
  const placeholder = "Enter the Product Description";
  const [imagePreview, setImagePreview] = useState(null);
  const [categoryOption, setCategoryOption] = useState([]);
  const [colorOption, setColorOption] = useState([]);
  const [content, setContent] = useState("");
  const {
    showToast,
    category,
    color,
    fetchColor,
    fetchCategory,
    BASE_URL,
    PRODUCT_URL,
  } = useContext(Context);
  const nameRefs = useRef("");
  const slugRefs = useRef("");
  const actPriceRefs = useRef(0);
  const discountRefs = useRef(0);
  const finalPriceRefs = useRef(0);

  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder,
    }),
    [placeholder]
  );
  useEffect(() => {
    fetchCategory();
    fetchColor();
  }, []);

  const handleImageChange = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    } else {
      setImagePreview(null);
    }
  };
  const finalPriceCal = () => {
    if (
      actPriceRefs.current.value !== undefined &&
      actPriceRefs.current.value !== ""
    ) {
      const actualPrice = parseFloat(actPriceRefs.current.value);
      const discount = discountRefs.current.value
        ? parseFloat(discountRefs.current.value)
        : 0;
      const finalPrice = actualPrice - actualPrice * (discount / 100);
      finalPriceRefs.current.value = finalPrice.toFixed(2);
    } else {
      finalPriceRefs.current.value = 0;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const API_URL = BASE_URL + PRODUCT_URL + "/create";
    let cates = categoryOption?.map((item) => item.value)?.join(",");
    let colors = colorOption?.map((item) => item.value)?.join(",");
    const newFormData = new FormData();
    newFormData.append("product_name", nameRefs.current.value);
    newFormData.append("slug", slugRefs.current.value);
    newFormData.append("act_price", actPriceRefs.current.value);
    newFormData.append("discount", discountRefs.current.value);
    newFormData.append("original_price", finalPriceRefs.current.value);
    newFormData.append("image", e.target.product_image.files[0]);
    newFormData.append("category", cates);
    newFormData.append("color", colors);
    newFormData.append("description", content);

    e.target.reset();
    setCategoryOption([]);
    setColorOption([]);
    setContent("");
    setImagePreview(null);
    axios
      .post(API_URL, newFormData)
      .then((response) => {
        showToast(response.data.message, response.data.flag);
      })
      .catch((err) => {
        showToast("Request Failed",false);
      });
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
        <form className="" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="flex gap-x-6 mb-4">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Name
              </label>
              <input
                ref={nameRefs}
                type="text"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the Product Name"
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
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="etc. accesseries,laptop,phone"
                readOnly
              />
            </div>
          </div>
          {/* End Row 1 */}
          {/* Row 2 */}
          <div className="flex gap-x-6 mb-4">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Actual Price
              </label>
              <input
                ref={actPriceRefs}
                type="number"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the Price"
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
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                readOnly
              />
            </div>
          </div>
          <div className="flex gap-x-2 mb-4">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Category
              </label>
              <Select
                className="w-full"
                isMulti={true}
                defaultValue={categoryOption}
                options={category?.map((item) => {
                  return {
                    label:
                      item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    value: item.name,
                  };
                })}
                onChange={setCategoryOption}
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Color
              </label>
              <Select
                className="w-full"
                isMulti={true}
                defaultValue={colorOption}
                options={color?.map((item) => {
                  return {
                    label:
                      item.name.charAt(0).toUpperCase() + item.name.slice(1),
                    value: item.code,
                  };
                })}
                onChange={setColorOption}
              />
            </div>
          </div>

          {/* End Row 2 */}
          {/* Row 3 */}
          <div className="w-full relative mb-4">
            <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
              Description
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {
                setContent(newContent);
              }}
            />
          </div>
          {/* End Row 3 */}
          <div className="flex gap-3 mb-4">
            <div className="w-full relative mb-4">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Image
              </label>
              <input
                type="file"
                name="product_image"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none"
                required
                onChange={handleImageChange}
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Preview
              </label>
              {imagePreview && (
                <div className="w-1/2">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
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
