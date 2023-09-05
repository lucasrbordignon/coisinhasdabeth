import { supabase } from "@/lib/Supabase"

export function ProductService() {
  return {
    getAllProducts() {
      return supabase
      .from('product')
      .select('*')
    }
  }
}