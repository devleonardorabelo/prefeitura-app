import { Content } from './content';
import { Post } from './post';

export type TMenuIcon = {
  icon: string;
  title: string;
};
export type TPostBlock = {
  data: Content;
  posts: Post[] | null;
};
