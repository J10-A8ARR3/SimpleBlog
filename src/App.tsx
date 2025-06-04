import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import AppRoutes from './Approutes';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router> 
      <div className="flex flex-col min-h-screen">  {/* full height, flex column */}
        
        <Navbar />
        
        <main className="flex-grow my-4">  {/* this will expand to fill space with vertical margin */}
          <AppRoutes />
        </main>
        
        <Footer />  {/* footer stays at bottom if content short */}
        
      </div>
    </Router>
  );
};

export default App;
