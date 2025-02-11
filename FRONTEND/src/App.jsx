import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebSiteLayout from "./Components/WebSite/WebSiteLayout";
import Store from "./Pages/Website/Store";
import Dashboard from "./Pages/Website/Dashboard";
import Cart from "./Pages/Website/Cart";
import Home from "./Pages/Admin/Home";
import AdminLayout from "./Components/Admin/AdminLayout";
// Category
import CategoryView from "./Pages/Admin/Category/View";
import CategoryEdit from "./Pages/Admin/Category/Edit";
import CategoryAdd from "./Pages/Admin/Category/Add";
// Product
import ProductView from "./Pages/Admin/Product/View";
import ProductAdd from "./Pages/Admin/Product/Add";
// Color
import ColorView from "./Pages/Admin/Color/View";
import ColorAdd from "./Pages/Admin/Color/Add";
import ColorEdit from "./Pages/Admin/Color/Edit";

import NotFound from "./Pages/Admin/Error/NotFound";
export default function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <WebSiteLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/store", element: <Store />},
        { path: "/cart", element: <Cart />},
        // { path: "/*", element: <NotFound errCode={404} /> },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "category/", element: <CategoryView />},
        { path: "category/add", element: <CategoryAdd />},
        { path: "category/edit/:id", element: <CategoryEdit/>},
        { path: "product/", element: <ProductView />},
        { path: "product/add", element: <ProductAdd />},
        { path: "color/", element: <ColorView />},
        { path: "color/add", element: <ColorAdd />},
        { path: "color/edit/:id", element: <ColorEdit />},
        { path: "*", element: <NotFound errCode={404} />},      
      ],
    }
  ]);
  return <RouterProvider router={routes} />; 
}
