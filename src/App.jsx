import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import LandingPage from './pages/LandingPage'
import RequireAuth from './guard/RequireAuth'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard/>
        </RequireAuth>
        }/>
    </Routes>
    </>
  )
}
