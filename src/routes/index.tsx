import { ReactLocation } from "@tanstack/react-location";
import Home from "../pages/Home";
import About from "../pages/About";
import postsRoutes from "./posts";

// Setup React Location
export const location = new ReactLocation();

// Declare routes
export const routes = [
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { ...postsRoutes },
];
