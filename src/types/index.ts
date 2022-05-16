import { MakeGenerics } from "@tanstack/react-location";

export interface PostType {
  id: number;
  title: string;
  body: string;
}

export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    posts: PostType[];
    post: PostType;
  };
}>;
