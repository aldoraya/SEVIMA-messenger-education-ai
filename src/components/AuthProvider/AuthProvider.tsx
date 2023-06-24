"use client"

import React from 'react'
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type props = {
    children: React.ReactNode;
    session: Session | null;
}

const AuthProvider = ({ children, session }: props) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider