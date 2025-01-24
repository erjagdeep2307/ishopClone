import Breadcrum from "../../Components/Admin/Breadcrum";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center border px-5 py-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
        <Breadcrum items={["Home", "View"]} />
        <Link to="/admin/categories" className="bg-sky-500 px-4 py-1 text-white rounded">Add</Link>
      </div>
    </div>
  );
}
