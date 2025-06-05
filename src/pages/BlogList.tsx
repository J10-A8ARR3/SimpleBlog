import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchBlogs, deleteBlog } from '../redux/blogSlice'

const BlogList: React.FC = () => {
  const dispatch = useAppDispatch()
  const { blogs, loading, error } = useAppSelector((state) => state.blogs)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  const handleDelete = (id: string) => {
    dispatch(deleteBlog(id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => handleDelete(blog.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList
