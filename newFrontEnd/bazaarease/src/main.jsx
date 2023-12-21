import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import HomeLayout from './layouts/HomeLayout';
import { MenusContextProvider } from './context/MenusContext'
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <MenusContextProvider>
        <App />
      </MenusContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
