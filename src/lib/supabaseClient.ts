// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

// @ts-ignore - Environment variables are provided by Astro at runtime
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? ''
// @ts-ignore - Environment variables are provided by Astro at runtime
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)