import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main/Main'
import { UserProvider } from './context/UserContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Main />
    </UserProvider>
  </React.StrictMode>,
)
