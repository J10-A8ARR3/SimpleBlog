import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../lib/supabaseClient'
import type { RootState } from './store' // adjust if your RootState is elsewhere

export interface Blog {
  id: string
  title: string
  content: string
  created_at: string
  user_id: string
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

// 🔄 Fetch Blogs (only for current user)
export const fetchBlogs = createAsyncThunk(
  'blogs/fetchBlogs',
  async (_, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    const userId = state.auth.user?.id

    if (!userId) return rejectWithValue('User not logged in')

    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) return rejectWithValue(error.message)
    return data as Blog[]
  }
)

// ➕ Create Blog
export const createBlog = createAsyncThunk(
  'blogs/createBlog',
  async (payload: { title: string; content: string }, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    const userId = state.auth.user?.id

    if (!userId) return rejectWithValue('User not logged in')

    const { data, error } = await supabase
      .from('blogs')
      .insert({ ...payload, user_id: userId })
      .select()
      .single()

    if (error) return rejectWithValue(error.message)
    return data as Blog
  }
)

// ✏️ Update Blog
export const updateBlog = createAsyncThunk(
  'blogs/updateBlog',
  async (payload: { id: string; title: string; content: string }, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from('blogs')
      .update({ title: payload.title, content: payload.content })
      .eq('id', payload.id)
      .select()
      .single()

    if (error) return rejectWithValue(error.message)
    return data as Blog
  }
)

// ❌ Delete Blog
export const deleteBlog = createAsyncThunk(
  'blogs/deleteBlog',
  async (id: string, { rejectWithValue }) => {
    const { error } = await supabase.from('blogs').delete().eq('id', id)
    if (error) return rejectWithValue(error.message)
    return id
  }
)

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.error = action.payload as string
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.unshift(action.payload)
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex((b) => b.id === action.payload.id)
        if (index !== -1) state.blogs[index] = action.payload
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((b) => b.id !== action.payload)
      })
  },
})

export default blogSlice.reducer
