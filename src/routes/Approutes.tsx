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

      {/* BlogList requires onLogin prop, so we pass it here */}
      <Route path="/blogs" element={<BlogList onLogin={onLogin} />} />

      {/* If CreateBlog and EditBlog need onLogin, pass it as well */}
      <Route path="/blogs/create" element={<CreateBlog onLogin={onLogin} />} />
      <Route path="/blogs/edit/:id" element={<EditBlog onLogin={onLogin} />} />
    </Routes>
  );
};

export default AppRoutes;
