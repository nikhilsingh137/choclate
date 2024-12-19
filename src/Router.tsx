import { createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import FilterShop from "./component/FilterShop";
import ProductFilter from "./product/ProductFilter";
import Cart from "./cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomePage />
      </>
    ),
  },
  {
    path: "/:userId",
    element: (
      <>
        <FilterShop />
        <ProductFilter />
      </>
    ),
  },
  {
    path: "/:userId/:userId",
    element: (
      <>
        <FilterShop />
        <ProductFilter />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Cart />
      </>
    ),
  },
]);

export default router;
