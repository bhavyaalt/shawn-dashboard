const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://ohwtiwhbqsiwpktteaur.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9od3Rpd2hicXNpd3BrdHRlYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NDM0OTUsImV4cCI6MjA4NTMxOTQ5NX0.TmXl_O0GF8LksqFGh5R69R2iTQrbws_BBM-44ZiRv9A'
);

const tasks = [
  // === COMPLETED: Infrastructure ===
  {
    id: 'SHAWN-001',
    title: 'Build Shawn Dashboard',
    description: 'Create a Linear-like task dashboard for Bhavya to monitor progress',
    status: 'completed',
    priority: 'high',
    project: 'Infrastructure',
    created_at: '2026-01-30T08:45:00Z',
    updated_at: '2026-01-30T08:55:00Z',
    completed_at: '2026-01-30T08:55:00Z',
  },
  {
    id: 'SHAWN-002',
    title: 'Deploy Dashboard to Vercel',
    description: 'Set up Vercel deployment with GitHub integration',
    status: 'completed',
    priority: 'high',
    project: 'Infrastructure',
    created_at: '2026-01-30T08:45:00Z',
    updated_at: '2026-01-30T08:55:00Z',
    completed_at: '2026-01-30T08:55:00Z',
  },
  {
    id: 'SHAWN-003',
    title: 'Set up Supabase for Dashboard',
    description: 'Real-time task storage instead of hardcoded data',
    status: 'completed',
    priority: 'high',
    project: 'Infrastructure',
    created_at: '2026-01-30T09:30:00Z',
    updated_at: '2026-01-30T09:50:00Z',
    completed_at: '2026-01-30T09:50:00Z',
  },
  {
    id: 'SHAWN-004',
    title: 'Add dark mode to dashboard',
    description: 'Better for the eyes',
    status: 'completed',
    priority: 'medium',
    project: 'Infrastructure',
    created_at: '2026-01-30T09:50:00Z',
    updated_at: '2026-01-30T09:55:00Z',
    completed_at: '2026-01-30T09:55:00Z',
  },

  // === COMPLETED: Learning ===
  {
    id: 'LEARN-001',
    title: 'Study Farcaster Mini Apps',
    description: 'OnchainKit, MiniKit SDK, manifest config, auth flow',
    status: 'completed',
    priority: 'high',
    project: 'Learning',
    created_at: '2026-01-30T08:45:00Z',
    updated_at: '2026-01-30T09:05:00Z',
    completed_at: '2026-01-30T09:05:00Z',
  },
  {
    id: 'LEARN-002',
    title: 'Study Scaffold-ETH 2',
    description: 'Hooks, deployment patterns, hot reload',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    created_at: '2026-01-30T08:45:00Z',
    updated_at: '2026-01-30T09:05:00Z',
    completed_at: '2026-01-30T09:05:00Z',
  },
  {
    id: 'LEARN-003',
    title: 'Study Smart Contract Security',
    description: 'ReentrancyGuard, CEI pattern, SafeERC20, access control',
    status: 'completed',
    priority: 'high',
    project: 'Learning',
    created_at: '2026-01-30T09:05:00Z',
    updated_at: '2026-01-30T09:05:00Z',
    completed_at: '2026-01-30T09:05:00Z',
  },
  {
    id: 'LEARN-004',
    title: 'Study Foundry Testing',
    description: 'Fuzz testing, invariant testing, coverage-guided fuzzing',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    created_at: '2026-01-30T09:10:00Z',
    updated_at: '2026-01-30T09:15:00Z',
    completed_at: '2026-01-30T09:15:00Z',
  },

  // === IN PROGRESS: Research PCC (Correct understanding!) ===
  {
    id: 'PCC-RESEARCH-001',
    title: 'Research Peer Credit Circles (CORRECT concept)',
    description: 'Friend group pools funds → Projects request funding → Group votes → Project uses funds & rewards group proportionally',
    status: 'in-progress',
    priority: 'urgent',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },

  // === TODO: PCC Smart Contracts (Need to rewrite!) ===
  {
    id: 'PCC-001',
    title: 'Design PCC contract architecture',
    description: 'Pool.sol for fund pooling, FundingRequest.sol for project proposals, voting mechanism, reward distribution',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-002',
    title: 'Write Pool.sol contract',
    description: 'Friends deposit funds, track shares proportionally, manage pool lifecycle',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-003',
    title: 'Write FundingRequest.sol',
    description: 'Projects submit requests, specify amount, terms, reward structure',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-004',
    title: 'Write Voting mechanism',
    description: 'Pool members vote on funding requests, quorum rules, vote weight by share',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-005',
    title: 'Write RewardDistributor.sol',
    description: 'Distribute project rewards to pool members proportional to their contribution',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },

  // === BACKLOG: PCC UI & Deployment ===
  {
    id: 'PCC-UI-001',
    title: 'Build Pool Dashboard',
    description: 'Show pool balance, member shares, pending requests, past fundings',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-UI-002',
    title: 'Build Create Pool Flow',
    description: 'Name, initial deposit, invite friends',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-UI-003',
    title: 'Build Funding Request Flow',
    description: 'Projects submit request, pool members vote, track status',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-DEPLOY-001',
    title: 'Deploy to Base Sepolia',
    description: 'Testnet deployment, end-to-end testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
  {
    id: 'PCC-DEPLOY-002',
    title: 'Deploy to Base Mainnet',
    description: 'Production deployment after testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:55:00Z',
    updated_at: '2026-01-30T09:55:00Z',
  },
];

async function seed() {
  console.log('Seeding tasks with CORRECTED PCC understanding...');
  
  // First, clear existing tasks
  const { error: deleteError } = await supabase
    .from('tasks')
    .delete()
    .neq('id', '');
  
  if (deleteError) {
    console.error('Error clearing tasks:', deleteError);
    return;
  }
  console.log('Cleared existing tasks');

  // Insert new tasks
  const { data, error } = await supabase
    .from('tasks')
    .insert(tasks);

  if (error) {
    console.error('Error seeding tasks:', error);
    return;
  }

  console.log(`✅ Seeded ${tasks.length} tasks with CORRECT PCC concept!`);
}

seed();
