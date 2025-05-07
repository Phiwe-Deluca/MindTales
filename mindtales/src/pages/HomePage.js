import React from 'react';
import MoodSelector from '../components/MoodSelector';
import QuoteGenerator from '../components/QuoteGenerator';
import { useContext } from 'react';
import { MoodContext } from '../context/MoodContext';

const HomePage = () => {
  const { mood, setMood } = useContext(MoodContext);

  return (
    <>
      <div style={styles.container}>
        <h1>Welcome to My Blog</h1>
        <MoodSelector setMood={setMood} />
        <QuoteGenerator mood={mood} />
        <p>Explore blog posts and express yourself through your diary.</p>
      </div>
      <div className="mood-happy">
        <h1>Welcome to My Blog</h1>
      </div>
    </>
  );
};

const styles = {
  container: { padding: '2rem', textAlign: 'center' }
};

export default HomePage;
