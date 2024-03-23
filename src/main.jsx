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
import { PrivateRouter } from './components/PrivateRouter.jsx';
import UserHomeScreen from './screens/UserHomeScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />} >
      {/*================================= user route handler========================================== */}
     
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/signin' element={<SigninScreen />} />
      {/*================================= Private Router========================================== */}
      <Route path="" element = {<PrivateRouter />}>
          <Route index={true} path='/' element={<UserHomeScreen />} />   
      </Route>
     {/*================================= admin route handler========================================== */}

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signin" element={<AdminSignin />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
)
