import { useEffect,useContext,useRef } from "react";
import Breadcrum from "../../../Components/Admin/Breadcrum";
import { Link,useParams } from "react-router-dom";
import { Context } from "../../../Pages/MainContext";
import { handleRef } from "../../../Utility";
import axios from "axios";
export default function Edit() {
    const {fetchCategory,category,BASE_URL,showToast} = useContext(Context);
    const slugRefs = useRef("");
    const nameRefs = useRef("");
    const params= useParams();
    const id = params.id;
    useEffect(()=>{
        fetchCategory(id);
    },[id]) 
    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.category_name.value == category.name || e.target.category_image.files.length == 0){
            showToast("No changes found",false);
            return;
        }
        const newForm = new FormData();
        newForm.append("name",nameRefs.current.value);
        newForm.append("slug",slugRefs.current.value);
        newForm.append("image", e.target.category_image.files[0] ?? null );
        console.log(newForm);
        axios.put(`${BASE_URL}/category/update/${id}`, newForm)
            .then((response) => {
                showToast(response.data.message,response.data.flag);
                fetchCategory();
                e.target.reset();
            })
            .catch((err)=>{
                showToast(err.message,false);
                console.error(err.message);
            })
        };
  return (
    <div className="p-2">
      <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
        <Breadcrum items={["Category", "Edit"]} />
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
                defaultValue={category.name}
                id="category-name"
                name="category_name"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded placeholder-gray-400 focus:outline-none "
                placeholder="Enter the category name"
                required
                onChange={() => handleRef(nameRefs.current, slugRefs.current)}
              />
            </div>
            <div className="w-full relative">
              <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                Slug
              </label>
              <input
                ref={slugRefs}
                type="text"
                defaultValue={category.slug}
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
          <div className="relative mb-6">
           <img className="border rounded border-gray-200" src={`${BASE_URL}/images/${category.image}`} alt="" />
          </div>
          <button className="py-2 px-4 shadow-sm rounded bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
