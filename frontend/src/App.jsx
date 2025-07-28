import React from 'react'
import { BrowserRouter, Routes, Route, Navigation, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to='/login' />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <route path='/' element={<ProtectedRoute> <Home /></ProtectedRoute>} />
          <route path='/logim' element={<Login />} />
          <route path='/register' element={<Register />} />
          <route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App