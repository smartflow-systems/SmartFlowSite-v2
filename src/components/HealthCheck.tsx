import React, { useState, useEffect } from 'react'

export function HealthCheck() {
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  useEffect(() => {
    fetch('/health')
      .then(res => res.json())
      .then(data => setStatus(data.ok ? 'ok' : 'error'))
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="glass-card p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-sfs-beige/60">System Health</span>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            status === 'ok' ? 'bg-green-500' :
            status === 'error' ? 'bg-red-500' :
            'bg-yellow-500 animate-pulse'
          }`} />
          <span className="text-sm font-semibold text-sfs-gold">
            {status === 'ok' ? 'Online' : status === 'error' ? 'Offline' : 'Checking...'}
          </span>
        </div>
      </div>
    </div>
  )
}
