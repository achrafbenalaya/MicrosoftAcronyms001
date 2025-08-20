"use client";
import { useState, useEffect } from 'react';
import styles from './theme-toggle.module.css';

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

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className={styles.container}>
      <button
        className={`${styles.switch} ${theme === 'dark' ? styles.dark : styles.light}`}
        onClick={toggle}
        aria-pressed={theme === 'dark'}
        aria-label="Toggle theme"
      >
        <span className={styles.knob} />
      </button>
    </div>
  );
}
