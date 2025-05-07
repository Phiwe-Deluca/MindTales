import React, { useState } from 'react';

const quotes = {
  Happy: "Happiness is not something ready made. It comes from your actions. – Dalai Lama",
  Reflective: "We do not learn from experience... we learn from reflecting on experience. – John Dewey",
  Energetic: "The way to get started is to quit talking and begin doing. – Walt Disney",
  Calm: "Quiet the mind, and the soul will speak. – Buddha"
};

const QuoteGenerator = ({ mood }) => {
  return <p>{quotes[mood] || "Select a mood for inspiration!"}</p>;
};

export default QuoteGenerator;
