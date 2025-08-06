'use client';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="w-full border-b py-4">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/logo.svg"
            width={80}
            height={38}
            alt="Evently logo"
            className=" h-auto"
          />
        </Link>
        <SignedIn>
         <nav className="hidden md:flex w-full max-w-xs justify-between">
  <NavItems />
</nav>

        </SignedIn>
        {/* Right: Login button */}
      <div className="flex w-32 justify-end gap-3">
       <SignedIn>
        <UserButton afterSignOutUrl='/' />
        <MobileNav />
       </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
