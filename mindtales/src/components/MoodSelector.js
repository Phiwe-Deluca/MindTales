import React, { useState } from 'react';

const MoodSelector = ({ setMood }) => {
  const moods = ['Happy', 'Calm', 'Energetic', 'Reflective'];

  return (
    <div style={styles.container}>
      <h2>Select Your Mood</h2>
      {moods.map(mood => (
        <button key={mood} onClick={() => setMood(mood)} style={styles.button}>
          {mood}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: { padding: '1rem' },
  button: { margin: '0.5rem', padding: '0.5rem', cursor: 'pointer' }
};

export default MoodSelector;
