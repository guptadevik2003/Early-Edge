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
  const [userData, setUserData] = useState(null);
  const [predictData, setPredictData] = useState(null);

  const saveUserData = async (newUserData) => {
    setIsLoading(true);
    setUserData(newUserData);
    await localStorage.setItem('userData', JSON.stringify(newUserData));
    setIsLoading(false);
  }

  const savePredictData = async (newPredictData) => {
    setIsLoading(true);
    setPredictData(newPredictData);
    await localStorage.setItem('predictData', JSON.stringify(newPredictData));
    setIsLoading(false);
  }

  const resetAllData = async () => {
    setIsLoading(true);
    setUserData(null);
    setPredictData(null);
    await localStorage.removeItem('userData');
    await localStorage.removeItem('predictData');
    setIsLoading(false);
  }

  const loadDataOnRefresh = async () => {
    setIsLoading(true);
    try {
      let loadedUserData = await localStorage.getItem('userData');
      let loadedPredictData = await localStorage.getItem('predictData');
      setUserData(JSON.parse(loadedUserData));
      setPredictData(JSON.parse(loadedPredictData))
    } catch(err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    loadDataOnRefresh();
  }, []);

  const value = {
    isLoading,
    setIsLoading,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    predictData,
    setPredictData,
    saveUserData,
    savePredictData,
    resetAllData,
  };

  return (
    <DataContext.Provider value={value}>
      { children }
    </DataContext.Provider>
  );
}
