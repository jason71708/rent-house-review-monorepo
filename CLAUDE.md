# Rent House Review Monorepo

A cross-platform application for rent house reviews built with modern web technologies.

## Architecture

```
rent-house-review-monorepo/
├── apps/
│   ├── web/          # Next.js frontend (React 19 + TypeScript + TailwindCSS)
│   └── backend/      # Node.js API (Fastify + TypeScript)
├── packages/
│   └── types/        # Shared TypeScript definitions with namespaces
└── [config files]
```

## Tech Stack

### Web Frontend (`apps/web`)
- **Framework**: Next.js 15 with Turbopack
- **Runtime**: React 19 + TypeScript
- **Styling**: TailwindCSS 4
- **Testing**: Jest + Playwright + React Testing Library
- **Linting**: Biome

### Backend API (`apps/backend`)
- **Framework**: Fastify 4 + TypeScript
- **Testing**: Jest
- **Development**: Nodemon
- **Linting**: Biome

### Shared Types (`packages/types`)
- **Package**: `@internal/types`
- **Structure**: Namespace-based organization
- **Namespaces**: `User`, `Property`, `Review`, `API`

## Key Commands

### Development
```bash
pnpm dev         # Start both frontend and backend in parallel
pnpm build       # Build all projects
pnpm test        # Run all tests
pnpm lint        # Lint all projects with Biome
pnpm format      # Format all code with Biome
```

### Individual Apps
```bash
# Web (localhost:3000)
cd apps/web && pnpm dev
cd apps/web && pnpm test:e2e

# Backend (localhost:8000)
cd apps/backend && pnpm dev
cd apps/backend && pnpm test
```

## Package Management
- **Tool**: pnpm with workspaces
- **Shared Dependencies**: TypeScript, Biome, Jest in root
- **Workspace Links**: Apps use `@internal/types` with `workspace:*`

## Type System

The shared types package uses namespace organization:

```typescript
import { User, Property, API } from '@internal/types';

// Usage examples
const user: User.Entity = { ... };
const property: Property.Entity = { ... };
const response: API.SuccessResponse<User.Entity> = { ... };

// Enums
Property.Type.APARTMENT
Property.Status.AVAILABLE
```

## API Endpoints

### Backend (`localhost:8000`)
- `GET /` - API welcome message
- `GET /health` - Health check with timestamp

### Frontend (`localhost:3000`)
- Next.js App Router structure
- TailwindCSS for styling
- TypeScript throughout

## Testing Strategy

### Unit Tests
- **Web**: Jest + React Testing Library + jsdom
- **Backend**: Jest + Fastify injection testing
- **Shared**: All use Jest 30.1.1 from root workspace

### E2E Tests
- **Tool**: Playwright
- **Location**: `apps/web/e2e/`
- **Tests**: Home page functionality + Backend API integration

## Code Quality

### Formatting & Linting
- **Tool**: Biome (root configuration)
- **Config**: `biome.json` with workspace overrides
- **IDE**: VS Code settings in `.vscode/settings.json`
- **Format on Save**: Enabled for all file types

### TypeScript Configuration
- **Base**: Root `tsconfig.json` shared across all projects
- **Web**: Extends base + Next.js specific settings
- **Backend**: Extends base + CommonJS output
- **Types**: Extends base + package-specific settings

## Development Workflow

1. **Setup**: `pnpm install` (installs all workspace dependencies)
2. **Development**: `pnpm dev` (starts both web and backend)
3. **Testing**: 
   - Unit: `pnpm test`
   - E2E: `cd apps/web && pnpm test:e2e`
4. **Type Checking**: Automatic via TypeScript
5. **Formatting**: Auto-format on save via Biome

## File Structure Notes

- **Shared Types**: All apps import from `@internal/types`
- **Build Outputs**: `dist/` folders (gitignored)
- **Next.js**: `.next/` build cache (gitignored)
- **Testing**: `coverage/` reports (gitignored)

## Future Architecture

- **Mobile**: Flutter app planned for `apps/mobile`
- **Database**: Not yet implemented
- **Authentication**: Planned in types (`User.LoginRequest`)
- **Reviews**: Core entity with ratings, pros/cons

## Common Issues & Solutions

### Biome Not Working in Editor
1. Install Biome VS Code extension
2. Check `.vscode/settings.json` exists
3. Restart VS Code
4. Verify root `biome.json` configuration

### Type Imports
```typescript
// ✅ Correct namespace usage
import { User, Property } from '@internal/types';
const user: User.Entity = { ... };

// ❌ Wrong - no default export
import Types from '@internal/types';
```

### Workspace Dependencies
- Use `workspace:*` for internal packages
- Shared tools (TypeScript, Biome, Jest) in root
- App-specific deps in individual `package.json`

## Performance Notes

- **Next.js**: Uses Turbopack for faster builds
- **pnpm**: Efficient package management with symlinks
- **Biome**: Fast linting/formatting (replaces ESLint + Prettier)
- **Jest**: Parallel test execution across workspaces