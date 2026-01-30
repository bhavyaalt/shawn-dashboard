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

// Initial tasks - I'll update this file as I work
export const tasks: Task[] = [
  {
    id: 'SHAWN-001',
    title: 'Build Shawn Dashboard',
    description: 'Create a Linear-like task dashboard for Bhavya to monitor progress',
    status: 'in-progress',
    priority: 'high',
    project: 'Infrastructure',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:45:00Z',
  },
  {
    id: 'SHAWN-002',
    title: 'Deploy Dashboard to Vercel',
    description: 'Set up Vercel deployment with GitHub integration',
    status: 'todo',
    priority: 'high',
    project: 'Infrastructure',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:45:00Z',
  },
  {
    id: 'SHAWN-003',
    title: 'Research Peer Credit Circles',
    description: 'Deep dive into group lending mechanics, smart contract patterns, existing solutions',
    status: 'backlog',
    priority: 'high',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:45:00Z',
  },
  {
    id: 'SHAWN-004',
    title: 'Study Farcaster Mini Apps',
    description: 'Go through npx create-onchain@latest --mini, understand Frames, Base integration',
    status: 'backlog',
    priority: 'medium',
    project: 'Peer Credit Circles',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:45:00Z',
  },
  {
    id: 'SHAWN-005',
    title: 'Study Scaffold-ETH 2',
    description: 'Learn the patterns, hooks, components from scaffoldeth.io',
    status: 'backlog',
    priority: 'medium',
    project: 'Learning',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:45:00Z',
  },
  {
    id: 'SHAWN-006',
    title: 'Explore Variant.ai for UI',
    description: 'Understand how to use Variant.ai for generating beautiful UI components',
    status: 'backlog',
    priority: 'medium',
    project: 'Learning',
    createdAt: '2026-01-30T08:45:00Z',
    updatedAt: '2026-01-30T08:45:00Z',
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
