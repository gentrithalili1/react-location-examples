import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const fetchPosts = () =>
  instance.get("posts").then((response) => response.data);

export const fetchPostById = (postId: number) =>
  instance.get(`posts/${postId}`).then((response) => response.data);
