// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import BlogList from '../pages/BlogList';
import CreateBlog from '../pages/CreateBlog';
import EditBlog from '../pages/EditBlog';

interface AppRoutesProps {
  onLogin: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ onLogin }) => {
  return (
    <Routes>
      {/* Login routes with onLogin prop */}
      <Route path="/" element={<Login onLogin={onLogin} />} />
      <Route path="/login" element={<Login onLogin={onLogin} />} />

      {/* Register does not need onLogin */}
      <Route path="/register" element={<Register />} />

      {/* Blog-related routes without onLogin */}
      <Route path="/blogs" element={<BlogList onLogin={function (): void {
        throw new Error('Function not implemented.');
      } } />} />
      <Route path="/blogs/create" element={<CreateBlog />} />
      <Route path="/blogs/edit/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default AppRoutes;
