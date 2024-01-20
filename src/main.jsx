import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './routes/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage'
import Commands from './routes/Commands'
import Server from './routes/Server'
import GeneralCategory from './components/categories/GeneralCategory'
import AdminCategory from './components/categories/AdminCategory'
import ModerationCategory from './components/categories/ModerationCategory'
import EconomyCategory from './components/categories/EconomyCategory'
import FunCategory from './components/categories/FunCategory'
import MusicCategory from './components/categories/MusicCategory'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/commands',
    element: <Commands />,
    children: [
      {
        path: 'general',
        element: <GeneralCategory />,
      },
      {
        path: 'admin',
        element: <AdminCategory />,
      },
      {
        path: 'moderation',
        element: <ModerationCategory />,
      },
      {
        path: 'economy',
        element: <EconomyCategory />,
      },
      {
        path: 'fun',
        element: <FunCategory />,
      },
      {
        path: 'music',
        element: <MusicCategory />,
      },
    ]
  },
  {
    path: '/server',
    element: <Server />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
