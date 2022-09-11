import React from 'react';
import Menu from './content/components/types/menu/Menu';
import Content from './content/Content';
import { PageLayout } from './App.styled';
import './App.css';

const App = () => {
    return (
      <PageLayout>
          <Menu />
          <Content />
      </PageLayout>
  );
}


export default App;

