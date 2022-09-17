import React, { useState } from 'react';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';

export const App = () => {
  const [view, setView] = useState('list');
  return (
    <div>
      <Navbar setView={setView} />
      <Content view={view} />
    </div>
  );
};
