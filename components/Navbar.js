import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          StatixGrowth
        </Link>
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/services" className="hover:text-blue-400">Services</Link>
          <Link href="/case-study" className="hover:text-blue-400">Case Studies</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link href="/" className="block hover:text-blue-400">Home</Link>
          <Link href="/about" className="block hover:text-blue-400">About</Link>
          <Link href="/services" className="block hover:text-blue-400">Services</Link>
          <Link href="/case-study" className="block hover:text-blue-400">Case Studies</Link>
        </div>
      )}
    </nav>
  );
}


