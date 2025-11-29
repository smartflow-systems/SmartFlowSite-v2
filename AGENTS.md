# AGENTS.md - SFS Genesis Template

## Overview
**SFS Genesis Template** is the master starting point for all SmartFlow Systems applications. It provides a complete, production-ready foundation with:

- ⚡ **React 19** + **TypeScript 5** + **Vite**
- 🎨 **SFS Theme**: Brown/Black/Gold signature colors
- 💎 **Glassmorphism UI**: Modern glass cards with backdrop blur
- 🔌 **Circuit Flow Background**: Animated circuit patterns
- 🍔 **GitHub-style Layout**: Hamburger menu + sliding sidebar
- 🚀 **Ready for Deployment**: Replit + GitHub Actions

## File Structure

```
sfs-genesis-template/
├── src/
│   ├── components/
│   │   ├── Hamburger.tsx      [Hamburger menu button]
│   │   ├── Sidebar.tsx         [Sliding sidebar navigation]
│   │   ├── Logo.tsx            [SFS logo component]
│   │   └── HealthCheck.tsx     [Health status indicator]
│   ├── styles/
│   │   └── index.css           [Tailwind + custom SFS styles]
│   ├── App.tsx                 [Main application component]
│   └── main.tsx                [React entry point]
├── tailwind.config.js          [Tailwind with SFS colors]
├── postcss.config.js           [PostCSS configuration]
├── vite.config.ts              [Vite configuration]
└── package.json                [Dependencies]
```

## Key Components

### Hamburger Menu (`src/components/Hamburger.tsx`)
- 3-line animated hamburger icon
- Transforms to X when sidebar is open
- Smooth CSS transitions

### Sidebar (`src/components/Sidebar.tsx`)
- Slides in from left
- Glass effect with backdrop blur
- Navigation items with icons
- Mobile: overlay (closes on click outside)
- Desktop: shifts content when open

### Logo (`src/components/Logo.tsx`)
- SFS gradient logo box
- Hover scale animation
- Signature brown/black/gold gradient

### HealthCheck (`src/components/HealthCheck.tsx`)
- Fetches `/health` endpoint
- Shows online/offline status
- Animated loading state

## SFS Theme System

### Color Palette
```js
colors: {
  sfs: {
    black: '#0D0D0D',
    brown: '#3B2F2F',
    gold: '#FFD700',
    'gold-hover': '#E6C200',
    beige: '#F5F5DC',
  }
}
```

### CSS Classes

**Glassmorphism:**
- `.glass-card` - Basic glass card
- `.glass-card-hover` - Glass card with hover effects

**Backgrounds:**
- `.sfs-gradient` - SFS brown/black gradient
- `.circuit-bg` - Animated circuit background

**Buttons:**
- `.sfs-button` - Gold button
- `.sfs-button-outline` - Gold outline button

**Navigation:**
- `.nav-item` - Sidebar navigation item
- `.nav-item-active` - Active navigation item

**Sidebar:**
- `.sidebar` - Sidebar container
- `.sidebar-open` - Sidebar visible state
- `.sidebar-closed` - Sidebar hidden state

## Creating New SFS Apps

To create a new app based on this template:

1. **Copy the template:**
   ```bash
   cp -r sfs-genesis-template my-new-app
   cd my-new-app
   ```

2. **Update package.json:**
   - Change `name` to your app name
   - Update `description`

3. **Customize App.tsx:**
   - Update title and content
   - Keep the layout structure
   - Maintain SFS theme

4. **Add your features:**
   - Create new components in `src/components/`
   - Use SFS CSS classes
   - Follow TypeScript best practices

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

## Health Check Endpoint

The app expects a `/health` endpoint that returns:
```json
{"ok": true}
```

For Replit deployment, create `server.js`:
```javascript
const express = require('express')
const app = express()

app.get('/health', (req, res) => res.json({ ok: true }))
app.use(express.static('dist'))

app.listen(process.env.PORT || 5000)
```

## CI/CD Integration

Add `.github/workflows/sfs-ci-deploy.yml` for automated deployment:
```yaml
name: SFS CI/CD

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      # Add Replit deployment steps
```

## Important Notes for AI Agents

### VERIFY Before Changes
- Always read existing files before modifying
- Maintain SFS color scheme (#0D0D0D, #3B2F2F, #FFD700)
- Keep glassmorphism design patterns
- Preserve responsive layout behavior

### Component Patterns
- All components use TypeScript with proper interfaces
- CSS classes from `styles/index.css`
- State management with React hooks
- Accessible components (ARIA labels, semantic HTML)

### File Modifications
- **DO**: Use Edit tool for existing files
- **DO**: Create new components in `src/components/`
- **DON'T**: Remove core components (Hamburger, Sidebar, Logo)
- **DON'T**: Change SFS color scheme

### Testing Changes
```bash
npm run dev          # See changes live
npm run build        # Test production build
```

## Common Customizations

### Adding Navigation Items
Edit `src/components/Sidebar.tsx`:
```typescript
const navItems = [
  { icon: '🏠', label: 'Dashboard', href: '#dashboard' },
  { icon: '📊', label: 'Analytics', href: '#analytics' },
  // Add your items here
]
```

### Changing Colors
Edit `tailwind.config.js` (NOT recommended - breaks SFS branding):
```javascript
colors: {
  sfs: {
    // Only modify if creating non-SFS branded app
  }
}
```

### Adding Features
1. Create component in `src/components/YourComponent.tsx`
2. Import in `App.tsx`
3. Use SFS CSS classes
4. Maintain responsive design

## Deployment Checklist

- [ ] Update `package.json` name and description
- [ ] Test build: `npm run build`
- [ ] Create health check endpoint
- [ ] Add environment variables to Replit
- [ ] Configure GitHub Actions workflow
- [ ] Test on mobile and desktop
- [ ] Verify glassmorphism effects work
- [ ] Check sidebar animation is smooth

## Support & Documentation

- GitHub: https://github.com/smartflow-systems/sfs-genesis-template
- Main Site: https://github.com/smartflow-systems/SmartFlowSite
- Organization: https://github.com/smartflow-systems

---

**Version:** 1.0.0
**Last Updated:** 2025-11-28
**Maintainer:** SmartFlow Systems (boweazy)
