/* ===== CONTENT DATA =====
   Texts, project order, links and media references live here.
   Images are in assets/img, videos in assets/video (keys match the file names).
   Every text has an EN and a TR version: {"en": "...", "tr": "..."} */

const IMGS = {
 "logo-felis": "assets/img/logo-felis.png",
 "logo-kristal": "assets/img/logo-kristal.png",
 "logo-effie": "assets/img/logo-effie.png",
 "c-maximum": "assets/img/c-maximum.webp",
 "c-thy": "assets/img/c-thy.webp",
 "c-hep": "assets/img/c-hep.webp",
 "c-esra-kurye": "assets/img/c-esra-kurye.webp",
 "c-esra-yeni": "assets/img/c-esra-yeni.webp",
 "barbie-1": "assets/img/barbie-1.webp",
 "barbie-2": "assets/img/barbie-2.webp",
 "barbie-3": "assets/img/barbie-3.webp",
 "barbie-p1": "assets/img/barbie-p1.webp",
 "barbie-p2": "assets/img/barbie-p2.webp",
 "barbie-p3": "assets/img/barbie-p3.webp",
 "yt-us": "assets/img/yt-us.webp",
 "yt-asli": "assets/img/yt-asli.webp",
 "yt-hisse2": "assets/img/yt-hisse2.webp",
 "yt-kripto": "assets/img/yt-kripto.webp",
 "yt-tff": "assets/img/yt-tff.webp",
 "yt-pizza": "assets/img/yt-pizza.webp",
 "yt-milli": "assets/img/yt-milli.webp",
 "yhumb": "assets/img/yhumb.webp",
 "lg-thumb": "assets/img/lg-thumb.webp",
 "kr-thumb": "assets/img/kr-thumb.webp",
 "hs-thumb": "assets/img/hs-thumb.webp",
 "sok-thumb": "assets/img/sok-thumb.webp",
 "yt-sok1": "assets/img/yt-sok1.webp",
 "yt-sok2": "assets/img/yt-sok2.webp",
 "yt-detective": "assets/img/yt-detective.webp",
 "milli-cover": "assets/img/milli-cover.webp",
 "asli-thumb": "assets/img/asli-thumb.webp",
 "fire-2": "assets/img/fire-2.webp",
 "fire-3": "assets/img/fire-3.webp",
 "fire-4": "assets/img/fire-4.webp",
 "ul-thumb": "assets/img/ul-thumb.webp",
 "ul-01": "assets/img/ul-01.webp",
 "ul-02": "assets/img/ul-02.webp",
 "ul-03": "assets/img/ul-03.webp",
 "ul-04": "assets/img/ul-04.webp",
 "ul-05": "assets/img/ul-05.webp",
 "ul-06": "assets/img/ul-06.webp",
 "ul-07": "assets/img/ul-07.webp",
 "ul-08": "assets/img/ul-08.webp",
 "ul-09": "assets/img/ul-09.webp",
 "ul-10": "assets/img/ul-10.webp",
 "ul-11": "assets/img/ul-11.webp",
 "ul-12": "assets/img/ul-12.webp",
 "en-thumb": "assets/img/en-thumb.webp",
 "en-22": "assets/img/en-22.webp",
 "en-kapak": "assets/img/en-kapak.webp",
 "en-2024": "assets/img/en-2024.webp",
 "en-stake": "assets/img/en-stake.webp",
 "en-history": "assets/img/en-history.webp",
 "en-highl": "assets/img/en-highl.webp",
 "en-fin": "assets/img/en-fin.webp",
 "en-toc": "assets/img/en-toc.webp",
 "en-palette": "assets/img/en-palette.webp",
 "en-type": "assets/img/en-type.webp",
 "mx-m1": "assets/img/mx-m1.webp",
 "mx-m2": "assets/img/mx-m2.webp",
 "mx-m3": "assets/img/mx-m3.webp",
 "mx-m4": "assets/img/mx-m4.webp",
 "mx-m5": "assets/img/mx-m5.webp",
 "mx-m6": "assets/img/mx-m6.webp",
 "mx-m7": "assets/img/mx-m7.webp",
 "mx-m8": "assets/img/mx-m8.webp",
 "mx-m9": "assets/img/mx-m9.webp",
 "mx-m10": "assets/img/mx-m10.webp",
 "mx-m11": "assets/img/mx-m11.webp",
 "kr-m2": "assets/img/kr-m2.webp",
 "kr-m3": "assets/img/kr-m3.webp",
 "kr-m4": "assets/img/kr-m4.webp",
 "kr-m5": "assets/img/kr-m5.webp",
 "kr-m6": "assets/img/kr-m6.webp",
 "kr-hoard": "assets/img/kr-hoard.webp",
 "mi-yatay": "assets/img/mi-yatay.webp",
 "mi-dikey": "assets/img/mi-dikey.webp",
 "mi-billboard": "assets/img/mi-billboard.webp",
 "mi-inflight": "assets/img/mi-inflight.webp",
 "mi-bento": "assets/img/mi-bento.webp",
 "mi-afrika": "assets/img/mi-afrika.webp",
 "mi-asya": "assets/img/mi-asya.webp",
 "mi-avrupa": "assets/img/mi-avrupa.webp",
 "mi-avustralya": "assets/img/mi-avustralya.webp",
 "mi-guney": "assets/img/mi-guney.webp",
 "mi-kuzey": "assets/img/mi-kuzey.webp",
 "ms-thumb": "assets/img/ms-thumb.webp",
 "sok-barbie-thumb": "assets/img/sok-barbie-thumb.webp",
 "mt-cover": "assets/img/mt-cover.webp",
 "mt-kapak2": "assets/img/mt-kapak2.webp",
 "mt-c1": "assets/img/mt-c1.webp",
 "mt-c2": "assets/img/mt-c2.webp",
 "mt-c3": "assets/img/mt-c3.webp",
 "yt-maldives": "assets/img/yt-maldives.webp",
 "sutas-thumb": "assets/img/sutas-thumb.webp",
 "yt-sutas": "assets/img/yt-sutas.webp",
 "hs-1": "assets/img/hs-1.webp",
 "hs-2": "assets/img/hs-2.webp",
 "hs-3": "assets/img/hs-3.webp",
 "hp-k1": "assets/img/hp-k1.webp",
 "hp-k2": "assets/img/hp-k2.webp",
 "hp-k3": "assets/img/hp-k3.webp",
 "ek-banner": "assets/img/ek-banner.webp",
 "ek-mock": "assets/img/ek-mock.webp",
 "ey-1": "assets/img/ey-1.webp",
 "ey-m1": "assets/img/ey-m1.webp",
 "ey-m2": "assets/img/ey-m2.webp",
 "ey-banner": "assets/img/ey-banner.webp",
 "yt-thy": "assets/img/yt-thy.webp",
 "yt-hep": "assets/img/yt-hep.webp",
 "yt-eyeni": "assets/img/yt-eyeni.webp",
 "yt-ekurye": "assets/img/yt-ekurye.webp",
 "yt-hayat": "assets/img/yt-hayat.webp",
 "yt-miles": "assets/img/yt-miles.webp",
 "pc-thumb": "assets/img/pc-thumb.webp",
 "pc-gorsel": "assets/img/pc-gorsel.webp",
 "pc-kv1": "assets/img/pc-kv1.webp",
 "pc-kv2": "assets/img/pc-kv2.webp",
 "pc-kv3": "assets/img/pc-kv3.webp",
 "pc-ab1": "assets/img/pc-ab1.webp",
 "pc-ab2": "assets/img/pc-ab2.webp",
 "pc-story": "assets/img/pc-story.webp",
 "pc-story1": "assets/img/pc-story1.webp",
 "pc-case4": "assets/img/pc-case4.webp",
 "pc-case5": "assets/img/pc-case5.webp",
 "pc-case6": "assets/img/pc-case6.webp",
 "pc-case7": "assets/img/pc-case7.webp",
 "kk-dikey": "assets/img/kk-dikey.webp",
 "kk-yatay": "assets/img/kk-yatay.webp",
 "kk-thumb": "assets/img/kk-thumb.webp",
 "lg-08": "assets/img/lg-08.webp",
 "lg-09": "assets/img/lg-09.webp",
 "lg-11": "assets/img/lg-11.webp",
 "lg-14": "assets/img/lg-14.webp"
};

const VIDS = {
 "mx-case": {
  "u": "assets/video/mx-case.mp4",
  "w": 1280,
  "h": 720
 },
 "mx-logo": {
  "u": "assets/video/mx-logo.mp4",
  "w": 1280,
  "h": 422
 },
 "mx-2d": {
  "u": "assets/video/mx-2d.mp4",
  "w": 900,
  "h": 900
 },
 "mx-3d": {
  "u": "assets/video/mx-3d.mp4",
  "w": 900,
  "h": 900
 },
 "mx-layout": {
  "u": "assets/video/mx-layout.mp4",
  "w": 1280,
  "h": 720
 },
 "mx-photo": {
  "u": "assets/video/mx-photo.mp4",
  "w": 1280,
  "h": 466
 },
 "mx-color": {
  "u": "assets/video/mx-color.mp4",
  "w": 1280,
  "h": 600
 },
 "mx-font": {
  "u": "assets/video/mx-font.mp4",
  "w": 1280,
  "h": 720
 },
 "kr-intro": {
  "u": "assets/video/kr-intro.mp4",
  "w": 1280,
  "h": 534
 },
 "kr-logo": {
  "u": "assets/video/kr-logo.mp4",
  "w": 1280,
  "h": 334
 },
 "kr-2d": {
  "u": "assets/video/kr-2d.mp4",
  "w": 900,
  "h": 900
 },
 "kr-color": {
  "u": "assets/video/kr-color.mp4",
  "w": 1280,
  "h": 548
 },
 "kr-layouts": {
  "u": "assets/video/kr-layouts.mp4",
  "w": 1280,
  "h": 720
 },
 "kr-font": {
  "u": "assets/video/kr-font.mp4",
  "w": 1280,
  "h": 500
 },
 "kr-phone": {
  "u": "assets/video/kr-phone.mp4",
  "w": 720,
  "h": 720
 },
 "mi-sydney": {
  "u": "assets/video/mi-sydney.mp4",
  "w": 1200,
  "h": 438
 },
 "as-g1": {
  "u": "assets/video/as-g1.mp4",
  "w": 1280,
  "h": 720
 },
 "as-g2": {
  "u": "assets/video/as-g2.mp4",
  "w": 1280,
  "h": 720
 },
 "as-g3": {
  "u": "assets/video/as-g3.mp4",
  "w": 1280,
  "h": 720
 },
 "as-g4": {
  "u": "assets/video/as-g4.mp4",
  "w": 1280,
  "h": 720
 },
 "as-g5": {
  "u": "assets/video/as-g5.mp4",
  "w": 1280,
  "h": 500
 },
 "pc-logo4": {
  "u": "assets/video/pc-logo4.mp4",
  "w": 1280,
  "h": 600
 },
 "hs-g1": {
  "u": "assets/video/hs-g1.mp4",
  "w": 1200,
  "h": 674
 },
 "hs-g2": {
  "u": "assets/video/hs-g2.mp4",
  "w": 1066,
  "h": 600
 },
 "hp-g1": {
  "u": "assets/video/hp-g1.mp4",
  "w": 1000,
  "h": 460
 },
 "hp-g2": {
  "u": "assets/video/hp-g2.mp4",
  "w": 1000,
  "h": 460
 },
 "hp-g3": {
  "u": "assets/video/hp-g3.mp4",
  "w": 1000,
  "h": 460
 },
 "ek-g1": {
  "u": "assets/video/ek-g1.mp4",
  "w": 888,
  "h": 500
 },
 "ek-g2": {
  "u": "assets/video/ek-g2.mp4",
  "w": 888,
  "h": 500
 },
 "ey-g1": {
  "u": "assets/video/ey-g1.mp4",
  "w": 800,
  "h": 450
 },
 "ey-g2": {
  "u": "assets/video/ey-g2.mp4",
  "w": 800,
  "h": 450
 },
 "th-g1": {
  "u": "assets/video/th-g1.mp4",
  "w": 1200,
  "h": 312
 },
 "th-g2": {
  "u": "assets/video/th-g2.mp4",
  "w": 1400,
  "h": 364
 },
 "pc-color3": {
  "u": "assets/video/pc-color3.mp4",
  "w": 1280,
  "h": 720
 },
 "pc-font2": {
  "u": "assets/video/pc-font2.mp4",
  "w": 1280,
  "h": 720
 },
 "pc-icons": {
  "u": "assets/video/pc-icons.mp4",
  "w": 1280,
  "h": 720
 },
 "lg-assemble": {
  "u": "assets/video/lg-assemble.mp4",
  "w": 900,
  "h": 900
 }
};

const AR = {"c-maximum": 1.2785, "c-miles": 1.2785, "c-btc-identity": 1.2785, "c-thy": 1.2785, "c-hep": 1.2785, "c-hayat": 1.2785, "c-esra-kurye": 1.2785, "c-esra-yeni": 1.2785, "c-little": 1.2785, "barbie-1": 1.1917, "barbie-2": 1.1917, "barbie-3": 1.1917, "barbie-p1": 0.6859, "barbie-p2": 0.6859, "barbie-p3": 0.6859, "yt-us": 1.7771, "yt-asli": 1.7778, "yt-hisse2": 1.7771, "yt-kripto": 1.7771, "yt-tff": 1.7771, "yt-pizza": 1.7771, "yt-milli": 1.7771, "yhumb": 1.25, "lg-thumb": 1.25, "kr-thumb": 1.25, "hs-thumb": 1.2415, "sok-thumb": 1.25, "yt-sok1": 2.0036, "yt-sok2": 2.1695, "yt-detective": 1.7771, "milli-cover": 1.7766, "asli-thumb": 1.25, "hisse2-1": 1.7778, "hisse2-2": 1.7778, "hisse2-3": 1.7778, "hisse2-4": 1.7778, "asli-1": 1.7778, "asli-2": 1.7778, "asli-3": 1.7778, "asli-4": 1.9124, "fire-1": 1.9512, "fire-2": 1.875, "fire-3": 1.875, "fire-4": 1.7778, "ul-thumb": 1.25, "ul-01": 1.6151, "ul-02": 1.6151, "ul-03": 1.6151, "ul-04": 1.6151, "ul-05": 1.6151, "ul-06": 1.6151, "ul-07": 1.6151, "ul-08": 1.6151, "ul-09": 1.6151, "ul-10": 1.6151, "ul-11": 1.6151, "ul-12": 1.6151, "en-thumb": 1.25, "en-22": 1.7778, "en-kapak": 1.7778, "en-2024": 1.7778, "en-stake": 1.7778, "en-history": 1.7778, "en-highl": 1.7778, "en-fin": 1.7778, "en-toc": 1.7778, "en-palette": 1.7778, "en-type": 1.7778, "mx-m1": 1.5007, "mx-m2": 1.3333, "mx-m3": 1.3333, "mx-m4": 1.3333, "mx-m5": 1.7778, "mx-m6": 1.7778, "mx-m7": 0.6667, "mx-m8": 0.9401, "mx-m9": 0.7306, "mx-m10": 2.5135, "mx-m11": 2.0408, "kr-m2": 1.5007, "kr-m3": 1.3333, "kr-m4": 1.3333, "kr-m5": 1.3333, "kr-m6": 1.7778, "kr-hoard": 2.0408, "mi-yatay": 1.7766, "mi-dikey": 0.7199, "mi-billboard": 1.7778, "mi-inflight": 2.1341, "mi-bento": 1.0, "mi-afrika": 0.7201, "mi-asya": 0.7201, "mi-avrupa": 0.7201, "mi-avustralya": 0.7201, "mi-guney": 0.7201, "mi-kuzey": 0.7201, "ms-thumb": 1.2415, "sok-barbie-thumb": 1.2415, "mt-cover": 1.2415, "mt-kapak2": 1.7766, "mt-c1": 1.0, "mt-c2": 1.0, "mt-c3": 1.0, "yt-maldives": 1.7778, "sutas-thumb": 1.2415, "yt-sutas": 1.7778, "hs-1": 1.7778, "hs-2": 1.3333, "hs-3": 1.7778, "hp-k1": 1.7316, "hp-k2": 1.7316, "hp-k3": 1.7316, "ek-banner": 4.7244, "ek-mock": 1.3333, "ey-1": 1.7778, "ey-m1": 1.3333, "ey-m2": 1.3333, "ey-banner": 4.7244, "yt-thy": 1.8182, "yt-hep": 1.7778, "yt-eyeni": 1.7778, "yt-ekurye": 1.7778, "yt-hayat": 1.6861, "yt-miles": 1.7778, "pc-thumb": 1.5, "pc-gorsel": 1.5007, "pc-kv1": 1.7771, "pc-kv2": 1.7771, "pc-kv3": 1.7771, "pc-ab1": 1.7771, "pc-ab2": 1.7771, "pc-story": 0.5624, "pc-story1": 0.5624, "pc-case4": 1.7778, "pc-case5": 1.7778, "pc-case6": 1.7778, "pc-case7": 1.5209, "kk-dikey": 0.72, "kk-yatay": 1.7766, "kk-thumb": 1.3716, "lg-01": 1.0, "lg-02": 1.0, "lg-03": 1.0, "lg-04": 1.0, "lg-05": 1.0, "lg-06": 1.0, "lg-07": 1.0, "lg-08": 1.0, "lg-09": 1.0, "lg-10": 1.0, "lg-11": 1.0, "lg-12": 1.0, "lg-13": 1.0, "lg-14": 1.0, "mx-case": 1.7778, "mx-logo": 3.0332, "mx-2d": 1.0, "mx-3d": 1.0, "mx-layout": 1.7778, "mx-photo": 2.7468, "mx-color": 2.1333, "mx-font": 1.7778, "kr-intro": 2.397, "kr-logo": 3.8323, "kr-2d": 1.0, "kr-color": 2.3358, "kr-layouts": 1.7778, "kr-font": 2.56, "kr-phone": 1.0, "mi-sydney": 2.7397, "as-g1": 1.7778, "as-g2": 1.7778, "as-g3": 1.7778, "as-g4": 1.7778, "as-g5": 2.56, "pc-logo4": 2.1333, "hs-g1": 1.7804, "hs-g2": 1.7767, "hp-g1": 2.1739, "hp-g2": 2.1739, "hp-g3": 2.1739, "ek-g1": 1.776, "ek-g2": 1.776, "ey-g1": 1.7778, "ey-g2": 1.7778, "th-g1": 3.8462, "th-g2": 3.8462, "pc-color3": 1.7778, "pc-font2": 1.7778, "pc-icons": 1.7778, "lg-assemble": 1.0};

const PROJECTS = [
 {
  "slug": "maximum-rebranding",
  "cover": "c-maximum",
  "pos": "50% 60%",
  "title": "Maximum — Rebranding",
  "upper": "MAXIMUM — REBRANDING",
  "client": "İş Bankası — Maximum",
  "tagline": {
   "en": "Giving İş Bankası’s card brand a human face",
   "tr": "İş Bankası’nın kart markasına insani bir yüz kazandırmak"
  },
  "heading": {
   "en": "Adding dynamism to the logo",
   "tr": "Logoya dinamizm kazandırmak"
  },
  "tags": {
   "en": [
    "Brand",
    "Finance"
   ],
   "tr": [
    "Marka",
    "Finans"
   ]
  },
  "alt": "A smiling woman in a blue sheer shirt holds out a Maximum card in front of a large white Maximum wordmark against a blue sky",
  "hero": [
   "mx-case"
  ],
  "heroBleed": true,
  "desc": {
   "en": [
    "Maximum is İş Bankası’s credit card brand, launched in 2001 and today one of Türkiye’s most widely used, with 11.5 million customers and more than 440,000 partner merchants. For the brand’s 25th year, we made the logo the center of the whole brand identity.",
    "The idea is dynamism. We rotated the logo by 8.6° to bring energy and movement to the brand, and the same tilt shapes everything around it. The 2D icons are built from angled compositions, the 3D icons are translucent and glass-like, and the lifestyle photography uses vivid color, wide-angle lenses and asymmetric framing. A credit card at its coolest."
   ],
   "tr": [
    "Maximum, İş Bankası’nın 2001’de hayata geçirdiği ve bugün Türkiye’nin en yaygın kullanılan kredi kartı markalarından biri olan kartı. 11,5 milyon müşterisi ve 440 binden fazla üye iş yeri var. Markanın 25. yılında logoyu tüm marka kimliğinin merkezine aldık.",
    "Fikrimiz dinamizm. Logoyu 8,6° döndürerek markaya enerji ve hareket kattık. Aynı eğim çevresindeki her şeyi de şekillendiriyor. 2D ikonlar açılı kompozisyonlarla kuruldu, 3D ikonlar yarı saydam ve cam dokulu. Yaşam tarzı fotoğrafları canlı renk, geniş açı lens ve asimetrik kadrajla çekildi. Bir kredi kartının en havalı hâli."
   ]
  },
  "note": {
   "en": "This presentation is a Director’s Cut of the agency’s creative work. The concepts and assets may differ from the materials the client uses today.",
   "tr": "Bu sunum, ajansın yaratıcı işinin bir Director’s Cut’ıdır. Konseptler ve görseller, müşterinin bugün kullandığı materyallerden farklı olabilir."
  },
  "meta": [
   [
    "client",
    "İş Bankası — Maximum"
   ],
   [
    "field",
    {
     "en": "Brand identity & motion",
     "tr": "Marka kimliği ve hareket"
    }
   ],
   [
    "industry",
    {
     "en": "Finance",
     "tr": "Finans"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/257559989/Maximum-Rebranding"
   }
  ],
  "blocks": [
   {
    "t": "sec",
    "h": {
     "en": "Türkiye’s leading credit card brand.",
     "tr": "Türkiye’nin lider kredi kartı markası."
    },
    "body": {
     "en": [
      "Launched by Türkiye İş Bankası in 2001, Maximum is one of Türkiye’s most widely used credit card brands, offering a rewards-based payment experience designed to make everyday spending more rewarding."
     ],
     "tr": [
      "2001’de Türkiye İş Bankası tarafından hayata geçirilen Maximum, Türkiye’nin en yaygın kullanılan kredi kartı markalarından biri. Günlük harcamayı daha ödüllendirici hâle getiren, puan odaklı bir ödeme deneyimi sunuyor."
     ]
    },
    "stats": [
     {
      "n": {
       "en": "11.5 million",
       "tr": "11,5 milyon"
      },
      "l": {
       "en": "Customers",
       "tr": "Müşteri"
      }
     },
     {
      "n": {
       "en": "440,000+",
       "tr": "440.000+"
      },
      "l": {
       "en": "Partner merchants",
       "tr": "Üye iş yeri"
      }
     }
    ],
    "closing": {
     "en": "Celebrating 25 years of making life easier, Maximum continues to bring value to everyday life across Türkiye.",
     "tr": "Hayatı kolaylaştırmanın 25. yılını kutlayan Maximum, Türkiye genelinde gündelik hayata değer katmaya devam ediyor."
    }
   },
   {
    "t": "sec",
    "h": {
     "en": "Adding dynamism to our logo",
     "tr": "Logoya dinamizm kazandırmak"
    },
    "body": {
     "en": [
      "We’re turning the Maximum logo into more than a brand signature. It becomes the central visual asset of our brand identity. By rotating the logo 8.6°, we create a distinctive visual language that brings energy, movement and dynamism to the brand.",
      "To complement this approach, we’ve refreshed our visual language across 2D and 3D icons, as well as photography, creating a more contemporary, cohesive and distinctive brand world."
     ],
     "tr": [
      "Maximum logosunu yalnızca bir marka imzası olmaktan çıkarıp marka kimliğimizin merkezindeki görsel varlık yapıyoruz. Logoyu 8,6° döndürerek markaya enerji, hareket ve dinamizm katan ayırt edici bir görsel dil yaratıyoruz.",
      "Bu yaklaşımı tamamlamak için 2D ve 3D ikonlarda ve fotoğraflarda görsel dilimizi yeniledik. Böylece daha çağdaş, bütünlüklü ve ayırt edici bir marka dünyası kurduk."
     ]
    }
   },
   {
    "t": "bleed",
    "img": "mx-logo"
   },
   {
    "t": "statement",
    "text": {
     "en": "This is what a credit card looks like at its coolest.",
     "tr": "Bir kredi kartının en havalı hâli bu."
    }
   },
   {
    "t": "sec",
    "h": {
     "en": "2D & 3D Iconography",
     "tr": "2D ve 3D ikonografi"
    },
    "body": {
     "en": [
      "For our 2D iconography, instead of using editable stroke icons in a conventional, straight-on orientation, we introduce angled compositions inspired by the Maximum logo, creating a more dynamic and energetic visual language.",
      "Our 3D iconography focuses on translucent, glass-textured forms that emphasize light, depth and dimensionality."
     ],
     "tr": [
      "2D ikonografimizde düzenlenebilir çizgi ikonları alışılmış, düz bir yönelimde kullanmak yerine Maximum logosundan ilham alan açılı kompozisyonlar kullanıyoruz. Böylece daha dinamik ve enerjik bir görsel dil oluşuyor.",
      "3D ikonografimiz ise ışığı, derinliği ve boyutu öne çıkaran yarı saydam, cam dokulu formlara odaklanıyor."
     ]
    }
   },
   {
    "t": "pair",
    "imgs": [
     "mx-2d",
     "mx-3d"
    ]
   },
   {
    "t": "sec",
    "h": {
     "en": "Lifestyle Photography",
     "tr": "Yaşam tarzı fotoğrafçılığı"
    },
    "body": {
     "en": [
      "Our lifestyle photography features vibrant colors, natural lighting, dynamic compositions and a strong sense of movement.",
      "To reinforce this energetic visual language, we use wide-angle lenses and asymmetric framing to create a more dynamic and engaging perspective."
     ],
     "tr": [
      "Yaşam tarzı fotoğraflarımızda canlı renkler, doğal ışık, dinamik kompozisyonlar ve güçlü bir hareket hissi var.",
      "Bu enerjik görsel dili pekiştirmek için geniş açı lensler ve asimetrik kadrajlar kullanıyor, daha dinamik ve çekici bir bakış açısı yaratıyoruz."
     ]
    }
   },
   {
    "t": "bleed",
    "img": "mx-photo"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "mx-m6",
      "mx-m1"
     ],
     [
      "mx-m10"
     ],
     [
      "mx-m11",
      "mx-m2"
     ],
     [
      "mx-m3",
      "mx-m4",
      "mx-m5"
     ],
     [
      "mx-m7",
      "mx-m8",
      "mx-m9"
     ]
    ]
   },
   {
    "t": "one",
    "img": "mx-layout"
   },
   {
    "t": "pair",
    "imgs": [
     "mx-color",
     "mx-font"
    ]
   }
  ],
  "awards": [],
  "alts": {},
  "layout": "story",
  "preview": "mx-case",
  "heroFull": true
 },
 {
  "slug": "barbie-sokta",
  "cover": "sok-barbie-thumb",
  "pos": "50% 50%",
  "title": "Barbie Şok’ta",
  "upper": "BARBIE ŞOK’TA",
  "client": "Şok",
  "tagline": {
   "en": "Barbie, caught shopping at Şok",
   "tr": "Barbie, Şok’ta alışveriş yaparken yakalandı"
  },
  "heading": {
   "en": "Barbie’s licensed products arrive at Şok",
   "tr": "Barbie’nin lisanslı ürünleri Şok’ta"
  },
  "tags": {
   "en": [
    "Campaign",
    "Retail"
   ],
   "tr": [
    "Kampanya",
    "Perakende"
   ]
  },
  "awards": [
   {
    "k": "kristal",
    "n": 2
   },
   {
    "k": "felis",
    "n": 3
   }
  ],
  "alt": "Barbie in a pink-striped dress and sunglasses raises a hand against a camera flash in a Şok aisle, holding Piyale pasta and Mis milk",
  "alts": {
   "barbie-1": "Barbie in sunglasses raising a hand against the flash, holding Piyale pasta and Mis milk, with the line Barbie Şok’ta! and a 167,00 ₺ price tag",
   "barbie-2": "Barbie in a pink cap and jacket hiding her face behind her hand, pushing a yellow Şok trolley with a spray bottle of Mintax glass cleaner",
   "barbie-3": "Barbie in a pink dress and a printed headscarf reaching into a cold-drinks fridge and looking back over her shoulder",
   "barbie-p1": "Portrait version of the sunglasses scene",
   "barbie-p2": "Portrait version of the pink cap scene",
   "barbie-p3": "Portrait version of the fridge scene"
  },
  "hero": [
   "barbie-1",
   "barbie-2"
  ],
  "desc": {
   "en": [
    "Barbie’s licensed products were on sale at Şok. To announce it, we made it look as if Barbie herself had been caught shopping there. The campaign was called “Barbie Şok’ta” (“Barbie at Şok”).",
    "Barbie shows up between the shelves like a celebrity caught by paparazzi. The campaign won 2 Kristal Elma and 3 Felis awards."
   ],
   "tr": [
    "Barbie’nin lisanslı ürünleri Şok’ta satılıyordu. Bunu duyurmak için Barbie’yi Şok’ta alışveriş yaparken yakalanmış gibi gösterdik ve kampanyaya “Barbie Şok’ta” adını verdik.",
    "Barbie, paparazzilerin yakaladığı bir ünlü gibi reyonlar arasında karşımıza çıkıyor. Kampanya 2 Kristal Elma ve 3 Felis ödülü kazandı."
   ]
  },
  "meta": [
   [
    "client",
    "Şok"
   ],
   [
    "field",
    {
     "en": "Campaign key visuals",
     "tr": "Kampanya ana görselleri"
    }
   ],
   [
    "industry",
    {
     "en": "Retail",
     "tr": "Perakende"
    }
   ]
  ],
  "blocks": [
   {
    "t": "split",
    "img": "barbie-3",
    "label": {
     "en": "Key visuals",
     "tr": "Ana görseller"
    },
    "body": {
     "en": [
      "The key visuals show Barbie caught in different corners of the store."
     ],
     "tr": [
      "Ana görsellerde Barbie, mağazanın farklı köşelerinde alışveriş yaparken yakalanıyor."
     ]
    }
   },
   {
    "t": "text",
    "label": {
     "en": "Portrait formats",
     "tr": "Dikey formatlar"
    },
    "body": {
     "en": [
      "The same three scenes also come in a portrait format."
     ],
     "tr": [
      "Aynı üç sahne dikey formatta da hazırlandı."
     ]
    }
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "barbie-p1",
      "barbie-p2",
      "barbie-p3"
     ]
    ]
   }
  ],
  "links": [],
  "layout": "story"
 },
 {
  "slug": "btcturk-kripto-visual-identity",
  "cover": "kr-thumb",
  "title": "BtcTurk | Kripto — Visual Identity & Guideline Redesign",
  "upper": "BTCTURK | KRİPTO — VISUAL IDENTITY & GUIDELINE REDESIGN",
  "client": "BtcTurk | Kripto",
  "tagline": {
   "en": "A sharper visual language for a crypto platform",
   "tr": "Bir kripto platformu için daha keskin bir görsel dil"
  },
  "heading": {
   "en": "The first crypto exchange, renewed",
   "tr": "İlk kripto borsası, yenilendi"
  },
  "tags": {
   "en": [
    "Brand",
    "Crypto"
   ],
   "tr": [
    "Marka",
    "Kripto"
   ]
  },
  "alt": "The white dotted BtcTurk mark in the center of a glowing blue arc on a black background",
  "hero": [
   "kr-intro"
  ],
  "heroBleed": true,
  "desc": {
   "en": [
    "We renewed the whole visual identity of BtcTurk | Kripto, the first cryptocurrency exchange in Türkiye and the fourth ever established in the world. Launched in 2013, it now has more than 6 million users and over 190 crypto assets.",
    "The project redesigns the visual language of this pioneering platform, with its long history and global reach. We also wrote a new visual guide that reflects its innovative spirit and technological foundation. The system covers the logo, color, type, 2D iconography, phone-in-hand photography, motion and out-of-home."
   ],
   "tr": [
    "Türkiye’nin ilk, dünyanın dördüncü kripto para borsası olan BtcTurk | Kripto’nun görsel kimliğini baştan yeniledik. 2013’te kurulan platformun bugün 6 milyondan fazla kullanıcısı ve 190’dan fazla kripto varlığı var.",
    "Proje, köklü geçmişi ve küresel erişimi olan bu öncü platformun görsel dilini baştan tasarlıyor. Yenilikçi ruhunu ve teknolojik temelini yansıtan yeni bir görsel rehber de yazdık. Sistem logo, renk, tipografi, 2D ikonografi, telefon-elde fotoğrafları, hareket ve açık hava uygulamalarını kapsıyor."
   ]
  },
  "note": {
   "en": "This presentation is a Director’s Cut of the agency’s creative work. The concepts and assets may differ from the materials the client uses today.",
   "tr": "Bu sunum, ajansın yaratıcı işinin bir Director’s Cut’ıdır. Konseptler ve görseller, müşterinin bugün kullandığı materyallerden farklı olabilir."
  },
  "meta": [
   [
    "client",
    "BtcTurk | Kripto"
   ],
   [
    "field",
    {
     "en": "Brand identity & guideline",
     "tr": "Marka kimliği ve rehber"
    }
   ],
   [
    "industry",
    {
     "en": "Crypto",
     "tr": "Kripto"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/227208571/BtcTurk-Kripto-Visual-Identity-Guideline-Redesign"
   }
  ],
  "blocks": [
   {
    "t": "sec",
    "h": {
     "en": "Türkiye’s first crypto exchange.",
     "tr": "Türkiye’nin ilk kripto borsası."
    },
    "body": {
     "en": [
      "Launched in 2013, BtcTurk | Kripto is Türkiye’s pioneering crypto exchange, offering a secure and easy-to-use trading experience designed to make crypto accessible to everyone."
     ],
     "tr": [
      "2013’te kurulan BtcTurk | Kripto, Türkiye’nin öncü kripto borsası. Herkesin kripto paraya erişebilmesi için tasarlanmış, güvenli ve kullanımı kolay bir alım satım deneyimi sunuyor."
     ]
    },
    "stats": [
     {
      "n": {
       "en": "6 million+",
       "tr": "6 milyon+"
      },
      "l": {
       "en": "Users",
       "tr": "Kullanıcı"
      }
     },
     {
      "n": {
       "en": "190+",
       "tr": "190+"
      },
      "l": {
       "en": "Crypto assets",
       "tr": "Kripto varlık"
      }
     }
    ],
    "closing": {
     "en": "Celebrating 13 years of pioneering crypto in Türkiye, BtcTurk | Kripto continues to make digital assets part of everyday life.",
     "tr": "Türkiye’de kriptoya öncülük etmenin 13. yılını kutlayan BtcTurk | Kripto, dijital varlıkları gündelik hayatın bir parçası yapmaya devam ediyor."
    }
   },
   {
    "t": "bleed",
    "img": "kr-logo"
   },
   {
    "t": "split",
    "img": "kr-2d",
    "label": {
     "en": "2D Iconography",
     "tr": "2D ikonografi"
    },
    "body": {
     "en": [
      "Our 2D iconography is built on a precise, monoline system with uniform stroke weight and geometric construction. Subtle breaks in the strokes and sharp, angled corners, drawn from the BtcTurk | Kripto logo, give each icon a technical, dynamic character.",
      "Designed to stay clear at every size, the set makes complex crypto concepts instantly recognizable."
     ],
     "tr": [
      "2D ikonografimiz, tek tip çizgi kalınlığı ve geometrik kurguyla, hassas bir tek çizgi (monoline) sistemi üzerine kurulu. BtcTurk | Kripto logosundan alınan çizgilerdeki ince kırılmalar ve keskin, açılı köşeler her ikona teknik ve dinamik bir karakter veriyor.",
      "Her boyutta net kalacak şekilde tasarlanan set, karmaşık kripto kavramlarını anında tanınır kılıyor."
     ]
    }
   },
   {
    "t": "bleed",
    "img": "kr-color"
   },
   {
    "t": "one",
    "img": "kr-font"
   },
   {
    "t": "split",
    "img": "kr-phone",
    "label": {
     "en": "Phone in Hand",
     "tr": "Telefon elde"
    },
    "body": {
     "en": [
      "Our phone-in-hand photography places the BtcTurk | Kripto experience in real, human moments. Soft, bright and blurred backgrounds keep the focus on the dark interface, while natural hand gestures such as tapping, scrolling and holding make every product screen feel intuitive and approachable.",
      "Each image shows a real app screen or a brand moment, framed with dramatic light and depth."
     ],
     "tr": [
      "Telefon-elde fotoğraflarımız BtcTurk | Kripto deneyimini gerçek, insani anlara yerleştiriyor. Yumuşak, parlak ve bulanık arka planlar odağı koyu arayüzde tutuyor. Dokunmak, kaydırmak ve tutmak gibi doğal el hareketleri de her ürün ekranını sezgisel ve ulaşılabilir hissettiriyor.",
      "Her görsel, dramatik ışık ve derinlikle çerçevelenmiş gerçek bir uygulama ekranını ya da marka anını gösteriyor."
     ]
    }
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "kr-m2",
      "kr-m3"
     ],
     [
      "kr-hoard"
     ],
     [
      "kr-m4",
      "kr-m5",
      "kr-m6"
     ]
    ]
   },
   {
    "t": "one",
    "img": "kr-layouts"
   }
  ],
  "awards": [],
  "alts": {},
  "layout": "story",
  "preview": "kr-intro"
 },
 {
  "slug": "miles-and-smiles-route-6-continents",
  "cover": "ms-thumb",
  "title": "Miles&Smiles — Route: 6 Continents",
  "upper": "MILES&SMILES — ROUTE: 6 CONTINENTS",
  "client": "Turkish Airlines — Miles&Smiles",
  "tagline": {
   "en": "One ampersand, six continents",
   "tr": "Tek bir &, altı kıta"
  },
  "heading": {
   "en": "Fly to six continents, earn a million miles",
   "tr": "Altı kıtaya uç, bir milyon mil kazan"
  },
  "tags": {
   "en": [
    "Campaign",
    "Travel"
   ],
   "tr": [
    "Kampanya",
    "Seyahat"
   ]
  },
  "alt": "The Miles&Smiles ampersand inside a glowing glass globe floating in space, under the Turkish Airlines logo",
  "alts": {
   "mi-yatay": "Landscape key visual: the ampersand globe next to the words The Route: 6 Continents and the line Fly to 6 continents with Turkish Airlines and earn 1 million miles",
   "mi-afrika": "Africa key visual: the ampersand as a coin in front of pyramids and camels in the desert",
   "mi-asya": "Asia key visual: the ampersand as a cherry-blossom pink globe with a castle and Mount Fuji",
   "mi-avrupa": "Europe key visual: the ampersand as a mosaic coin in front of the Sagrada Família and the Eiffel Tower",
   "mi-avustralya": "Australia key visual: the ampersand inside a coral-reef globe in front of the Sydney Opera House",
   "mi-guney": "South America key visual: the ampersand on a mossy coin in front of waterfalls and a cathedral",
   "mi-kuzey": "North America key visual: the ampersand on a wooden coin beside the Statue of Liberty",
   "mi-dikey": "Portrait key visual with the ampersand globe in space",
   "mi-billboard": "Mockup: the key visual on a poster in a station hall",
   "mi-inflight": "Mockup: the key visual on a seat screen next to an airplane window",
   "mi-bento": "Mockups: the key visual on a street kiosk, a billboard and a city screen",
   "mi-sydney": "An animation of the Sydney coral-reef ampersand with the Opera House"
  },
  "hero": [
   "mi-yatay"
  ],
  "desc": {
   "en": [
    "Miles&Smiles is the frequent flyer program of Turkish Airlines. “The Route: 6 Continents” invites members to fly to six continents with Turkish Airlines and earn one million miles.",
    "The brand’s ampersand was designed for each continent, in harmony with the landmarks of that place."
   ],
   "tr": [
    "Miles&Smiles, Turkish Airlines’ın sık uçan yolcu programı. “The Route: 6 Continents”, üyeleri Turkish Airlines ile altı kıtaya uçmaya ve bir milyon mil kazanmaya davet ediyor.",
    "Markanın & işareti her kıta için, o yerin simgeleriyle uyumlu olacak şekilde tasarlandı."
   ]
  },
  "meta": [
   [
    "client",
    "Turkish Airlines — Miles&Smiles"
   ],
   [
    "field",
    {
     "en": "Campaign",
     "tr": "Kampanya"
    }
   ],
   [
    "industry",
    {
     "en": "Travel & aviation",
     "tr": "Seyahat ve havacılık"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/229173177/Miles-Smiles-Route-6-Continents"
   }
  ],
  "blocks": [
   {
    "t": "player",
    "id": "LTOSVKGiW18",
    "thumb": "yt-miles",
    "title": "Route: 6 Continents"
   },
   {
    "t": "sec",
    "h": {
     "en": "One ampersand, six continents",
     "tr": "Tek bir &, altı kıta"
    },
    "body": {
     "en": [
      "For each continent, the ampersand takes on the character of that place, in harmony with its landmarks.",
      "Together they draw the route. Fly to six continents with Turkish Airlines and earn one million miles."
     ],
     "tr": [
      "Her kıtada & işareti, o yerin simgeleriyle uyumlu olacak şekilde kıtaya özel bir tasarıma dönüşüyor.",
      "Hepsi birlikte rotayı çiziyor. Turkish Airlines ile altı kıtaya uç, bir milyon mil kazan."
     ]
    }
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "mi-afrika",
      "mi-asya",
      "mi-avrupa"
     ]
    ]
   },
   {
    "t": "bleed",
    "img": "mi-sydney"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "mi-avustralya",
      "mi-guney",
      "mi-kuzey"
     ]
    ]
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "mi-billboard",
      "mi-dikey"
     ],
     [
      "mi-inflight",
      "mi-bento"
     ]
    ]
   }
  ],
  "awards": [],
  "layout": "story",
  "preview": "mi-sydney"
 },
 {
  "slug": "paycell-gaming-club",
  "cover": "pc-thumb",
  "pos": "50% 40%",
  "title": "Paycell Gaming Club",
  "upper": "PAYCELL GAMING CLUB",
  "client": "Paycell",
  "tagline": {
   "en": "The brand identity for Paycell’s gaming campaigns",
   "tr": "Paycell’in gaming kampanyaları için marka kimliği"
  },
  "heading": {
   "en": "Play to earn, earn to play",
   "tr": "Oyna kazan, kazan oyna"
  },
  "tags": {
   "en": [
    "Brand",
    "Gaming"
   ],
   "tr": [
    "Marka",
    "Oyun"
   ]
  },
  "alt": "A man in a blue shirt holds a white game controller against a blue background with cyan swirls",
  "alts": {
   "pc-logo4": "An animation of the Paycell Gaming Club logo: GAMING CLUB drops away, the camera zooms into the p, the p is cropped into the mark, its center becomes rings, the rings turn wavy and the waves fill the screen",
   "pc-color3": "An animation of the Paycell Gaming Club color palette and gradients",
   "pc-font2": "An animation of the Neue Power and Greycliff type specimens",
   "pc-icons": "An animation of the Paycell Gaming Club gaming icon set"
  },
  "hero": [
   "pc-logo4"
  ],
  "heroBleed": true,
  "desc": {
   "en": [
    "The branding Paycell will use in its gaming campaigns. Its promise is “With Paycell Gaming Club, you’re always a winner!”",
    "The identity covers the logo, colors, typography, icons and key visuals."
   ],
   "tr": [
    "Paycell’in gaming alanındaki kampanyalarında kullanacağı markalama. Marka, “With Paycell Gaming Club, you’re always a winner!” diyerek her oyuncunun kazanacağını vaat ediyor.",
    "Kimlik logo, renkler, tipografi, ikonlar ve ana görselleri kapsıyor."
   ]
  },
  "meta": [
   [
    "client",
    "Paycell"
   ],
   [
    "field",
    {
     "en": "Brand identity & key visuals",
     "tr": "Marka kimliği ve ana görseller"
    }
   ],
   [
    "industry",
    {
     "en": "Fintech & gaming",
     "tr": "Finans teknolojisi ve oyun"
    }
   ]
  ],
  "blocks": [
   {
    "t": "jgrid",
    "rows": [
     [
      "pc-case4",
      "pc-case5"
     ],
     [
      "pc-case6",
      "pc-case7"
     ]
    ]
   },
   {
    "t": "bleed",
    "img": "pc-color3"
   },
   {
    "t": "bleed",
    "img": "pc-font2"
   },
   {
    "t": "bleed",
    "img": "pc-icons"
   },
   {
    "t": "statement",
    "text": {
     "en": "With Paycell Gaming Club, you’re always a winner!",
     "tr": "With Paycell Gaming Club, you’re always a winner!"
    }
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "pc-kv1",
      "pc-kv2"
     ],
     [
      "pc-kv3",
      "pc-ab1",
      "pc-ab2"
     ],
     [
      "pc-story",
      "pc-story1",
      "pc-gorsel"
     ]
    ]
   }
  ],
  "awards": [],
  "links": [],
  "layout": "story",
  "preview": "pc-logo4"
 },
 {
  "slug": "ultrand-t08-catalog",
  "cover": "ul-thumb",
  "pos": "50% 50%",
  "title": "ULTRAND T08 — Launch Catalog",
  "upper": "ULTRAND T08 — LAUNCH CATALOG",
  "client": "ULTRAND",
  "tagline": {
   "en": "A catalog for a pickup built for rough roads",
   "tr": "Zorlu yollar için üretilmiş bir pick-up’ın kataloğu"
  },
  "heading": {
   "en": "Rough roads, made easy",
   "tr": "Zorlu yollar, kolay yollar"
  },
  "tags": {
   "en": [
    "Catalog",
    "Automotive"
   ],
   "tr": [
    "Katalog",
    "Otomotiv"
   ]
  },
  "alt": "An ULTRAND T08 pickup on a blue desert dune under the ULTRAND logo",
  "hero": [
   "ul-01"
  ],
  "desc": {
   "en": [
    "The launch catalog for the ULTRAND T08, a pickup truck distributed in Türkiye. It opens with the line “Hayatın Seyri Ultra, İşin Sırrı ULTRAND” and goes page by page through what the truck does. It climbs, hauls, protects and connects.",
    "It also presents the five paint options of the T08."
   ],
   "tr": [
    "Türkiye’de dağıtılan ULTRAND T08 pick-up için hazırlanan lansman kataloğu. “Hayatın Seyri Ultra, İşin Sırrı ULTRAND” cümlesiyle açılıyor ve sayfa sayfa aracın neler yaptığını anlatıyor. Araç tırmanıyor, yük taşıyor, koruyor ve bağlıyor.",
    "Ayrıca T08’in beş boya seçeneğini tanıtıyor."
   ]
  },
  "meta": [
   [
    "client",
    "ULTRAND"
   ],
   [
    "field",
    {
     "en": "Catalog & launch visuals",
     "tr": "Katalog ve lansman görselleri"
    }
   ],
   [
    "industry",
    {
     "en": "Automotive",
     "tr": "Otomotiv"
    }
   ]
  ],
  "blocks": [
   {
    "t": "asym",
    "a": "ul-06",
    "b": "ul-03"
   },
   {
    "t": "offset",
    "imgs": [
     "ul-02",
     "ul-04"
    ]
   },
   {
    "t": "one",
    "img": "ul-05"
   },
   {
    "t": "pair",
    "imgs": [
     "ul-07",
     "ul-08"
    ]
   },
   {
    "t": "rail",
    "imgs": [
     "ul-09",
     "ul-10",
     "ul-11",
     "ul-12"
    ]
   }
  ],
  "awards": [],
  "links": [],
  "alts": {},
  "layout": "story"
 },
 {
  "slug": "enpara-annual-report",
  "cover": "en-thumb",
  "pos": "50% 50%",
  "title": "Enpara — 2025 Annual Report",
  "upper": "ENPARA — 2025 ANNUAL REPORT",
  "client": "Enpara",
  "tagline": {
   "en": "A report that looks like a product launch",
   "tr": "Bir ürün lansmanı gibi görünen faaliyet raporu"
  },
  "heading": {
   "en": "A visual world for the annual report",
   "tr": "Faaliyet raporu için bir görsel dünya"
  },
  "tags": {
   "en": [
    "Report",
    "Finance"
   ],
   "tr": [
    "Rapor",
    "Finans"
   ]
  },
  "alt": "A smiling woman holds an en card in front of one eye by the Bosphorus, with the Galata Tower and seagulls behind her",
  "alts": {
   "en-22": "Enpara 2025 Annual Report cover with a silver-pink 3D card on brushed metal",
   "en-kapak": "Alternative cover with a white en card on brushed metal",
   "en-2024": "Cover with a large 3D en coin on a violet-to-pink gradient",
   "en-stake": "Section opener with a hand holding a phone showing the en logo",
   "en-history": "History and progress timeline page",
   "en-highl": "Highlights page with a phone and data tiles",
   "en-fin": "Financial profile page with data panels and a bar chart",
   "en-toc": "Table of contents beside a 3D en coin",
   "en-palette": "Color palette page in violet and pink",
   "en-type": "Typography page set in Neue Haas Grotesk Display Pro"
  },
  "hero": [
   "en-22",
   "en-kapak"
  ],
  "desc": {
   "en": [
    "A visual world for Enpara’s 2025 annual report. It reads more like a product launch than a financial document and is built around the brand line “Dijital bankacılığın sade hali.”",
    "Inside, the system covers section openers with phone mockups, a timeline, highlight tiles, data panels, a table of contents and a plain white layout for the financial pages. The last two pages document the color palette and the type, set in Neue Haas Grotesk Display Pro."
   ],
   "tr": [
    "Enpara’nın 2025 faaliyet raporu için bir görsel dünya kurduk. Rapor, finansal bir belgeden çok bir ürün lansmanı gibi okunuyor ve “Dijital bankacılığın sade hali.” cümlesinin etrafında şekilleniyor.",
    "Sistem telefon mockup’lı bölüm açılışlarını, zaman çizelgesini, öne çıkanlar kartlarını, veri panellerini, içindekiler sayfasını ve finansal sayfalar için sade beyaz bir yerleşimi kapsıyor. Son iki sayfa renk paletini ve Neue Haas Grotesk Display Pro ile kurulan tipografiyi gösteriyor."
   ]
  },
  "meta": [
   [
    "client",
    "Enpara"
   ],
   [
    "field",
    {
     "en": "Annual report design",
     "tr": "Faaliyet raporu tasarımı"
    }
   ],
   [
    "industry",
    {
     "en": "Finance",
     "tr": "Finans"
    }
   ]
  ],
  "blocks": [
   {
    "t": "asym",
    "a": "en-stake",
    "b": "en-toc",
    "flip": true
   },
   {
    "t": "bleed",
    "img": "en-2024"
   },
   {
    "t": "one",
    "img": "en-highl"
   },
   {
    "t": "offset",
    "imgs": [
     "en-history",
     "en-fin"
    ]
   },
   {
    "t": "pair",
    "imgs": [
     "en-palette",
     "en-type"
    ]
   }
  ],
  "awards": [],
  "links": [],
  "layout": "story"
 },
 {
  "slug": "turkish-airlines-a-new-thrill",
  "cover": "c-thy",
  "title": "Turkish Airlines / A New Thrill",
  "upper": "TURKISH AIRLINES / A NEW THRILL",
  "client": "Turkish Airlines",
  "tagline": {
   "en": "Traveling with miles",
   "tr": "Millerle seyahat"
  },
  "heading": {
   "en": "A new thrill in every moment of life, with Miles&Smiles",
   "tr": "Hayatta her an Miles&Smiles ile yeni bir heyecan"
  },
  "tags": {
   "en": [
    "Campaign",
    "Travel"
   ],
   "tr": [
    "Kampanya",
    "Seyahat"
   ]
  },
  "awards": [
   {
    "k": "kristal",
    "n": 1
   },
   {
    "k": "bronz",
    "n": 1
   }
  ],
  "alt": "A dragon costume in a neon-lit street at night, with the line “A new thrill in every moment of life” across the frame",
  "hero": [
   "th-g1"
  ],
  "desc": {
   "en": [
    "An ad film for Turkish Airlines about the advantages of earning miles.",
    "It follows a man who touches the ampersand and travels with miles.",
    "The campaign won 1 Kristal Elma and 1 Bronz Elma award."
   ],
   "tr": [
    "Turkish Airlines için, mil kazanmanın avantajlarını anlatan bir reklam filmi.",
    "Ampersanta dokunup millerle seyahat eden bir adamı anlatıyor.",
    "Kampanya 1 Kristal Elma ve 1 Bronz Elma ödülü kazandı."
   ]
  },
  "meta": [
   [
    "client",
    "Turkish Airlines"
   ],
   [
    "field",
    {
     "en": "Ad film",
     "tr": "Reklam filmi"
    }
   ],
   [
    "industry",
    {
     "en": "Travel & aviation",
     "tr": "Seyahat ve havacılık"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/158694953/TURKISH-AIRLINES-A-NEW-THRILL"
   }
  ],
  "blocks": [
   {
    "t": "player",
    "id": "nHRFZvZUlsQ",
    "thumb": "yt-thy",
    "title": "A New Thrill Every Moment Of Life"
   },
   {
    "t": "bleed",
    "img": "th-g2"
   }
  ],
  "alts": {},
  "layout": "story",
  "preview": "th-g1"
 },
 {
  "slug": "hayat-sana-maximum",
  "cover": "hs-thumb",
  "pos": "50% 22%",
  "title": "Hayat Sana Maximum",
  "upper": "HAYAT SANA MAXIMUM",
  "client": "İş Bankası — Maximum",
  "tagline": {
   "en": "Çağlar Çorumlu and Esra Bilgiç in the Maximum films",
   "tr": "Maximum filmlerinde Çağlar Çorumlu ve Esra Bilgiç"
  },
  "heading": {
   "en": "Life is Maximum for you",
   "tr": "Hayat sana Maximum"
  },
  "tags": {
   "en": [
    "Campaign",
    "Finance"
   ],
   "tr": [
    "Kampanya",
    "Finans"
   ]
  },
  "alt": "Six characters, including a singer, a pilot and a barista, stand under the pink Hayat Sana Maximum logo, with a woman in the center holding the Maximum card",
  "alts": {
   "hs-2": "Mockup: the campaign visual on a large screen in a dark hall"
  },
  "hero": [
   "hs-g1"
  ],
  "desc": {
   "en": [
    "“Hayat Sana Maximum” (“Life Is Maximum for You”) is a campaign for İş Bankası’s Maximum card. Its ad films star actors Çağlar Çorumlu and Esra Bilgiç.",
    "In the films, Çağlar slips from one costume into the next while telling the campaigns together with Esra."
   ],
   "tr": [
    "“Hayat Sana Maximum”, İş Bankası’nın Maximum kartı için bir kampanya. Reklam filmlerinde oyuncular Çağlar Çorumlu ve Esra Bilgiç yer alıyor.",
    "Filmlerde Çağlar kılıktan kılığa girerken, Esra’yla birlikte kampanyaları anlatıyor."
   ]
  },
  "meta": [
   [
    "client",
    "İş Bankası — Maximum"
   ],
   [
    "field",
    {
     "en": "Campaign key visual",
     "tr": "Kampanya ana görseli"
    }
   ],
   [
    "industry",
    {
     "en": "Finance",
     "tr": "Finans"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/243455221/Hayat-Sana-Maximum"
   }
  ],
  "awards": [
   {
    "k": "effie"
   }
  ],
  "blocks": [
   {
    "t": "player",
    "id": "1q6PGKH4p5E",
    "thumb": "yt-hayat",
    "title": "Maximum Kart’ınla Hayat Sana Maximum"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "hs-g2",
      "hs-3"
     ]
    ]
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "hs-1",
      "hs-2"
     ]
    ]
   }
  ],
  "layout": "story",
  "preview": "hs-g1"
 },
 {
  "slug": "btcturk-hep-dahasi-var",
  "cover": "c-hep",
  "title": "BtcTurk / Hep Dahası Var",
  "upper": "BTCTURK / HEP DAHASI VAR",
  "client": "BtcTurk",
  "tagline": {
   "en": "If we had been there, we would have done history’s firsts",
   "tr": "Biz o zamanda olsaydık, tarihteki ilkleri biz gerçekleştirirdik"
  },
  "heading": {
   "en": "There’s always more",
   "tr": "Hep dahası var"
  },
  "tags": {
   "en": [
    "Campaign",
    "Crypto"
   ],
   "tr": [
    "Kampanya",
    "Kripto"
   ]
  },
  "alt": "A group in period costume gathered around a candlelit table of books and instruments in a stone hall",
  "alts": {
   "hp-k1": "Campaign visual from the Hep Dahası Var series",
   "hp-k2": "Campaign visual from the Hep Dahası Var series",
   "hp-k3": "Campaign visual from the Hep Dahası Var series"
  },
  "hero": [
   "hp-g1"
  ],
  "desc": {
   "en": [
    "BtcTurk was Türkiye’s first crypto exchange, so the campaign is built around history’s firsts. Its line, “Hep Dahası Var” (“There’s always more”), says that if we had been there at the time, we would have achieved that first.",
    "It launched in BtcTurk’s 10th year as a hint of what the next ten years would bring."
   ],
   "tr": [
    "BtcTurk Türkiye’nin ilk kripto borsası olduğu için kampanya tarihteki ilkleri anlatıyor. “Hep Dahası Var” cümlesi, o zamanda olsaydık o ilki biz gerçekleştirirdik diyor.",
    "Kampanya BtcTurk’ün 10. yılında, önümüzdeki on yılda yapacaklarımıza dair bir ipucu olarak yayınlandı."
   ]
  },
  "meta": [
   [
    "client",
    "BtcTurk"
   ],
   [
    "field",
    {
     "en": "Campaign",
     "tr": "Kampanya"
    }
   ],
   [
    "industry",
    {
     "en": "Crypto",
     "tr": "Kripto"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/173208199/BtcTurk-Hep-Dahas-Var"
   }
  ],
  "blocks": [
   {
    "t": "player",
    "id": "uOQyN1mGup4",
    "thumb": "yt-hep",
    "title": "BtcTurk’le #HepDahasıVar"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "hp-g2",
      "hp-g3"
     ]
    ]
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "hp-k1",
      "hp-k2"
     ],
     [
      "hp-k3"
     ]
    ]
   }
  ],
  "awards": [],
  "layout": "story",
  "preview": "hp-g1"
 },
 {
  "slug": "fishers-of-the-maldives",
  "cover": "mt-cover",
  "pos": "50% 50%",
  "title": "Fishers of the Maldives — Turkish Cargo",
  "upper": "FISHERS OF THE MALDIVES — TURKISH CARGO",
  "client": "Turkish Cargo",
  "tagline": {
   "en": "From the Maldives to the world’s kitchens in a day",
   "tr": "Maldivler’den dünyanın mutfaklarına bir günde"
  },
  "heading": {
   "en": "One fish at a time, across the world",
   "tr": "Tek tek yakalanan balık, dünyanın öbür ucuna"
  },
  "tags": {
   "en": [
    "Film",
    "Logistics"
   ],
   "tr": [
    "Film",
    "Lojistik"
   ]
  },
  "alt": "A Maldivian fisherman in a colorful bucket hat looks into the camera at sea, with a Turkish Airlines plane flying above",
  "alts": {
   "mt-kapak2": "An aerial view of a fishing boat on turquoise water next to the Turkish Cargo logo and the line Carry the world. Care for the world.",
   "mt-c1": "Carousel title card: a fishing boat above and below the waterline with the words Turkish Cargo sunar Maldivli Balıkçılar",
   "mt-c2": "Carousel slide in red and white with the headline Maldivli balıkçılar her gün zamanla yarışıyor beside a fisher looking through binoculars",
   "mt-c3": "Carousel slide in red and white with the headline Turkish Cargo ile Maldivler’den dünyaya beside three photos of cargo loading and a tuna box"
  },
  "hero": [
   "mt-kapak2"
  ],
  "desc": {
   "en": [
    "A film and an advertorial carousel for Turkish Cargo about the fishers of the Maldives. They catch tuna one by one with a method passed down through generations, called pole and line, which avoids unwanted catch and protects turtles, sharks, coral reefs and the wider ecosystem.",
    "Turkish Cargo then carries the catch to the world. Fish caught at dawn are processed by noon, flown out in the afternoon and kept in a temperature-controlled center in Istanbul that evening, at 2–8 °C and never frozen, so they reach kitchens around the world within 24 hours. The campaign signs off with “Carry the world. Care for the world.”"
   ],
   "tr": [
    "Turkish Cargo için, Maldivli balıkçıları anlatan bir film ve bir advertorial karusel. Balıkçılar ton balığını nesilden nesile aktarılan “pole and line” yöntemiyle tek tek yakalıyor. Bu yöntem istenmeyen avı önlüyor, kaplumbağaları, köpek balıklarını, mercan resiflerini ve ekosistemi koruyor.",
    "Turkish Cargo ise avı dünyaya taşıyor. Sabaha karşı tutulan balıklar öğlene kadar işleniyor, öğleden sonra uçağa yükleniyor ve akşam İstanbul’da sıcaklık kontrollü bir merkezde, 2–8 °C’de ve hiç dondurulmadan muhafaza ediliyor. Böylece 24 saat içinde dünyanın dört bir yanındaki mutfaklara ulaşıyor. Kampanya “Carry the world. Care for the world.” cümlesiyle imzalanıyor."
   ]
  },
  "meta": [
   [
    "client",
    "Turkish Cargo"
   ],
   [
    "field",
    {
     "en": "Film & social content",
     "tr": "Film ve sosyal içerik"
    }
   ],
   [
    "industry",
    {
     "en": "Logistics",
     "tr": "Lojistik"
    }
   ]
  ],
  "links": [],
  "blocks": [
   {
    "t": "player",
    "id": "Eiu-fUbQ6QU",
    "thumb": "yt-maldives",
    "title": "Fishers of the Maldives"
   },
   {
    "t": "split",
    "img": "mt-c1",
    "label": {
     "en": "Advertorial carousel",
     "tr": "Advertorial karusel"
    },
    "body": {
     "en": [
      "A three-slide carousel tells the story in Turkish. It follows the fishers racing against time every day and Turkish Cargo carrying their catch from the Maldives to the world."
     ],
     "tr": [
      "Üç slaytlık karusel, her gün zamanla yarışan balıkçıları ve avlarını Maldivler’den dünyaya taşıyan Turkish Cargo’yu Türkçe anlatıyor."
     ]
    }
   },
   {
    "t": "pair",
    "imgs": [
     "mt-c2",
     "mt-c3"
    ]
   }
  ],
  "awards": [],
  "layout": "story"
 },
 {
  "slug": "kotu-kan",
  "cover": "kk-thumb",
  "title": "Kötü Kan",
  "upper": "KÖTÜ KAN",
  "client": "NOW",
  "tagline": {
   "en": "Key art for a series on NOW",
   "tr": "NOW’daki bir dizi için ana afiş"
  },
  "heading": {
   "en": "The story of Kartal, a former police officer",
   "tr": "Eski polis memuru Kartal’ın hikâyesi"
  },
  "tags": {
   "en": [
    "Poster",
    "Series"
   ],
   "tr": [
    "Afiş",
    "Dizi"
   ]
  },
  "alt": "Four people in black stand in front of the thin crimson title letters Kötü Kan on a white poster",
  "hero": [
   "kk-yatay"
  ],
  "desc": {
   "en": [
    "Kötü Kan is a Turkish TV series that aired on NOW in 2024, starring Ertan Saban, Hüseyin Avni Danyal, Levent Ülgen and Damla Sönmez. It tells the story of Kartal, a former police officer.",
    "While working as head of security at a nightclub, Kartal clashes with a dangerous mafia group and gets into trouble. As he tries to get out of the mess, he also struggles to be a good father to the children who moved in with him after years apart. This page shows the series’ poster and key art."
   ],
   "tr": [
    "Kötü Kan, 2024’te NOW ekranlarında yayınlanan, başrollerini Ertan Saban, Hüseyin Avni Danyal, Levent Ülgen ve Damla Sönmez’in paylaştığı bir Türk dizisi. Eski bir polis memuru olan Kartal’ın hikâyesini anlatıyor.",
    "Kartal, bir gece kulübünün güvenlik müdürlüğünü yaparken tehlikeli bir mafya grubuyla ters düşer ve başı belaya girer. Mafya batağından sıyrılmaya çalışırken bir yandan da yıllar sonra yanına taşınan çocuklarına iyi bir baba olmak için mücadele eder. Bu sayfada dizinin afişi ve ana görseli yer alıyor."
   ]
  },
  "meta": [
   [
    "client",
    "NOW"
   ],
   [
    "field",
    {
     "en": "Poster & key art",
     "tr": "Afiş ve ana görsel"
    }
   ],
   [
    "industry",
    {
     "en": "Television",
     "tr": "Televizyon"
    }
   ]
  ],
  "blocks": [
   {
    "t": "split",
    "img": "kk-dikey",
    "label": {
     "en": "Portrait version",
     "tr": "Dikey versiyon"
    },
    "body": {
     "en": [
      "The same key art in a portrait format."
     ],
     "tr": [
      "Aynı ana görsel dikey formatta."
     ]
    }
   }
  ],
  "awards": [],
  "links": [],
  "alts": {},
  "layout": "story"
 },
 {
  "slug": "sok-filmleri",
  "cover": "sok-thumb",
  "pos": "55% 50%",
  "title": "Şok Filmleri",
  "upper": "ŞOK FİLMLERİ",
  "client": "Şok",
  "tagline": {
   "en": "No fees, same shelf prices",
   "tr": "Bedel yok, mağaza fiyatı aynı"
  },
  "heading": {
   "en": "Two films about paying too much",
   "tr": "Gereğinden fazla ödemeyi anlatan iki film"
  },
  "tags": {
   "en": [
    "Film",
    "Retail"
   ],
   "tr": [
    "Film",
    "Perakende"
   ]
  },
  "alt": "An older man sits in a leather armchair beside a fireplace in a dim living room",
  "alts": {
   "fire-2": "The older man in the armchair with a cat on his lap and a lamp beside him",
   "fire-3": "A younger man leans toward the older man in the armchair, with the cat in the foreground",
   "fire-4": "A young man on a yellow sofa looking at a yellow phone in a cozy living room"
  },
  "hero": [],
  "desc": {
   "en": [
    "Two ad films for Cepte ŞOK, Şok’s shopping app. Their slogan, “Bedel Ödemeyin!” (“Don’t pay the price!”), says that orders placed in the app arrive free of charge at the same low prices as in the store.",
    "The films use humor. Other apps charge more than their stores and add delivery fees, and Cepte ŞOK does not. The campaign also reminds viewers of the app’s refreshed interface, its faster operations and cash on delivery."
   ],
   "tr": [
    "Şok’un alışveriş uygulaması Cepte ŞOK için hazırlanan iki reklam filmi. Sloganları “Bedel Ödemeyin!”, uygulamadan verilen siparişlerin mağazadaki aynı uygun fiyatlarla ve ücretsiz teslim edildiğini söylüyor.",
    "Filmlerde mizah kullanılıyor. Rakip uygulamalar mağazadan pahalı satıp teslimat ücreti alıyor, Cepte ŞOK almıyor. Kampanya ayrıca uygulamanın yenilenen arayüzünü, hızlanan operasyonunu ve kapıda ödeme kolaylığını hatırlatıyor."
   ]
  },
  "meta": [
   [
    "client",
    "Şok"
   ],
   [
    "brand",
    "Cepte ŞOK"
   ],
   [
    "format",
    "Film"
   ]
  ],
  "links": [
   {
    "label": {
     "en": "Read in MediaCat",
     "tr": "MediaCat’te oku"
    },
    "url": "https://mediacat.com/bedel-odetmeyen-uygulama-cepte-sok/"
   }
  ],
  "blocks": [
   {
    "t": "film",
    "id": "WST5ahY7_ng",
    "thumb": "yt-sok1",
    "title": "Bedel Ödemeyin!",
    "text": {
     "en": "The campaign’s main film, “Bedel Ödemeyin!” (“Don’t pay the price!”). Orders placed in the app arrive free of charge at the same prices as in the store.",
     "tr": "Kampanyanın ana filmi “Bedel Ödemeyin!” Uygulamadan verilen siparişler mağazadaki aynı fiyatlarla ücretsiz teslim ediliyor."
    }
   },
   {
    "t": "film",
    "id": "46w2C_g2v1Q",
    "thumb": "yt-sok2",
    "title": "Meğer Bize Boşuna Ne Bedeller Ödetmişler!",
    "flip": true,
    "text": {
     "en": "“So they made us pay all those prices for nothing!” The second film tells the same “don’t pay the price” story.",
     "tr": "“Meğer bize boşuna ne bedeller ödetmişler!” İkinci film de aynı “bedel ödemeyin” fikrini anlatıyor."
    }
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "fire-2",
      "fire-3",
      "fire-4"
     ]
    ]
   }
  ],
  "awards": [],
  "layout": "story"
 },
 {
  "slug": "btcturk-reklam-filmleri",
  "cover": "yhumb",
  "title": "BtcTurk Reklam Filmleri",
  "upper": "BTCTURK REKLAM FİLMLERİ",
  "client": "BtcTurk",
  "tagline": {
   "en": "Ad films for BtcTurk’s stock and crypto apps",
   "tr": "BtcTurk’ün hisse ve kripto uygulamaları için reklam filmleri"
  },
  "heading": {
   "en": "Four ad films for the stock and crypto apps",
   "tr": "Hisse ve kripto uygulamaları için dört reklam filmi"
  },
  "tags": {
   "en": [
    "Film",
    "Ad films"
   ],
   "tr": [
    "Film",
    "Reklam"
   ]
  },
  "alt": "A man in a fedora looks through a magnifying glass at the camera against a blue background",
  "alts": {
   "yhumb": "A man in a fedora looks through a magnifying glass at the camera against a blue background",
   "hisse2-1": "The host stands with a mug next to a camping tent, in front of a white line chart on a green background",
   "hisse2-2": "The host leans against giant white BtcTurk letters on a mint-green background",
   "hisse2-3": "The host between two oversized phones under the words 7/24 Transfer, with a Türk Lirası Yatırma confirmation screen",
   "hisse2-4": "The host with open arms next to a clock ring and the words 7/24 Destek"
  },
  "hero": [],
  "desc": {
   "en": [
    "A set of ad films for BtcTurk | Hisse and BtcTurk | Kripto. Each film is about one thing, whether it is US stocks in the app, no more two-day wait for your money, buying Bitcoin easily or keeping track of your Bitcoin transactions without playing detective."
   ],
   "tr": [
    "BtcTurk | Hisse ve BtcTurk | Kripto için hazırlanan bir reklam filmi seti. Her film tek bir konuya odaklanıyor. Kimi uygulamada ABD hisselerini, kimi paran için iki gün beklememeyi, kimi kolayca Bitcoin almayı, kimi de Bitcoin işlemlerini dedektiflik yapmadan takip etmeyi anlatıyor."
   ]
  },
  "meta": [
   [
    "client",
    "BtcTurk"
   ],
   [
    "brand",
    "BtcTurk | Hisse, BtcTurk | Kripto"
   ],
   [
    "format",
    "Film"
   ]
  ],
  "blocks": [
   {
    "t": "film",
    "id": "nW3xoUC_LGw",
    "thumb": "yt-us",
    "title": "Amerikan Borsaları",
    "text": {
     "en": "BtcTurk | Hisse opens the US stock markets to its users with competitive commission rates.",
     "tr": "BtcTurk | Hisse, ABD borsalarını avantajlı komisyon oranlarıyla kullanıcılarına açıyor."
    }
   },
   {
    "t": "film",
    "id": "fK76FMfv6Wg",
    "thumb": "yt-hisse2",
    "title": "2 Gün Beklemek Yok",
    "flip": true,
    "text": {
     "en": "“2 gün beklemek yok. Paranız anında hesabınızda.” (“No two-day wait. Your money is in your account instantly.”) A film for BtcTurk | Hisse.",
     "tr": "“2 gün beklemek yok. Paranız anında hesabınızda.” BtcTurk | Hisse için hazırlanan film."
    }
   },
   {
    "t": "film",
    "id": "9i-Be8JETnA",
    "thumb": "yt-kripto",
    "title": "Kolayca Bitcoin ve Kriptopara Al, Sat!",
    "text": {
     "en": "The film sums up BtcTurk | Kripto’s Buy/Sell feature in one line, “Kolayca Bitcoin ve kriptopara Al, Sat.”",
     "tr": "Film, BtcTurk | Kripto’nun Al/Sat özelliğini tek cümleyle anlatıyor, “Kolayca Bitcoin ve kriptopara Al, Sat.”"
    }
   },
   {
    "t": "film",
    "id": "Xv_OryXlGeI",
    "thumb": "yt-detective",
    "title": "Bitcoin İşlemleri İçin Dedektif Olmaya Gerek Yok!",
    "flip": true,
    "text": {
     "en": "“You don’t need to be a detective for your Bitcoin transactions!” A film for BtcTurk | Kripto about keeping track of your Bitcoin transactions easily.",
     "tr": "“Bitcoin işlemleri için dedektif olmaya gerek yok!” BtcTurk | Kripto için, Bitcoin işlemlerini kolayca takip etmeyi anlatan film."
    }
   }
  ],
  "awards": [],
  "links": [],
  "layout": "story"
 },
 {
  "slug": "btcturk-yardim-etmek-dogasinda-var",
  "cover": "asli-thumb",
  "pos": "50% 35%",
  "title": "BtcTurk — Yardım Etmek Aslı’nın ve BtcTurk’ün Doğasında Var",
  "upper": "BTCTURK — YARDIM ETMEK ASLI’NIN VE BTCTURK’ÜN DOĞASINDA VAR",
  "client": "BtcTurk",
  "tagline": {
   "en": "Helping is in Aslı’s nature, and in BtcTurk’s",
   "tr": "Yardım etmek Aslı’nın da BtcTurk’ün de doğasında var"
  },
  "heading": {
   "en": "Helping, under BtcTurk’s roof",
   "tr": "Yardım etmek, BtcTurk çatısı altında devam ediyor"
  },
  "tags": {
   "en": [
    "Film",
    "Support"
   ],
   "tr": [
    "Film",
    "Destek"
   ]
  },
  "alt": "Close-up of a smiling woman with long hair in a dark red-lit room",
  "alts": {
   "asli-thumb": "Close-up of a smiling woman with long hair in a dark red-lit room",
   "yt-asli": "Close-up of a smiling woman with the line Yardım etmek Aslı’nın ve BtcTurk’ün doğasında var!",
   "asli-1": "A smiling woman at a desk in front of a monitor that reads BtcTurk | Destek, in a dark red-lit office",
   "asli-2": "An older man and a young girl carrying shopping bags outside a shop, framed like an old TV picture",
   "asli-3": "A child in a red raincoat walking out of a school gate in the rain, in a retro TV frame",
   "asli-4": "A man speaking to the camera in a busy airport hall"
  },
  "hero": [
   "as-g4"
  ],
  "desc": {
   "en": [
    "A film about Aslı, whose life has always been about helping others. She keeps helping people under the BtcTurk roof, which is why the film says helping is in her nature, and in BtcTurk’s too.",
    "It is a film for BtcTurk | Destek, BtcTurk’s 24/7 support team."
   ],
   "tr": [
    "Hayatı hep birilerine yardım etmekle geçen Aslı’yı anlatan bir film. Aslı yardım etmeye BtcTurk çatısı altında devam ediyor. Bu yüzden film, yardım etmenin hem onun hem de BtcTurk’ün doğasında olduğunu söylüyor.",
    "Film, BtcTurk’ün 7/24 çalışan destek ekibi BtcTurk | Destek için hazırlandı."
   ]
  },
  "meta": [
   [
    "client",
    "BtcTurk"
   ],
   [
    "brand",
    "BtcTurk | Destek"
   ],
   [
    "format",
    "Film"
   ]
  ],
  "blocks": [
   {
    "t": "player",
    "id": "aC1I9VCb-gA",
    "thumb": "yt-asli",
    "title": "Yardım Etmek Aslı’nın ve BtcTurk’ün Doğasında Var"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "as-g1",
      "as-g2"
     ],
     [
      "as-g3",
      "as-g5"
     ]
    ]
   }
  ],
  "awards": [],
  "links": [],
  "layout": "story",
  "preview": "as-g4"
 },
 {
  "slug": "sutas-50-yil-filmi",
  "cover": "sutas-thumb",
  "pos": "50% 50%",
  "title": "Sütaş — 50th Year Film",
  "upper": "SÜTAŞ — 50. YIL FİLMİ",
  "client": "Sütaş",
  "tagline": {
   "en": "Fifty years from the farm to hearts",
   "tr": "Çiftlikten kalplere elli yıl"
  },
  "heading": {
   "en": "Sütaş celebrates its 50th year",
   "tr": "Sütaş 50. yılını kutluyor"
  },
  "tags": {
   "en": [
    "Film",
    "Dairy"
   ],
   "tr": [
    "Film",
    "Süt ürünleri"
   ]
  },
  "alt": "A black-and-white calf looks straight into the camera against a blue sky and green hills",
  "alts": {
   "yt-sutas": "A green meadow party with cows, balloons, confetti and a 50th-anniversary cake under the line Çiftlikten Kalplere 50 Yıldır Sütaşkıyla"
  },
  "hero": [],
  "desc": {
   "en": [
    "Sütaş celebrates its 50th anniversary with a comprehensive advertising and communication campaign built on the slogan “Çiftlikten Kalplere, 50 Yıldır Sütaşkıyla” (“From the farm to hearts, 50 years with Sütaşkı”).",
    "I worked on the 50th-year film and on some of the brand’s 360 campaigns."
   ],
   "tr": [
    "Sütaş, 50. kuruluş yıl dönümünü “Çiftlikten Kalplere, 50 Yıldır Sütaşkıyla” sloganıyla hazırlanan kapsamlı bir reklam ve iletişim kampanyasıyla kutluyor.",
    "Sütaş’ın 50. yıl filminde ve markanın bazı 360 işlerinde çalıştım."
   ]
  },
  "meta": [
   [
    "client",
    "Sütaş"
   ],
   [
    "field",
    {
     "en": "Anniversary film & 360 campaigns",
     "tr": "Yıl dönümü filmi ve 360 işler"
    }
   ],
   [
    "industry",
    {
     "en": "Food & dairy",
     "tr": "Gıda ve süt ürünleri"
    }
   ]
  ],
  "blocks": [
   {
    "t": "player",
    "id": "ekp7ECFai7s",
    "thumb": "yt-sutas",
    "title": "Çiftlikten Kalplere 50 Yıldır Sütaşkıyla!"
   }
  ],
  "awards": [],
  "links": [],
  "layout": "story"
 },
 {
  "slug": "maximum-esra-kod-isteyen-kurye",
  "cover": "c-esra-kurye",
  "pos": "50% 35%",
  "title": "Maximum | Esra X Kod İsteyen Kurye",
  "upper": "MAXIMUM | ESRA X KOD İSTEYEN KURYE",
  "client": "İş Bankası — Maximum",
  "tagline": {
   "en": "The courier who asks for the code in the most unexpected places",
   "tr": "Olmadık yerlerde kod isteyen kurye"
  },
  "heading": {
   "en": "Esra and the courier who wants the code",
   "tr": "Esra ve kod isteyen kurye"
  },
  "tags": {
   "en": [
    "Ad film",
    "Finance"
   ],
   "tr": [
    "Reklam filmi",
    "Finans"
   ]
  },
  "alt": "A smiling man with curly hair and glasses seen through a door peephole",
  "alts": {
   "ek-mock": "Mockup: the campaign visual on a billboard"
  },
  "hero": [
   "ek-g1"
  ],
  "desc": {
   "en": [
    "A humorous ad film in the Maximum campaign. Esra keeps running into a courier who asks for the code in the most unexpected places."
   ],
   "tr": [
    "Maximum kampanyasından mizahi bir reklam filmi. Esra, olmadık yerlerde kod isteyen bir kuryeyle karşılaşıyor."
   ]
  },
  "meta": [
   [
    "client",
    "İş Bankası — Maximum"
   ],
   [
    "field",
    {
     "en": "Ad film",
     "tr": "Reklam filmi"
    }
   ],
   [
    "industry",
    {
     "en": "Finance",
     "tr": "Finans"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/243532023/Maximum-Esra-X-Kod-steyen-Kurye"
   }
  ],
  "blocks": [
   {
    "t": "player",
    "id": "6pSfT_enkLw",
    "thumb": "yt-ekurye",
    "title": "Esra X Kod İsteyen Kurye"
   },
   {
    "t": "bleed",
    "img": "ek-banner"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "ek-g2",
      "ek-mock"
     ]
    ]
   }
  ],
  "awards": [],
  "layout": "story",
  "preview": "ek-g1"
 },
 {
  "slug": "maximum-esra-yeni-yil",
  "cover": "c-esra-yeni",
  "pos": "50% 30%",
  "title": "Maximum | Esra X Yeni Yılda Değişmek İsteyen Arkadaşı",
  "upper": "MAXIMUM | ESRA X YENİ YILDA DEĞİŞMEK İSTEYEN ARKADAŞI",
  "client": "İş Bankası — Maximum",
  "tagline": {
   "en": "Renewing yourself in the new year with Maximum",
   "tr": "Yeni yılda kendini Maximum’la yenilemek"
  },
  "heading": {
   "en": "Esra’s new year, with Maximum",
   "tr": "Esra’nın yeni yılı, Maximum’la"
  },
  "tags": {
   "en": [
    "Ad film",
    "Finance"
   ],
   "tr": [
    "Reklam filmi",
    "Finans"
   ]
  },
  "alt": "A woman in a beret and glasses and a long-haired bearded man smiling in front of warm string lights",
  "alts": {
   "ey-m1": "Mockup: the campaign visual on a large screen in a dark hall",
   "ey-m2": "Mockup: the campaign visual on a poster on a brick wall"
  },
  "hero": [
   "ey-g1"
  ],
  "desc": {
   "en": [
    "An ad film in the Maximum campaign. Esra tells how she will renew herself in the new year with Maximum’s campaigns."
   ],
   "tr": [
    "Maximum kampanyasından bir reklam filmi. Esra, yeni yılda kendini Maximum’un kampanyalarıyla nasıl yenileyeceğini anlatıyor."
   ]
  },
  "meta": [
   [
    "client",
    "İş Bankası — Maximum"
   ],
   [
    "field",
    {
     "en": "Ad film",
     "tr": "Reklam filmi"
    }
   ],
   [
    "industry",
    {
     "en": "Finance",
     "tr": "Finans"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/243811637/Maximum-Esra-X-Yeni-Ylda-Degismek-steyen-Arkadas"
   }
  ],
  "blocks": [
   {
    "t": "player",
    "id": "nniJXeYi20Y",
    "thumb": "yt-eyeni",
    "title": "Esra X Yeni Yılda Değişmek İsteyen Arkadaşı"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "ey-g2",
      "ey-1"
     ]
    ]
   },
   {
    "t": "bleed",
    "img": "ey-banner"
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "ey-m1",
      "ey-m2"
     ]
    ]
   }
  ],
  "awards": [],
  "layout": "story",
  "preview": "ey-g1"
 },
 {
  "slug": "little-gestures",
  "cover": "lg-thumb",
  "title": "Little Gestures",
  "upper": "LITTLE GESTURES",
  "tagline": {
   "en": "Capsule characters with one small gesture each",
   "tr": "Her biri küçük bir jest taşıyan kapsül karakterler"
  },
  "heading": {
   "en": "Seven characters, each with a face of their own",
   "tr": "Her birinin kendi yüzü olan yedi karakter"
  },
  "tags": {
   "en": [
    "Illustration",
    "Characters"
   ],
   "tr": [
    "İllüstrasyon",
    "Karakter"
   ]
  },
  "alt": "Three capsule characters close up: one with sunglasses, a punk with a pink mohawk and a smiling boy in a red shirt",
  "alts": {
   "lg-assemble": "An animation of a capsule character being built from flat shapes, from body to face, before an orange halftone background appears"
  },
  "hero": [],
  "desc": {
   "en": [
    "A set of capsule-shaped characters, a little like matryoshka dolls. Each one has its own face, clothes and mood, built from a few flat shapes.",
    "The animation shows how one character is built from a few flat shapes, from capsule body to face, before the color drops in. Four of the characters are shown below on bold halftone backgrounds."
   ],
   "tr": [
    "Biraz matruşka bebekleri gibi, kapsül şeklinde karakterlerden oluşan bir set. Her birinin kendi yüzü, kıyafeti ve ruh hâli var. Hepsi birkaç düz şekilden kurulmuş.",
    "Animasyon, bir karakterin kapsül gövdeden yüze kadar birkaç düz şekilden nasıl kurulduğunu, ardından rengin nasıl düştüğünü gösteriyor. Aşağıda karakterlerden dördü, cesur yarım ton arka planlarda yer alıyor."
   ]
  },
  "meta": [
   [
    "field",
    {
     "en": "Illustration & character design",
     "tr": "İllüstrasyon ve karakter tasarımı"
    }
   ]
  ],
  "links": [
   {
    "label": {
     "en": "See the full project on Behance",
     "tr": "Projenin tamamı Behance’te"
    },
    "url": "https://www.behance.net/gallery/123698933/Little-Gestures"
   }
  ],
  "blocks": [
   {
    "t": "split",
    "img": "lg-assemble",
    "label": {
     "en": "How a character is built",
     "tr": "Bir karakter nasıl kurulur"
    },
    "body": {
     "en": [
      "Capsule body, clothes, head and face come together piece by piece, then the color drops in."
     ],
     "tr": [
      "Kapsül gövde, kıyafet, kafa ve yüz parça parça bir araya geliyor, ardından renk düşüyor."
     ]
    }
   },
   {
    "t": "jgrid",
    "rows": [
     [
      "lg-08",
      "lg-09",
      "lg-11",
      "lg-14"
     ]
    ]
   }
  ],
  "awards": [],
  "layout": "story",
  "preview": "lg-assemble",
  "previewPos": "50% 0%"
 },
 {
  "slug": "btcturk-ai-filmleri",
  "cover": "milli-cover",
  "title": "BtcTurk AI Filmleri",
  "upper": "BTCTURK AI FİLMLERİ",
  "client": "BtcTurk",
  "tagline": {
   "en": "Three BtcTurk films, made with AI",
   "tr": "Yapay zekâ ile üretilmiş üç BtcTurk filmi"
  },
  "heading": {
   "en": "Films made with AI",
   "tr": "Yapay zekâ ile üretilen filmler"
  },
  "tags": {
   "en": [
    "Film",
    "AI"
   ],
   "tr": [
    "Film",
    "AI"
   ]
  },
  "ai": true,
  "alt": "A white national team shirt and a ball on a podium in a full stadium at sunset",
  "alts": {
   "milli-cover": "A white national team shirt and a ball on a podium in a full stadium at sunset"
  },
  "hero": [],
  "desc": {
   "en": [
    "Three BtcTurk films made with AI. Two are for Türkiye’s national football team and one is for Bitcoin Pizza Day.",
    "The national team films aired on TV when the team went to the World Cup. BtcTurk | Hisse and BtcTurk | Kripto are the main sponsors of Türkiye’s national football teams."
   ],
   "tr": [
    "Yapay zekâ ile üretilmiş üç BtcTurk filmi. İkisi Türkiye milli futbol takımı için, biri Bitcoin Pizza Günü için hazırlandı.",
    "Milli takım filmleri, takım Dünya Kupası’na giderken televizyonda yayınlandı. BtcTurk | Hisse ve BtcTurk | Kripto, Türkiye milli futbol takımlarının ana sponsorları."
   ]
  },
  "meta": [
   [
    "client",
    "BtcTurk"
   ],
   [
    "brand",
    "BtcTurk | Hisse, BtcTurk | Kripto"
   ],
   [
    "format",
    "Film"
   ]
  ],
  "blocks": [
   {
    "t": "film",
    "id": "ZgGa1xpvqMQ",
    "thumb": "yt-tff",
    "title": "Şimdi Hep Birlikte Amerika’ya Kazanmaya!",
    "text": {
     "en": "“Now, all together, off to America to win!” A film for BtcTurk | Hisse, made with AI and aired on TV when the national team went to the World Cup.",
     "tr": "“Şimdi hep birlikte Amerika’ya kazanmaya!” BtcTurk | Hisse için yapay zekâ ile hazırlanan film, milli takım Dünya Kupası’na giderken televizyonda yayınlandı."
    }
   },
   {
    "t": "film",
    "id": "YlSwlxV4YIE",
    "thumb": "yt-milli",
    "title": "Dünyaya Meydan Okuyan A Milli Takımımıza Yürekten Başarılar Diliyoruz!",
    "flip": true,
    "text": {
     "en": "“Dünyaya meydan okuyoruz” (“We take on the world”) is BtcTurk | Kripto’s message to the A National Team, made with AI. It aired on TV on the way to the World Cup.",
     "tr": "“Dünyaya meydan okuyoruz”, BtcTurk | Kripto’dan A Milli Takım’a yapay zekâ ile hazırlanmış bir mesaj. Film Dünya Kupası yolunda televizyonda yayınlandı."
    }
   },
   {
    "t": "film",
    "id": "2PRMXifQeJA",
    "thumb": "yt-pizza",
    "title": "Bitcoin Pizza Günü Kutlu Olsun!",
    "text": {
     "en": "Bitcoin Pizza Day marks the first known purchase made with Bitcoin. On 22 May 2010, Laszlo Hanyecz paid 10,000 BTC for two pizzas. The film tells the story that turned that day into Bitcoin Pizza Day.",
     "tr": "Bitcoin Pizza Günü, Bitcoin ile yapılan bilinen ilk alışverişi anıyor. 22 Mayıs 2010’da Laszlo Hanyecz iki pizza için 10.000 BTC ödedi. Film, o günü Bitcoin Pizza Günü yapan bu hikâyeyi anlatıyor."
    }
   }
  ],
  "awards": [],
  "links": [],
  "layout": "story"
 }
];
