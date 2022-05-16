import { Link, Outlet } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import { fetchPosts } from "../api";

interface PostsProps {}

function Posts(props: PostsProps) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((response) => {
      setPosts(response.data.slice(0, 10));
    });
  }, []);

  return (
    <div className="Posts">
      <p>Posts:</p>
      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link to={post.id}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default Posts;
