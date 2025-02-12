import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Switch = ({isOn,toggle}) => {
  const [isSwitched, setIsSwitched] = useState(isOn);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        checked={isSwitched}
        onChange={() => { setIsSwitched(!isSwitched); toggle()}}
      />
      <div
        className={`w-14 h-8 bg-gray-400 rounded-full peer transition-all duration-300 ${
          isOn ? "bg-green-500" : "bg-red-600"
        }`}
      />
      <div
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 transform ${
          isSwitched ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isSwitched ? (
          <FaCheck className="w-4 h-4 text-green-700" />
        ) : (
          <IoClose className="w-4 h-4 text-red-700" />
        )}
      </div>
    </label>
  );
};

export default Switch;
