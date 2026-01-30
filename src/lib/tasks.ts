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

// Tasks - Updated 2026-01-30 11:20 UTC
export const tasks: Task[] = [
  // === IN PROGRESS ===
  {
    id: 'PCC-UI-003',
    title: 'Fix Tailwind CSS + Deploy to Vercel',
    description: 'CSS not loading - added tailwind config, triggering Vercel prod deploy',
    status: 'in-progress',
    priority: 'urgent',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T11:20:00Z',
  },

  // === COMPLETED ===
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
    title: 'Write Pool.sol + PoolFactory.sol + ShareToken.sol',
    description: 'Core contracts: deposits, voting, funding requests, guardians',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T09:25:00Z',
    updatedAt: '2026-01-30T10:00:00Z',
    completedAt: '2026-01-30T10:00:00Z',
  },
  {
    id: 'PCC-003',
    title: 'Write 32 tests (unit + security + fuzz)',
    description: '14 unit, 18 security tests - all passing',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:00:00Z',
    updatedAt: '2026-01-30T10:55:00Z',
    completedAt: '2026-01-30T10:55:00Z',
  },
  {
    id: 'PCC-UI-001',
    title: 'Create Next.js + RainbowKit mini app',
    description: 'Base mini app with wallet connection, Supabase, UI components',
    status: 'completed',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:00:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
    completedAt: '2026-01-30T10:45:00Z',
  },

  // === TODO ===
  {
    id: 'PCC-UI-004',
    title: 'Polish UI components',
    description: 'Better styling, animations, responsive design',
    status: 'todo',
    priority: 'medium',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T10:45:00Z',
    updatedAt: '2026-01-30T10:45:00Z',
  },

  // === BACKLOG ===
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
