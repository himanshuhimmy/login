import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// uncomment for bujet project

// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import ProjectRoot from "./components/MiniProject-BudgetCal/ProjectRoot";
// import Calculator from "./components/MiniProject-BudgetCal/InputData/Calculator";
// import Months from "./components/MiniProject-BudgetCal/MonthsToMonths/Months";
// import "./index.css";

// let router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProjectRoot />,
//     children: [
//       {
//         index: true,
//         element: <Calculator />,
//       },
//       {
//         path: "calculator",
//         element: <Calculator />,
//       },
//       {
//         path: "months",
//         element: <Months />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
