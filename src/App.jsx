import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <>
      {isAdmin ? <AdminHeader /> : <Header /> }
      <Outlet />
    </>
  )
}

export default App
