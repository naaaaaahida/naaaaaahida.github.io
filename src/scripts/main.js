/* Progressive enhancements. Navigation, content, and project links work without JS. */
(() => {
  'use strict';
  const t = (key) => window.portfolioI18n?.t(key) || key;

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  // A single greeting on each document load; the accessible name stays Bina.
  const lastName = document.querySelector('.hero-last-name');
  const extraLetters = lastName?.querySelector('.name-extra');
  const nameMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const greet = async () => {
    if (!extraLetters || nameMotion.matches || !extraLetters.animate) return;
    if (document.fonts) await document.fonts.ready;
    if (nameMotion.matches) return;

    extraLetters.hidden = false;
    const title = lastName.closest('h1');
    const firstName = title.querySelector('.hero-name-first');
    const targetWidth = Math.min(firstName.getBoundingClientRect().width, title.clientWidth - 8);
    const baseWidth = lastName.getBoundingClientRect().width;
    // Measure the loaded font and add as many a's as fit beneath the first line.
    extraLetters.textContent = 'a';
    extraLetters.style.width = 'auto';
    const letterWidth = extraLetters.getBoundingClientRect().width;
    const count = letterWidth > 0 ? Math.max(0, Math.min(40, Math.floor((targetWidth - baseWidth) / letterWidth))) : 0;
    if (!count) {
      extraLetters.remove();
      return;
    }
    extraLetters.textContent = 'a'.repeat(count);
    const width = `${extraLetters.getBoundingClientRect().width}px`;
    extraLetters.style.removeProperty('width');
    const animation = extraLetters.animate([
      { width: '0px', offset: 0 },
      { width, offset: .35 },
      { width, offset: .55 },
      { width: '0px', offset: 1 },
    ], { duration: 2700, delay: 700, easing: 'cubic-bezier(.4, 0, .2, 1)', iterations: 1 });
    const stop = () => animation.cancel();
    nameMotion.addEventListener('change', stop);
    window.addEventListener('resize', stop, { once: true });
    const settle = () => {
      extraLetters.remove();
      nameMotion.removeEventListener('change', stop);
      window.removeEventListener('resize', stop);
    };
    animation.finished.then(settle, settle);
  };
  if (document.readyState === 'complete') greet();
  else window.addEventListener('load', greet, { once: true });

  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');
  const mobileLayout = window.matchMedia('(max-width: 1000px)');

  if (toggle && navigation) {
    toggle.hidden = false;
    document.documentElement.classList.add('has-menu');

    const setMenu = (open, returnFocus = false) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.menu-toggle-label').textContent = t(open ? 'Close' : 'Menu');
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
        copyStatus.textContent = t('Email address copied to clipboard.');
        copyButton.textContent = t('Email copied');
      } catch {
        copyStatus.textContent = t('Could not copy. You can select the email address above.');
        copyButton.textContent = t('Copy unavailable');
      }
    });
  }
})();
