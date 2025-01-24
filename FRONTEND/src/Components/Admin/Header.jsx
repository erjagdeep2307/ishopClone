import { MdLogout } from "react-icons/md";

export default function Header() {

  return (
    <div className="flex justify-end items-center p-3 bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center space-x-2 group relative">
        <div className="flex items-center">
          <MdLogout className="text-xl transition-transform duration-300 group-hover:-translate-x-[0%] translate-x-[100%] z-[2] cursor-pointer"/>
          <span className="ml-2 opacity-[0] translate-x-[-100%] duration-300 group-hover:opacity-[1] group-hover:translate-x-[0%] cursor-pointer z-[1]">
            Logout
          </span>
        </div>
      </div>
    </div>
  )
}