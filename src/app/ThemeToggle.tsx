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

  const buttonStyle = (active = false) => ({
    marginBottom: '1rem',
    marginRight: 8,
    padding: '0.5rem 1rem',
    borderRadius: 8,
    border: active ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.1)',
    background: active ? 'var(--primary)' : 'transparent',
    color: active ? 'white' : 'var(--foreground)',
    cursor: 'pointer',
  } as const);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        style={buttonStyle(theme === 'light')}
      >
        White Theme
      </button>
      <button
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        style={buttonStyle(theme === 'dark')}
      >
        Dark Mode
      </button>
    </div>
  );
}
