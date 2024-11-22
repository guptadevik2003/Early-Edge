/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState } from 'react';

const DataContext = createContext();

export default function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [inputData, setInputData] = useState(null);

  const value = {
    inputData,
    setInputData,
  }

  return (
    <DataContext.Provider value={value}>
      { children }
    </DataContext.Provider>
  );
}
