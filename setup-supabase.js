// Quick setup script for Supabase integration
// Run this with: node setup-supabase.js

console.log(`
🚀 SupaKid Supabase Setup Guide
===============================

1. Create a Supabase project:
   - Go to https://supabase.com
   - Click "New Project"
   - Choose your organization
   - Enter project name: "supakid-leads"
   - Set a strong database password
   - Choose a region close to your users

2. Create the leads table:
   - Go to SQL Editor in your Supabase dashboard
   - Run this SQL command:

CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  number_of_kids TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for lead collection
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT WITH CHECK (true);

3. Get your credentials:
   - Go to Settings > API in your Supabase dashboard
   - Copy the Project URL and anon/public key

4. Create .env file:
   - Create a .env file in the project root
   - Add your credentials:

REACT_APP_SUPABASE_URL=your_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_anon_key_here

5. Test the integration:
   - Run: npm start
   - Fill out the form and submit
   - Check your Supabase dashboard to see the lead data

✅ Your leads will now be saved to the Supabase database!
`);

// Check if .env file exists
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.log(`
⚠️  .env file not found!
   Please create a .env file with your Supabase credentials.
   See the instructions above.
`);
} else {
  console.log(`
✅ .env file found!
   Make sure it contains your Supabase credentials.
`);
}
