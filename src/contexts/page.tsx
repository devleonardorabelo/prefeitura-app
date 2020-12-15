import React, { createContext, useEffect, useState } from 'react';
import request from '../services/api';
import { Page, Post, TPageContext } from '../types';

const PageContext = createContext<TPageContext>({
  pages: null,
  posts: null,
  selectedPage: null,
  selectPage: () => {},
});

export const PageProvider: React.FC = ({ children }) => {
  const [pages, setPages] = useState<Page[] | null>([]);
  const [posts, setPosts] = useState<Post[] | null>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);

  const loadPages = async (): Promise<void> => {
    const response = await request('pages');
    setSelectedPage(response[1]);
    setPages(response);
  };

  const loadPosts = async (): Promise<void> => {
    const response = await request('posts');
    setPosts(response);
  };

  const selectPage = (page: Page): void => setSelectedPage(page);

  useEffect(() => {
    loadPages();
    loadPosts();
  }, []);

  return (
    <PageContext.Provider value={{ pages, posts, selectedPage, selectPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
