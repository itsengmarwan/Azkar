const CACHE_NAME = 'azkar-pro-v1';
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
    './LOGO.jpg',
    'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});