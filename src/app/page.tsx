import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tasks, type Task, type TaskStatus } from "@/lib/tasks";

const statusConfig: Record<TaskStatus, { label: string; color: string }> = {
  'backlog': { label: 'Backlog', color: 'bg-gray-500' },
  'todo': { label: 'To Do', color: 'bg-blue-500' },
  'in-progress': { label: 'In Progress', color: 'bg-yellow-500' },
  'completed': { label: 'Completed', color: 'bg-green-500' },
};

const priorityConfig: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
  'low': { label: 'Low', variant: 'outline' },
  'medium': { label: 'Medium', variant: 'secondary' },
  'high': { label: 'High', variant: 'default' },
  'urgent': { label: 'Urgent', variant: 'destructive' },
};

function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="mb-3 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <code className="text-xs text-muted-foreground">{task.id}</code>
          <Badge variant={priorityConfig[task.priority].variant}>
            {priorityConfig[task.priority].label}
          </Badge>
        </div>
        <CardTitle className="text-base">{task.title}</CardTitle>
        {task.project && (
          <CardDescription className="text-xs">
            📁 {task.project}
          </CardDescription>
        )}
      </CardHeader>
      {task.description && (
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground">{task.description}</p>
        </CardContent>
      )}
    </Card>
  );
}

function TaskColumn({ status, tasks }: { status: TaskStatus; tasks: Task[] }) {
  const config = statusConfig[status];
  const filteredTasks = tasks.filter(t => t.status === status);
  
  return (
    <div className="flex-1 min-w-[280px]">
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-3 h-3 rounded-full ${config.color}`} />
        <h2 className="font-semibold">{config.label}</h2>
        <span className="text-muted-foreground text-sm">({filteredTasks.length})</span>
      </div>
      <div className="space-y-2">
        {filteredTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-sm text-muted-foreground italic">No tasks</p>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    todo: tasks.filter(t => t.status === 'todo').length,
    backlog: tasks.filter(t => t.status === 'backlog').length,
  };

  const projects = [...new Set(tasks.map(t => t.project).filter(Boolean))];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <div>
              <h1 className="text-2xl font-bold">Shawn Dashboard</h1>
              <p className="text-muted-foreground text-sm">
                What I&apos;m building for Bhavya
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total</CardDescription>
              <CardTitle className="text-3xl">{stats.total}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Backlog</CardDescription>
              <CardTitle className="text-3xl text-gray-500">{stats.backlog}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>To Do</CardDescription>
              <CardTitle className="text-3xl text-blue-500">{stats.todo}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>In Progress</CardDescription>
              <CardTitle className="text-3xl text-yellow-500">{stats.inProgress}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Completed</CardDescription>
              <CardTitle className="text-3xl text-green-500">{stats.completed}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Tabs for views */}
        <Tabs defaultValue="board" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="board">Board View</TabsTrigger>
            <TabsTrigger value="projects">By Project</TabsTrigger>
          </TabsList>

          <TabsContent value="board">
            <div className="flex gap-6 overflow-x-auto pb-4">
              <TaskColumn status="backlog" tasks={tasks} />
              <TaskColumn status="todo" tasks={tasks} />
              <TaskColumn status="in-progress" tasks={tasks} />
              <TaskColumn status="completed" tasks={tasks} />
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-8">
              {projects.map(project => (
                <div key={project}>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    📁 {project}
                    <span className="text-muted-foreground text-sm font-normal">
                      ({tasks.filter(t => t.project === project).length} tasks)
                    </span>
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tasks.filter(t => t.project === project).map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="mt-1">
            Built by Shawn ⚡ for Bhavya | 
            <a href="https://github.com/bhavyaalt" className="ml-1 underline hover:text-foreground">
              GitHub
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
