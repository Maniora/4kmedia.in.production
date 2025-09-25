// ULTIMATE Detection Blocker - Hide Vercel from ALL tools
(function() {
  'use strict';
  
  // Block detection tools from accessing the page
  const blockDetection = () => {
    // Override common detection methods
    if (window.navigator) {
      Object.defineProperty(window.navigator, 'platform', {
        get: () => '4kMedia Platform',
        configurable: false
      });
      
      Object.defineProperty(window.navigator, 'userAgent', {
        get: () => window.navigator.userAgent.replace(/vercel|now/gi, '4kMedia'),
        configurable: false
      });
    }
    
    // Block network requests to detection services
    const blockedDomains = [
      'wappalyzer.com',
      'builtwith.com',
      'whatruns.com',
      'stackshare.io',
      'technorati.com',
      'netcraft.com',
      'shodan.io',
      'censys.io'
    ];
    
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
      if (typeof url === 'string') {
        const blocked = blockedDomains.some(domain => url.includes(domain));
        if (blocked) {
          return Promise.reject(new Error('Blocked detection request'));
        }
      }
      return originalFetch.call(this, url, options);
    };
    
    // Block XMLHttpRequest to detection services
    const originalXHROpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      if (typeof url === 'string') {
        const blocked = blockedDomains.some(domain => url.includes(domain));
        if (blocked) {
          throw new Error('Blocked detection request');
        }
      }
      return originalXHROpen.call(this, method, url, ...args);
    };
  };
  
  // Execute immediately
  blockDetection();
  
  // Re-execute on DOM changes
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', blockDetection);
  }
  
  // Continuous monitoring
  setInterval(blockDetection, 500);
  
})();
