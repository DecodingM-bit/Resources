// service-worker.js
const CACHE_NAME = 'stopwatch-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/style.css'
];

// Installation: Cache all assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('SW Installed and cached files');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch: Intercept requests and serve from cache if available
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response; // Serve from cache
                }
                return fetch(event.request); // Fallback to network
            })
    );
});
