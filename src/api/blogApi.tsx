import { supabase } from '../lib/supabaseClient'

// Fetch blogs with pagination
export const fetchBlogs = async (page: number, pageSize: number) => {
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .range(from, to)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

// Create blog
export const createBlog = async (title: string, content: string) => {
  const { data, error } = await supabase
    .from('blogs')
    .insert([{ title, content }])
  if (error) throw error
  return data
}
