const CACHE_NAME = "nav-map-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "https://unpkg.com/leaflet/dist/leaflet.css",
  "https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css",
  "https://unpkg.com/leaflet/dist/leaflet.js",
  "https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
