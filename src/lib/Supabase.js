import { createClient } from '@supabase/supabase-js';

require('dotenv').config({});

const supabaseUrl = "https://quakdajqnqdvzescshsg.supabase.co"
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)