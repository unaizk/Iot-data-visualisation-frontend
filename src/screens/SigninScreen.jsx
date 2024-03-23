import React from 'react'
import Loader from '../components/Loader';
import {toast} from 'react-toastify'
import { setCredentials } from '../slices/authSlice';
import { useRegisterMutation } from '../slices/userApiSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";

const SigninScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [password,setPassword] =useState('')
  const [confirmPassword,setConfirmPassword] =useState('')

  const [register,{isLoading}] = useRegisterMutation();
  const {userInfo} = useSelector((state)=>state.auth);

  useEffect(()=>{
    if(userInfo){
        navigate('/')
    }
  },[navigate,userInfo])

  const handleLoginClick = () => {
    navigate('/login');
  };

  const submitHandler = async()=>{
  
    if(password !== confirmPassword){
        toast.error('Password do not match')
    }else{
        try {
            const res = await register({name,email,password}).unwrap();
            dispatch(setCredentials({...res}))
            navigate('/')
        } catch (err) {
            toast.error(err?.data|| err.error );
        }
    }
  }


  return (
    <div className="flex flex-col justify-center items-center h-full  py-16 lg:px-8 ">

    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="space-y-6" >
      <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input id="text" name="text"  value={name} onChange={(e) => setName(e.target.value)} type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            
          </div>
          <div className="mt-2">
            <input id="onfirpassword" name="password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        {isLoading  && <Loader />}
        <div>
        <button type="submit" onClick={submitHandler} className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
  
        </div>
      </div>
  
      <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Already have an account ? <span className="font-bold cursor-pointer" onClick={handleLoginClick}>Login</span>
          </p>
        </div>
    </div>
  </div>
  )
}

export default SigninScreen