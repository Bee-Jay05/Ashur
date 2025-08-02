// app/components/Navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
        Ashur
      </Link>
      <nav className="space-x-6 hidden md:flex">
        <Link href="/products">Shop</Link>
        <Link href="/vendors">Vendors</Link>
        <Link href="/about">About</Link>
      </nav>
      <div className="space-x-4">
        <Link href="/auth/login" className="text-sm">Login</Link>
        <Link href="/cart" className="text-sm">Cart 🛒</Link>
      </div>
    </header>
  );
}
