self.addEventListener('install', function (event) {
  var indexPage = new Request('index.html');
  event.waitUntil(
    fetch(indexPage).then(function (response) {
      return caches.open('Avocato-Diary').then(function (cache) {
        console.log('[Avocato Diary] Cached index page during Install' + response.url);
        return cache.put(indexPage, response);
      });
    }));
});
self.addEventListener('fetch', function (event) {
  var updateCache = function (request) {
    return caches.open('Avocato-Diary').then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('[Avocato-Diary] add page to offline' + response.url)
        return cache.put(request, response);
      });
    });
  };
  event.waitUntil(updateCache(event.request));
  event.respondWith(
    fetch(event.request).catch(function (error) {
      console.log('[Avocato-Diary] Network request Failed. Serving content from cache: ' + error);
      return caches.open('Avocato-Diary').then(function (cache) {
        return cache.match(event.request).then(function (matching) {
          var report = !matching || matching.status == 404 ? Promise.reject('no-match') : matching;
          return report
        });
      });
    })
  );
})
