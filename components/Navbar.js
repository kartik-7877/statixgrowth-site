export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Title */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-blue-400">
          StatixGrowth
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/services" className="hover:text-blue-400">Services</Link>
          <Link href="/casestudy" className="hover:text-blue-400">Case Studies</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Hamburger */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none" aria-label="Toggle navigation menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-gray-900 px-4 pt-2 pb-4 text-center text-base font-medium transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/" className="block py-2 hover:text-blue-400">Home</Link>
        <Link href="/about" className="block py-2 hover:text-blue-400">About</Link>
        <Link href="/services" className="block py-2 hover:text-blue-400">Services</Link>
        <Link href="/casestudy" className="block py-2 hover:text-blue-400">Case Studies</Link>
        <Link href="/contact" className="block py-2 hover:text-blue-400">Contact</Link>
      </div>
    </nav>
  );
}











