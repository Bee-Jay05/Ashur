'use client';

import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '500', // Customize as needed
  variable: '--font-orbitron',
});

export default function Footer() {
  return (
    <div className={` py-16 !w-[95vw] w-12 mx-auto`}>
      <div className="w-1/2">
        <h1 className={orbitron.className} >ASHUR</h1>
        <h2 className={`text-gray-500`}>Get Newsletter updates from Ashur</h2>
      </div>
    </div>
  )
}