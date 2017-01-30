var cacheName = 'scalia-cahe';
var filesToCache = [
	'assets/banner_image.png',
  'assets/alert.png',
  'assets/april_image.jpg',
  'assets/bag.jpg',
  'assets/rocket.png',
  'assets/footer_background.png',
  'assets/june_image.png',
  'assets/2135.jpg',
  'assets/may_image.jpg',
  'assets/rocket_back.jpg',
  'assets/rocket_no_line.jpg',
  'assets/pencil.jpg',
  'assets/clouds.jpg',
  'assets/pic.jpg',
  'assets/podl.png',
  'assets/uk_flag.png',
  'assets/jack.jpg',
  'assets/jackie.jpg',
  'assets/christian.jpg',
  'assets/bulb.jpg',
  'js/script.js',
  'css/home.css',
  'css/reset.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});