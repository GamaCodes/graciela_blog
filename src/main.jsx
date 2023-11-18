import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Home, { loader as homeLoader }  from "./routes/home";
import ErrorPage from "./routes/error";
import Post, { loader as postLoader }  from "./routes/post";
import Posts, { loader as postsLoader }  from "./routes/posts";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "posts/:postId",
        element: <Post />,
        loader: postLoader,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);