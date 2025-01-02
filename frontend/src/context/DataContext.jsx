/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export default function useDataContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [predictData, setPredictData] = useState(null);
  const [userData, setUserData] = useState(null);

  const saveUserData = async (newUserData) => {
    setIsLoading(true);
    setUserData(newUserData);
    await localStorage.setItem('userData', JSON.stringify(userData));
    setIsLoading(false);
  }

  const resetUserData = async () => {
    setIsLoading(true);
    setUserData(null);
    await localStorage.removeItem('userData');
    setIsLoading(false);
  }

  const loadDataOnRefresh = async () => {
    setIsLoading(true);
    try {
      let loadedUserData = await localStorage.getItem('userData');
      setUserData(JSON.parse(loadedUserData));
    } catch(err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadDataOnRefresh();
  }, []);

  const value = {
    userData,
    setUserData,
    predictData,
    setPredictData,
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
    saveUserData,
    resetUserData,
  };

  return (
    <DataContext.Provider value={value}>
      { children }
    </DataContext.Provider>
  );
}
