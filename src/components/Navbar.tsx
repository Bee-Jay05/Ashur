'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Poppins, Bruno_Ace_SC } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: '500', 
  variable: '--font-poppins' 
});

const bruno = Bruno_Ace_SC({
  subsets: ['latin'],
  weight: '400',
});


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Men', href: '/' },
    { name: 'Women', href: '/products' },
    { name: 'Kids', href: '/vendors' },
    { name: 'Categories', href: '/about' },
    { name: 'Brands', href: '/brands' },
  ];

  return (
    <header className={`${poppins.className} fixed top-0 z-50 w-full bg-white/90`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 grid grid-cols-8">
        
        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 items-center col-span-3">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-medium text-zinc-700 hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="/" className={`${bruno.className} text-3xl font-black tracking-wide text-zinc-900 col-span-2 text-center`} style={{ color: '#023047'}}>
          Ashur
        </Link>

        {/* Auth / Profile */}
        <div className="hidden md:flex gap-4 items-center col-span-3 ">
          <Link href="/login" className="text-sm font-medium text-zinc-700 hover:text-black ms-auto">Login</Link>
          <Link href="/register" className="px-4 py-2 text-white rounded-md text-sm hover:bg-[#011621] transition bg-[#023047]">Sign Up</Link>
        </div>

      </div>
    </header>
  );
}
