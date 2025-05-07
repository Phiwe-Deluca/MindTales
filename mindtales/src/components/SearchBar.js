import React, { useState } from 'react';

const SearchBar = ({ searchFunction }) => {
  const [query, setQuery] = useState('');

  return (
    <div style={styles.container}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <button onClick={() => searchFunction(query)}>Search</button>
    </div>
  );
};

const styles = {
  container: { padding: '1rem', display: 'flex', gap: '0.5rem' }
};

export default SearchBar;
