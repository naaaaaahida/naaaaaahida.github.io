/* Progressive enhancements. Navigation, content, and project links work without JS. */
(() => {
  'use strict';

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const mobileLayout = window.matchMedia('(max-width: 860px)');

  if (toggle && navigation) {
    toggle.hidden = false;
    document.documentElement.classList.add('has-menu');

    const setMenu = (open, returnFocus = false) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.menu-toggle-label').textContent = open ? 'Close' : 'Menu';
      navigation.classList.toggle('is-open', open);
      navigation.toggleAttribute('inert', mobileLayout.matches && !open);
      if (open) navigation.querySelector('a')?.focus();
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    navigation.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(false);
      // Move focus out of the collapsed menu to the chosen section.
      if (wasOpen && link.hash) {
        const destination = document.getElementById(link.hash.slice(1));
        if (destination) {
          destination.setAttribute('tabindex', '-1');
          destination.focus({ preventScroll: true });
        }
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.nav-wrap')) setMenu(false);
    });
    document.addEventListener('focusin', (event) => {
      if (!event.target.closest('.nav-wrap')) setMenu(false);
    });
    mobileLayout.addEventListener('change', () => setMenu(false));
    setMenu(false);
  }

  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
  const sections = sectionLinks.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sectionLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  if (copyButton && copyStatus && window.isSecureContext && navigator.clipboard?.writeText) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('nahidazmn@gmail.com');
        copyStatus.textContent = 'Email address copied to clipboard.';
        copyButton.textContent = 'Email copied ✓';
      } catch {
        copyStatus.textContent = 'Could not copy. You can select the email address above.';
        copyButton.textContent = 'Copy unavailable';
      }
    });
  }
})();
