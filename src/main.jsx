import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./pages/login";
import "./styles.css";
import Phone from "./pages/phone";
import "./index.css";
import Email from "./pages/email"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/phone",
    element: <Phone />,
  },
  {
    path: "/email",
    element: <Email />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
