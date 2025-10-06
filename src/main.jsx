import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import emailjs from '@emailjs/browser'

console.log('React app starting...')

// Initialize EmailJS once at startup
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
if (!publicKey) {
  console.error('EmailJS public key missing: set VITE_EMAILJS_PUBLIC_KEY in .env')
} else {
  try {
    emailjs.init({ publicKey })
    console.log('EmailJS initialized')
  } catch (e) {
    console.error('Failed to initialize EmailJS:', e)
  }
}

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


