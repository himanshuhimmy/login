import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectRoot from "../ProjectRoot";
import Calculator from "../InputData/Calculator";
import Months from "../MonthsToMonths/Months";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProjectRoot />,
    children: [
      {
        index: true,
        element: <Calculator />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "months",
        element: <Months />,
      },
    ],
  },
]);

const RouterRoot = () => <RouterProvider router={router} />;

export default RouterRoot;
