import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebSiteLayout from "./Components/WebSite/WebSiteLayout";
import Store from "./Pages/Website/Store";
import Dashboard from "./Pages/Website/Dashboard";
import Cart from "./Pages/Website/Cart";
import Home from "./Pages/Admin/Home";
import AdminLayout from "./Components/Admin/AdminLayout";
import CategoryView from "./Pages/Admin/Category/View";
import ProductView from "./Pages/Admin/Product/View";
import Add from "./Pages/Admin/Category/Add";
import ProductAdd from "./Pages/Admin/Product/Add";
import Edit from "./Pages/Admin/Category/Edit";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <WebSiteLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/store", element: <Store />},
        { path: "/cart", element: <Cart />},
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "category/view", element: <CategoryView />},
        { path: "category/add", element: <Add />},
        { path: "category/edit/:id", element: <Edit />},
        { path: "product/view", element: <ProductView />},
        { path: "product/add", element: <ProductAdd />},
        // { path: "category/edit/:id", element: <Edit />},
      ],
    }
  ]);
  return <RouterProvider router={routes} />;
}
