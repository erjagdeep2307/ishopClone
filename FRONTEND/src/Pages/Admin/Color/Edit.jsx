import Breadcrum from "../../../Components/Admin/Breadcrum"
import {Link,useParams} from "react-router-dom" 
import { useEffect,useContext } from "react";
import {Context} from "../../MainContext";
import axios from "axios";
export default function Edit() {
    const {showToast,BASE_URL,COLOR_URL,color,fetchColor} = useContext(Context); 
    const params =  useParams();
    const id = params.id;
    useEffect(()=>{
        fetchColor(id);
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        const data =   {
          color_name:e.target.color_name.value,
          color_code:e.target.color_code.value
      }
        axios.put(`${BASE_URL+COLOR_URL+"/"+id}`,data)
        .then((response)=>{
            showToast(response.data.message,response.data.flag);
        }).catch((err)=>{
            console.error(err.message);
        })
    }
  return (
    <div className="p-2">
    <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
      <Breadcrum items={["Color", "Edit"]} />
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
              defaultValue={color?.name}
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
              defaultValue={color?.code}
              className="block w-full h-11 px-2 py-1.5"
              placeholder="etc. #000000"
              name="color_code"
              required
            />
          </div>
        </div>
        <button className="py-2 px-4 shadow-sm rounded bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7">
          Update
        </button>
      </form>
    </div>
  </div>
  )
}
