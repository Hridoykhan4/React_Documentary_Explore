import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },
]);

export default router;
