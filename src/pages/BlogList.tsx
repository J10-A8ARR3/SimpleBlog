import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchBlogs, deleteBlog } from '../redux/blogSlice'
import { useNavigate } from 'react-router-dom'

const BlogList: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { blogs, loading, error } = useAppSelector((state) => state.blogs)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <button
          onClick={() => navigate('/blogs/create')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Create Blog
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
            <button
              onClick={() => handleDelete(blog.id)}
              className="text-red-500 mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
