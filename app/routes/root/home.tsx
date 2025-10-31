import type { Route } from "../../+types/root";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  CheckCircle,
  FolderKanban,
  Layout,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub - Collaborative Task Management" },
    {
      name: "description",
      content:
        "Streamline your team's workflow with TaskHub - A powerful task management platform for teams of all sizes.",
    },
  ];
}

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Layout className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                TaskHub
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/sign-in">
                <Button variant="ghost" className="font-medium">
                  Login
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button className="font-medium">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Streamline Your Team's Workflow</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Manage Projects & Tasks
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              All in One Place
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            TaskHub is a powerful collaboration platform that helps teams
            organize projects, track tasks, and achieve goals efficiently.
            Built for teams of all sizes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/sign-up">
              <Button size="lg" className="w-full sm:w-auto font-medium">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/sign-in">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-medium"
              >
                Sign In
              </Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FolderKanban className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Project Management
              </h3>
              <p className="text-sm text-muted-foreground">
                Organize work into projects with customizable workflows and
                status tracking.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Task Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Create, assign, and track tasks with priorities, due dates, and
                progress monitoring.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Team Collaboration
              </h3>
              <p className="text-sm text-muted-foreground">
                Work together with real-time updates, comments, and role-based
                access control.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Layout className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Multiple Workspaces
              </h3>
              <p className="text-sm text-muted-foreground">
                Create separate workspaces for different teams, clients, or
                departments.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Analytics & Reports
              </h3>
              <p className="text-sm text-muted-foreground">
                Track team productivity with detailed statistics and visual
                charts.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & Intuitive</h3>
              <p className="text-sm text-muted-foreground">
                Clean interface with powerful features that don't slow you
                down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
                <Layout className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-semibold">TaskHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 TaskHub. Built with React Router & TypeScript.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
