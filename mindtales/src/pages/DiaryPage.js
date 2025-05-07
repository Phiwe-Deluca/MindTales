import React from 'react';
import DiaryEntry from '../components/DiaryEntry';

const DiaryPage = () => {
  return (
    <div style={styles.container}>
      <h1>My Diary</h1>
      <DiaryEntry />
    </div>
  );
};

const styles = {
  container: { padding: '2rem' }
};

export default DiaryPage;
