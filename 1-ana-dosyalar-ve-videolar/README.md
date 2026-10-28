# bilgekaan.work

Bilge Kaan Aydın — Senior Art Director portföy sitesi.
Saf HTML / CSS / JavaScript. Derleme adımı, framework ya da paket yöneticisi yok.

- Dil: EN + TR (tarayıcı Türkçeyse otomatik TR açılır, sağ üstten değişir)
- Tema: koyu (varsayılan) / açık
- Sayfalar `#hash` ile çalışır (`/#maximum-rebranding`), bu yüzden herhangi bir statik sunucuda ek ayar gerekmez
- YouTube videoları site içinde bir oynatıcıda açılır

## Klasör yapısı

```
index.html          iskelet + font bağlantıları
css/style.css       tüm stiller
js/app.js           yönlendirme, kartlar, proje sayfaları, dil/tema, video oynatıcı
js/data.js          İÇERİK: projeler, metinler (EN/TR), sıra, bağlantılar, medya listesi
assets/img/         görseller (WebP/PNG) — dosya adı = data.js'teki anahtar
assets/video/       döngü videoları (MP4, sessiz, otomatik oynar)
```

## Yerelde çalıştırma

`file://` ile açmak yerine küçük bir sunucu kullanın:

```bash
python3 -m http.server 8000
# sonra http://localhost:8000
```

## Yayına alma

Hepsi statik dosya olduğu için şunlardan biri yeterli:

- **GitHub Pages:** Settings → Pages → Branch: `main` / root. Özel alan adı için kök klasöre alan adını içeren bir `CNAME` dosyası ekleyin (ör. `bilgekaan.work`) ve DNS'te alan adını GitHub Pages'e yönlendirin.
- **Netlify / Vercel / Cloudflare Pages:** repoyu bağlayın, build komutu boş, yayın klasörü `/` (kök).

## Yayına almadan önce yapılacaklar

1. **Grtsk Variable fontu.** Site şu an Archivo ile çalışıyor (yedek font). Adobe Fonts'ta bir Web Project oluşturup "Grtsk Variable" ekleyin, projenin stylesheet bağlantısını `index.html` içindeki yorum satırının yerine koyun (`https://use.typekit.net/xxxxxxx.css`). CSS zaten önce `grtsk-variable` ailesini ister. Adobe projesine alan adınızı (`bilgekaan.work`) eklemeyi unutmayın.
2. **Paylaşım görseli (Open Graph).** `index.html` içindeki yorumlu `og:image` satırını alan adı belli olunca açın.
3. **Eksik galeriler.** Şu işlerde yalnızca kapak var: Turkish Airlines — A New Thrill, Hayat Sana Maximum, BtcTurk — Hep Dahası Var. Görselleri `assets/img/` içine koyup `js/data.js` içindeki ilgili projenin `blocks` listesine ekleyin.

## İçerik düzenleme

Her proje `js/data.js` içindeki `PROJECTS` dizisinde bir nesne. Metinler `{"en": "...", "tr": "..."}` biçiminde. Sıra dizideki sıradır. Yeni görsel: dosyayı `assets/img/anahtar.webp` olarak koyun, `IMGS` nesnesine `"anahtar": "assets/img/anahtar.webp"` ekleyin. Yeni video aynı şekilde `VIDS` içine (`u`: yol, `w`/`h`: piksel boyutu).

## Notlar

- Kart üzerine gelince oynayan önizlemeler yalnızca fare olan cihazlarda çalışır; "hareketi azalt" ayarı açıksa oynamaz.
- Videolar H.264 MP4, sessiz ve döngülüdür; görünür oldukları anda yüklenir.
- İletişim e-postası ve sosyal bağlantılar `js/app.js` başındaki sabitlerde (`LINKEDIN`, `BEHANCE`, `EMAIL`).
