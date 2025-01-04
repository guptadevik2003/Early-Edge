/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import useDataContext from 'context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function RequireData({ children }) {
  const { userData, predictData, isLoading } = useDataContext();
  const navigate = useNavigate();

  if(isLoading) {
    return <div className='w-[92%] mx-auto h-[90vh] flex justify-center items-center'>
      <h1 className='text-card-bg-light-grey text-5xl font-bold animate-bounce'>EARLY EDGE</h1>
    </div>
  }

  if(userData != null && predictData != null) {
    return children || <Outlet />;
  } else {
    return navigate('/get-started');
  }
}
