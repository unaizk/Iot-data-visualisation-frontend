import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './index.css'
import LoginScreen from './screens/LoginScreen.jsx'
import SigninScreen from './screens/SigninScreen.jsx'
import AdminLogin from './screens/AdminLogin.jsx'
import AdminSignin from './screens/AdminSignin.jsx'
import store from './store.js';
import { Provider } from 'react-redux'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />} >
      {/*================================= user route handler========================================== */}
     
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/signin' element={<SigninScreen />} />
      
     {/*================================= admin route handler========================================== */}

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signin" element={<AdminSignin />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
