// import React from "react";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProjectRoot from "./components/MiniProject-BudgetCal/ProjectRoot";
import Calculator from "./components/MiniProject-BudgetCal/InputData/Calculator";
import Months from "./components/MiniProject-BudgetCal/MonthsToMonths/Months";
import "./index.css";

let router = createBrowserRouter([
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

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
