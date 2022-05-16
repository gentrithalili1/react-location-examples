import Posts from "../pages/Posts";
import Post from "../pages/Post";
import { fetchPosts } from "../api";
import wait from "../utils/wait";
import { ReactLocationSimpleCache } from "@tanstack/react-location-simple-cache";

export const routeCache = new ReactLocationSimpleCache();

const postsRoutes = {
  path: "posts",
  element: <Posts />,
  loader: routeCache?.createLoader(async () => {
    await wait(1500);
    return {
      posts: await fetchPosts(),
    };
  }),
  children: [
    {
      path: ":postId",
      element: <Post />,
    },
  ],
};

export default postsRoutes;
