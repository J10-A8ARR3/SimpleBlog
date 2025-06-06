import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchBlogs, deleteBlog } from '../redux/blogSlice'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'

const BlogList: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { blogs, loading, error } = useAppSelector((state) => state.blogs)

  const blogsPerPage = 5
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id))
  }

  const handleEdit = (id: string) => {
    navigate(`/blogs/edit/${id}`)
  }

  const totalPages = Math.ceil(blogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
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
        {currentBlogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="flex space-x-4 mt-2">
              <button
                onClick={() => handleEdit(blog.id)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}

export default BlogList
