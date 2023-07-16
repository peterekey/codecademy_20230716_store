import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './index.css'
import { store } from './app/store'

const render = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App 
        state={store.getState()}
        dispatch={store.dispatch}
      />
    </React.StrictMode>,
  )
  }

  render()

  // Subscribe render to the store.
  store.subscribe(render)