/* Loaded before CSS on every page to apply the chosen theme before first paint. */
(() => {
  'use strict';

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  let preference = null;

  const applyTheme = () => {
    const theme = preference || (systemPreference.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1b1522' : '#faf8fc');
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      const t = (key) => window.portfolioI18n?.t(key) || key;
      button.setAttribute('aria-label', t('Dark mode'));
      button.setAttribute('title', t(theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'));
    });
  };

  applyTheme();
  document.addEventListener('portfolio:language', applyTheme);

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.theme-toggle').forEach((button) => {
      button.hidden = false;
      button.addEventListener('click', () => {
        preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
        // Manual switching lasts for this page; new pages follow the device.
        applyTheme();
      });
    });
    applyTheme();
  });

  systemPreference.addEventListener('change', () => {
    preference = null;
    applyTheme();
  });
})();
