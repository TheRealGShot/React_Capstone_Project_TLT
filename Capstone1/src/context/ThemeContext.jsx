import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function getUserKey() {
    try {
      const cu = JSON.parse(localStorage.getItem('currentUser')) || null;
      return cu && cu.email ? cu.email : 'guest';
    } catch (e) {
      return 'guest';
    }
  }

  // Load theme from localStorage on mount
  useEffect(() => {
    const userKey = getUserKey();
    const prefs = JSON.parse(localStorage.getItem('themePreferences') || '{}');
    const savedTheme = prefs[userKey] || 'light';
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  // Listen for auth changes
  useEffect(() => {
    const onAuth = () => {
      const userKey = getUserKey();
      const prefs = JSON.parse(localStorage.getItem('themePreferences') || '{}');
      const savedTheme = prefs[userKey] || 'light';
      setIsDarkMode(savedTheme === 'dark');
    };
    
    window.addEventListener('authChange', onAuth);
    return () => window.removeEventListener('authChange', onAuth);
  }, []);

  function toggleTheme() {
    const userKey = getUserKey();
    const prefs = JSON.parse(localStorage.getItem('themePreferences') || '{}');
    const newIsDark = !isDarkMode;
    prefs[userKey] = newIsDark ? 'dark' : 'light';
    localStorage.setItem('themePreferences', JSON.stringify(prefs));
    setIsDarkMode(newIsDark);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
