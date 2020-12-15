import { Post } from './post';

export interface Page {
  title: string;
  icon: string;
  url: string;
  content: Post[];
}
