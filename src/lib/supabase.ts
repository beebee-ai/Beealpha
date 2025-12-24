import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hzimjwfaeitpodmlfayn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6aW1qd2ZhZWl0cG9kbWxmYXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MTEyNTAsImV4cCI6MjA2NDE4NzI1MH0.TXmUC1MCysuhPMtYGMTacgWRptuPunexiqxk1Z1cZJU";

export const supabase = createClient(supabaseUrl, supabaseKey);
