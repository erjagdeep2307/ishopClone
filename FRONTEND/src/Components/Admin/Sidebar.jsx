import { FaShoppingBag, FaAlignLeft, FaChartBar } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      group: "overview",
      children: [
        {
          menu: "dashboard",
          icon: <BiSolidDashboard />,
          url: "/admin/admin",
        },
        {
          menu: "analysis",
          icon: <FaChartBar />,
          url: "/admin/analysis",
        },
      ],
    },
    {
      group: "ecommerce",
      children: [
        {
          menu: "categories",
          icon: <FaAlignLeft />,
          url: "/admin/category",
        },
        {
          menu: "products",
          icon: <FaShoppingBag />,
          url: "/admin/product",
        },
        {
          menu: "Accesseries",
          icon: <FaShoppingBag />,
          url: "/admin/accesseries",
        },
        {
          menu: "Colors",
          icon: <FaShoppingBag />,
          url: "/admin/color",
        },
      ],
    },
    {
      group: "order management",
      children: [
        {
          menu: "orders",
          icon: <FaShoppingBag />,
          url: "/admin/order",
        },
        {
          menu: "transactions",
          icon: <FaShoppingBag />,
          url: "/admin/transaction",
        },
      ],
    },
    {
      group: "order management",
      children: [
        {
          menu: "orders",
          icon: <FaShoppingBag />,
          url: "/admin/order",
        },
        {
          menu: "transactions",
          icon: <FaShoppingBag />,
          url: "/admin/transaction",
        },
      ],
    },
  ];
  return (
    <div className="min-h-[100vh] bg-gray-200 text-gray-700 w-1/4 group">
      <div className="flex justify-center items-center p-2">
        <h1 className="text-2xl font-semibold">Ishop Admin</h1>
      </div>
      <hr className="border-t border-gray-400 my-2 mx-4" />
      <div className="flex flex-col gap-2">
        <ul>
          {menus.map((menu, key) => {
            return (
              <li key={key}>
                {menu.group != null && (
                  <div className="ps-2 uppercase font-semibold text-[13px] mt-5 mb-4">
                    {menu.group}
                  </div>
                )}
                <ul>
                  {menu.children.map((child, id) => {
                    return (
                      <li
                        key={id}
                        className="py-2 px-4 hover:bg-gray-300 cursor-pointer capitalize flex items-center gap-2"
                      >
                        <Link
                          to={child.url}
                          className="flex items-center gap-2"
                        >
                          <span>{child.icon}</span>
                          <span>{child.menu}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
