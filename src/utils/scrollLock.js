/**
 * Bulletproof Body Scroll Lock Utility
 * Freezes the background page completely in place when a modal or overlay is open.
 * Uses position: fixed, event interception (wheel, touchmove, keydown),
 * and boundary containment to guarantee 0 background movement across all browsers/OS.
 */

let lockCount = 0;
let savedScrollY = 0;
let originalStyles = {};

const handleWheel = (e) => {
  let target = e.target;
  let scrollableEl = null;

  while (target && target !== document.body && target !== document.documentElement) {
    const hasScrollClass = target.classList?.contains('custom-scrollbar');
    const style = window.getComputedStyle(target);
    const overflowY = style.overflowY;
    const isScroll = (hasScrollClass || overflowY === 'auto' || overflowY === 'scroll') && 
                     target.scrollHeight > target.clientHeight;

    if (isScroll) {
      scrollableEl = target;
      break;
    }
    target = target.parentElement;
  }

  // If wheel occurs outside any scrollable container (e.g. backdrop, modal header, margins, page background)
  if (!scrollableEl) {
    e.preventDefault();
    return;
  }

  // Inside scrollable container: prevent bubbling when reaching top or bottom boundary
  const delta = e.deltaY;
  const atTop = delta < 0 && scrollableEl.scrollTop <= 0;
  const atBottom = delta > 0 && (scrollableEl.scrollTop + scrollableEl.clientHeight >= scrollableEl.scrollHeight - 1);

  if (atTop || atBottom) {
    e.preventDefault();
  }
};

let touchStartY = 0;
const handleTouchStart = (e) => {
  if (e.touches && e.touches.length === 1) {
    touchStartY = e.touches[0].clientY;
  }
};

const handleTouchMove = (e) => {
  if (!e.touches || e.touches.length !== 1) return;
  const touchCurrentY = e.touches[0].clientY;
  const deltaY = touchStartY - touchCurrentY;

  let target = e.target;
  let scrollableEl = null;

  while (target && target !== document.body && target !== document.documentElement) {
    const hasScrollClass = target.classList?.contains('custom-scrollbar');
    const style = window.getComputedStyle(target);
    const overflowY = style.overflowY;
    const isScroll = (hasScrollClass || overflowY === 'auto' || overflowY === 'scroll') && 
                     target.scrollHeight > target.clientHeight;

    if (isScroll) {
      scrollableEl = target;
      break;
    }
    target = target.parentElement;
  }

  if (!scrollableEl) {
    e.preventDefault();
    return;
  }

  const atTop = deltaY < 0 && scrollableEl.scrollTop <= 0;
  const atBottom = deltaY > 0 && (scrollableEl.scrollTop + scrollableEl.clientHeight >= scrollableEl.scrollHeight - 1);

  if (atTop || atBottom) {
    e.preventDefault();
  }
};

const handleKeyDown = (e) => {
  const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
  if (!scrollKeys.includes(e.key)) return;

  const activeTag = document.activeElement?.tagName?.toLowerCase();
  if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement?.isContentEditable) {
    return;
  }

  let target = document.activeElement || e.target;
  let scrollableEl = null;
  while (target && target !== document.body && target !== document.documentElement) {
    const hasScrollClass = target.classList?.contains('custom-scrollbar');
    const style = window.getComputedStyle(target);
    const overflowY = style.overflowY;
    if ((hasScrollClass || overflowY === 'auto' || overflowY === 'scroll') && target.scrollHeight > target.clientHeight) {
      scrollableEl = target;
      break;
    }
    target = target.parentElement;
  }

  if (!scrollableEl) {
    e.preventDefault();
  }
};

export function lockBodyScroll() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  if (lockCount === 0) {
    savedScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    originalStyles = {
      overflow: document.body.style.overflow,
      htmlOverflow: document.documentElement.style.overflow,
      paddingRight: document.body.style.paddingRight
    };

    // Prevent scrollbar jitter by compensating scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Freeze overflow without changing position: fixed (which displaced background page elements)
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    document.documentElement.classList.add('body-scroll-lock');
    document.body.classList.add('body-scroll-lock');

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });
  }

  lockCount++;

  return () => {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);

      document.documentElement.classList.remove('body-scroll-lock');
      document.body.classList.remove('body-scroll-lock');

      document.body.style.overflow = originalStyles.overflow || '';
      document.documentElement.style.overflow = originalStyles.htmlOverflow || '';
      document.body.style.paddingRight = originalStyles.paddingRight || '';
    }
  };
}

