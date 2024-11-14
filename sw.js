let cacheNome = "pwa-receitas";
let filesToCache = ["/", "/index", "/css/doces.css", "/css/style.css", "/css/receitas.css", "/manifest.json",
              "/Receitas", "/main.js", "img/carbonaro.png", "img/churras.png", "img/doce.png", "img/pudim.png", "img/fogo.png", "img/pokemon256.png", "pages/doces", "pages/carnes", "pages/massas", "img/brigadeiro.png", "img/frango.png", "img/nhoque.png", "img/lasanha.png", "/css/receitas.css", "/css/massa.css", "/css/doces.css", "/css/carne.css", "/css/style.css"];

self.addEventListener("install", (e) =>{
    e.waitUntil(
        caches.open(cacheNome).then(function (cache){
            return Promise.all(
            filesToCache.map((file) =>{
                cache.add(file).catch((err) =>{
                    console.error("Falha ao adicionar o cache", file, err);
                })
            })
            )
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