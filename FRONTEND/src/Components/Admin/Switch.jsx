import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const Switch = ({switchValue}) => {
  const [isOn, setIsOn] = useState(switchValue);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
      />
      <div
        className={`w-14 h-8 bg-gray-400 rounded-full peer transition-all duration-300 ${
          isOn ? "bg-green-500" : "bg-gray-400"
        }`}
      />
      <div
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isOn ? (
          <FaCheck className="w-4 h-4 text-green-700" />
        ) : (
          <IoClose className="w-4 h-4 text-gray-700" />
        )}
      </div>
    </label>
  );
};

export default Switch;
