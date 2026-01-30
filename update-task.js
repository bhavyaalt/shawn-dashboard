const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://ohwtiwhbqsiwpktteaur.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9od3Rpd2hicXNpd3BrdHRlYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDM0OTUsImV4cCI6MjA4NTMxOTQ5NX0.TmXl_O0GF8LksqFGh5R69R2iTQrbws_BBM-44ZiRv9A'
);

async function update() {
  // Mark research as complete
  await supabase.from('tasks').update({
    status: 'completed',
    updated_at: new Date().toISOString(),
    completed_at: new Date().toISOString(),
  }).eq('id', 'PCC-RESEARCH-001');
  
  // Mark architecture design as complete (it was in TODO as PCC-001)
  await supabase.from('tasks').update({
    status: 'completed',
    title: 'Design PCC contract architecture',
    description: 'Full architecture with Safe integration, Guardian system, Voting, Milestones - see pcc-architecture.md',
    updated_at: new Date().toISOString(),
    completed_at: new Date().toISOString(),
  }).eq('id', 'PCC-001');
  
  // Update remaining tasks to reflect correct order
  await supabase.from('tasks').update({
    status: 'in-progress',
    updated_at: new Date().toISOString(),
  }).eq('id', 'PCC-002');
  
  console.log('✅ Tasks updated!');
}

update();
