import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 5C16 5 9 9 9 16C9 23 16 27 16 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 5C16 5 23 9 23 16C23 23 16 27 16 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 27V31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-medium text-primary-600 dark:text-primary-400">Herbivista</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Your personal plant care assistant. Identify, diagnose, and care for your plants while earning rewards.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-400"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-400"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-primary-400"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Features</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/identify" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Plant Identification
                </Link>
              </li>
              <li>
                <Link to="/diagnose" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Plant Diagnosis
                </Link>
              </li>
              <li>
                <Link to="/my-plants" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Plant Collection
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Care Guides
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Community</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/community" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Forum
                </Link>
              </li>
              <li>
                <Link to="/community/experts" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Plant Experts
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-6 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Herbivista. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;