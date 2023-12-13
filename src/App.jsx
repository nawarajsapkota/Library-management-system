import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
import AdminSignup from './pages/auth/AdminSignup'
import Books from './pages/books/Books'
import AddBook from './pages/books/AddBook'
import EditBooks from './pages/books/EditBooks'
import Clients from './pages/client/Clients'
import Dashboard from './pages/dashboard/Dashboard'
import History from './pages/history/History'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/reset-password' element={<ResetPassword />}></Route>
        <Route path='/admin-signup' element={<AdminSignup />}></Route>
        <Route path='/books' element={<Books />}></Route>
        <Route path='/add-book' element={<AddBook />}></Route>
        <Route path='/edit-books' element={<EditBooks />}></Route>
        <Route path='/clients' element={<Clients />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/history' element={<History />}></Route>
        
        
      </Routes>
      
    </>
  )
}

export default App
