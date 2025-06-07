import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../lib/supabaseClient'

export interface Blog {
  id: string
  author_id: string
  title: string
  content: string
  created_at: string
}

interface BlogState {
  blogs: Blog[]
  loading: boolean
  error: string | null
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
}

// Async helper to get current logged-in user ID
async function getUserId() {
  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user) throw new Error('User not authenticated')
  return data.user.id
}

// Fetch blogs of logged-in user
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const userId = await getUserId()

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('author_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data as Blog[]
})

// Create a blog with current user as author
export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (payload: { title: string; content: string }) => {
    const userId = await getUserId()

    const { data, error } = await supabase
      .from('blogs')
      .insert({ ...payload, author_id: userId })
      .select()
      .single()

    if (error) throw new Error(error.message)
    return data as Blog
  }
)

// Update a blog by id
export const updateBlog = createAsyncThunk(
  'blogs/updateBlog',
  async (payload: { id: string; title: string; content: string }) => {
    const { data, error } = await supabase
      .from('blogs')
      .update({ title: payload.title, content: payload.content })
      .eq('id', payload.id)
      .select()
      .single()

    if (error) throw new Error(error.message)
    return data as Blog
  }
)

// Delete a blog by id
export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id: string) => {
  const { error } = await supabase.from('blogs').delete().eq('id', id)
  if (error) throw new Error(error.message)
  return id
})

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false
        state.blogs = action.payload
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch blogs'
      })
      // Create blog
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.unshift(action.payload)
      })
      // Update blog
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(b => b.id === action.payload.id)
        if (index !== -1) state.blogs[index] = action.payload
      })
      // Delete blog
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter(b => b.id !== action.payload)
      })
  },
})

export default blogSlice.reducer
