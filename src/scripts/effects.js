/* Shared pointer and page-scroll enhancements. No content depends on these. */
(() => {
  'use strict';

  const root = document.documentElement;

  // Discourage casual saving of the portrait without blocking page-wide actions.
  // Publicly displayed images can still be retrieved or captured by a visitor.
  document.querySelectorAll('.portrait-frame').forEach((portrait) => {
    portrait.addEventListener('contextmenu', (event) => event.preventDefault());
    portrait.addEventListener('dragstart', (event) => event.preventDefault());
  });

  // A native range input provides dragging, touch, and keyboard controls.
  const meter = document.createElement('div');
  meter.className = 'scroll-meter';
  meter.hidden = true;
  const scrollControl = document.createElement('input');
  scrollControl.type = 'range';
  scrollControl.min = '0';
  scrollControl.max = '100';
  scrollControl.step = '1';
  scrollControl.value = '0';
  scrollControl.setAttribute('aria-label', 'Page scroll position');
  scrollControl.setAttribute('aria-controls', 'main');
  meter.append(scrollControl);
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) skipLink.after(meter);
  else document.body.prepend(meter);

  const scroller = () => document.scrollingElement || root;
  const scrollDistance = () => Math.max(0, scroller().scrollHeight - scroller().clientHeight);
  let scrollFrame = 0;
  let maxScroll = 0;
  let needsMeasure = true;

  const updateScroll = () => {
    scrollFrame = 0;
    // Measure content only when its size changes, not on every scroll event.
    if (needsMeasure) {
      maxScroll = scrollDistance();
      needsMeasure = false;
    }
    const percent = maxScroll ? Math.max(0, Math.min(100, scroller().scrollTop / maxScroll * 100)) : 0;
    meter.hidden = maxScroll <= 0;
    meter.style.setProperty('--scroll-progress', String(percent / 100));
    scrollControl.value = String(percent);
    scrollControl.setAttribute('aria-valuetext', `${Math.round(percent)}% of page`);
  };
  const scheduleScroll = () => {
    if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScroll);
  };
  const refreshScroll = () => {
    needsMeasure = true;
    scheduleScroll();
  };
  scrollControl.addEventListener('input', () => {
    window.scrollTo({ top: maxScroll * Number(scrollControl.value) / 100, behavior: 'instant' });
    scheduleScroll();
  });
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', refreshScroll, { passive: true });
  window.addEventListener('pageshow', refreshScroll);
  window.addEventListener('load', refreshScroll);
  if ('ResizeObserver' in window) new ResizeObserver(refreshScroll).observe(document.body);
  if (document.fonts) document.fonts.ready.then(refreshScroll);
  updateScroll();

  // Only replace an actual mouse pointer on devices suited to this effect.
  const pointerPreference = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)');
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  const dot = document.createElement('span');
  dot.className = 'cursor-dot';
  const ring = document.createElement('span');
  ring.className = 'cursor-ring';
  cursor.append(dot, ring);
  document.body.append(cursor);

  const interactive = 'a, button, summary, [role="button"], [role="link"]';
  const nativePointer = 'input, textarea, select, option, [contenteditable]:not([contenteditable="false"]), iframe, video[controls]';
  let visible = false;
  let pointerFrame = 0;
  let x = 0;
  let y = 0;
  let ringX = 0;
  let ringY = 0;
  let previousTime = 0;

  const hideCursor = () => {
    visible = false;
    previousTime = 0;
    root.classList.remove('custom-cursor-active');
    cursor.classList.remove('is-hovering', 'is-pressed');
    window.cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
  };
  const setTarget = (target) => {
    if (!(target instanceof Element) || target.closest(nativePointer)) {
      hideCursor();
      return false;
    }
    cursor.classList.toggle('is-hovering', Boolean(target.closest(interactive)));
    return true;
  };
  const drawCursor = (time) => {
    pointerFrame = 0;
    if (!visible) return;
    // Time-based interpolation keeps the same feel across refresh rates.
    const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
    previousTime = time;
    const follow = 1 - Math.exp(-elapsed / 38);
    ringX += (x - ringX) * follow;
    ringY += (y - ringY) * follow;
    const settled = Math.abs(x - ringX) + Math.abs(y - ringY) < 0.2;
    if (settled) { ringX = x; ringY = y; }
    dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    if (!settled) pointerFrame = window.requestAnimationFrame(drawCursor);
    else previousTime = 0;
  };
  const moveCursor = (event) => {
    if (!pointerPreference.matches || event.pointerType !== 'mouse') {
      hideCursor();
      return;
    }
    if (!setTarget(event.target)) return;
    x = event.clientX;
    y = event.clientY;
    if (!visible) {
      ringX = x;
      ringY = y;
      visible = true;
      // Position both parts before hiding the native pointer.
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = dot.style.transform;
      root.classList.add('custom-cursor-active');
    }
    if (!pointerFrame) pointerFrame = window.requestAnimationFrame(drawCursor);
  };
  document.addEventListener('pointermove', moveCursor, { passive: true });
  document.addEventListener('pointerover', (event) => {
    if (visible) setTarget(event.target);
  }, { passive: true });
  document.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') hideCursor();
    else if (visible && event.button === 0) cursor.classList.add('is-pressed');
  }, { passive: true });
  document.addEventListener('pointerup', () => cursor.classList.remove('is-pressed'), { passive: true });
  document.addEventListener('pointerout', (event) => {
    if (!event.relatedTarget) hideCursor();
  }, { passive: true });
  document.addEventListener('pointercancel', hideCursor);
  document.addEventListener('keydown', hideCursor);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) hideCursor();
  });
  window.addEventListener('blur', hideCursor);
  pointerPreference.addEventListener('change', hideCursor);
})();
