import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from '../../Pages/Home'
import Product from "../../Pages/Product";
import ProductDetails from "../../Pages/ProductDetails";

const router = createBrowserRouter([
 {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: '/product', Component: Product },
      { path: '/product/:id', Component: ProductDetails },
    ],
  },
]);

export default router