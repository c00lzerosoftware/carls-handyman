import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';

const basePath = process.env.NODE_ENV === 'production' ? '/carls-handyman' : '';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Carl's Handyman</h3>
            <div className="flex gap-1 text-yellow-400 mb-4">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              <span className="text-white ml-2">5.0 Rating</span>
            </div>
            <p className="text-gray-300">Quality home repair and improvement services in Denham Springs.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Home Repairs</li>
              <li>Deck Construction</li>
              <li>Fence Installation</li>
              <li>Kitchen & Bath Updates</li>
              <li>Painting</li>
              <li>Carpentry</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaPhone /> <a href="tel:2253240219" className="hover:text-primary-orange">(225) 324-0219</a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" /> 8033 Versailles Ave<br />Denham Springs, LA 70706
              </li>
              <li className="flex items-start gap-2">
                <FaClock className="mt-1" /> Mon-Fri: 7am-5pm
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Carl's Handyman and Home Repair. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
