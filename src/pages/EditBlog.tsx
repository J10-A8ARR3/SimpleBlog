import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { updateBlog, fetchBlogs } from '../redux/blogSlice'

const EditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { blogs, loading, error } = useAppSelector((state) => state.blogs)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (!blogs.length) {
      dispatch(fetchBlogs())
    }
  }, [dispatch, blogs.length])

  useEffect(() => {
    if (!id) return
    const blogToEdit = blogs.find((blog) => blog.id === id)
    if (blogToEdit) {
      setTitle(blogToEdit.title)
      setContent(blogToEdit.content)
    }
  }, [blogs, id])

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (id) {
      dispatch(updateBlog({ id, title, content }))
      navigate('/blogs')
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded h-40"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  )
}

export default EditBlog
