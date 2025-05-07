import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';
import EmojiReactions from 'C:/Users/tshep/Myprojects/MindTales/mindtales/src/components/EmojiReactions.js';

const PostPage = () => {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h1>Blog Post {id}</h1>
      <p>Here’s the detailed content of the blog post...</p>
      <Comments />
      <EmojiReactions />
    </div>
  );
};

const styles = {
  container: { padding: '2rem' }
};

export default PostPage;
