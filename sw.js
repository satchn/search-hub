const CACHE_NAME = 'hub-cache-v1';
// We only need to cache the main HTML file itself
const urlsToCache = [
    './',
    './index.html'
];

// Install the worker and cache the file
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Intercept network requests and serve from cache if available
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return the cached version immediately, or fetch from network if it fails
                return response || fetch(event.request);
            })
    );
});
