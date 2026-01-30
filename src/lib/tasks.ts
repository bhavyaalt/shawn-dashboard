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

// Tasks - Updated 2026-01-30 10:45 UTC
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
    description: 'Deep dive into group lending mechanics, smart contract patterns',
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

  // === COMPLETED: PCC Smart Contracts (Basic) ===
  {
    id: 'PCC-001',
    title: 'Set up Foundry project',
    description: 'Initialize Foundry, OpenZeppelin deps, folder structure',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:40:00Z',
    completedAt: '2026-01-30T09:40:00Z',
  },
  {
    id: 'PCC-002',
    title: 'Write Pool.sol contract',
    description: 'Core logic: members, deposits, funding requests, voting, guardian emergency',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T10:00:00Z',
    completedAt: '2026-01-30T10:00:00Z',
  },
  {
    id: 'PCC-003',
    title: 'Write PoolFactory.sol',
    description: 'Factory for creating pools, registry, events',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T10:00:00Z',
    completedAt: '2026-01-30T10:00:00Z',
  },
  {
    id: 'PCC-004',
    title: 'Write ShareToken.sol',
    description: 'ERC20 share tokens for pool membership',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T10:00:00Z',
    completedAt: '2026-01-30T10:00:00Z',
  },
  {
    id: 'PCC-005',
    title: 'Write basic unit tests',
    description: '14 unit tests covering deposits, requests, voting, withdrawal',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T10:15:00Z',
    completedAt: '2026-01-30T10:15:00Z',
  },

  // === COMPLETED: PCC Mini App (MVP) ===
  {
    id: 'PCC-UI-001',
    title: 'Create Next.js + RainbowKit setup',
    description: 'Base mini app with wallet connection',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:00:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
    completedAt: '2026-01-30T10:45:00Z',
  },
  {
    id: 'PCC-UI-002',
    title: 'Deploy mini app to Vercel',
    description: 'Live at https://pcc-miniapp.vercel.app',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:20:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
    completedAt: '2026-01-30T10:45:00Z',
  },

  // === IN PROGRESS: Smart Contracts Production Ready ===
  {
    id: 'PCC-006',
    title: 'Add fuzz tests',
    description: 'Fuzz testing for edge cases: amounts, timing, voting thresholds',
    status: 'in-progress',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },
  {
    id: 'PCC-007',
    title: 'Add invariant tests',
    description: 'Contract invariants: balance consistency, share supply, no double claims',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },
  {
    id: 'PCC-008',
    title: 'Add edge case unit tests',
    description: 'Boundary conditions, reentrancy, overflow, access control',
    status: 'todo',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },
  {
    id: 'PCC-009',
    title: 'Gas optimization review',
    description: 'Storage packing, loop optimization, events',
    status: 'todo',
    priority: 'medium',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },

  // === TODO: Frontend CSS Fix ===
  {
    id: 'PCC-UI-003',
    title: 'Fix Tailwind CSS not applying',
    description: 'CSS not loading on deployed app - investigate and fix',
    status: 'todo',
    priority: 'urgent',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },
  {
    id: 'PCC-UI-004',
    title: 'Polish UI components',
    description: 'Better styling, animations, responsive design',
    status: 'backlog',
    priority: 'medium',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },

  // === BACKLOG: Deployment ===
  {
    id: 'PCC-DEPLOY-001',
    title: 'Deploy contracts to Base Sepolia',
    description: 'Testnet deployment, end-to-end testing',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T09:25:00Z',
  },
  {
    id: 'PCC-DEPLOY-002',
    title: 'Deploy contracts to Base Mainnet',
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
