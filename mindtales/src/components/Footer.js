import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MindTales. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { textAlign: 'center', padding: '1rem', backgroundColor: '#222', color: '#fff' }
};

export default Footer;
