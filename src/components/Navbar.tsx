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
    <header className="fixed w-full bg-white/60 dark:bg-[#17171C]/60 backdrop-blur-xl z-50 border-b border-gray-200/30 dark:border-amber-600/10 supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-[#17171C]/40">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400 transition-all duration-300 relative group"
            >
              <span className="relative">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 dark:bg-amber-400 origin-bottom transform translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/contact" 
            className="relative group text-sm font-semibold leading-6 text-amber-500 dark:text-amber-400"
          >
            <span className="relative z-10 px-4 py-2 bg-gray-50/50 dark:bg-gray-800/50 border border-amber-500/20 dark:border-amber-600/20 rounded-md group-hover:bg-gray-50/80 dark:group-hover:bg-gray-800/80 group-hover:border-amber-500/40 dark:group-hover:border-amber-600/40 backdrop-blur-sm transition-all">
              Contact Us
            </span>
            <div className="absolute -inset-x-2 -inset-y-1 bg-amber-500/10 dark:bg-amber-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/80 dark:bg-[#17171C]/80 backdrop-blur-2xl px-6 py-6 sm:max-w-sm border-l border-gray-200/30 dark:border-amber-600/10 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#17171C]/60">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 bg-clip-text text-transparent">
                Think Industries
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-600 hover:text-amber-500 dark:text-gray-400 dark:hover:text-amber-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200/30 dark:divide-amber-600/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:text-amber-500 dark:text-gray-300 dark:hover:text-amber-400 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 relative overflow-hidden transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10 block transform group-hover:translate-y-0 transition-transform duration-300">
                      {item.name}
                    </span>
                    <div className="absolute inset-0 bg-amber-500/10 dark:bg-amber-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="group -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-amber-500 dark:text-amber-400 relative"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="relative z-10 block text-center bg-gray-50/50 dark:bg-gray-800/50 border border-amber-500/20 dark:border-amber-600/20 rounded-md py-2 group-hover:bg-gray-50/80 dark:group-hover:bg-gray-800/80 group-hover:border-amber-500/40 dark:group-hover:border-amber-600/40 backdrop-blur-sm transition-all">
                    Contact Us
                  </span>
                  <div className="absolute inset-0 bg-amber-500/10 dark:bg-amber-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 