import React, { createContext, useEffect, useState } from 'react';
import request from '../services/api';
import { Page, Post, TPageContext } from '../types';

const PageContext = createContext<TPageContext>({
  pages: null,
  posts: null,
  selectedPage: null,
});

export const PageProvider: React.FC = ({ children }) => {
  const [pages, setPages] = useState<Page[] | null>([]);
  const [posts, setPosts] = useState<Post[] | null>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);

  const loadPages = async (): Promise<void> => {
    const response = await request('pages');
    setPages(response);
  };

  const loadPosts = async (): Promise<void> => {
    const response = await request('posts');
    setPosts(response);
  };

  useEffect(() => {
    loadPages();
    loadPosts();
  }, []);
  return (
    <PageContext.Provider value={{ pages, posts, selectedPage }}>{children}</PageContext.Provider>
  );
};

export default PageContext;
