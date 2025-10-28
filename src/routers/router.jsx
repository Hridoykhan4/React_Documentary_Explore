import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Params from "../components/ParamsBonus/Params";
import Posts from "../components/ParamsBonus/Posts";
import PostDetails from "../components/ParamsBonus/PostDetails";
import Common from "../components/ParamsBonus/Common";

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
        path: '/common/:page/:showBtn?',
        element: <Common></Common>
      },
      {
        path: "learnParams",
        element: <Params></Params>,
        children: [
          {
            index: true,
            element: <Posts></Posts>,
            loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
          },
          {
            path: ":postId",
            element: <PostDetails></PostDetails>,
            loader: ({ params }) =>
              fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          },
        ],
      },
    ],
  },
]);

export default router;
