// src/AppRoutes.tsx or src/Routers.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import BlogList from './pages/BlogList';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/create" element={<CreateBlog />} />
      <Route path="/blogs/edit/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default AppRoutes;
