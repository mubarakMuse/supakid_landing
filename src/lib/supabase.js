import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Function to insert lead data
export const insertLead = async (leadData) => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          number_of_kids: leadData.numberOfKids,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Error inserting lead:', error)
      throw error
    }

    console.log('Lead inserted successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Error in insertLead:', error)
    return { success: false, error: error.message }
  }
}

// Function to get all leads (for admin purposes)
export const getLeads = async () => {
  try {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching leads:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error in getLeads:', error)
    return { success: false, error: error.message }
  }
}
