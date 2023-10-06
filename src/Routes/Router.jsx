import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Layout/Root";
import About from "../Pages/About";
import Services from "../Pages/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
        path: "/",
        element: <Home />,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/services",
          element: <Services />,
        },

    ]
    },
  ]);

  export default router;