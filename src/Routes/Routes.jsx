import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Layouts from "../Layouts/Layouts";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donationJSON.json"),
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch('/donationJSON.json'),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default myRoutes;
