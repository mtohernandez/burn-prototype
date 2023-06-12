import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oqnjsyzflzrttolewtgw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xbmpzeXpmbHpydHRvbGV3dGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1MDY2ODcsImV4cCI6MjAwMjA4MjY4N30._jpxa9L0YI8mowbyBj_z0wYybLJNAHuxBHGgh_aK9Ik";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;