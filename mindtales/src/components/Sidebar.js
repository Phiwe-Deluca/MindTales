import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h2>Quick Links</h2>
      <ul>
        <li><a href="/">Trending Posts</a></li>
        <li><a href="/mood">Change Mood</a></li>
        <li><a href="/diary">My Diary</a></li>
      </ul>
    </aside>
  );
};

const styles = {
  sidebar: { width: '250px', padding: '1rem', backgroundColor: '#f4f4f4' }
};

export default Sidebar;
