import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './index.css'

const render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  }

  render()

  // Subscribe render to the store.