import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>Error Element</h1>,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

export default router;
