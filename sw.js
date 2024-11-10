cacheNome = "pwa-receitas";
downArquivos = ["/", "/index.html", "/css/doces.css", "/css/style.css", "/css/receitas.css",
                "/Receitas.html", "/main.js"];

self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(cacheNome).then(function (cache){
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener("fetch", (e) =>{
    e.respondWith(
        caches.match(e.request).then((response) =>{
            return response || fetch(e.request)
        })
    )
});