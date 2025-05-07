import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1>My Blog</h1>
      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/diary">Diary</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#333', color: '#fff' },
  navLinks: { listStyle: 'none', display: 'flex', gap: '1rem' }
};

export default Navbar;
