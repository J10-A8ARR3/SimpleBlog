import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lnvhajfavwrkznfbwdwu.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxudmhhamZhdndya3puZmJ3ZHd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MjEyNzcsImV4cCI6MjA2NDQ5NzI3N30.UjF2iL7F9KMfu5hqrukWbbaWSczhPOxb63D2SmZY6lQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
