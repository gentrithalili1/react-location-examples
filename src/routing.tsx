import { ReactLocation } from "@tanstack/react-location";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

// Setup React Location
export const location = new ReactLocation();

// Declare routes
export const routes = [
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  {
    path: "posts",
    element: <Posts />,
    children: [
      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
];

// @tanstack/react-location-elements-to-routes
