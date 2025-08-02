'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/products' },
    { name: 'Vendors', href: '/vendors' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-zinc-900">
          Ashur
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 items-center">
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

        {/* Auth / Profile */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/login" className="text-sm font-medium text-zinc-700 hover:text-black">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-zinc-800 transition">Sign Up</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-zinc-200 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-200 px-4 py-3 space-y-2 shadow-sm">
          {navLinks.map(link => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block text-sm text-zinc-700 hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <Link href="/login" className="text-sm text-zinc-700 hover:text-black">Login</Link>
            <Link href="/register" className="text-sm font-medium text-white bg-black px-3 py-1.5 rounded-md hover:bg-zinc-800">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
