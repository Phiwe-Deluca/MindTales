import React, { createContext, useState } from 'react';

export const MoodContext = createContext();

const MoodProvider = ({ children }) => {
  const [mood, setMood] = useState('Happy'); // Default mood

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export default MoodProvider;
