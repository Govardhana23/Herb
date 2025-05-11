import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, User, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';

const Header: React.FC = () => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { points, level } = useUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/identify', label: 'Identify' },
    { path: '/my-plants', label: 'My Plants' },
    { path: '/diagnose', label: 'Diagnose' },
    { path: '/learn', label: 'Learn' },
    { path: '/community', label: 'Community' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 shadow-sm backdrop-blur dark:bg-gray-900 dark:bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
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
          </div>

          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-2 py-1 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-2">
              <div className="flex items-center space-x-1 rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                <span>Lvl {level}</span>
                <span>•</span>
                <span>{points} XP</span>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-primary-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-primary-400"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-primary-50 text-primary-600 dark:bg-gray-800 dark:text-primary-400'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex items-center space-x-2 px-3 py-2">
              <User size={18} />
              <div className="flex items-center space-x-1 text-sm">
                <span>Level {level}</span>
                <span>•</span>
                <span>{points} XP</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;