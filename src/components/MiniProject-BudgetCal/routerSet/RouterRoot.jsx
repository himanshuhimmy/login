import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectRoot from "../ProjectRoot";
import Calculator from "../InputData/Calculator";
import Months from "../MonthsToMonths/Months";

const RouterRoot = () => {
  let router = (createBrowserRouter = [
    {
      path: `/`,
      element: <ProjectRoot />,
      Children: [
        {
          index: true,
          element: <Calculator />,
        },
        {
          path: `/calculator`,
          element: <Calculator />,
        },
        {
          path: `/months`,
          element: <Months />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterRoot;
