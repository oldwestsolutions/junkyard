'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--primary-color)] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-black [text-shadow:2px_2px_0px_#FFFFFF]">
              JUNKYARD CAR PARTS
            </Link>
          </div>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="retro-button p-2"
              title="Cart"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>
            <Link
              href="/profile"
              className="retro-button p-2"
              title="Profile"
            >
              <UserIcon className="h-6 w-6" />
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden retro-button p-2"
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/cart"
              className="block retro-button w-full text-center"
            >
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCartIcon className="h-5 w-5" />
                <span>CART</span>
              </div>
            </Link>
            <Link
              href="/profile"
              className="block retro-button w-full text-center"
            >
              <div className="flex items-center justify-center space-x-2">
                <UserIcon className="h-5 w-5" />
                <span>PROFILE</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 