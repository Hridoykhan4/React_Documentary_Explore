import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import BookMarkProvider from "./provider/BookMarkProvider";
import UserProvider from "./provider/UserProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookMarkProvider>
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </BookMarkProvider>
  </StrictMode>
);
