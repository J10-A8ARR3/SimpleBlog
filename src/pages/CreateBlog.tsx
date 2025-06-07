import React, { useState } from 'react';
import { createBlog } from '../api/blogApi';
import { useNavigate } from 'react-router-dom';
import useConfirm from '../components/UseConfirm'; 

const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const confirm = useConfirm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const confirmed = confirm('Are you sure you want to create this blog?');
    if (!confirmed) return;

    try {
      await createBlog(title, content);
      navigate('/blogs');
    } catch (error) {
      alert('Error creating blog');
      console.error(error);
    }
  };

  const handleBack = () => {
    navigate(-1); // Goes back one step in history
    // or use: navigate('/blogs'); to go to blogs list explicitly
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
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Back
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
