// src/pages/CreateBlog.tsx

import React, { useState } from 'react';
import { createBlog } from '../api/blogApi';
import { useNavigate } from 'react-router-dom';

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBlog(title, content);
      navigate('/blogs');
    } catch (error) {
      alert('Error creating blog');
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="w-full border p-2 h-40 rounded"
          required
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
