export const moodQuotes = {
    Happy: "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    Reflective: "We do not learn from experience... we learn from reflecting on experience. – John Dewey",
    Energetic: "The way to get started is to quit talking and begin doing. – Walt Disney",
    Calm: "Quiet the mind, and the soul will speak. – Buddha"
  };
  
  export const getMoodQuote = (mood) => {
    return moodQuotes[mood] || "Choose a mood to see an inspirational quote!";
  };
  