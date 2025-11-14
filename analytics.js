/* Analytics: Google Analytics 4 bootstrap
   Replace GA_ID with your GA4 Measurement ID (format: G-XXXXXXXXXX)
   If left as placeholder, script is a no-op. */
(function(){
  const GA_ID = 'G-XXXXXXXXXX'; // TODO: set your GA4 Measurement ID
  if(!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    console.warn('[analytics] GA_ID not set. Skipping GA4 init.');
    window.trackEvent = function(){ /* no-op */ };
    return;
  }

  // Load GA library
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  // Setup gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { transport_type: 'beacon', send_page_view: true });

  // Simple event helper
  window.trackEvent = function(name, params){
    try { gtag('event', name, params || {}); } catch(e) {}
  };
})();
