// AGGRESSIVE Vercel Detection Hiding
(function() {
  'use strict';
  
  if (typeof window === 'undefined') return;

  // 1. Override ALL fetch requests to hide Vercel headers
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    return originalFetch.apply(this, args).then(response => {
      // Clone response to modify headers
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers()
      });
      
      // Copy all headers except Vercel ones
      response.headers.forEach((value, key) => {
        if (!key.toLowerCase().includes('vercel') && 
            !key.toLowerCase().includes('x-vercel') &&
            !key.toLowerCase().includes('now') &&
            key.toLowerCase() !== 'server') {
          newResponse.headers.set(key, value);
        }
      });
      
      // Add custom headers
      newResponse.headers.set('Server', '4kMedia-Web');
      newResponse.headers.set('X-Powered-By', '4kMedia');
      newResponse.headers.set('X-Hosted-By', '4kMedia');
      newResponse.headers.set('X-Platform', '4kMedia');
      
      return newResponse;
    });
  };

  // 2. Override XMLHttpRequest
  const originalXHR = window.XMLHttpRequest;
  window.XMLHttpRequest = function() {
    const xhr = new originalXHR();
    const originalGetResponseHeader = xhr.getResponseHeader;
    const originalGetAllResponseHeaders = xhr.getAllResponseHeaders;
    
    xhr.getResponseHeader = function(name) {
      if (name && name.toLowerCase().includes('vercel')) return null;
      if (name && name.toLowerCase() === 'server') return '4kMedia-Web';
      if (name && name.toLowerCase() === 'x-powered-by') return '4kMedia';
      return originalGetResponseHeader.call(this, name);
    };
    
    xhr.getAllResponseHeaders = function() {
      const headers = originalGetAllResponseHeaders.call(this);
      return headers
        .split('\r\n')
        .filter(header => !header.toLowerCase().includes('vercel'))
        .concat(['Server: 4kMedia-Web', 'X-Powered-By: 4kMedia'])
        .join('\r\n');
    };
    
    return xhr;
  };

  // 3. Override navigator and window properties
  Object.defineProperty(navigator, 'platform', {
    get: () => '4kMedia Platform',
    configurable: true
  });
  
  Object.defineProperty(navigator, 'userAgent', {
    get: () => navigator.userAgent.replace(/vercel/gi, '4kMedia'),
    configurable: true
  });

  // 4. Hide Vercel from DOM and remove any traces
  const hideVercelElements = () => {
    // Remove Vercel elements
    const vercelSelectors = [
      '[data-vercel]',
      '[class*="vercel"]',
      '[id*="vercel"]',
      '[class*="now"]',
      '[id*="now"]',
      'script[src*="vercel"]',
      'link[href*="vercel"]'
    ];
    
    vercelSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
    
    // Remove Vercel from text content
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.toLowerCase().includes('vercel')) {
        node.textContent = node.textContent.replace(/vercel/gi, '4kMedia');
      }
    }
  };

  // 5. Monitor and hide Vercel elements continuously
  const observer = new MutationObserver(hideVercelElements);
  observer.observe(document.body, { 
    childList: true, 
    subtree: true, 
    attributes: true,
    attributeFilter: ['class', 'id', 'data-*']
  });

  // 6. Override console methods to hide Vercel logs
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  
  console.log = function(...args) {
    const filtered = args.map(arg => 
      typeof arg === 'string' ? arg.replace(/vercel/gi, '4kMedia') : arg
    );
    originalConsoleLog.apply(console, filtered);
  };
  
  console.error = function(...args) {
    const filtered = args.map(arg => 
      typeof arg === 'string' ? arg.replace(/vercel/gi, '4kMedia') : arg
    );
    originalConsoleError.apply(console, filtered);
  };
  
  console.warn = function(...args) {
    const filtered = args.map(arg => 
      typeof arg === 'string' ? arg.replace(/vercel/gi, '4kMedia') : arg
    );
    originalConsoleWarn.apply(console, filtered);
  };

  // 7. Override performance API to hide Vercel traces
  if (window.performance && window.performance.getEntriesByType) {
    const originalGetEntriesByType = window.performance.getEntriesByType;
    window.performance.getEntriesByType = function(type) {
      const entries = originalGetEntriesByType.call(this, type);
      return entries.filter(entry => 
        !entry.name.toLowerCase().includes('vercel') &&
        !entry.name.toLowerCase().includes('now')
      );
    };
  }

  // 8. Hide Vercel from network requests
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...args) {
    if (typeof url === 'string' && url.toLowerCase().includes('vercel')) {
      url = url.replace(/vercel/gi, '4kMedia');
    }
    return originalOpen.call(this, method, url, ...args);
  };

  // 9. Initial cleanup
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideVercelElements);
  } else {
    hideVercelElements();
  }

  // 10. Hide Vercel from any remaining traces
  setInterval(hideVercelElements, 1000);

})();
