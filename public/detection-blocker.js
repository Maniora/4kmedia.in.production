// Detection Blocker - Hide Vercel from tools
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  const initDetectionBlocker = () => {
    // Only override navigator properties
    if (window.navigator) {
      try {
        Object.defineProperty(window.navigator, 'platform', {
          get: () => '4kMedia Platform',
          configurable: true
        });
        
        Object.defineProperty(window.navigator, 'userAgent', {
          get: () => window.navigator.userAgent.replace(/vercel|now/gi, '4kMedia'),
          configurable: true
        });
      } catch (e) {
        // Ignore errors if properties are already defined
      }
    }
  };
  
  // Execute after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDetectionBlocker);
  } else {
    initDetectionBlocker();
  }
  
})();
