import React from 'react'
import LoginForm from '../components/LoginForm'
import Logo from '../components/Logo'

export default function login() {
  return (
    <div className='flex justify-center flex-col'>
       <div className='bg-black flex justify-center py-4'>
       <Logo/>
       </div>
       <LoginForm/>
    </div>
  )
}
