import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {ToastContainer} from 'react-toastify';
import {Outlet} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin')

  return (
    <>
      {isAdmin ? <AdminHeader /> : <Header /> }
      <ToastContainer style={{marginTop : '75px'}} />
      <Outlet />

    </>
  )
}

export default App
