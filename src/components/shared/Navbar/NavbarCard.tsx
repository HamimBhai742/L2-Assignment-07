'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ThemeToggle } from '@/components/toggle/ThemeToggleBtn';
import { navLinks } from '.';
import { verifyUser } from '@/helpers/verifyUser';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { logout } from '@/helpers/logout';

const NavbarCard = ({ me }: { me: { name: string; picture: string } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState({ success: false });
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const me = await verifyUser();
        setUser(me);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setUser]);

  const handelSignOutBtn = async () => {
    try {
      const data = await logout();
      if (data?.success) {
        toast.success(data?.message);
        router.replace('/');
        setUser({ success: false });
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo/Brand */}
          <Link href='/' className='flex items-center space-x-3 group'>
            <div className='w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105'>
              <span className='text-white font-bold text-xl'>
                {me?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent sm:block'>
              {me?.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-2'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            <div className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors'>
              <ThemeToggle />
            </div>
            {user?.success ? (
              <Menu as='div' className='relative ml-3'>
                <MenuButton className='relative hover:cursor-pointer flex rounded-full ring-2 ring-transparent hover:ring-blue-500/30 transition-all duration-300'>
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>Open user menu</span>
                  <Image
                    alt='Profile'
                    src={
                      me?.picture ||
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    }
                    width={48}
                    height={48}
                    className='size-12 rounded-full bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300'
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className='absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl py-2 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in'
                >
                  <MenuItem>
                    <Link
                      href='/dashboard'
                      className='flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 data-focus:bg-blue-50 dark:data-focus:bg-blue-900/20 data-focus:text-blue-600 dark:data-focus:text-blue-400 rounded-lg mx-2 transition-colors'
                    >
                      <svg
                        className='w-4 h-4 mr-3'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z'
                        />
                      </svg>
                      Dashboard
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <button
                      onClick={handelSignOutBtn}
                      className='flex items-center   px-4 py-3 text-sm font-medium text-red-600 dark:text-red-400 data-focus:bg-red-50 dark:data-focus:bg-red-900/20 rounded-lg mx-2 transition-colors'
                    >
                      <svg
                        className='w-4 h-4 mr-3'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                        />
                      </svg>
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <Link
                href='/login'
                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300'
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className='py-6 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mt-4 shadow-2xl border border-gray-200/20 dark:border-gray-700/20'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block mx-4 px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isActive(link.href)
                    ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className='px-4 py-4 border-t border-gray-200/30 dark:border-gray-700/30 space-y-3'>
              {user.success ? (
                <div className='flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl'>
                  <Image
                    alt='Profile'
                    src={
                      me?.picture ||
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    }
                    width={48}
                    height={48}
                    className='size-12 rounded-full shadow-lg'
                  />
                  <div className='flex-1'>
                    <p className='font-semibold text-gray-900 dark:text-white'>
                      {me?.name}
                    </p>
                    <button
                      onClick={handelSignOutBtn}
                      className='text-sm font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors'
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  href='/login'
                  onClick={() => setIsOpen(false)}
                  className='block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCard;
