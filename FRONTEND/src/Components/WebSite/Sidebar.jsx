import { useState } from "react";
import { FaCircle } from "react-icons/fa";
export default function Sidebar() {
  const [priceRange,setPriceRange] = useState(0);
  const handlePriceRange = (event)=>{
    setPriceRange(event.target.value);
  }
  const sideMenus = [
    { menu: "Apple Watch", quantity: "2" },
    { menu: "Charging Accessieies", quantity: "28" },
    { menu: "Mackbook", quantity: "40" },
    { menu: "Cases & Covers", quantity: "20" },
    { menu: "Charging Accessieies", quantity: "28" },
    { menu: "Mackbook", quantity: "40" },
    { menu: "Cases & Covers", quantity: "20" },
  ];
  const brands = [
    { menu: "Apple", quantity: "2" },
    { menu: "Samsung", quantity: "28" },
    { menu: "LG", quantity: "40" },
    { menu: "Lenovo", quantity: "20" },
    { menu: "Nokia", quantity: "28" },
    { menu: "Vivo", quantity: "40" },
    { menu: "Dell", quantity: "20" },
  ];
  const colorCodes = ["#FF8383", "#A19AD3", "#A1D6CB", "#FFF574"];
  return (
    <div className="flex flex-col gap-7">
      <div className="bg-gray-200 rounded p-4">
        <h1 className="text-start uppercase font-semibold mb-3">Accesseires</h1>
        <div className="flex flex-col justify-start items-start gap-3">
          {sideMenus.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between w-full hover:text-sky-600 cursor-pointer"
              >
                <div>{item.menu}</div>
                <div>{item.quantity}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-200 rounded p-4">
        <h1 className="text-start uppercase font-semibold mb-3">Prices</h1>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="text-sm">Ranger:</span>
            <span className="text-sm">${priceRange} - $25000</span>
          </div>
          <input
            type="range"
            min={0}
            max="25000"
            value={priceRange}
            className="range w-full"
            step="25"
            onChange={handlePriceRange}
          />
        </div>
      </div>
      <div className="bg-gray-200 rounded p-4">
        <h1 className="text-start uppercase font-semibold mb-3">Colors</h1>
        <div className="flex justify-between px-2">
          {colorCodes.map((color, index) => {
            return (
              <FaCircle
                key={index}
                style={{ color }}
                className="cursor-pointer text-3xl p-1 hover:border border-white rounded-full"
              />
            );
          })}
        </div>
      </div>
      <div className="bg-gray-200 rounded p-4">
        <h1 className="text-start uppercase font-semibold mb-3">Brands</h1>
        <div className="flex flex-col justify-start items-start gap-3">
          {brands.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between w-full hover:text-sky-600 cursor-pointer"
              >
                <div>{item.menu}</div>
                <div>{item.quantity}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-200 rounded p-4 flex justify-center items-center">
        <h1 className="cursor-pointer uppercase font-semibold mb-3">More</h1>
      </div>
    </div>
  );
}
