import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <h1 className="text-3xl font-light pt-4 text-center">React Blog Supabase</h1>
      <RouterProvider router={router} />
    </>
  </StrictMode>,
);
