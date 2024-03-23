import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { useAdminLoginMutation } from '../slices/adminApiSlice';
import { adminSetCredentials } from '../slices/adminAuthSlice';
import Loader from '../components/Loader';
import {toast} from 'react-toastify'

const AdminLogin = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [ adminLogin, {isLoading}] = useAdminLoginMutation();
    const {adminInfo} = useSelector((state) => state.adminAuth)


    const handleRegisterClick = () => {
  
      navigate('/admin/signin');
  };


  const submitHandler = async() =>{
    try {
        const res = await adminLogin({email,password}).unwrap()
        dispatch(adminSetCredentials({...res}));
        navigate('/admin')
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  }

  useEffect(()=>{
    if(adminInfo){
      navigate('/admin')
    }
  },[navigate,adminInfo])

  return (
    <div className="flex min-h-full flex-col justify-center  py-16 lg:px-8 ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"> Admin Login in to your account</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            
          </div>
          <div className="mt-2">
            <input id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        {isLoading  && <Loader />}
        <div>
        <button onClick={submitHandler} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
  
        </div>
      </div>
  
      <div className="text-center mt-6">
            <p className="text-gray-600 text-sm">
              Not an Admin ? <span className="font-bold cursor-pointer text-black-100" onClick={handleRegisterClick}>Signin</span>
            </p>
      </div>
    </div>
  </div>
  )
}

export default AdminLogin