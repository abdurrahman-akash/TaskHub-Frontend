# TaskHub Frontend

A modern, responsive task management application built with React Router v7, TypeScript, and Tailwind CSS. This application provides a comprehensive interface for managing workspaces, projects, tasks, and team collaboration.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Routing](#routing)
- [State Management](#state-management)
- [UI Components](#ui-components)
- [Authentication](#authentication)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Type Safety](#type-safety)
- [Build & Deployment](#build--deployment)

## 🎯 Overview

TaskHub Frontend is a full-featured single-page application (SPA) that provides an intuitive interface for project and task management. Built with the latest React Router framework, it offers server-side rendering (SSR) capabilities, type-safe routing, and a modern development experience.

## ✨ Features

### 🔐 Authentication & User Management
- User registration with email verification
- Secure login/logout
- Password reset via email
- Profile management
- Protected routes with authentication guards
- Automatic token refresh handling

### 🏢 Workspace Management
- Create and manage multiple workspaces
- Workspace color customization
- Invite members with role-based access (Owner, Admin, Member, Viewer)
- Generate shareable invite links
- Workspace statistics dashboard
- Member management

### 📊 Project Management
- Create projects within workspaces
- Project status tracking (Planning, In Progress, On Hold, Completed, Cancelled)
- Progress visualization (0-100%)
- Project member assignment with roles (Manager, Contributor, Viewer)
- Project cards with status indicators
- Archive/unarchive projects
- Project filtering and search

### ✅ Task Management
- Task creation with rich details
- Task status workflow (To Do, In Progress, Review, Done)
- Priority levels (Low, Medium, High)
- Multiple assignees support
- Subtasks with completion tracking
- Task comments and discussions
- File attachments
- Watchers functionality
- Due date tracking
- Time estimation and actual hours tracking
- Task activity logs

### 📈 Dashboard & Analytics
- Workspace overview statistics
- Task trends visualization
- Project status distribution charts
- Task priority breakdown
- Workspace productivity metrics
- Recent projects display
- Upcoming tasks list
- Interactive charts with Recharts

### 💬 Collaboration Features
- Real-time task comments
- Activity feed
- Team member mentions
- Task watchers
- Workspace invitations
- Role-based permissions

### 🎨 UI/UX Features
- Fully responsive design (mobile, tablet, desktop)
- Dark mode support
- Smooth animations and transitions
- Loading states and skeletons
- Toast notifications
- Form validation with instant feedback
- Accessible components (ARIA labels)
- Keyboard navigation support

## 🛠 Tech Stack

### Core
- **React** v19.1.0 - UI library
- **React Router** v7.5.3 - Routing and SSR framework
- **TypeScript** v5.8.3 - Type safety
- **Vite** v6.3.3 - Build tool and dev server

### State Management & Data Fetching
- **TanStack Query** v5.77.1 - Server state management
- **React Hook Form** v7.56.4 - Form state management
- **Zod** v3.25.28 - Schema validation

### UI & Styling
- **Tailwind CSS** v4.1.4 - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Lucide React** v0.511.0 - Icon library
- **Recharts** v2.15.3 - Chart library
- **class-variance-authority** - Component variants
- **tailwind-merge** - Conditional classes

### HTTP Client
- **Axios** v1.9.0 - HTTP requests with interceptors

### Utilities
- **date-fns** v3.6.0 - Date manipulation
- **react-day-picker** v8.10.1 - Date picker
- **sonner** v2.0.3 - Toast notifications
- **clsx** - Class name composition

## 📁 Project Structure

```
frontend/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── dashboard/       # Dashboard-specific components
│   │   │   ├── recnt-projects.tsx
│   │   │   ├── stat-card.tsx
│   │   │   └── statistics-charts.tsx
│   │   ├── layout/          # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── sidebar-component.tsx
│   │   │   └── sidebar-nav.tsx
│   │   ├── project/         # Project components
│   │   │   ├── create-project.tsx
│   │   │   └── project-card.tsx
│   │   ├── task/            # Task management components
│   │   │   ├── comment-section.tsx
│   │   │   ├── create-task-dialog.tsx
│   │   │   ├── sub-tasks.tsx
│   │   │   ├── task-activity.tsx
│   │   │   ├── task-assignees-selector.tsx
│   │   │   ├── task-description.tsx
│   │   │   ├── task-icon.tsx
│   │   │   ├── task-priority-selector.tsx
│   │   │   ├── task-status-selector.tsx
│   │   │   ├── task-title.tsx
│   │   │   └── watchers.tsx
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── textarea.tsx
│   │   ├── workspace/       # Workspace components
│   │   │   ├── create-workspace.tsx
│   │   │   ├── invite-member.tsx
│   │   │   ├── project-list.tsx
│   │   │   ├── workspace-avatar.tsx
│   │   │   └── workspace-header.tsx
│   │   ├── back-button.tsx
│   │   ├── loader.tsx
│   │   ├── no-data-found.tsx
│   │   └── upcoming-tasks.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── use-auth.ts      # Authentication hook
│   │   ├── use-project.ts   # Project operations
│   │   ├── use-task.ts      # Task operations
│   │   ├── use-user.ts      # User operations
│   │   └── use-workspace.ts # Workspace operations
│   ├── lib/                 # Utility functions
│   │   ├── fetch-util.ts    # Axios instance & API utilities
│   │   ├── index.ts         # Exported utilities
│   │   ├── schema.ts        # Zod validation schemas
│   │   └── utils.ts         # Helper functions
│   ├── provider/            # Context providers
│   │   ├── auth-context.tsx # Authentication context
│   │   └── react-query-provider.tsx # TanStack Query setup
│   ├── routes/              # Route components
│   │   ├── auth/            # Authentication routes
│   │   │   ├── auth-layout.tsx
│   │   │   ├── forgot-password.tsx
│   │   │   ├── reset-password.tsx
│   │   │   ├── sign-in.tsx
│   │   │   ├── sign-up.tsx
│   │   │   └── verify-email.tsx
│   │   ├── dashboard/       # Dashboard routes
│   │   │   ├── dashboard-layout.tsx
│   │   │   ├── index.tsx
│   │   │   ├── members.tsx
│   │   │   ├── my-tasks.tsx
│   │   │   ├── project/
│   │   │   │   └── project-details.tsx
│   │   │   ├── task/
│   │   │   │   └── task-details.tsx
│   │   │   └── workspaces/
│   │   │       ├── index.tsx
│   │   │       ├── workspace-details.tsx
│   │   │       └── workspace-invite.tsx
│   │   ├── root/            # Public routes
│   │   │   └── home.tsx
│   │   └── user/            # User profile routes
│   │       ├── profile.tsx
│   │       └── user-layout.tsx
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── app.css              # Global styles
│   ├── root.tsx             # Root layout component
│   └── routes.ts            # Route configuration
├── public/                  # Static assets
├── build/                   # Production build output
│   ├── client/              # Client-side bundle
│   └── server/              # Server-side bundle
├── .env                     # Environment variables
├── components.json          # shadcn/ui configuration
├── Dockerfile               # Docker configuration
├── package.json             # Dependencies and scripts
├── react-router.config.ts   # React Router configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js v18+ or v20+
- pnpm, npm, or yarn
- Backend API running (see backend README)

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

The application will start on `http://localhost:5173`

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api-v1

# Optional: Other configurations
VITE_APP_NAME=TaskHub
VITE_APP_VERSION=1.0.0
```

### Environment Variable Usage

```typescript
// Access in code
const apiUrl = import.meta.env.VITE_API_URL;
```

**Note**: All environment variables must be prefixed with `VITE_` to be exposed to the client.

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server with HMR
pnpm build        # Build for production
pnpm start        # Start production server
pnpm typecheck    # Run TypeScript type checking

# Utility
pnpm preview      # Preview production build locally
```

### Script Details

- **`dev`**: Starts Vite dev server with React Router framework
- **`build`**: Creates optimized production build with SSR
- **`start`**: Serves the production build
- **`typecheck`**: Validates TypeScript types across the project

## 🛣 Routing

### Route Configuration

Routes are defined in `app/routes.ts` using React Router v7's type-safe routing:

```typescript
// Public routes with auth layout
layout("routes/auth/auth-layout.tsx", [
  index("routes/root/home.tsx"),           // /
  route("sign-in", "routes/auth/sign-in.tsx"),
  route("sign-up", "routes/auth/sign-up.tsx"),
  // ... more auth routes
])

// Protected routes with dashboard layout
layout("routes/dashboard/dashboard-layout.tsx", [
  route("dashboard", "routes/dashboard/index.tsx"),
  route("workspaces", "routes/dashboard/workspaces/index.tsx"),
  route("workspaces/:workspaceId", "..."),
  // ... more dashboard routes
])
```

### Route Guards

**Auth Layout** (`routes/auth/auth-layout.tsx`):
- Redirects authenticated users to dashboard
- Shows public pages for unauthenticated users

**Dashboard Layout** (`routes/dashboard/dashboard-layout.tsx`):
- Requires authentication
- Redirects unauthenticated users to sign-in
- Loads workspace data

### Dynamic Routes

```typescript
// Workspace details
/workspaces/:workspaceId

// Project details
/workspaces/:workspaceId/projects/:projectId

// Task details
/workspaces/:workspaceId/projects/:projectId/tasks/:taskId
```

## 🔄 State Management

### TanStack Query (React Query)

Used for server state management with automatic caching, refetching, and optimistic updates.

**Query Example:**
```typescript
export const useGetWorkspacesQuery = () => {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => fetchData("/workspaces"),
  });
};
```

**Mutation Example:**
```typescript
export const useCreateWorkspace = () => {
  return useMutation({
    mutationFn: async (data: WorkspaceForm) => 
      postData("/workspaces", data),
  });
};
```

### Context API

**AuthContext** - Global authentication state:
```typescript
const { user, isAuthenticated, login, logout } = useAuth();
```

**Features:**
- Persistent authentication (localStorage)
- Automatic logout on 401
- Loading states
- Route protection

## 🎨 UI Components

### shadcn/ui Integration

Built on Radix UI primitives with Tailwind CSS styling:

- **Form Components**: Input, Textarea, Select, Checkbox, Calendar
- **Feedback**: Alert, Toast (Sonner), Dialog, Progress
- **Layout**: Card, Separator, Tabs, Scroll Area
- **Navigation**: Dropdown Menu, Popover
- **Display**: Avatar, Badge, Button (with variants)
- **Data Visualization**: Chart components (Recharts)

### Component Variants

Using `class-variance-authority` for type-safe variants:

```typescript
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        default: "bg-primary",
        destructive: "bg-destructive",
        outline: "border border-input",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
      },
    },
  }
);
```

### Custom Components

**Task Components:**
- Task status selector with workflow
- Priority selector with colors
- Assignee multi-select
- Subtask manager
- Comment section
- Activity timeline

**Dashboard Components:**
- Statistics cards
- Trend charts
- Progress visualizations
- Recent items lists

## 🔐 Authentication

### Authentication Flow

1. **Registration**
   ```
   User → Sign Up Form → API → Email Verification → Complete
   ```

2. **Login**
   ```
   User → Login Form → API → JWT Token → localStorage → Protected Routes
   ```

3. **Password Reset**
   ```
   User → Forgot Password → Email Link → Reset Form → New Password
   ```

### Token Management

```typescript
// Automatic token attachment
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Automatic logout on 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.dispatchEvent(new Event("force-logout"));
    }
    return Promise.reject(error);
  }
);
```

## 🔌 API Integration

### Axios Configuration

**Base Setup** (`lib/fetch-util.ts`):
```typescript
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
```

### API Utilities

```typescript
// GET request
const data = await fetchData<WorkspaceType>("/workspaces");

// POST request
const result = await postData("/workspaces", workspaceData);

// PUT request
const updated = await updateData(`/projects/${id}`, updates);

// DELETE request
await deleteData(`/tasks/${taskId}`);
```

### Custom Hooks Pattern

All API interactions wrapped in React Query hooks:

```typescript
// hooks/use-workspace.ts
export const useGetWorkspacesQuery = () => {
  return useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => fetchData("/workspaces"),
  });
};

export const useCreateWorkspace = () => {
  return useMutation({
    mutationFn: async (data: WorkspaceForm) => 
      postData("/workspaces", data),
  });
};
```

**Usage in Components:**
```typescript
const { data: workspaces, isLoading } = useGetWorkspacesQuery();
const { mutate: createWorkspace } = useCreateWorkspace();
```

## 🎨 Styling

### Tailwind CSS v4

**Configuration:**
- Custom color palette
- CSS variables for theming
- Responsive breakpoints
- Animation utilities

**Usage:**
```tsx
<div className="flex items-center justify-between p-4 rounded-lg border bg-card">
  <h2 className="text-2xl font-bold">Title</h2>
</div>
```

### CSS Variables (Theme)

Defined in `app.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark theme variables */
}
```

### Utility Functions

```typescript
// lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Usage
<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)} />
```

## 🔒 Type Safety

### TypeScript Configuration

**Strict Mode Enabled:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  }
}
```

### Type Definitions

All types defined in `app/types/index.ts`:

```typescript
export interface User {
  _id: string;
  email: string;
  name: string;
  // ... more fields
}

export interface Task {
  _id: string;
  title: string;
  status: TaskStatus;
  // ... more fields
}
```

### Form Validation with Zod

```typescript
const signUpSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 characters"),
  name: z.string().min(3, "Min 3 characters"),
}).refine(/* custom validation */);

// Type inference
type SignUpForm = z.infer<typeof signUpSchema>;
```

### React Hook Form Integration

```typescript
const form = useForm<SignUpForm>({
  resolver: zodResolver(signUpSchema),
  defaultValues: {
    email: "",
    password: "",
    name: "",
  },
});
```

## 🏗 Build & Deployment

### Production Build

```bash
# Build the application
pnpm build

# Output locations:
# - build/client/  → Client-side assets
# - build/server/  → Server-side bundle
```

### Build Output

```
build/
├── client/
│   ├── assets/           # JS, CSS, and other assets
│   │   ├── [hash].js    # Code-split chunks
│   │   ├── [hash].css   # Extracted CSS
│   │   └── ...
│   └── .vite/
│       └── manifest.json # Asset manifest
└── server/
    └── index.js          # SSR server bundle
```

### Serving Production Build

```bash
# Start production server
pnpm start

# Or use a process manager
pm2 start "pnpm start" --name taskhub-frontend
```

### Docker Deployment

**Dockerfile included** for containerized deployment:

```bash
# Build Docker image
docker build -t taskhub-frontend .

# Run container
docker run -p 3000:3000 taskhub-frontend
```

### Environment-Specific Builds

```bash
# Production
VITE_API_URL=https://api.production.com pnpm build

# Staging
VITE_API_URL=https://api.staging.com pnpm build
```

## 📊 Performance Optimizations

### Code Splitting
- Automatic route-based splitting
- Dynamic imports for large components
- Lazy loading for non-critical features

### Caching Strategies
- TanStack Query caching
- Static asset caching
- Service Worker support (optional)

### Image Optimization
- Lazy loading images
- Responsive images
- WebP format support

## 🧪 Development Tips

### Hot Module Replacement (HMR)
- Instant feedback on changes
- State preservation during updates
- Fast refresh for React components

### DevTools
- React DevTools for component inspection
- TanStack Query DevTools for cache inspection
- Network tab for API debugging

### Error Boundaries
- Graceful error handling
- Development mode stack traces
- User-friendly error pages

## 🔧 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change port in vite.config.ts or use
pnpm dev --port 3000
```

**Build errors:**
```bash
# Clear cache and rebuild
rm -rf node_modules .react-router
pnpm install
pnpm build
```

**Type errors:**
```bash
# Regenerate route types
pnpm typecheck
```

## 📚 Additional Resources

- [React Router v7 Docs](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [TanStack Query Docs](https://tanstack.com/query)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Add proper error handling
4. Test responsive design
5. Update documentation

## 📄 License

ISC

## 👨‍💻 Author

**codewave**

---

**Built with ❤️ using React Router v7 and TypeScript**

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
