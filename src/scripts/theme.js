/* Loaded before CSS on every page to apply the chosen theme before first paint. */
(() => {
  'use strict';

  const storageKey = 'nahida-theme';
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let preference = null;

  const validTheme = (value) => value === 'light' || value === 'dark';
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (validTheme(saved)) preference = saved;
  } catch {
    // Storage can be disabled. Theme switching still works for this page.
  }

  const applyTheme = () => {
    const theme = preference || (systemPreference.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1b1522' : '#faf8fc');
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.setAttribute('aria-label', 'Dark mode');
      button.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  };

  applyTheme();

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => {
        preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try {
          window.localStorage.setItem(storageKey, preference);
        } catch {
          // Keep the in-memory choice when persistence is unavailable.
        }
        applyTheme();
      });
    });
    applyTheme();
  });

  systemPreference.addEventListener('change', () => {
    if (!preference) applyTheme();
  });

  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = validTheme(event.newValue) ? event.newValue : null;
    applyTheme();
  });
})();
