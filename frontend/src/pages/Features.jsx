import { useEffect } from 'react';

export default function Features() {

  useEffect(() => {
    document.title = `Features - Early Edge`
  }, []);

  return (
    <div>
      <h1>Features Page</h1>
    </div>
  );
}
