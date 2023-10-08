import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Layout/Root";
import About from "../Pages/About";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Gallery from "../Pages/Gallery";
import EventDetails from "../components/Events/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Events from "../components/Events/Events";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json")
        },

        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/events",
          element: <Events />,
          
        },
        {
          path: "/events_details/:id",
          element: <PrivateRoute><EventDetails /></PrivateRoute>,
          loader: () => fetch("/data.json")
        },

    ]
    },
  ]);

  export default router;