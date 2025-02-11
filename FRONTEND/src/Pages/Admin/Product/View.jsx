import Breadcrum from "../../../Components/Admin/Breadcrum";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MdDelete, MdCreate } from "react-icons/md";
import { Context } from "../../../Pages/MainContext";
import axios from "axios";
import Switch from "../../../Components/Admin/Switch";
export default function View() {
  const { showToast, fetchProduct, product, BASE_URL, PRODUCT_URL } =
    useContext(Context);
  useEffect(() => {
    fetchProduct();
  }, []);
  const handleDelete = (id) => {
    const API = BASE_URL + PRODUCT_URL + "/delete/" + id ;
    axios
      .delete(API)
      .then((response) => {
        showToast(response.data.message, response.data.flag);
        if (response.status === 200) {
          fetchProduct();
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  return (
    <div className="p-2">
      <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
        <Breadcrum items={["Product", "View"]} />
        <Link
          to="/admin/product/add"
          className="bg-sky-500 px-4 py-1 text-white rounded"
        >
          Add
        </Link>
      </div>
      <div className="relative mt-4 overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(product) &&
              (product?.length === 0 ? (
                <tr className="text-xl">
                  <td colSpan="5" className="px-6 !py-4 text-center">
                    No data found
                  </td>
                </tr>
              ) : (
                product?.map((item, key) => {
                  return (
                    <tr
                      key={key}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.slug}</td>
                      <td className="px-6 py-4">
                        <img
                          src={`${BASE_URL + "/images/" + item.image}`}
                          alt="No Image"
                          className="w-20"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <Switch switchValue={item.is_active?true:false}/>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-1 text-xl items-center">
                          <MdDelete
                            className="cursor-pointer"
                            color="#ff0000"
                            onClick={() => {
                              handleDelete(item._id);
                            }}
                          />
                          <Link to={`/admin/category/edit/${item._id}`}>
                            <MdCreate
                              className="cursor-pointer"
                              color="#008000"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
