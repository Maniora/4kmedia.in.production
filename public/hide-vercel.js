// Hide Vercel detection
(function() {
  // Override common detection methods
  if (typeof window !== 'undefined') {
    // Hide Vercel-specific headers
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const response = originalFetch.apply(this, args);
      return response.then(res => {
        // Remove Vercel headers
        if (res.headers) {
          res.headers.delete('x-vercel-id');
          res.headers.delete('x-vercel-cache');
          res.headers.delete('server');
          res.headers.set('server', '4kMedia-Web');
          res.headers.set('x-powered-by', '4kMedia');
        }
        return res;
      });
    };

    // Override navigator properties
    Object.defineProperty(navigator, 'platform', {
      get: () => '4kMedia Platform'
    });

    // Hide Vercel from DOM
    const observer = new MutationObserver(() => {
      const vercelElements = document.querySelectorAll('[data-vercel], [class*="vercel"], [id*="vercel"]');
      vercelElements.forEach(el => el.remove());
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
