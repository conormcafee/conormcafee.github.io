import React from 'react'
import { Header } from "@/components/header"

interface PrimaryLayoutInterface {
  children: JSX.Element
}

export const PrimaryLayout:React.FC<PrimaryLayoutInterface> = ({ children }) => {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10">
      <Header />
      {children}
    </main>
  )
}