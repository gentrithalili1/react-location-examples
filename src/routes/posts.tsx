import Posts from "../pages/Posts";
import Post from "../pages/Post";
import { fetchPosts } from "../api";
import wait from "../utils/wait";

const postsRoutes = {
  path: "posts",
  element: <Posts />,
  loader: async () => {
    await wait(1500);
    return {
      posts: await fetchPosts(),
    };
  },
  children: [
    {
      path: ":postId",
      element: <Post />,
    },
  ],
};

export default postsRoutes;
