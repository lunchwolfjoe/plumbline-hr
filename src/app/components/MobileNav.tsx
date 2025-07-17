'use client';

import { useState } from 'react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-white p-2"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              <a 
                href="/services" 
                className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                ENTERPRISE WEAPONS
              </a>
              <a 
                href="/case-studies" 
                className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                WAR STORIES
              </a>
              <a 
                href="/about" 
                className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                THE PREDATOR
              </a>
              <a 
                href="/contact" 
                className="text-gray-300 hover:text-red-500 transition-colors font-semibold text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </a>
              <div className="border-t border-gray-800 pt-4 mt-4">
                <a
                  href="/contact"
                  className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  START TRANSFORMATION
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 