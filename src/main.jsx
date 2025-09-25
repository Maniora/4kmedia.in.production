import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

console.log('React app starting...')

const container = document.getElementById('root')
console.log('Container found:', container)

if (!container) {
  console.error('Root container not found!')
} else {
  const root = createRoot(container)
  console.log('Creating React root...')

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
  console.log('React app rendered!')
}


