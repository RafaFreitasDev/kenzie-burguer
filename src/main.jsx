import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalReset } from './styles/reset'
import { GlobalStyle } from './styles/globalStyle'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset/>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
)
