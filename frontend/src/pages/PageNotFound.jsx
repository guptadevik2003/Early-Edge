import { useEffect } from 'react';

export default function PageNotFound() {

  useEffect(() => {
    document.title = `Page Not Found - Early Edge`
  }, []);

  return (
    <div>
      <h1>The page you're looking for is not found!</h1>
    </div>
  );
}
