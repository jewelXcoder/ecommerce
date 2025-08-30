import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from '../../Pages/Home'
import Product from "../../Pages/Product";


const router = createBrowserRouter([
 {
    path: "/",
    Component: Main,
    children: [
      { index: true, Component: Home },
      { path: 'product', Component: Product },
    ],
  },
]);

export default router