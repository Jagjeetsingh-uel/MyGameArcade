// Service Worker for NEON ARCADE PWA
const CACHE_NAME = 'neon-arcade-v1';
const urlsToCache = [
  'index.html',
  'games/hyper_jump.html',
  'games/cube_surfer.html',
  'games/cyber_swing.html',
  'games/neon_stack.html',
  'games/prompt_drop.html',
  'games/neon_orbit.html',
  'games/void_strike.html',
  'games/chroma_shift.html',
  'games/void_weaver.html',
  'analytics.js'
];

// Install event - cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
