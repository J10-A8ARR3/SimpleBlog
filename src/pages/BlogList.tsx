import React from 'react'
import { useAppDispatch } from '../redux/hooks'  // use typed dispatch hook
import { logoutUser } from '../redux/authSlice'

const BlogList: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div>
      <h1>Blog List</h1>
      {/* Your blog listing and pagination here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default BlogList
