import React from 'react';
import { PageProvider } from './contexts/page';
import Home from './pages';

const App: React.FC = () => {
  return (
    <PageProvider>
      <Home />
    </PageProvider>
  );
};

export default App;
