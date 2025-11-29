# SFS Genesis Template

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/smartflow-systems/sfs-genesis-template)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-blue)](https://react.dev/)

> The ultimate starting point for SmartFlow Systems applications. Production-ready, beautifully themed, and built with modern best practices.

![SFS Genesis Template](https://via.placeholder.com/1200x400/3B2F2F/FFD700?text=SFS+Genesis+Template)

## Features

### 🎨 **SmartFlow Systems Theme**
- Signature **Brown/Black/Gold** color palette
- **Glassmorphism UI** with backdrop blur effects
- **Animated circuit flow** background patterns
- **GitHub-style layout** with hamburger menu

### ⚡ **Modern Stack**
- **React 19** - Latest React with all new features
- **TypeScript 5** - Full type safety
- **Vite** - Lightning-fast build tooling
- **Tailwind CSS** - Utility-first styling
- **PostCSS** - Advanced CSS processing

### 🍔 **Responsive Layout**
- **Hamburger menu** with smooth animations
- **Sliding sidebar** navigation
- **Mobile-first** design with overlay
- **Desktop layout** with content shifting

### 🚀 **Production Ready**
- Health check endpoint
- CI/CD GitHub Actions ready
- Replit deployment configured
- Optimized build pipeline

## Quick Start

### 1. Installation

```bash
# Clone or copy this template
git clone https://github.com/smartflow-systems/sfs-genesis-template.git my-app
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see your app!

### 2. Create New App

```bash
# Copy the template
cp -r sfs-genesis-template my-awesome-app
cd my-awesome-app

# Update package.json
# Change "name" and "description" fields

# Start building!
npm install
npm run dev
```

## Project Structure

```
sfs-genesis-template/
├── src/
│   ├── components/
│   │   ├── Hamburger.tsx      # Hamburger menu button
│   │   ├── Sidebar.tsx         # Sliding sidebar navigation
│   │   ├── Logo.tsx            # SFS logo component
│   │   └── HealthCheck.tsx     # Health status indicator
│   ├── styles/
│   │   └── index.css           # Tailwind + SFS custom styles
│   ├── App.tsx                 # Main application
│   └── main.tsx                # React entry point
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind with SFS colors
├── vite.config.ts              # Vite configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## Available Scripts

```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## SFS Theme System

### Color Palette

```javascript
colors: {
  sfs: {
    black: '#0D0D0D',        // Deep black
    brown: '#3B2F2F',        // Rich brown
    gold: '#FFD700',         // Signature gold
    'gold-hover': '#E6C200', // Gold hover state
    beige: '#F5F5DC',        // Soft beige
  }
}
```

### CSS Classes

#### Glassmorphism
- `.glass-card` - Basic glass card with backdrop blur
- `.glass-card-hover` - Glass card with hover effects

#### Backgrounds
- `.sfs-gradient` - SFS brown/black gradient background
- `.circuit-bg` - Animated circuit flow background

#### Buttons
- `.sfs-button` - Gold button (solid)
- `.sfs-button-outline` - Gold outline button

#### Navigation
- `.nav-item` - Sidebar navigation item
- `.nav-item-active` - Active navigation item
- `.sidebar` - Sidebar container
- `.sidebar-open` - Sidebar visible state
- `.sidebar-closed` - Sidebar hidden state

## Components

### Hamburger Menu
```tsx
import { Hamburger } from './components/Hamburger'

<Hamburger isOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} />
```

### Sidebar
```tsx
import { Sidebar } from './components/Sidebar'

<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
```

### Logo
```tsx
import { Logo } from './components/Logo'

<Logo />
```

### Health Check
```tsx
import { HealthCheck } from './components/HealthCheck'

<HealthCheck />
```

## Customization

### Adding Navigation Items

Edit `src/components/Sidebar.tsx`:

```typescript
const navItems = [
  { icon: '🏠', label: 'Dashboard', href: '#dashboard' },
  { icon: '📊', label: 'Analytics', href: '#analytics' },
  { icon: '🚀', label: 'Your New Item', href: '#your-route' },
]
```

### Creating New Components

1. Create file in `src/components/YourComponent.tsx`:

```tsx
import React from 'react'

export function YourComponent() {
  return (
    <div className="glass-card p-6">
      <h2 className="text-2xl font-bold text-sfs-gold">Your Component</h2>
      <p className="text-sfs-beige/80">Component content here</p>
    </div>
  )
}
```

2. Import in `App.tsx`:

```tsx
import { YourComponent } from './components/YourComponent'

// Use in your JSX
<YourComponent />
```

### Modifying the Layout

The main layout in `App.tsx` uses:
- **Sidebar** - Sliding navigation
- **Header** - Top bar with hamburger menu
- **Main** - Content area (shifts when sidebar opens)
- **Footer** - Bottom section

## Deployment

### Replit

1. Create `server.js`:

```javascript
const express = require('express')
const app = express()

app.get('/health', (req, res) => res.json({ ok: true }))
app.use(express.static('dist'))

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`)
})
```

2. Update `package.json`:

```json
{
  "scripts": {
    "start": "node server.js",
    "build": "vite build"
  }
}
```

3. Build and run:

```bash
npm run build
npm start
```

### GitHub Actions

Create `.github/workflows/sfs-ci-deploy.yml`:

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

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to Replit
        env:
          REPLIT_TOKEN: ${{ secrets.REPLIT_TOKEN }}
        run: |
          # Add your Replit deployment commands here
```

## Health Check Endpoint

The template expects a `/health` endpoint that returns:

```json
{"ok": true}
```

This is used by the `HealthCheck` component to display system status.

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.0 | UI framework |
| TypeScript | 5.0 | Type safety |
| Vite | 7.x | Build tool |
| Tailwind CSS | 3.x | Styling |
| PostCSS | 8.x | CSS processing |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- ⚡ **Fast Dev Server** - HMR in <100ms
- 📦 **Optimized Build** - Code splitting & tree shaking
- 🎨 **CSS Optimization** - PurgeCSS removes unused styles
- 🖼️ **Asset Optimization** - Images and fonts optimized

## Contributing

This is a template repository for SmartFlow Systems. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - See [LICENSE](LICENSE) file for details

## Support

- **GitHub Issues**: [Report bugs](https://github.com/smartflow-systems/sfs-genesis-template/issues)
- **Documentation**: See `AGENTS.md` for detailed component docs
- **SmartFlow Systems**: [Main Website](https://github.com/smartflow-systems)

## Related Projects

- [SmartFlowSite](https://github.com/smartflow-systems/SmartFlowSite) - Main marketing site
- [SFSDataQueryEngine](https://github.com/smartflow-systems/SFSDataQueryEngine) - AI SQL query tool
- [SocialScaleBooster](https://github.com/smartflow-systems/SocialScaleBooster) - Social media automation
- [All SFS Projects](https://github.com/smartflow-systems)

---

**Built with 💛 by SmartFlow Systems**

[![SmartFlow Systems](https://img.shields.io/badge/SmartFlow-Systems-FFD700?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzNiMmYyZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZmlsbD0iI0ZGRDcwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0ZTPC90ZXh0Pjwvc3ZnPg==)](https://github.com/smartflow-systems)
