# 🚀 Deploy SmartFlowSite v2 to Replit

This guide shows you exactly how to deploy SmartFlowSite v2.0 to Replit.

---

## ✅ Prerequisites Complete

Your project is **READY TO DEPLOY** right now! All files are configured:

- ✅ `server.js` - Express server with health checks
- ✅ `.replit` - Replit configuration
- ✅ `replit.nix` - Node.js environment
- ✅ `package.json` - Start script configured
- ✅ Production build tested locally

---

## 🎯 Quick Deploy (3 Steps)

### Step 1: Import to Replit

**Option A: From GitHub (Recommended)**
1. Go to https://replit.com
2. Click **Create Repl**
3. Select **Import from GitHub**
4. Enter: `https://github.com/smartflow-systems/SmartFlowSite-v2`
5. Click **Import from GitHub**

**Option B: Upload Files**
1. Go to https://replit.com
2. Click **Create Repl**
3. Select **Node.js** template
4. Upload all files from `/home/garet/SFS/SmartFlowSite-v2/`

### Step 2: Configure Replit

Your `.replit` file is already configured! Replit will automatically:
- Install dependencies (`npm install`)
- Build the project (`npm run build`)
- Start the server (`npm start`)

**No manual configuration needed!**

### Step 3: Deploy

Click the **Run** button in Replit. That's it!

Your site will be live at: `https://your-repl-name.your-username.repl.co`

---

## 📋 Deployment Steps (Detailed)

### 1. Create New Repl

```
1. Visit https://replit.com
2. Click "+ Create Repl"
3. Choose "Import from GitHub"
4. Paste: https://github.com/smartflow-systems/SmartFlowSite-v2
5. Click "Import from GitHub"
6. Wait for import to complete
```

### 2. Verify Files

Make sure these files are present:

```
SmartFlowSite-v2/
├── .replit                 ✅ Replit config
├── replit.nix              ✅ Environment setup
├── server.js               ✅ Express server
├── package.json            ✅ Dependencies
├── dist/                   ✅ Build files (created on deploy)
├── src/                    ✅ Source code
└── index.html              ✅ Entry point
```

### 3. Environment Variables (Optional)

Set these in Replit Secrets if needed:

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (production/development)

**To add secrets:**
1. Click the lock icon (🔒) in left sidebar
2. Add key-value pairs
3. Click "Add new secret"

### 4. Build and Run

**Automatic (Recommended):**
- Just click "Run" button
- Replit runs the `.replit` config automatically
- Builds and starts the server

**Manual:**
```bash
# In Replit Shell
npm install
npm run build
npm start
```

### 5. Verify Deployment

Once running, test these endpoints:

```bash
# Health check
curl https://your-repl-url.repl.co/health

# Should return:
{
  "ok": true,
  "timestamp": "2025-11-29T...",
  "service": "SmartFlowSite",
  "version": "2.0.0"
}

# Main site
curl https://your-repl-url.repl.co/
# Should return HTML
```

---

## 🔧 Configuration Files Explained

### `.replit`
```ini
run = "npm start"                    # Start command
entrypoint = "server.js"              # Main file

[deployment]
run = ["sh", "-c", "npm install && npm run build && npm start"]
# Builds before starting
```

### `server.js`
```javascript
- Health check at GET /health
- Serves static files from dist/
- SPA fallback for React Router
- Listens on PORT (default 5000)
```

### `package.json`
```json
"scripts": {
  "start": "node server.js"           # Production server
  "build": "tsc -b && vite build"     # Build React app
  "dev": "vite"                        # Development mode
}
```

---

## 🎨 What Gets Deployed

**Production Build includes:**
- ✨ Minified JavaScript bundle
- 🎨 Optimized CSS (Tailwind + SFS theme)
- 💎 Glassmorphism components
- 🍔 Hamburger menu + sidebar
- 🔌 Circuit flow backgrounds
- 📱 Fully responsive layout

**Bundle Size:**
- `index.html` - 0.65 kB
- `index.css` - 0.91 kB
- `index.js` - 202 kB (gzipped: 63 kB)

**Total:** ~203 kB (optimized and fast!)

---

## 🐛 Troubleshooting

### Build Fails

**Error:** `TypeScript errors`
**Fix:** Remove unused React imports (already done in this project)

**Error:** `Tailwind PostCSS plugin not found`
**Fix:** Already installed `@tailwindcss/postcss`

### Server Won't Start

**Error:** `EADDRINUSE: address already in use`
**Fix:** Port is taken. Replit handles this automatically.

**Error:** `Cannot find module 'express'`
**Fix:** Run `npm install` in Replit shell

### Site Not Loading

**Problem:** Blank page
**Fix:** Check browser console. Likely missing `/dist` build files.
**Solution:** Run `npm run build` before `npm start`

**Problem:** 404 errors
**Fix:** Server not finding static files
**Solution:** Verify `dist/` folder exists and contains built files

---

## 📊 Performance Tips

### Optimize for Replit

1. **Keep Always On** (Paid feature)
   - Prevents cold starts
   - Site stays live 24/7

2. **Use Custom Domain** (Paid feature)
   - Professional URL
   - Better for clients

3. **Enable Boost** (Paid feature)
   - Faster performance
   - More resources

### Free Tier Limitations

- Repl sleeps after inactivity
- Slower cold starts
- Limited compute resources

**Workaround:** Use Replit's free "Always On" or UptimeRobot to ping site

---

## 🔄 Updating Deployment

### Method 1: Git Push (Recommended)

```bash
# On local machine
cd /home/garet/SFS/SmartFlowSite-v2

# Make changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Update site"
git push origin main

# In Replit
# Click "Pull" button in version control tab
# Or run: git pull origin main
# Then click "Run" to restart
```

### Method 2: Manual Upload

1. Edit files directly in Replit
2. Click "Run" to restart
3. Changes take effect immediately

---

## 🌐 Custom Domain Setup

### 1. Get Domain

Purchase from:
- Namecheap
- GoDaddy
- Cloudflare

### 2. Configure DNS

Add CNAME record:
```
Type: CNAME
Name: @ (or www)
Value: your-repl-name.your-username.repl.co
```

### 3. Enable in Replit

1. Open your Repl
2. Go to Settings → Domain
3. Enter your custom domain
4. Click "Link Domain"

---

## 📈 Monitoring

### Health Checks

Monitor your site with:

**UptimeRobot** (Free)
```
URL: https://your-repl.repl.co/health
Interval: 5 minutes
Method: GET
Expected: Status 200, JSON {"ok":true}
```

**Replit Built-in**
- Check "Logs" tab
- Monitor server output
- View error messages

### Analytics

Add to `index.html`:

**Google Analytics:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Plausible (Privacy-focused):**
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## ✅ Deployment Checklist

Before going live:

- [ ] Test locally (`npm start` works)
- [ ] Build succeeds (`npm run build`)
- [ ] Health check returns `{"ok":true}`
- [ ] All pages load correctly
- [ ] Mobile responsive (test on phone)
- [ ] Hamburger menu works
- [ ] Sidebar slides smoothly
- [ ] Circuit backgrounds animate
- [ ] Colors are brown/black/gold
- [ ] No console errors
- [ ] Fast load time (<3 seconds)

---

## 🎯 Quick Reference

### Commands

```bash
# Install dependencies
npm install

# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check health
curl http://localhost:5000/health
```

### URLs

**Local Development:**
- Dev: http://localhost:5174
- Production: http://localhost:5000

**Replit:**
- Your site: https://your-repl-name.your-username.repl.co
- Health: https://your-repl-name.your-username.repl.co/health

### Files to Never Delete

- `server.js` - Express server
- `.replit` - Replit config
- `replit.nix` - Environment
- `dist/` - Production build
- `package.json` - Dependencies

---

## 🆘 Need Help?

**Replit Issues:**
- https://ask.replit.com
- Community support
- Official documentation

**Project Issues:**
- GitHub: https://github.com/smartflow-systems/SmartFlowSite-v2/issues
- Check AGENTS.md for component docs
- Review README.md for features

---

## 🎉 You're Ready!

Your SmartFlowSite v2.0 is configured and ready to deploy to Replit!

**Quick Start:**
1. Import from GitHub
2. Click "Run"
3. Site goes live!

**That's it!** 🚀

---

**Built with 💛 by SmartFlow Systems**
**Last Updated:** 2025-11-29
