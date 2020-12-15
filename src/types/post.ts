export interface Post {
  type: string;
  title: string;
  properties: {
    categories: string[];
  };
}
