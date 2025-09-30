/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [isLoggedIn] = useState(false);
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
  }, []);

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
  console.log(user);
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent  dark:bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo/Brand */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>
                {me?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className='text-xl font-bold text-gray-900 dark:text-white hidden sm:block'>
              {me?.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full'></span>
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            <div>
              <ThemeToggle />
            </div>
            {user?.success ? (
              <Menu as='div' className='relative ml-3'>
                <MenuButton className='relative hover:cursor-pointer flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
                  <span className='absolute -inset-1.5' />
                  <span className='sr-only'>Open user menu</span>
                  <Image
                    alt='No Profile'
                    src={
                      me?.picture ||
                      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    }
                    width={48}
                    height={48}
                    className='size-10  rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10'
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10'
                >
                  <MenuItem>
                    <Link
                      href='/dashboard'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5'
                    >
                      Dashboard
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <button
                      onClick={handelSignOutBtn}
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 w-full text-left hover:cursor-pointer'
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <>
                <Link
                  href='/login'
                  className='text-gray-700 dark:text-gray-300 bg-blue-700 px-4 py-2 m font-medium transition-colors rounded-lg'
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
          >
            <svg
              className={`w-6 h-6 transition-transform duration-200 ${
                isOpen ? 'rotate-90' : ''
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
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className='py-4 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className='px-4 py-3 border-t border-gray-200 space-y-2'>
              {user.success ? (
                <div className='flex items-center space-x-3'>
                  <div className='w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center'>
                    <span className='text-white font-medium'>JD</span>
                  </div>
                  <div>
                    <p className='font-medium text-gray-900'>John Doe</p>
                    <button className='text-sm text-red-600 hover:text-red-700'>
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className='space-y-2'>
                  <Link
                    href='/login'
                    onClick={() => setIsOpen(false)}
                    className='block w-full text-center px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors'
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCard;
