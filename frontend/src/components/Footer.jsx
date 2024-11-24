import Navigate from 'components/Navigate';

export default function Footer() {
  return (
    <footer className='bg-screen-bg-black'>

      {/* Get Started Image - Button */}
      <div className='relative md:h-[30rem] h-[25rem] bg-screen-bg-black'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-screen object-cover bg-center mix-blend-luminosity' style={{backgroundImage: 'linear-gradient(#000000bf, #000000bf), url(/footer-get-started-bg.avif)'}} />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full flex flex-col justify-center items-center text-center'>
          <h1 className='md:text-7xl text-4xl font-medium'>Ready to get started?</h1>
          <p className='md:text-3xl text-xl font-light md:py-8 py-12'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <Navigate href='/get-started' className='bg-accent w-fit font-medium text-screen-bg-black py-3 px-4 rounded-lg hover:opacity-80 transition-all duration-300'>Get started</Navigate>
        </div>
        </div>
      <div className='flex items-center flex-col md:pt-32 pt-16 pb-16'>

        {/* Brand logo */}
        <div>
          <Navigate href='/' className='flex flex-row items-center gap-2 hover:opacity-80 transition-all duration-300'>
            <img src='/icon-white.png' alt='Early Edge' className='h-10' />
            <h1 className='text-3xl font-medium'>Early Edge</h1>
          </Navigate>
        </div>

        {/* Navigation links */}
        <div className='py-16 grid md:grid-cols-4 grid-cols-2 gap-10 md:gap-20 text-center'>

          <div className='flex flex-col md:basis-1/4 basis-1/2 gap-3'>
            <h2 className='text-xl'>Explore</h2>
            <Navigate href='/' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>Home</Navigate>
            <Navigate href='/about' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>About</Navigate>
            <Navigate href='/features' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>Features</Navigate>
          </div>

          <div className='flex flex-col md:basis-1/4 basis-1/2 gap-3'>
            <h2 className='text-xl'>Links</h2>
            <Navigate href='https://github.com/guptadevik2003/Early-Edge' target='_blank' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>GitHub</Navigate>
            <Navigate href='https://linkedin.com/in/devikgupta' target='_blank' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>LinkedIn</Navigate>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
          </div>

          <div className='flex flex-col md:basis-1/4 basis-1/2 gap-3'>
            <h2 className='text-xl'>PLACEHOLDER</h2>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
          </div>

          <div className='flex flex-col md:basis-1/4 basis-1/2 gap-3'>
            <h2 className='text-xl'>PLACEHOLDER</h2>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
            <Navigate href='#' className='text-txt-muted hover:text-txt-secondary transition-all duration-300'>PLACEHOLDER</Navigate>
          </div>

        </div>

        {/* Copyright info */}
        <div className='text-center'>
          <p className='text-txt-muted font-medium'><span className='text-txt-secondary'>Copyright © 2024</span> | All Rights Reserved <span className='md:inline-block hidden'>|</span><br className='md:hidden' /><Navigate href='https://linkedin.com/in/devikgupta' target='_blank' className='hover:opacity-80 transition-all duration-300'> Designed & Developed by <span className='text-txt-secondary'>Devik Gupta</span></Navigate></p>
        </div>

      </div>
    </footer>
  );
}
