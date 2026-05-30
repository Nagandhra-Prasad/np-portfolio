import { createContext, useContext, useLayoutEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function applyTheme(theme) {
  const isDark = theme === 'dark';
  const root = document.documentElement;

  root.classList.toggle('dark', isDark);
  root.setAttribute('data-theme', theme);
  root.style.colorScheme = isDark ? 'dark' : 'light';

  try {
    localStorage.setItem('theme', theme);
  } catch {
    // ignore storage errors
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
