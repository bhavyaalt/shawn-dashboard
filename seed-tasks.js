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
    updated_at: '2026-01-30T09:45:00Z',
    completed_at: '2026-01-30T09:45:00Z',
  },

  // === COMPLETED: Learning ===
  {
    id: 'LEARN-001',
    title: 'Research Peer Credit Circles',
    description: 'Deep dive into group lending mechanics, smart contract patterns, existing solutions',
    status: 'completed',
    priority: 'high',
    project: 'Learning',
    created_at: '2026-01-30T08:45:00Z',
    updated_at: '2026-01-30T09:00:00Z',
    completed_at: '2026-01-30T09:00:00Z',
  },
  {
    id: 'LEARN-002',
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
    id: 'LEARN-003',
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
    id: 'LEARN-004',
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
    id: 'LEARN-005',
    title: 'Study Foundry Testing',
    description: 'Fuzz testing, invariant testing, coverage-guided fuzzing',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    created_at: '2026-01-30T09:10:00Z',
    updated_at: '2026-01-30T09:15:00Z',
    completed_at: '2026-01-30T09:15:00Z',
  },
  {
    id: 'LEARN-006',
    title: 'Study Account Abstraction',
    description: 'ERC-4337, Paymasters, Bundlers, Smart Wallets',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    created_at: '2026-01-30T09:10:00Z',
    updated_at: '2026-01-30T09:15:00Z',
    completed_at: '2026-01-30T09:15:00Z',
  },
  {
    id: 'LEARN-007',
    title: 'Study OpenZeppelin Patterns',
    description: 'Ownable, AccessControl, Upgradeable, TimelockController',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    created_at: '2026-01-30T09:20:00Z',
    updated_at: '2026-01-30T09:20:00Z',
    completed_at: '2026-01-30T09:20:00Z',
  },

  // === COMPLETED: PCC Smart Contracts ===
  {
    id: 'PCC-001',
    title: 'Set up Foundry project',
    description: 'Initialize Foundry, OpenZeppelin deps, folder structure',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:40:00Z',
    completed_at: '2026-01-30T09:40:00Z',
  },
  {
    id: 'PCC-002',
    title: 'Write Circle.sol contract',
    description: 'Core logic: members, contributions, distribution, collateral, slashing',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:40:00Z',
    completed_at: '2026-01-30T09:40:00Z',
  },
  {
    id: 'PCC-003',
    title: 'Write CircleFactory.sol',
    description: 'Factory for creating circles, registry, events',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:40:00Z',
    completed_at: '2026-01-30T09:40:00Z',
  },
  {
    id: 'PCC-004',
    title: 'Write unit tests',
    description: '15 unit tests covering join, contribute, distribute, slash, exit',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:40:00Z',
    completed_at: '2026-01-30T09:40:00Z',
  },
  {
    id: 'PCC-005',
    title: 'Write fuzz tests',
    description: '5 fuzz tests: collateral calc, timing, slashing amounts',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:40:00Z',
    completed_at: '2026-01-30T09:40:00Z',
  },
  {
    id: 'PCC-006',
    title: 'Write invariant tests',
    description: '7 invariants: balance, member count, no double claims, period bounds',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:40:00Z',
    completed_at: '2026-01-30T09:40:00Z',
  },

  // === IN PROGRESS: PCC Mini App ===
  {
    id: 'PCC-UI-001',
    title: 'Build Home Screen',
    description: 'Dashboard: user circles, pending actions, stats',
    status: 'in-progress',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:45:00Z',
  },
  {
    id: 'PCC-UI-002',
    title: 'Build Create Circle Flow',
    description: 'Form: name, contribution amount, period, max members',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-UI-003',
    title: 'Build Circle Detail View',
    description: 'Members list, contribution timeline, actions',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-UI-004',
    title: 'Build Join & Contribute Flows',
    description: 'Stake collateral, make contributions, claim pot',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:25:00Z',
  },

  // === BACKLOG: Deployment ===
  {
    id: 'PCC-DEPLOY-001',
    title: 'Deploy to Base Sepolia',
    description: 'Testnet deployment, end-to-end testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-DEPLOY-002',
    title: 'Deploy to Base Mainnet',
    description: 'Production deployment after testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    created_at: '2026-01-30T09:25:00Z',
    updated_at: '2026-01-30T09:25:00Z',
  },
];

async function seed() {
  console.log('Seeding tasks...');
  
  // First, clear existing tasks
  const { error: deleteError } = await supabase
    .from('tasks')
    .delete()
    .neq('id', '');  // Delete all rows
  
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

  console.log(`✅ Seeded ${tasks.length} tasks successfully!`);
}

seed();
