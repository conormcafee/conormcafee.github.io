import React from 'react'
import Link from 'next/link'

type HeaderLink = {
  label: string
  href: string
}

const links: HeaderLink[] = [
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
]

export const HeaderLinks:React.FC<{}> = () => {
  return (
    <nav className="flex items-center space-x-4">
      {links.map(({ label, href }) => (
        <Link href={href} key={href} passHref>
          <a className="font-bold">{label}</a>
        </Link>
      ))}
    </nav>
  )
}