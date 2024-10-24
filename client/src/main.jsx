import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CategoryPage from "./pages/Category/CategoryPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import SingleProduct from "./pages/Product/SingleProduct.jsx";
import Recipes from "./pages/Product/Recipes.jsx";
import Signup from "./pages/Signup.jsx";

/////////////////////////////////////////////// test ///////////////// 
import Search from "./TestComponent/Search.jsx";
import Login from "./pages/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement:<ErrorPage />,
    children: [{ path: "/", element: <Home /> }],

  },
  {
    path: "/categories/:category",
    element: <CategoryPage/>,
   
  },
  {
    path:"/search",
    element:<SearchPage/>
  },{
    path:"/items/:id",
    element:<SingleProduct/>,
    loader:({params})=>fetch(`http://localhost:5000/api/items/${params.id}`)
  },{
    path:"/recipes",
    element:<Recipes/>
  },{
    path:"/signup",
    element:<Signup/>
  },{
    path:"/login",
    element:<Login/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <Search/>
);
