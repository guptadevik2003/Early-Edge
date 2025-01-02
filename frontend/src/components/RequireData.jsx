/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import useDataContext from 'context/DataContext';

export default function RequireData({ children }) {
  const { userData } = useDataContext();

  if(userData?.full_name) {
    return children || <Outlet />;
  } else {
    return window.open('/get-started', '_self');
  }
}
