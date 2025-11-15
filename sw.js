// Service Worker for NEON ARCADE PWA
const CACHE_NAME = 'neon-arcade-v1';
const urlsToCache = [
  '/MyGameArcade/',
  '/MyGameArcade/index.html',
  '/MyGameArcade/games/hyper_jump.html',
  '/MyGameArcade/games/cube_surfer.html',
  '/MyGameArcade/games/cyber_swing.html',
  '/MyGameArcade/games/neon_stack.html',
  '/MyGameArcade/games/prompt_drop.html',
  '/MyGameArcade/games/neon_orbit.html',
  '/MyGameArcade/games/void_strike.html',
  '/MyGameArcade/games/chroma_shift.html',
  '/MyGameArcade/games/void_weaver.html',
  '/MyGameArcade/analytics.js'
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
