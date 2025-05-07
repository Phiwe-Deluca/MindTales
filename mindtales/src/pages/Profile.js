import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('User');

  return (
    <div style={styles.container}>
      <h1>Profile</h1>
      <p>Welcome, {username}!</p>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Change Name" />
    </div>
  );
};

const styles = {
  container: { padding: '2rem', textAlign: 'center' }
};

export default Profile;
