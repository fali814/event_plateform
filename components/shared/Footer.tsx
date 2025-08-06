import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t py-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:justify-between md:text-left">
        <Link href="/" className="shrink-0">
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={98}
            height={38}
          />
        </Link>
        <p className="text-sm text-gray-600">2025 Evently. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
