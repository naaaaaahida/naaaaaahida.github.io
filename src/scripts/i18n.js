/* Buildless localisation: retain the original DOM, links, SVGs and interactions. */
(() => {
  'use strict';

  const catalogue = window.portfolioTranslations;
  if (!catalogue) return;
  const root = document.documentElement;
  const storageKey = 'nahida-language';
  const languages = ['en-GB', 'it', 'fr'];
  const names = { 'en-GB': 'English', it: 'Italiano', fr: 'Français' };
  const textKeys = new WeakMap();
  const attributeKeys = new WeakMap();
  const linkTargets = new WeakMap();
  const reverse = new Map();
  Object.entries(catalogue).forEach(([key, values]) => {
    values.forEach((value) => { if (!reverse.has(value)) reverse.set(value, key); });
  });
  const normalise = (value) => value === 'en' ? 'en-GB' : languages.includes(value) ? value : null;
  let language = 'en-GB';
  try {
    language = normalise(new URL(window.location.href).searchParams.get('lang'))
      || normalise(window.localStorage.getItem(storageKey)) || language;
  } catch { /* English remains usable when storage is unavailable. */ }

  const keyFor = (value) => Object.hasOwn(catalogue, value) ? value : reverse.get(value);
  const t = (key, values = {}) => {
    const translated = language === 'en-GB' ? key : catalogue[key]?.[language === 'it' ? 0 : 1] || key;
    return translated.replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
  };
  const control = document.querySelector('.language-control');
  const trigger = control?.querySelector('.language-toggle');
  const options = control?.querySelector('.language-options');
  const closeOptions = (returnFocus = false) => {
    if (!options) return;
    options.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (returnFocus) trigger.focus();
  };

  const translateDocument = () => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('script, style, svg, .language-control, .hero-last-name')) continue;
      const key = textKeys.get(node) || keyFor(node.textContent.trim());
      if (!key) continue;
      textKeys.set(node, key);
      node.textContent = node.textContent.replace(/\S[\s\S]*\S|\S/, () => t(key));
    }
    document.querySelectorAll('[aria-label], [title], img[alt], meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[property="og:image:alt"]').forEach((element) => {
      const original = attributeKeys.get(element) || {};
      ['aria-label', 'title', 'alt', 'content'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const key = original[attribute] || keyFor(element.getAttribute(attribute));
        if (!key) return;
        original[attribute] = key;
        element.setAttribute(attribute, t(key));
      });
      attributeKeys.set(element, original);
    });
  };

  const translateLinks = () => {
    document.querySelectorAll('a[href]').forEach((link) => {
      const original = linkTargets.get(link) || link.getAttribute('href');
      linkTargets.set(link, original);
      if (!original || original.startsWith('#') || /^(https?:|mailto:|tel:)/i.test(original)) return;
      const target = new URL(original, window.location.href);
      if (!target.pathname.endsWith('.html') && !target.pathname.endsWith('/')) return;
      if (language === 'en-GB') target.searchParams.delete('lang');
      else target.searchParams.set('lang', language);
      link.setAttribute('href', original.split(/[?#]/)[0] + target.search + target.hash);
    });
  };

  const applyLanguage = (next, save = false) => {
    const valid = normalise(next);
    if (!valid) return;
    language = valid;
    root.lang = language;
    translateDocument();
    translateLinks();
    control?.querySelectorAll('[data-language]').forEach((button) => {
      const active = button.dataset.language === language;
      button.setAttribute('aria-pressed', String(active));
      if (active) control.querySelector('[data-language-current]').src = button.querySelector('img').src;
    });
    if (trigger) {
      trigger.setAttribute('title', `${t('Change language')}: ${names[language]}`);
      trigger.setAttribute('aria-label', `${t('Change language')}: ${names[language]}`);
      trigger.querySelector('[data-language-name]').textContent = names[language];
    }
    if (save) {
      try { window.localStorage.setItem(storageKey, language); } catch { /* URL preserves the choice. */ }
      try {
        const url = new URL(window.location.href);
        if (language === 'en-GB') url.searchParams.delete('lang');
        else url.searchParams.set('lang', language);
        window.history.replaceState(window.history.state, '', url);
      } catch { /* File previews can disallow history updates. */ }
    }
    document.dispatchEvent(new CustomEvent('portfolio:language', { detail: { language } }));
  };

  window.portfolioI18n = { t, getLanguage: () => language, setLanguage: (next) => applyLanguage(next, true) };
  if (control) {
    control.hidden = false;
    trigger.addEventListener('click', (event) => {
      const opening = options.hidden;
      options.hidden = !opening;
      trigger.setAttribute('aria-expanded', String(opening));
      // Keyboard users enter the choices; touch users keep their natural focus.
      if (opening && event.detail === 0) options.querySelector(`[data-language="${language}"]`).focus();
    });
    options.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language]');
      if (!button) return;
      applyLanguage(button.dataset.language, true);
      closeOptions(true);
    });
    document.addEventListener('click', (event) => { if (!control.contains(event.target)) closeOptions(); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !options.hidden) { closeOptions(true); event.stopPropagation(); }
    });
    control.addEventListener('focusout', (event) => {
      // Touch can blur a button without providing a new focus target before click.
      // Outside clicks still dismiss the menu; only confirmed focus departures do so here.
      if (event.relatedTarget && !control.contains(event.relatedTarget)) closeOptions();
    });
  }
  window.addEventListener('storage', (event) => {
    if (event.key === storageKey) applyLanguage(normalise(event.newValue) || 'en-GB');
  });
  applyLanguage(language);
})();
