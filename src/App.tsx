import React from 'react';
import Index from './pages/Home/';
import MainLayout from './layouts/Main/';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
}

export default App;
