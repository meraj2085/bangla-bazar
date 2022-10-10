import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Layout from "../Layout/Layout";
import ErrorPage from '../components/ErrorPage/ErrorPage'
import CartDetails from '../components/CartDetails/CartDetails'
import { productsAndCartData } from "../utilities/getCartAndProductData";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: productsAndCartData,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: '/cartDetails',
        element: <CartDetails></CartDetails>
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);
