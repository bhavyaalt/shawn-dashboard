const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://ohwtiwhbqsiwpktteaur.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9od3Rpd2hicXNpd3BrdHRlYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDM0OTUsImV4cCI6MjA4NTMxOTQ5NX0.TmXl_O0GF8LksqFGh5R69R2iTQrbws_BBM-44ZiRv9A'
);

async function update() {
  const now = new Date().toISOString();
  
  // Mark Pool.sol as complete
  await supabase.from('tasks').update({
    status: 'completed',
    description: 'Friends deposit funds, track shares proportionally, manage pool lifecycle. 14 tests passing!',
    updated_at: now,
    completed_at: now,
  }).eq('id', 'PCC-002');
  
  // Mark FundingRequest as complete (it's in Pool.sol)
  await supabase.from('tasks').update({
    status: 'completed',
    description: 'Integrated in Pool.sol - GRANT/LOAN/INVESTMENT types, collateral for loans/investments',
    updated_at: now,
    completed_at: now,
  }).eq('id', 'PCC-003');
  
  // Mark Voting as complete
  await supabase.from('tasks').update({
    status: 'completed',
    description: 'Share-weighted voting, quorum/threshold checks, integrated in Pool.sol',
    updated_at: now,
    completed_at: now,
  }).eq('id', 'PCC-004');
  
  // Mark RewardDistributor as complete
  await supabase.from('tasks').update({
    status: 'completed',
    description: 'Proportional reward distribution, claim function - integrated in Pool.sol',
    updated_at: now,
    completed_at: now,
  }).eq('id', 'PCC-005');
  
  // Move deployment to in-progress
  await supabase.from('tasks').update({
    status: 'todo',
    updated_at: now,
  }).eq('id', 'PCC-DEPLOY-001');
  
  console.log('✅ Tasks updated!');
}

update();
