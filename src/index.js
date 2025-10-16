import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//! uncomment for bujet project
// import ProjectRoot from "./components/MiniProject-BudgetCal/ProjectRoot";
// import Calculator from "./components/MiniProject-BudgetCal/InputData/Calculator";
// import Months from "./components/MiniProject-BudgetCal/MonthsToMonths/Months";

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

// ! mini project
import LoginPgae from "./components/Blog Mini_project/LoginPgae";
import SideSeachedBlogs from "./components/Blog Mini_project/Components/Pages/SideSeachedBlogs";
import ActiveBlog from "./components/Blog Mini_project/Components/Pages/ActiveBlog";
import DisplayAllBlogs from "./components/Blog Mini_project/Components/Pages/DisplayAllBlogs";
import AddBlog from "./components/Blog Mini_project/Components/Pages/AddBlog";

let router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPgae />,
    children: [
      {
        index: true,
        element: <DisplayAllBlogs />,
      },
      {
        path: "searchedBlogs",
        element: <SideSeachedBlogs />,
      },
      {
        path: "activeBlog/:id",
        element: <ActiveBlog />,
      },
      {
        path: "addBlog",
        element: <AddBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
