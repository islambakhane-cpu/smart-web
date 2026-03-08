if (typeof global === 'undefined') {
  (window as any).global = window;
}

// Fix for "Uncaught TypeError: Cannot set property fetch of #<Window> which has only a getter"
// This happens when some libraries try to polyfill fetch in environments where it's read-only.
try {
  const originalFetch = window.fetch;
  Object.defineProperty(window, 'fetch', {
    get: () => originalFetch,
    set: () => { /* ignore attempts to overwrite fetch */ },
    configurable: true,
  });
} catch (e) {
  console.warn('Could not protect window.fetch:', e);
}
