import { Page } from './page';
import { Post } from './post';

export type TPageContext = {
  pages: Page[] | null;
  posts: Post[] | null;
  selectedPage: Page | null;
};
