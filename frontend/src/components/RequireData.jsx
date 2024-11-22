/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import useDataContext from 'context/DataContext';

export default function RequireData({ children }) {
  const { inputData } = useDataContext();

  if(inputData) {
    return children || <Outlet />;
  } else {
    return window.open('/get-started', '_self');
  }
}
