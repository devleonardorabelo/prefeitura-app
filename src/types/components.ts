import { Content } from './content';
import { Page } from './page';
import { Post } from './post';

export type TMenuIcon = {
  icon: string;
  title: string;
  onPress: () => void;
};
export type TPostBlock = {
  data: Content;
  posts: Post[] | null;
};
