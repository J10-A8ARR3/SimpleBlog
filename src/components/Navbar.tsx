// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 p-4 text-white">
    <Link to="/blogs" className="mr-4">Blogs</Link>
    <Link to="/login" className="mr-4">Login</Link>
    <Link to="/register">Register</Link>
  </nav>
);

export default Navbar;
