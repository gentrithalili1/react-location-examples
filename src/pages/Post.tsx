import { useMatch } from "@tanstack/react-location";
import { useEffect, useState } from "react";
import { fetchPostById } from "../api";

interface PostProps {}

function Post(props: PostProps) {
  const [post, setPost] = useState<any>(null);
  const match = useMatch();
  const postId = match.params.postId;

  useEffect(() => {
    fetchPostById(Number(postId)).then((response) => {
      setPost(response.data);
    });
  }, [postId]);

  if (!post) {
    return null;
  }

  return (
    <div>
      <ul>
        <li>id: {post.id}</li>
        <li>title: {post.title}</li>
        <li>body: {post.body}</li>
      </ul>
    </div>
  );
}

export default Post;
