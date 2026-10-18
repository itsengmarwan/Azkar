const CACHE_NAME = 'azkar-pro-v2';
const ASSETS = [
    './',
    './index.html',
    './Morning.html',
    './Evening.html',
    './After-pray.html',
    './Tasabe7.html',
    './Rosary.html',
    './style.css',
    './script.js',
    './manifest.json',
    './LOGO.jpg'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
