import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { updateBlog, fetchBlogs } from '../redux/blogSlice'
import useConfirm from '../components/UseConfirm'

const EditBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const confirm = useConfirm()

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
    if (id && confirm('Are you sure you want to update this blog?')) {
      dispatch(updateBlog({ id, title, content }))
      navigate('/blogs')
    }
  }

  const handleDelete = () => {
    if (id && confirm('Are you sure you want to delete this blog?')) {
      // dispatch delete action here, e.g. dispatch(deleteBlog(id))
      // navigate somewhere after delete if needed
      console.log('Delete confirmed for blog', id)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">Edit Blog</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm sm:text-base"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border px-3 py-2 rounded h-40 text-sm sm:text-base"
            required
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Update Blog
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="w-full sm:w-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition text-sm sm:text-base"
          >
            Delete Blog
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditBlog
