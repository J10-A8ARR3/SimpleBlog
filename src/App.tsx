// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import AppRoutes from './Approutes';

const App: React.FC = () => {
  return (
    <Router> 
      <Navbar />
      <AppRoutes />
    </Router>
  );
};

export default App;
