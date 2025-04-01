'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f84307ab6cdf11b2fc72c9cda9b42da3",
"index.html": "56f5e390c125cc631147ec76d731e516",
"/": "56f5e390c125cc631147ec76d731e516",
"main.dart.js": "5638bc3ed2e50655b2d1620886d660e7",
"version.json": "4aca47bc5595f53c576019c8ae4841e2",
"assets/assets/logo.png": "64646071322d0f9f39e2ff0e43bc70bb",
"assets/assets/values/passion.jpg": "63d08c8226d29f2baaa204b1d1e66fee",
"assets/assets/values/community.jpg": "f1ebde4579d6b8d989d304f80a059fa7",
"assets/assets/values/integrity.jpg": "74fb99790ec3670bc347590d6c725f48",
"assets/assets/starburst/orange.jpg": "d5503025792713c9af4fe16ae388adda",
"assets/assets/starburst/blue.jpg": "899cbe779c19a457754e18592f781a4c",
"assets/assets/starburst/red.jpg": "30e76eb233fdf688359b45b523f56609",
"assets/assets/starburst/lime.jpg": "2ec57da3a61ce73caccdd66d98577aeb",
"assets/assets/starburst/purple.jpg": "c9a7bb42077e5eec099d773febb3f006",
"assets/assets/starburst/grey.jpg": "20213ab64da1bcd16b9b2dcc27f8836b",
"assets/assets/starburst/light_green.jpg": "992561a30eade2a3dd3d444df6939df9",
"assets/assets/starburst/moss_green.jpg": "7ab48a418f474aaa922d0a7dae677266",
"assets/assets/starburst/light_blue.jpg": "a1cf423a030fdc1872979a32fadc1a59",
"assets/assets/leadership_team/asif-chaudhry.png": "e979661bad5b23f8f43afa01a0d6c1ab",
"assets/assets/leadership_team/alpesh-vadher.png": "218ba045d28bc5ce16e2c8e42b9971f0",
"assets/assets/leadership_team/ritesh-mirchandani.png": "ded08d808558a3c0523bae6c79ab4290",
"assets/assets/leadership_team/darshan-shah.png": "5132d98b26c140daaa59bf84b87435ba",
"assets/assets/leadership_team/michael-mburugu.png": "d73187a5917f831d01976cd481101df5",
"assets/assets/leadership_team/gurmit-santokh.png": "f450079f7c958bb0f7c0601a68c3c2d0",
"assets/assets/leadership_team/salim-alibhai.png": "1b5e8a67fcb2312b6dec04c3b249984c",
"assets/assets/leadership_team/mehul-bhavsar.png": "2bdf60f33a9b4f98d9054165bb32f84c",
"assets/assets/leadership_team/mike-kimundu.png": "ff4676ddb59f3928bfb1cef749c97675",
"assets/assets/leadership_team/patrick-kuria.png": "42b105424eff03013b9a56d383561486",
"assets/assets/leadership_team/jalpesh-shah.png": "5a36eedea148c4e12ce0f75006557a78",
"assets/assets/leadership_team/charles-mukunu.png": "57d37f45d7c7de3a0254a13fd4232032",
"assets/assets/leadership_team/nishith-shah.png": "2f08337a195374d9998c02a8ad310d00",
"assets/assets/leadership_team/peter-kahi.png": "9d587d88f308b1ceee90a06aa1dc5188",
"assets/assets/leadership_team/ajay-chandria.png": "12b817f17d78345dd08e4dba025cd1df",
"assets/assets/leadership_team/larian-abreu.png": "b374bda3414897050fd2911716c4e075",
"assets/assets/leadership_team/piyush-shah.png": "7e3a15c802079120d8467bf54b01dfc5",
"assets/assets/leadership_team/erick-njuguna.png": "1e52f82263a5e86b0056246af00326de",
"assets/assets/leadership_team/charles-oguttu.png": "7ab0d081efe6895123195f15b8e66be5",
"assets/assets/leadership_team/frederick-kibbedi.png": "d91e3cdb88b5241a651d80d69411bcaa",
"assets/assets/leadership_team/sumesh-dcruz.png": "12739ab257d0bb56f3a7b185859b5898",
"assets/assets/leadership_team/mustansir-gulamhussein.png": "c97b8837f9d0f128f0bef662a14e5f89",
"assets/assets/leadership_team/kennedy-mokaya.png": "1c028a99278173a72490b80fce61282a",
"assets/assets/leadership_team/hussein-nurdin.png": "b9a406f90bfd2bb3fb45524f02eb2741",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "b3e7ad3a31c92b31291185da10079d21",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "3ee4671acff03868df5153a15790893e",
"assets/AssetManifest.bin": "7748a5112ea9df35f8ebf725c14f014c",
"assets/AssetManifest.bin.json": "1a9f01ca112bd75d5103db8ed0ee2a70",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "8273839f12ab5ef891121ed2a046ab0b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "a58df5cf13f3278eea7eeece81bc09ee",
"apple-touch-icon.png": "7a562d364248c3d07334bb68e10104f5",
"favicon.ico": "1d3723e3da29cab279652bf6f7074976",
"icon-192.png": "6bd9cb3b06811f27cc2c0f1225017866",
"icon-192-maskable.png": "a15555e5d6f9f52689f874d32763e175",
"icon-512.png": "5ffd5b4e18a2b4aa20793a3570b2dbd9",
"icon-512-maskable.png": "4c9e51a704bd02c361b572e54cdfef80"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
