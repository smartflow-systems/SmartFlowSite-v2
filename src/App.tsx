import React, { useState } from 'react'
import { Logo } from './components/Logo'
import { HealthCheck } from './components/HealthCheck'
import { Hamburger } from './components/Hamburger'
import { Sidebar } from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen circuit-bg sfs-gradient">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className={`main-content min-h-screen ${sidebarOpen ? 'lg:content-shifted' : ''}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-20 glass-card border-b border-sfs-brown/40">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Hamburger isOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)} />
                <h1 className="text-xl font-bold text-sfs-gold hidden sm:block">
                  SmartFlow Systems
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <button className="sfs-button-outline px-4 py-2 text-sm">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section id="home" className="text-center mb-16">
            <Logo />
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-sfs-gold via-sfs-beige to-sfs-gold bg-clip-text text-transparent text-glow">
              SmartFlow Systems
            </h1>
            <p className="text-2xl text-sfs-beige/90 mb-4">
              Enterprise SaaS Solutions & Digital Services
            </p>
            <p className="text-lg text-sfs-beige/70 max-w-3xl mx-auto">
              Powering your business with cutting-edge AI, automation, and data intelligence.
              26+ integrated solutions for modern enterprises.
            </p>
          </section>

          {/* Our Solutions */}
          <section id="solutions" className="mb-16">
            <h2 className="text-4xl font-bold text-center text-sfs-gold mb-12">Our Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card-hover p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-sfs-gold mb-2">Data & Analytics</h3>
                <p className="text-sfs-beige/70 mb-3">AI-powered data analysis, natural language SQL, and web scraping intelligence</p>
                <ul className="text-sm text-sfs-beige/60 space-y-1">
                  <li>• SFSDataQueryEngine</li>
                  <li>• DataScrapeInsights</li>
                  <li>• Analytics Engine</li>
                </ul>
              </div>

              <div className="glass-card-hover p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-sfs-gold mb-2">Social Media</h3>
                <p className="text-sfs-beige/70 mb-3">Multi-platform automation, AI content creation, and growth tools</p>
                <ul className="text-sm text-sfs-beige/60 space-y-1">
                  <li>• SocialScaleBooster</li>
                  <li>• AI Social Bot Platform</li>
                  <li>• Marketing Toolkit</li>
                </ul>
              </div>

              <div className="glass-card-hover p-6">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold text-sfs-gold mb-2">Business Management</h3>
                <p className="text-sfs-beige/70 mb-3">CRM, booking systems, project management, and invoicing solutions</p>
                <ul className="text-sm text-sfs-beige/60 space-y-1">
                  <li>• Business Suite</li>
                  <li>• Booking Platform</li>
                  <li>• Invoice & Billing</li>
                </ul>
              </div>

              <div className="glass-card-hover p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-sfs-gold mb-2">Design & Content</h3>
                <p className="text-sfs-beige/70 mb-3">Video hosting, website builders, and content management systems</p>
                <ul className="text-sm text-sfs-beige/60 space-y-1">
                  <li>• Website Builder</li>
                  <li>• Video Platform</li>
                  <li>• Knowledge Base</li>
                </ul>
              </div>

              <div className="glass-card-hover p-6">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-sfs-gold mb-2">AI & Automation</h3>
                <p className="text-sfs-beige/70 mb-3">Intelligent assistants, workflow automation, and AI-powered tools</p>
                <ul className="text-sm text-sfs-beige/60 space-y-1">
                  <li>• AI Companion Bot</li>
                  <li>• Automation Workflows</li>
                  <li>• Smart Integrations</li>
                </ul>
              </div>

              <div className="glass-card-hover p-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-sfs-gold mb-2">Developer Tools</h3>
                <p className="text-sfs-beige/70 mb-3">SDKs, APIs, deployment tools, and infrastructure solutions</p>
                <ul className="text-sm text-sfs-beige/60 space-y-1">
                  <li>• Embed SDK</li>
                  <li>• Deploy Hub</li>
                  <li>• Core Services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Health Check */}
          <div className="max-w-md mx-auto mb-16">
            <HealthCheck />
          </div>

          {/* CTA Section */}
          <section id="contact" className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold text-sfs-gold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-sfs-beige/80 mb-8 max-w-2xl mx-auto">
              Join leading enterprises using SmartFlow Systems to automate, analyze, and accelerate growth.
              Let's build something extraordinary together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="sfs-button">
                Schedule Demo
              </button>
              <button className="sfs-button-outline">
                View All Solutions
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="glass-card border-t border-sfs-brown/40 mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-sfs-beige/60">
            <p>Built with 💛 by SmartFlow Systems</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
