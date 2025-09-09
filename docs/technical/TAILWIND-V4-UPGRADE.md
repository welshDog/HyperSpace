# Tailwind CSS v4 Upgrade Guide

## Overview
This document tracks the upgrade process from Tailwind CSS v3 to v4 across our monorepo.

## Apps & Packages to Update
- `apps/web`
- `apps/manga-manager`
- `packages/ui-components`

## Pre-upgrade Checklist
- [ ] Create Git branch for upgrade
- [ ] Verify Node.js v20+ is installed
- [ ] Back up current configuration files
- [ ] Document current customizations

## Upgrade Steps

### 1. Create Git Branch
```bash
git checkout -b feature/tailwind-v4-upgrade
```

### 2. Back Up Configuration Files
- [ ] `apps/web/tailwind.config.js`
- [ ] `apps/web/postcss.config.mjs`
- [ ] `apps/manga-manager/tailwind.config.ts`
- [ ] `apps/manga-manager/postcss.config.mjs`

### 3. Run Upgrade Tool
```bash
cd apps/web
npx @tailwindcss/upgrade

cd ../manga-manager
npx @tailwindcss/upgrade
```

### 4. Update PostCSS Configurations
Update each app's PostCSS config to use the new v4 plugin:

```javascript
// apps/web/postcss.config.mjs & apps/manga-manager/postcss.config.mjs
export default {
  plugins: ["@tailwindcss/postcss"],
}
```

### 5. CSS-First Configuration
Convert theme configurations to CSS-first approach:

```css
/* apps/web/app/globals.css & apps/manga-manager/src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Add custom theme variables here */
}
```

### 6. Update Dependencies
```bash
pnpm add -D @tailwindcss/cli @tailwindcss/vite
```

## Testing Checklist
- [ ] Development server starts successfully
- [ ] Styles render correctly
- [ ] HyperFocus Zone specific styles maintained
- [ ] Custom components display properly
- [ ] Responsive design works
- [ ] Dark mode functions correctly

## Rollback Plan
In case of issues:
1. Revert Git branch
2. Restore backed up config files
3. Reinstall previous dependencies

## Additional Notes
- Accessibility features must be maintained
- Custom dyslexia-friendly styles need verification
- Monitor build performance post-upgrade
