import React, { createContext, useState } from 'react';

export const DiaryContext = createContext();

const DiaryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <DiaryContext.Provider value={{ entries, addEntry }}>
      {children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;
