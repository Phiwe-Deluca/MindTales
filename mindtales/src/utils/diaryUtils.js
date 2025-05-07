export const saveDiaryEntry = (entry) => {
    const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.push({ text: entry, date: new Date().toLocaleString() });
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  };
  
  export const getDiaryEntries = () => {
    return JSON.parse(localStorage.getItem('diaryEntries')) || [];
  };
  