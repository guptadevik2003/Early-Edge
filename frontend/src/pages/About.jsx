import { useEffect } from 'react';

export default function About() {

  useEffect(() => {
    document.title = `About - Early Edge`
  }, []);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
