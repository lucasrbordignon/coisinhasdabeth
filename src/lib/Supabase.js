import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://quakdajqnqdvzescshsg.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1YWtkYWpxbnFkdnplc2NzaHNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjYzMDIwNywiZXhwIjoyMDA4MjA2MjA3fQ.BTPkmx_b5oYuC0jCk0_P2yWyPD9bSHulp8FAdQ86J3A"

export const supabase = createClient(supabaseUrl, supabaseKey)