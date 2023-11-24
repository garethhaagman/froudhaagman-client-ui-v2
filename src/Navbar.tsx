import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute w-full bg-transparent text-white">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="text-white text-3xl font-semibold hover:text-gray-200">
              <i>FH</i>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button type="button" className="text-gray-200 hover:text-gray-300 focus:outline-none focus:text-gray-300" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="items-center md:flex">
          <div className="flex flex-col md:flex-row md:mx-6">
            <a href="/" className="my-1 text-sm leading-5 hover:text-gray-200 md:mx-4 md:my-0">
              Home
            </a>
            <a href="/services" className="my-1 text-sm leading-5 hover:text-gray-200 md:mx-4 md:my-0">
              Services
            </a>
            <a href="/about" className="my-1 text-sm leading-5 hover:text-gray-200 md:mx-4 md:my-0">
              About
            </a>
            <a href="/contact" className="my-1 text-sm leading-5 hover:text-gray-200 md:mx-4 md:my-0">
              Contact
            </a>
          </div>

          <div className="flex justify-center md:block">
            <a href="/login" className="relative inline-block text-sm leading-5 px-4 py-2 border border-transparent text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
