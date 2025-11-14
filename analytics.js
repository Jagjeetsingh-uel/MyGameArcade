/* Simple GA4 bootstrap for GitHub Pages
   1) Replace GA_ID with your GA4 Measurement ID (G-XXXXXXXXXX)
   2) This sends page_view automatically and exposes window.trackEvent(name, params)
*/
(function(){
  const GA_ID = 'G-M9WJCCFBRH';
  if(!GA_ID || GA_ID === 'G-XXXXXXXXXX') {
    console.warn('[analytics] GA_ID not set. Skipping GA init.');
    window.trackEvent = function(){};
    return;
  }

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { transport_type: 'beacon', send_page_view: true });

  window.trackEvent = function(name, params){
    try { gtag('event', name, params || {}); } catch(e) {}
  };
})();
