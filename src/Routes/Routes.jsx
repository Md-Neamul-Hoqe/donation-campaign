import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
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
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch(`/donation.json`),
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
