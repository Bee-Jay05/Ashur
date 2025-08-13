'use client';

import { Orbitron, Bruno_Ace_SC } from 'next/font/google';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const orbitron = Orbitron({
  subsets: ['latin'],
  weight: '700', // Customize as needed
  variable: '--font-orbitron',
});

const bruno = Bruno_Ace_SC({
  subsets: ['latin'],
  weight: '400',
});

export default function Footer() {
  return (
    <div className={` py-16 mx-auto text-white relative mt-16`} style={{ backgroundColor: '#023047'}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 !w-[90vw] mx-auto mb-16">
        <div className='col-span-2'>
          <h1 className={`${bruno.className} text-5xl`}>Ashur</h1>
          <div className="w-full">
          <h2 className={`text-gray-400 text-base`}>Sign up for our <span className='text-white'>Newsletter</span></h2>
          <form className="mt-4 grid grid-cols-3 gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="col-span-2 px-3 border-2 border-gray-500 focus:outline-none focus:border-white rounded-full"
            />
            <button
              type="submit"
              className="col-span-1 bg-white text-black py-3 rounded-full hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        </div>
        <div></div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
            <li><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            <li><a href="/returns" className="text-gray-400 hover:text-white transition">Returns</a></li>
            <li><a href="/shipping" className="text-gray-400 hover:text-white transition">Shipping Info</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/cookies" className="text-gray-400 hover:text-white transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <hr className='w-[95vw] mx-auto text-gray-500'/>
      <div className='w-[90vw] flex justify-between items-center mx-auto mt-8'>
        <p className='text-gray-500 text-sm'>© 2023 Ashur. All rights reserved.</p>
        <div className='flex gap-8'>
          <a href="https://facebook.com" className="text-gray-400 hover:text-white transition"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white transition"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white transition"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
        </div>

      </div>
    </div>
  )
}