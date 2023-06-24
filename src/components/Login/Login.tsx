"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col text-white justify-center items-center bg-[#17A9FD] space-y-4">
      <Image 
        src="/hwork.png"
        width="400"
        height="400"
        alt="HWork.ai Logo"
      />
      <button 
      onClick={() => signIn("google")}
      className="animate-pulse">Masuk untuk menggunakan HWork.ai</button>
    </div>
  )
}

export default Login