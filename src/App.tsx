
import { useState } from 'react'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from './components/ui/sonner'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="revenue-dashboard-theme">
      <Toaster />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App