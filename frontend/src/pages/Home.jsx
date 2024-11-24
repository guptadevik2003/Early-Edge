import Navigate from 'components/Navigate';
import { FaIcons } from 'react-icons/fa6';

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <div className='md:py-32 py-16 flex flex-col md:flex-row gap-20'>  
        <div className='basis-1/2'>
          <h1 className='md:text-6xl text-4xl font-medium'>Powerful data<br />insights for all</h1>
          <p className='py-10 md:mr-20 md:text-lg text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo fugiat sequi esse consequuntur. Aliquam ex dolore repellendus modi asperiores placeat laborum officiis culpa dignissimos voluptatem, voluptate aliquid sequi facere?</p>
          <div className='flex flex-col md:flex-row gap-3'>
            <Navigate href='/get-started' className='bg-accent text-center md:w-fit w-full font-medium text-screen-bg-black py-3 px-4 rounded-lg hover:opacity-80 transition-all duration-300'>Get started</Navigate>
            <Navigate href='#learn-more' target='_id' callback={() => document.getElementById('learn-more').scrollIntoView()} className='bg-card-bg-light-grey text-center md:w-fit w-full font-medium text-txt-white hover:text-opacity-80 py-3 px-4 rounded-lg hover:opacity-80 transition-all duration-300'>Learn more</Navigate>
          </div>
        </div>

        <div className='basis-1/2'>
          <img className='rounded-lg' src='/home-hero-image.avif' />
        </div>
      </div>

      {/* Learn More Section */}
      <div className='md:py-32 py-16' id='learn-more'>
        <h1 className='md:text-5xl text-3xl font-medium pb-10'>Take action from insights</h1>

        <div className='flex flex-col md:flex-row gap-4'>

          <div className='basis-1/2 flex flex-col gap-4'>
            <div className='basis-3/5 bg-card-bg-dark-grey rounded-lg p-8'>
              <FaIcons className='text-accent text-3xl' />
              <h1 className='text-3xl pb-10 md:pb-5 pt-10 md:pt-40'>Lorem ipsum dolor sit</h1>
              <p className='text-txt-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab quisquam mollitia a hic impedit.</p>
            </div>
            <div className='basis-2/5 bg-card-bg-dark-grey rounded-lg p-8'>
              <FaIcons className='text-accent text-3xl' />
              <h1 className='text-3xl pb-10 md:pb-5 pt-10 md:pt-10'>Lorem ipsum dolor sit</h1>
              <p className='text-txt-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab quisquam mollitia a hic impedit.</p>
            </div>
          </div>

          <div className='basis-1/2 flex flex-col gap-4'>
            <div className='basis-2/5 bg-card-bg-dark-grey rounded-lg p-8'>
              <FaIcons className='text-accent text-3xl' />
              <h1 className='text-3xl pb-10 md:pb-5 pt-10 md:pt-10'>Lorem ipsum dolor sit</h1>
              <p className='text-txt-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab quisquam mollitia a hic impedit.</p>
            </div>
            <div className='basis-3/5 bg-card-bg-dark-grey rounded-lg p-8'>
              <FaIcons className='text-accent text-3xl' />
              <h1 className='text-3xl pb-10 md:pb-5 pt-10 md:pt-40'>Lorem ipsum dolor sit</h1>
              <p className='text-txt-secondary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab quisquam mollitia a hic impedit.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
