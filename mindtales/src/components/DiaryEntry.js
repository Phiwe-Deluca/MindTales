import React, { useState } from 'react';

const DiaryEntry = () => {
  const [entry, setEntry] = useState('');
  const handleSave = () => {
    localStorage.setItem('diaryEntry', entry);
    alert('Entry saved!');
  };

  return (
    <div style={styles.container}>
      <h2>Write in Your Diary</h2>
      <textarea value={entry} onChange={(e) => setEntry(e.target.value)} style={styles.textarea} />
      <button onClick={handleSave} style={styles.button}>Save Entry</button>
    </div>
  );
};

const styles = {
  container: { padding: '1rem' },
  textarea: { width: '100%', height: '150px', padding: '0.5rem' },
  button: { marginTop: '0.5rem', padding: '0.5rem', cursor: 'pointer' }
};

export default DiaryEntry;
