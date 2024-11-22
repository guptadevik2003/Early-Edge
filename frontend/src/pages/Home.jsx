import Navigate from 'components/Navigate';

export default function Home() {
  return (
    <div>
      
      <h1>Home Page - Early Edge!</h1>

      <Navigate href='/get-started' className='underline bg-accent'>Get Started Page</Navigate>

    </div>
  );
}
