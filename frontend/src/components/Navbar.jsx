import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Navigate from 'components/Navigate';

export default function Navbar() {
  const [navbarShown, setNavbarShown] = useState(false);

  function showHideNavbar() {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('top-[-100%]');
    navLinks.classList.toggle('top-[8%]');
    navLinks.classList.toggle('border-b');
    setNavbarShown(prev => !prev);
  }

  return (
    <header className='bg-screen-bg-black'>
      <nav className='flex justify-between items-center h-[72px]'>

        {/* Brand logo */}
        <div className='flex items-center gap-10 bg-screen-bg-black h-[72px] z-40'>
          <div className='bg-screen-bg-black h-full flex items-center z-40'>
            <Navigate href='/' className='flex flex-row items-center gap-2 hover:opacity-80 transition-all duration-300' callback={navbarShown?showHideNavbar:()=>{}}>
              <img src='/icon-white.png' alt='Early Edge' className='h-8' />
              <h1 className='text-2xl font-medium'>Early Edge</h1>
            </Navigate>
          </div>

          {/* Navigation links */}
          <div className='nav-links md:static absolute left-0 top-[-100%] md:w-auto w-full flex px-5 transition-all translate-x-0 translate-y-0 delay-[50ms] duration-500 ease-in-out md:border-b-0 border-b-card-bg-light-grey md:pb-0 pb-2'>
            <ul className='md:w-full w-[86vw] md:py-1 py-8 flex md:flex-row flex-col md:items-center gap-1 font-medium mx-auto bg-screen-bg-black'>
              <li className='flex hover:bg-card-bg-dark-grey rounded-lg'>
                <Navigate className='text-txt-secondary py-2 px-3 rounded-lg hover:opacity-80 transition-all duration-300' href='/features' callback={showHideNavbar}>Features</Navigate>
              </li>
              <li className='flex hover:bg-card-bg-dark-grey rounded-lg'>
                <Navigate className='text-txt-secondary py-2 px-3 rounded-lg hover:opacity-80 transition-all duration-300' href='/about' callback={showHideNavbar}>About</Navigate>
              </li>
            </ul>
          </div>
        </div>

        {/* Get started button for laptop/PC devices */}
        <div className='flex items-center gap-6'>
          <Navigate href='/get-started' className='hidden md:block bg-accent font-medium text-screen-bg-black py-2 px-3 rounded-lg hover:opacity-80 transition-all duration-300'>Get started</Navigate>
        </div>

        {/* Navbar button for mobile devices */}
        <div className='md:hidden flex items-center gap-6'>
          {navbarShown ? (
            <FaXmark onClick={showHideNavbar} className='text-3xl cursor-pointer relative left-1 text-txt-white' />
          ) : (
            <FaBars onClick={showHideNavbar} className='text-3xl cursor-pointer relative left-1 text-txt-white' />
          )}
        </div>

      </nav>
    </header>
  );
}
