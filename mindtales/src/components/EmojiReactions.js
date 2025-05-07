import React, { useState } from 'react';

const EmojiReactions = () => {
  const emojis = ['😊', '😢', '🔥', '💡'];
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  return (
    <div>
      <h3>React with an Emoji</h3>
      {emojis.map(emoji => (
        <button key={emoji} onClick={() => setSelectedEmoji(emoji)}>{emoji}</button>
      ))}
      {selectedEmoji && <p>You reacted with: {selectedEmoji}</p>}
    </div>
  );
};

export default EmojiReactions;
