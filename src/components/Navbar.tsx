'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Think Software', href: '/software' },
  { name: 'Think Electronics', href: '/electronics' },
  { name: 'Think Hardware', href: '/hardware' },
  { name: 'Think Engineering', href: '/engineering' },
  { name: 'Think Labs', href: '/labs' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/60 dark:bg-[#0A0A0C]/60 backdrop-blur-xl z-50 border-b border-gray-200/30 dark:border-amber-600/10 supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-[#0A0A0C]/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
              Think Industries
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="group relative rounded-2xl px-6 py-2.5 text-sm font-semibold text-gray-900 dark:text-white"
          >
            <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-400/20 dark:to-amber-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <span className="relative z-10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">Contact Us</span>
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        {/* Semi-transparent backdrop */}
        <div 
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        
        {/* Mobile menu panel */}
        <div 
          className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/80 dark:bg-[#0A0A0C]/80 backdrop-blur-2xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
                Think Industries
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400 bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Navigation links */}
          <div className="mt-6 flow-root">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group -mx-3 block rounded-lg px-4 py-3.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-amber-500/10 dark:hover:bg-amber-600/10 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="text-amber-500 dark:text-amber-400 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </div>
                </Link>
              ))}
              
              {/* Contact button */}
              <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-amber-600/10">
                <Link
                  href="/contact"
                  className="group relative rounded-2xl px-6 py-3 text-base font-semibold text-gray-900 dark:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/10 dark:border-white/5 shadow-lg group-hover:shadow-xl transition-all duration-300" />
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-700/20 dark:from-amber-400/20 dark:to-amber-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="relative z-10 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-300">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 