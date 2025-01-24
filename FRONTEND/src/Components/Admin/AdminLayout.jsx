import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function AdminLayout() {
  return (
   <div className="flex">
       <Sidebar/>
       <div className="flex flex-col w-full">
       <Header/>
       <Outlet/>
       </div>
   </div>
  )
}
