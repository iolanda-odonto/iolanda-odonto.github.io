// Service worker mínimo: só permite instalar o sistema como aplicativo.
// Não guarda páginas em cache, para que cada envio novo ao GitHub apareça na hora.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
