import { Link, Outlet, useMatch } from "@tanstack/react-location";
import { LocationGenerics } from "../types";

interface PostsProps {}

function Posts(props: PostsProps) {
  const {
    data: { posts },
  } = useMatch<LocationGenerics>();

  return (
    <div className="Posts">
      <p>Posts:</p>
      <ul>
        {posts?.slice(0, 10)?.map((post) => {
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
