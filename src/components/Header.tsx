'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaBars, FaTimes, FaStar } from 'react-icons/fa';

const basePath = process.env.NODE_ENV === 'production' ? '/carls-handyman' : '';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Free Estimate', href: '/estimate' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-primary-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link href="/" className="text-2xl font-bold block">Carl's Handyman</Link>
            <div className="flex gap-1 text-yellow-400 text-sm">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
          </div>
          <div className="hidden lg:block">
            <a href="tel:2253240219" className="flex items-center gap-2 text-xl font-semibold hover:text-primary-orange transition">
              <FaPhone />
              (225) 324-0219
            </a>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-2xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="hidden lg:block border-t border-blue-700">
          <ul className="flex items-center justify-center gap-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link href={`${basePath}${item.href}`} className="block px-4 py-3 hover:bg-primary-orange transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-blue-700">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={`${basePath}${item.href}`} className="block px-4 py-2 hover:bg-primary-orange transition rounded" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-2">
                <a href="tel:2253240219" className="flex items-center gap-2 text-primary-orange font-semibold text-xl">
                  <FaPhone /> (225) 324-0219
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
