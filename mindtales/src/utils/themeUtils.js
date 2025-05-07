export const themes = {
    light: {
      background: '#ffffff',
      color: '#000000'
    },
    dark: {
      background: '#181818',
      color: '#ffffff'
    },
    happy: {
      background: '#ffeb3b',
      color: '#333'
    },
    calm: {
      background: '#a0e7e5',
      color: '#222'
    },
    energetic: {
      background: '#ff4500',
      color: '#fff'
    },
    reflective: {
      background: '#2f4f4f',
      color: '#ddd'
    }
  };
  
  export const applyTheme = (theme) => {
    const selectedTheme = themes[theme] || themes.light;
    document.body.style.backgroundColor = selectedTheme.background;
    document.body.style.color = selectedTheme.color;
  };
  