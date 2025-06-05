import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { supabase } from '../lib/supabaseClient'

interface AuthState {
  user: any | null
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
}

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    const { email, password } = payload
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) return rejectWithValue(error.message)
    return data.user
  }
)

// Async thunk for logout
export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, thunkAPI) => {
  const { error } = await supabase.auth.signOut()
  if (error) return thunkAPI.rejectWithValue(error.message)
  return true
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null
      })
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
