'use client';

import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '700', // Customize as needed
  variable: '--font-orbitron',
});

export default function Footer() {
  return (
    <div className={` py-16 !w-[95vw] w-12 mx-auto`}>
      <hr className='mb-12'/>
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/3">
          <h1 className={`${orbitron.className} text-7xl`} >ASHUR</h1>
          <h2 className={`text-gray-400 text-xs`}>Get Newsletter updates from upcoming product and best discount for them all</h2>
          <form className="mt-4 grid grid-cols-3 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="col-span-2 px-3 border-2 border-gray-300 focus:outline-none rounded-full"
            />
            <button
              type="submit"
              className="col-span-1 bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}