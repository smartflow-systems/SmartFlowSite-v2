import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    ok: true,
    timestamp: new Date().toISOString(),
    service: 'SmartFlowSite',
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'production'
  })
})

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// SPA fallback - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log('🎨 SmartFlow Systems v2.0')
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 URL: http://localhost:${PORT}`)
  console.log(`💛 Built with the SFS brown/black/gold theme`)
})
