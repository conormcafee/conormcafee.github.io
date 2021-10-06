import React from 'react'
import Link from 'next/link'
import { HeaderLinks } from "./HeaderLinks"

export const Header:React.FC<{}> = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <Link href="/" passHref>
        <a className="text-green-900">Conor McAfee</a>
      </Link>

      <HeaderLinks />
    </header>
  )
}