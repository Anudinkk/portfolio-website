"use client";

import React from "react";
import { useTheme } from "../providers/Theme Provider";// Corrected import path
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  // The useTheme hook now comes from your custom provider
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

