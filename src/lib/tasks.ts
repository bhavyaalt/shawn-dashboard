export type TaskStatus = 'backlog' | 'todo' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  project?: string;
  createdAt: string;
  updatedAt: string;
  completedAt?: string;
}

// Tasks - Updated 2026-01-30 09:25 UTC
export const tasks: Task[] = [
  // === COMPLETED: Infrastructure ===
  {
    id: 'SHAWN-001',
    title: 'Build Shawn Dashboard',
    description: 'Create a Linear-like task dashboard for Bhavya to monitor progress',
    status: 'completed',
    priority: 'high',
    project: 'Infrastructure',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:55:00Z',
    completedAt: '2026-01-30T08:55:00Z',
  },
  {
    id: 'SHAWN-002',
    title: 'Deploy Dashboard to Vercel',
    description: 'Set up Vercel deployment with GitHub integration',
    status: 'completed',
    priority: 'high',
    project: 'Infrastructure',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:55:00Z',
    completedAt: '2026-01-30T08:55:00Z',
  },

  // === COMPLETED: Learning ===
  {
    id: 'SHAWN-003',
    title: 'Research Peer Credit Circles',
    description: 'Deep dive into group lending mechanics, smart contract patterns, existing solutions',
    status: 'completed',
    priority: 'high',
    project: 'Learning',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T09:00:00Z',
    completedAt: '2026-01-30T09:00:00Z',
  },
  {
    id: 'SHAWN-004',
    title: 'Study Farcaster Mini Apps',
    description: 'OnchainKit, MiniKit SDK, manifest config, auth flow',
    status: 'completed',
    priority: 'high',
    project: 'Learning',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T09:05:00Z',
    completedAt: '2026-01-30T09:05:00Z',
  },
  {
    id: 'SHAWN-005',
    title: 'Study Scaffold-ETH 2',
    description: 'Hooks, deployment patterns, hot reload',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T09:05:00Z',
    completedAt: '2026-01-30T09:05:00Z',
  },
  {
    id: 'SHAWN-006',
    title: 'Study Smart Contract Security',
    description: 'ReentrancyGuard, CEI pattern, SafeERC20, access control',
    status: 'completed',
    priority: 'high',
    project: 'Learning',
    createdAt: '2026-01-30T09:05:00Z',
    updatedAt: '2026-01-30T09:05:00Z',
    completedAt: '2026-01-30T09:05:00Z',
  },
  {
    id: 'SHAWN-007',
    title: 'Study Foundry Testing',
    description: 'Fuzz testing, invariant testing, coverage-guided fuzzing',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    createdAt: '2026-01-30T09:10:00Z',
    updatedAt: '2026-01-30T09:15:00Z',
    completedAt: '2026-01-30T09:15:00Z',
  },
  {
    id: 'SHAWN-008',
    title: 'Study Account Abstraction',
    description: 'ERC-4337, Paymasters, Bundlers, Smart Wallets',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    createdAt: '2026-01-30T09:10:00Z',
    updatedAt: '2026-01-30T09:15:00Z',
    completedAt: '2026-01-30T09:15:00Z',
  },
  {
    id: 'SHAWN-009',
    title: 'Study OpenZeppelin Patterns',
    description: 'Ownable, AccessControl, Upgradeable, TimelockController',
    status: 'completed',
    priority: 'medium',
    project: 'Learning',
    createdAt: '2026-01-30T09:20:00Z',
    updatedAt: '2026-01-30T09:20:00Z',
    completedAt: '2026-01-30T09:20:00Z',
  },

  // === IN PROGRESS: PCC Smart Contracts ===
  {
    id: 'PCC-001',
    title: 'Set up Foundry project',
    description: 'Initialize Foundry, OpenZeppelin deps, folder structure',
    status: 'in-progress',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-002',
    title: 'Write Circle.sol contract',
    description: 'Core logic: members, contributions, distribution, collateral, slashing',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-003',
    title: 'Write CircleFactory.sol',
    description: 'Factory for creating circles, registry, events',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-004',
    title: 'Write unit tests',
    description: 'Test all functions, edge cases, access control',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-005',
    title: 'Write fuzz tests',
    description: 'Property-based testing for contributions, withdrawals',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-006',
    title: 'Write invariant tests',
    description: 'Invariants: collateral >= obligations, no double claims',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },

  // === TODO: PCC Mini App ===
  {
    id: 'PCC-UI-001',
    title: 'Build Home Screen',
    description: 'Dashboard: user circles, pending actions, stats',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-UI-002',
    title: 'Build Create Circle Flow',
    description: 'Form: name, contribution amount, period, max members',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-UI-003',
    title: 'Build Circle Detail View',
    description: 'Members list, contribution timeline, actions',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-UI-004',
    title: 'Build Join & Contribute Flows',
    description: 'Stake collateral, make contributions, claim pot',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },

  // === BACKLOG: Deployment ===
  {
    id: 'PCC-DEPLOY-001',
    title: 'Deploy to Base Sepolia',
    description: 'Testnet deployment, end-to-end testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-DEPLOY-002',
    title: 'Deploy to Base Mainnet',
    description: 'Production deployment after testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
];

export function getTasksByStatus(status: TaskStatus): Task[] {
  return tasks.filter(t => t.status === status);
}

export function getTasksByProject(project: string): Task[] {
  return tasks.filter(t => t.project === project);
}

export function getProjects(): string[] {
  return [...new Set(tasks.map(t => t.project).filter(Boolean) as string[])];
}
