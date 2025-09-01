# /commit - Smart Git Commit Helper

## Description
Analyzes git changes and creates conventional commits following .commitlintrc.json rules.

## Usage
```
/commit [optional message]
```

## Behavior
1. **Analyze Changes**: Check `git status` and `git diff` to understand what changed
2. **Suggest Type**: Determine appropriate commit type based on file patterns:
   - `feat`: New files or major additions
   - `fix`: Modified existing files with bug fixes
   - `test`: Changes in test files (`*.test.*`, `*.spec.*`, `e2e/`)
   - `docs`: Documentation files (`*.md`, `README`, etc.)
   - `style`: Formatting changes (Biome, linting)
   - `build`: Package.json, config files
   - `chore`: Maintenance, cleanup
3. **Determine Scope**: Based on changed directories:
   - `web`: Changes in `apps/web/`
   - `backend`: Changes in `apps/backend/`
   - `types`: Changes in `packages/types/`
   - `root`: Root-level configuration files
   - Multiple scopes: `web,backend` if multiple apps affected
4. **Create Commit**: Following format `type(scope): subject`

## Examples

### Single App Feature
```bash
# Changes in apps/web/src/components/PropertyCard.tsx
# Suggested: feat(web): add property card component
```

### Bug Fix
```bash
# Changes in apps/backend/src/routes/auth.js
# Suggested: fix(backend): resolve CORS configuration issue
```

### Multi-App Changes
```bash
# Changes in apps/web/ and apps/backend/
# Suggested: feat(web,backend): add user authentication flow
```

### Test Changes
```bash
# Changes in apps/web/src/__tests__/
# Suggested: test(web): add unit tests for property search
```

### Documentation
```bash
# Changes in README.md, CLAUDE.md
# Suggested: docs: update project documentation
```

## Validation Rules
- Type must be from allowed list in .commitlintrc.json
- Subject cannot be empty
- Subject must not end with period
- Header must not exceed 100 characters
- Subject should be lowercase and descriptive

## Commit Message Format
```
<type>(<scope>): <subject>
```