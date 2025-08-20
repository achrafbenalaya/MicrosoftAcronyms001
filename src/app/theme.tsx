"use client";
import { useEffect, useState } from 'react';

export default function ThemeWrapper() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mq.matches ? 'dark' : 'light');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // This component only applies the theme class to <html>, it does not
  // accept or render children to avoid serializing interactive components
  // from the server into client component props (RSC restriction).
  return null;
}
