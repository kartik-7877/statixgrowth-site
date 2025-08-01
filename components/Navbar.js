import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide">
          StatixGrowth
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/services" className="hover:text-blue-400">Services</Link>
          <Link href="/case-study" className="hover:text-blue-400">Case Studies</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 space-y-4 text-center text-base font-medium">
          <Link href="/" className="block hover:text-blue-400">Home</Link>
          <Link href="/about" className="block hover:text-blue-400">About</Link>
          <Link href="/services" className="block hover:text-blue-400">Services</Link>
          <Link href="/case-study" className="block hover:text-blue-400">Case Studies</Link>
          <Link href="/contact" className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}



