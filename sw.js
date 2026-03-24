// Ein simpler Service Worker, damit mobile Browser (Android/iOS) 
// Web-Push-Benachrichtigungen und PWA-Funktionen zulassen.

self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});