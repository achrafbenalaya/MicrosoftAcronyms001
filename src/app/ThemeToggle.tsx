"use client";
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = document.documentElement.className as 'light' | 'dark' | '';
    if (current) setTheme(current as 'light' | 'dark');
    else {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(mq.matches ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{ marginBottom: '1rem', padding: '0.5rem 1rem', borderRadius: 8, border: 'none', background: 'var(--primary)', color: 'var(--foreground)', cursor: 'pointer' }}
    >
      Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
