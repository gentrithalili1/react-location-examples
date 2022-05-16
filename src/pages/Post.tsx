import { useMatch } from "@tanstack/react-location";
import { LocationGenerics } from "../types";

interface PostProps {}

function Post(props: PostProps) {
  const {
    data: { post },
  } = useMatch<LocationGenerics>();

  if (!post) {
    return null;
  }

  return (
    <div className="Post">
      <ul>
        <li>id: {post.id}</li>
        <li>title: {post.title}</li>
        <li>body: {post.body}</li>
      </ul>
    </div>
  );
}

export default Post;
