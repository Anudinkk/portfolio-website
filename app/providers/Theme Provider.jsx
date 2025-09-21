"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context with a default value of undefined.
const ThemeContext = createContext(undefined);

// Create a custom hook that checks if it's used within a provider.
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // This error is helpful for developers to ensure correct usage.
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// The ThemeProvider component
export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // This effect runs only once on the client after the component mounts.
  useEffect(() => {
    // Check localStorage for a saved theme.
    const storedTheme = localStorage.getItem('theme');
    // Check the user's system preference.
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set the theme based on storage, system preference, or default to 'light'.
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }
    
    // Mark the component as mounted after the initial theme is set.
    setMounted(true);
  }, []);

  // This effect applies the theme class to the HTML element whenever the theme changes.
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      // Remove the old theme class and add the new one.
      root.classList.remove(theme === 'dark' ? 'light' : 'dark');
      root.classList.add(theme);
      // Save the new theme preference to localStorage.
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // To prevent hydration mismatch errors, we avoid rendering the children on the server
  // or on the initial client render, before the correct theme has been determined.
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

