/* ===== SITE LOGIC (routing, rendering, language/theme, in-site video player) ===== */
const LINKEDIN = 'https://www.linkedin.com/in/bilgekaanayd%C4%B1n/';
const BEHANCE = 'https://www.behance.net/bilgekaanaydin';
const EMAIL = 'bilgekaanaydinn@gmail.com';

const ICONS = {
  linkedin: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>',
  behance: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/></svg>'
};

const UI = {
  en: {
    hi: 'Hi I’m', work: 'Work', about: 'About', contact: 'Contact',
    open: 'Art direction for brands, campaigns and films',
    all: 'All work', prev: 'Previous project', next: 'Next project',
    client: 'Client', field: 'Field', industry: 'Industry', brand: 'Brand', format: 'Format', production: 'Production',
    recognition: 'Recognition', ytCopied: 'Link copied. YouTube is blocked in this preview, so paste it into a new tab. On the live site the film plays right here.', ytBlockedShort: 'YouTube is blocked in this preview. Copy this link into a new tab:', ytBlocked: 'YouTube is blocked in this preview. On the live site the film plays right here. To watch it now, copy this link into a new tab:', view: 'View project', ai: 'Made with AI', aiGreen: 'Made with', aiBlue: 'AI', aiFirst: 'green', behance: 'See the full project on Behance',
    play: 'Play film', playIn: 'Watch the film', close: 'Close', openOn: 'Doesn’t play here? Open it on',
    theme: 'Switch between dark and light theme', langName: 'Switch to Turkish',
    aboutLead: 'Senior art director with six years of experience on both sides of the industry: agency and in-house.',
    aboutP: [
      'I’m Bilge Kaan Aydın. At Tribal Worldwide Istanbul, I spent three years on campaigns for İş Bankası, Turkish Cargo, Miles&Smiles, Turkcell and Şok, among many others. One of those clients was BtcTurk, where I moved in-house.',
      'Today I shape creative across all four BtcTurk brands as part of a five-person team, from a national football team campaign to cinematic brand films.',
      'My production is AI-native. I work across the latest generative AI tools and combine them with the Adobe suite and Figma to take ideas from concept to final visual.',
      'As a freelancer, I work with brands such as İş Bankası, Enpara, Redoxon and Ultrand, leading some projects solo and supporting others.'],
    experience: 'Experience', education: 'Education', tools: 'Tools', elsewhere: 'Elsewhere',
    now: 'now', freelancer: 'Freelancer',
    jobs: { sr: 'Sr. Art Director', ad: 'Art Director', gd: 'Graphic Designer', jr: 'Jr. Art Director', intern: 'Intern' },
    eduText: 'Maltepe University, bachelor’s degree in Graphic Design. Graduated with a GPA of 3.41.',
    toolsText: 'Adobe Illustrator, Photoshop, After Effects, InDesign and XD. Figma. Generative AI tools for image and video.',
    contactLead: 'Open to freelance projects and full-time roles.',
    email: 'Email', basedIn: 'Based in', city: 'Istanbul, Türkiye', rights: '© 2026 Bilge Kaan Aydın'
  },
  tr: {
    hi: 'Merhaba, ben', work: 'İşler', about: 'Hakkımda', contact: 'İletişim',
    open: 'Markalar, kampanyalar ve filmler için sanat yönetmenliği',
    all: 'Tüm işler', prev: 'Önceki proje', next: 'Sonraki proje',
    client: 'Müşteri', field: 'Alan', industry: 'Sektör', brand: 'Marka', format: 'Format', production: 'Üretim',
    recognition: 'Ödüller', ytCopied: 'Bağlantı kopyalandı. Bu önizlemede YouTube engelleniyor; yeni sekmeye yapıştır. Canlı sitede film tam burada oynayacak.', ytBlockedShort: 'Bu önizlemede YouTube engelleniyor. Bu bağlantıyı yeni sekmeye kopyala:', ytBlocked: 'Bu önizlemede YouTube engelleniyor. Canlı sitede film tam burada oynayacak. Şimdi izlemek için bu bağlantıyı yeni bir sekmeye yapıştır:', view: 'Projeyi gör', ai: 'AI ile üretildi', aiGreen: 'ile üretildi', aiBlue: 'AI', aiFirst: 'blue', behance: 'Projenin tamamı Behance’te',
    play: 'Filmi oynat', playIn: 'Filmi izle', close: 'Kapat', openOn: 'Burada oynamıyor mu? Şurada aç:',
    theme: 'Koyu ve açık tema arasında geçiş yap', langName: 'İngilizceye geç',
    aboutLead: 'Sektörün iki tarafında, ajansta ve marka içinde, altı yıllık deneyime sahip bir senior art director.',
    aboutP: [
      'Ben Bilge Kaan Aydın. Tribal Worldwide Istanbul’da üç yıl boyunca İş Bankası, Turkish Cargo, Miles&Smiles, Turkcell ve Şok başta olmak üzere birçok marka için kampanyalar yaptım. Bu markalardan biri de BtcTurk’tü ve sonrasında BtcTurk’e in-house geçtim.',
      'Bugün beş kişilik bir ekibin parçası olarak dört BtcTurk markasının tamamında yaratıcı işleri şekillendiriyorum; milli takım kampanyasından sinematik marka filmlerine kadar.',
      'Üretim sürecim AI odaklı. Güncel üretken yapay zekâ araçlarını Adobe paketi ve Figma ile birleştirerek fikri konseptten final görsele taşıyorum.',
      'Freelance olarak İş Bankası, Enpara, Redoxon ve Ultrand gibi markalarla çalışıyorum; bazı projeleri tek başıma yürütüyor, bazılarında ekibe destek oluyorum.'],
    experience: 'Deneyim', education: 'Eğitim', tools: 'Araçlar', elsewhere: 'Bağlantılar',
    now: 'günümüz', freelancer: 'Freelance',
    jobs: { sr: 'Sr. Art Director', ad: 'Art Director', gd: 'Grafik Tasarımcı', jr: 'Jr. Art Director', intern: 'Stajyer' },
    eduText: 'Maltepe Üniversitesi, Grafik Tasarım lisans. 3,41 not ortalamasıyla mezun oldum.',
    toolsText: 'Adobe Illustrator, Photoshop, After Effects, InDesign ve XD. Figma. Görsel ve video için üretken yapay zekâ araçları.',
    contactLead: 'Freelance projelere ve tam zamanlı pozisyonlara açığım.',
    email: 'E-posta', basedIn: 'Konum', city: 'İstanbul, Türkiye', rights: '© 2026 Bilge Kaan Aydın'
  }
};

const app = document.getElementById('app');
const root = document.documentElement;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* language */
let lang = 'en';
try { const s = localStorage.getItem('bk-lang'); if (s === 'en' || s === 'tr') lang = s; else if ((navigator.language || '').toLowerCase().startsWith('tr')) lang = 'tr'; } catch (e) {}
root.lang = lang;
const t = k => UI[lang][k];
const tx = v => (v && typeof v === 'object' && !Array.isArray(v)) ? (v[lang] !== undefined ? v[lang] : v.en) : v;
const BRAND_FIX = [['İNSTAGRAM','INSTAGRAM'],['MAXİMUM','MAXIMUM'],['BİTCOİN','BITCOIN'],['LİNKEDİN','LINKEDIN'],['EFFİE','EFFIE'],['DAİLYMOTİON','DAILYMOTION'],['MEDİACAT','MEDIACAT'],['PAYCELL','PAYCELL']];
function U(s) {
  let r = String(s).toLocaleUpperCase(lang === 'tr' ? 'tr-TR' : 'en-US');
  if (lang === 'tr') BRAND_FIX.forEach(([a, b]) => { r = r.split(a).join(b); });
  return r;
}

/* theme */
try { const th = localStorage.getItem('bk-theme'); if (th === 'light' || th === 'dark') root.dataset.theme = th; } catch (e) {}

function chrome() {
  document.getElementById('mark').innerHTML = `<span class="hi">${esc(t('hi'))} </span><b>Bilge</b>`;
  document.getElementById('nav').innerHTML = `
    <a href="#work" data-nav="work">${esc(U(t('work')))}</a>
    <a href="#about" data-nav="about">${esc(U(t('about')))}</a>
    <a href="#contact" data-nav="contact">${esc(U(t('contact')))}</a>
    <span class="tools">
      <button class="lang" id="lang" type="button" aria-label="${esc(t('langName'))}"><span class="${lang === 'en' ? 'on' : ''}">EN</span><i>/</i><span class="${lang === 'tr' ? 'on' : ''}">TR</span></button>
      <button class="theme" id="theme" type="button" aria-label="${esc(t('theme'))}">
        <svg viewBox="0 0 22 16" fill="none" aria-hidden="true"><rect x=".75" y=".75" width="20.5" height="14.5" stroke="currentColor" stroke-width="1.5"/><rect x="11" y="3" width="8" height="10" fill="currentColor"/></svg>
      </button>
    </span>`;
  document.getElementById('foot').innerHTML = `
    <div class="foot-row">
      <span class="foot-left">
        <span class="soc">
          <a class="ico" href="${BEHANCE}" target="_blank" rel="noopener" aria-label="Behance">${ICONS.behance}</a>
          <a class="ico" href="${LINKEDIN}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
        </span>
        <span class="bar" aria-hidden="true">|</span>
        <span>${esc(t('city'))}</span>
      </span>
      <span>${esc(t('rights'))}</span>
    </div>`;
  document.getElementById('lang').addEventListener('click', () => {
    lang = lang === 'en' ? 'tr' : 'en';
    try { localStorage.setItem('bk-lang', lang); } catch (e) {}
    root.lang = lang;
    chrome();
    render(true);
  });
  document.getElementById('theme').addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try { localStorage.setItem('bk-theme', next); } catch (e) {}
  });
}

/* ---------- media (images + looping videos) ---------- */
const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
function mediaHTML(k, alt) {
  const v = VIDS[k];
  if (v) return `<video class="vid" data-src="${v.u}" muted loop playsinline preload="none" ${reduce ? 'controls' : ''} aria-label="${esc(alt || '')}" style="aspect-ratio:${v.w} / ${v.h}"></video>`;
  return `<img src="${IMGS[k]}" alt="${esc(alt || '')}" loading="lazy" decoding="async">`;
}
let io = null;
function armVideos() {
  if (io) io.disconnect();
  const vids = [...document.querySelectorAll('video.vid:not(.card-vid)')];
  armCardPreviews();
  if (!vids.length) return;
  io = new IntersectionObserver(es => es.forEach(e => {
    const v = e.target;
    if (v.classList.contains('card-vid') && reduce) return;
    if (e.isIntersecting) {
      if (!v.src && v.dataset.src) v.src = v.dataset.src;
      if (!reduce) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
    } else if (!v.paused) v.pause();
  }), { rootMargin: '240px 0px' });
  vids.forEach(v => io.observe(v));
  armCardPreviews();
}
function armCardPreviews() {
  if (!(window.matchMedia && matchMedia('(hover: hover)').matches) || reduce) return;
  document.querySelectorAll('.card').forEach(c => {
    const v = c.querySelector('.card-vid'); if (!v) return;
    let off = null;
    c.addEventListener('pointerenter', () => {
      clearTimeout(off);
      if (!v.src && v.dataset.src) v.src = v.dataset.src;
      const p = v.play(); if (p && p.catch) p.catch(() => {});
      v.addEventListener('playing', () => v.classList.add('on'), { once: true });
      if (!v.paused && v.readyState > 2) v.classList.add('on');
    });
    c.addEventListener('pointerleave', () => {
      v.classList.remove('on');
      off = setTimeout(() => { v.pause(); try { v.currentTime = 0; } catch (e) {} }, 480);
    });
  });
}

/* ---------- in-site player ---------- */
const player = document.getElementById('player');
const frame = document.getElementById('frame');
function embedSrc(prov, id) {
  if (prov === 'dm') return `https://www.dailymotion.com/embed/video/${id}?autoplay=1`;
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
}
function pageSrc(prov, id) { return prov === 'dm' ? `https://www.dailymotion.com/video/${id}` : `https://www.youtube.com/watch?v=${id}`; }
function openPlayer(prov, id) {
  frame.innerHTML = HOSTED_PREVIEW ? `<div class="pnote modalnote">${esc(t('ytBlocked'))}<br><span class="sel">${esc(pageSrc(prov, id))}</span></div>` : `<iframe src="${embedSrc(prov, id)}" title="Video" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  document.getElementById('pfall').innerHTML = `${esc(t('openOn'))} <a href="${pageSrc(prov, id)}" target="_blank" rel="noopener">${prov === 'dm' ? 'Dailymotion' : 'YouTube'}</a>`;
  document.getElementById('pclose').textContent = U(t('close'));
  player.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('pclose').focus();
}
const HOSTED_PREVIEW = !!window.__forceHosted || /(^|\.)claudeusercontent\.com$|(^|\.)claude\.ai$/.test(location.hostname);
function copyText(txt) {
  try { const ta = document.createElement('textarea'); ta.value = txt; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok; } catch (e) { return false; }
}
function previewToast(btn, prov, id) {
  const url = pageSrc(prov, id);
  const ok = copyText(url);
  let el = btn.querySelector('.ptoast');
  if (!el) { el = document.createElement('span'); el.className = 'ptoast'; btn.appendChild(el); }
  el.innerHTML = ok ? esc(t('ytCopied')) : `${esc(t('ytBlockedShort'))} <b>${esc(url)}</b>`;
  clearTimeout(el._t); el._t = setTimeout(() => el.remove(), 7000);
}
function playInline(btn, prov, id) {
  if (HOSTED_PREVIEW) { previewToast(btn, prov, id); return; }
  const r = btn.getBoundingClientRect();
  const box = document.createElement('div');
  box.className = 'play live';
  box.style.aspectRatio = r.width && r.height ? (r.width / r.height).toFixed(4) : '16 / 9';
  box.innerHTML = `<iframe src="${embedSrc(prov, id)}" title="Video" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
  btn.replaceWith(box);
}
function closePlayer() { player.classList.remove('open'); frame.innerHTML = ''; document.body.style.overflow = ''; }
document.getElementById('pclose').addEventListener('click', closePlayer);
player.addEventListener('click', e => { if (e.target === player) closePlayer(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && player.classList.contains('open')) closePlayer(); });
document.addEventListener('click', e => {
  const ya = e.target.closest('a[href*="youtube.com/watch"]');
  if (ya && !HOSTED_PREVIEW) { const m = ya.href.match(/[?&]v=([\w-]{11})/); if (m) { e.preventDefault(); openPlayer('yt', m[1]); return; } }
  const b = e.target.closest('[data-prov]');
  if (b) {
    e.preventDefault();
    const blk = b.closest('.b-film, .b-player');
    if (blk) { const pl = blk.querySelector('button.play'); if (pl) playInline(pl, b.dataset.prov, b.dataset.id); }
    else openPlayer(b.dataset.prov, b.dataset.id);
  }
});

/* ---------- awards ---------- */
function aiChip() {
  const g = `<span class="g">${esc(U(t('aiGreen')))}</span>`, bl = `<span class="bl">${esc(U(t('aiBlue')))}</span>`;
  return `<span class="chip ai" title="${esc(t('ai'))}">${t('aiFirst') === 'blue' ? bl + g : g + bl}</span>`;
}
function awardHTML(a, big) {
  const b = big ? ' big' : '';
  a = Object.assign({ n: 1 }, a);
  if (a.k === 'kristal') return `<span class="award k${b}" title="Kristal Elma"><span>${a.n}×</span><img src="${IMGS['logo-kristal']}" alt="Kristal Elma"></span>`;
  if (a.k === 'felis') return `<span class="award f${b}" title="Felis"><span>${a.n}×</span><img src="${IMGS['logo-felis']}" alt="Felis"></span>`;
  if (a.k === 'bronz') return `<span class="award br${b}" title="Bronz Elma"><span>${a.n}×</span><span class="al">BRONZ ELMA</span></span>`;
  return `<span class="award e${b}" title="Effie"><span>${a.n}×</span><img src="${IMGS['logo-effie']}" alt="Effie"></span>`;
}

/* ---------- work ---------- */
let introPlayed = false;

function cardHTML(p) {
  const bits = (p.awards || []).map(a => awardHTML(a, false)).join('') + (p.ai ? aiChip() : '');
  const badges = bits ? `<div class="badges">${bits}</div>` : '';
  const pv = p.preview && VIDS[p.preview];
  const prev = pv ? `<video class="vid card-vid" data-src="${VIDS[p.preview].u}" style="object-position:${p.previewPos || '50% 50%'}" muted loop playsinline preload="none" aria-hidden="true" tabindex="-1"></video>` : '';
  return `<a class="card" href="#${p.slug}">
    <div class="img"><img src="${IMGS[p.cover]}" alt="${esc(p.alt)}" style="object-position:${p.pos || '50% 50%'}" loading="lazy" decoding="async">${prev}${badges}</div>
    <div class="row"><h3>${esc(p.upper)}</h3><span class="tags">${esc(U(tx(p.tags).join(', ')))}</span></div>
    <p>${esc(tx(p.tagline))}</p>
  </a>`;
}

function workView() {
  const words = U(t('open')).split(' ')
    .map((w, i) => `<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`).join(' ');
  app.innerHTML = `
    <section class="open ${introPlayed ? 'still' : ''}"><h1>${words}</h1></section>
    <div class="work-head"><h2>${esc(U(t('work')))}</h2></div>
    <section class="grid">${PROJECTS.map(cardHTML).join('')}</section>`;
  introPlayed = true;
}

function pagerHTML(p) {
  const i = PROJECTS.indexOf(p);
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  return `<nav class="pager" aria-label="More projects">
      <a href="#${prev.slug}"><small>${esc(U(t('prev')))}</small><span>${esc(prev.upper)}</span></a>
      <a href="#${next.slug}"><small>${esc(U(t('next')))}</small><span>${esc(next.upper)}</span></a>
    </nav>`;
}

function linksHTML(p) {
  return (p.links || []).map(l => l.embed
    ? `<button class="btn solid" type="button" data-prov="${l.embed.prov}" data-id="${l.embed.id}">${esc(U(tx(l.label)))}</button>`
    : `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(U(tx(l.label)))}</a>`).join('');
}

function metaItems(p) {
  return (p.meta || []).filter(m => m[1]).map(m => [U(t(m[0])), esc(tx(m[1]))]);
}

function splitView(p) {
  const meta = metaItems(p);
  const aw = (p.awards || []).length ? `<dt>${esc(U(t('recognition')))}</dt><dd><span class="chipset">${p.awards.map(a => awardHTML(a, true)).join('')}</span></dd>` : '';
  app.innerHTML = `
    <article class="split">
      <div class="media"><img src="${IMGS[p.cover]}" alt="${esc(p.alt)}" decoding="async"></div>
      <div class="text">
        <a class="back" href="#work">${esc(U(t('all')))}</a>
        <h1>${esc(p.upper)}</h1>
        <p class="sub">${esc(tx(p.tagline))}</p>
        <div class="body">${tx(p.desc).map(x => `<p>${esc(x)}</p>`).join('')}</div>
        <dl class="meta">${meta.map(m => `<dt>${m[0]}</dt><dd>${m[1]}</dd>`).join('')}${aw}</dl>
        <div class="actions">${linksHTML(p)}</div>
      </div>
    </article>${pagerHTML(p)}`;
}

/* ---------- story blocks ---------- */
function blockHTML(p, b) {
  const alt = k => (p.alts && p.alts[k]) || p.alt;
  const fig = k => `<figure>${mediaHTML(k, alt(k))}</figure>`;
  switch (b.t) {
    case 'one': return `<div class="b b-one">${fig(b.img)}</div>`;
    case 'bleed': return `<div class="b b-bleed">${fig(b.img)}</div>`;
    case 'pair': return `<div class="b b-pair">${b.imgs.map(fig).join('')}</div>`;
    case 'trio': return `<div class="b b-trio">${b.imgs.map(fig).join('')}</div>`;
    case 'stagger': return `<div class="b b-stagger">${b.imgs.map(fig).join('')}</div>`;
    case 'offset': return `<div class="b b-offset">${b.imgs.map(fig).join('')}</div>`;
    case 'asym': return `<div class="b b-asym ${b.flip ? 'flip' : ''}">${fig(b.a)}${fig(b.b)}</div>`;
    case 'bands': return `<div class="b b-bands">${b.imgs.map(fig).join('')}</div>`;
    case 'mosaic': return `<div class="b b-mosaic">${b.items.map(i => `<figure style="grid-column:${i.c};${i.r ? 'grid-row:' + i.r : ''}">${mediaHTML(i.k, alt(i.k))}</figure>`).join('')}</div>`;
    case 'jgrid': return `<div class="b b-jgrid">${b.rows.map(r => `<div class="jrow">${r.map(k => `<figure style="flex:${AR[k] || 1} 1 0">${mediaHTML(k, alt(k))}</figure>`).join('')}</div>`).join('')}</div>`;
    case 'sec': return `<section class="b-sec"><h3>${esc(tx(b.h))}</h3><div>${tx(b.body).map(x => `<p>${esc(x)}</p>`).join('')}${b.stats ? `<dl class="stats">${b.stats.map(s => `<div><dt>${esc(tx(s.n))}</dt><dd>${esc(U(tx(s.l)))}</dd></div>`).join('')}</dl>` : ''}${b.closing ? `<p class="closing">${esc(tx(b.closing))}</p>` : ''}</div></section>`;
    case 'rail': return `<div class="b b-rail">${b.imgs.map(fig).join('')}</div>`;
    case 'statement': return `<p class="b-statement">${esc(tx(b.text))}</p>`;
    case 'text': return `<div class="b-text"><h3>${esc(U(tx(b.label)))}</h3><div>${tx(b.body).map(x => `<p>${esc(x)}</p>`).join('')}</div></div>`;
    case 'split': return `<div class="b b-split"><figure>${mediaHTML(b.img, alt(b.img))}</figure>
      <div class="side"><h3>${esc(U(tx(b.label)))}</h3>${tx(b.body).map(x => `<p>${esc(x)}</p>`).join('')}</div></div>`;
    case 'player': return `<div class="b b-player"><button class="play" type="button" data-prov="${b.prov || 'yt'}" data-id="${b.id}" aria-label="${esc(t('playIn'))}: ${esc(b.title)}"><img src="${IMGS[b.thumb]}" alt="" loading="lazy" decoding="async"><span class="tri" aria-hidden="true"></span></button></div>`;
    case 'film': return `<div class="b b-film ${b.flip ? 'flip' : ''}">
      <button class="play" type="button" data-prov="${b.prov || 'yt'}" data-id="${b.id}" aria-label="${esc(t('playIn'))}: ${esc(b.title)}"><img src="${IMGS[b.thumb]}" alt="" loading="lazy" decoding="async"><span class="tri" aria-hidden="true"></span></button>
      <div class="ftxt"><h3>${esc(U(b.title))}</h3><p>${esc(tx(b.text))}</p><button class="btn" type="button" data-prov="${b.prov || 'yt'}" data-id="${b.id}">${esc(U(t('play')))}</button></div></div>`;
  }
  return '';
}

function storyView(p) {
  const alt = k => (p.alts && p.alts[k]) || p.alt;
  const hf = p.heroFit;
  const fig = k => hf
    ? `<figure class="fit" style="aspect-ratio:${hf.ratio}"><img src="${IMGS[k]}" alt="${esc(alt(k))}" style="object-position:${hf.pos || '50% 50%'}"></figure>`
    : `<figure>${mediaHTML(k, alt(k)).replace('loading="lazy"', 'loading="eager"')}</figure>`;
  const hero = !p.hero || !p.hero.length ? ''
    : p.hero.length === 1
    ? `<div class="${p.heroBleed ? 'b-bleed' : 'b-one'} hero">${fig(p.hero[0])}</div>`
    : `<div class="b-pair hero">${p.hero.map(fig).join('')}</div>`;
  const meta = metaItems(p).map(m => `<div><dt>${m[0]}</dt><dd>${m[1]}</dd></div>`).join('');
  const aw = (p.awards || []).length ? `<div><dt>${esc(U(t('recognition')))}</dt><dd>${p.awards.map(a => awardHTML(a, true)).join('')}</dd></div>` : '';
  const ai = p.ai ? `<div><dt>${esc(U(t('production')))}</dt><dd>${aiChip()}</dd></div>` : '';
  app.innerHTML = `
    <article class="story">
      <a class="back" href="#work">${esc(U(t('all')))}</a>
      ${hero}
      <section class="intro">
        <div><h1 class="name">${esc(p.upper)}${p.client ? `<span class="client">${esc(U(p.client))}</span>` : ''}</h1></div>
        <div class="copy">
          <h2>${esc(U(tx(p.heading)))}</h2>
          ${tx(p.desc).map(x => `<p>${esc(x)}</p>`).join('')}
          <dl class="c-meta">${meta}${aw}${ai}</dl>
          <div class="actions">${linksHTML(p)}</div>
          ${p.note ? `<p class="note">${esc(tx(p.note))}</p>` : ''}
        </div>
      </section>
      ${(p.blocks || []).map(b => blockHTML(p, b)).join('')}
    </article>${pagerHTML(p)}`;
}

/* ---------- about + contact ---------- */
function aboutView() {
  const J = t('jobs');
  const jobs = [
    ['2025 – ' + t('now'), J.sr, t('freelancer'), 'İş Bankası, Enpara, Redoxon, Ultrand, SAHA Robotic, Carexport360'],
    ['2025 – ' + t('now'), J.sr, 'BtcTurk', 'BtcTurk | Hisse, BtcTurk | Kripto, BtcTurk | Global, BtcTurk | Portföy'],
    ['2022 – 2025', J.ad, 'Tribal Worldwide Istanbul', 'İş Bankası, Maximum, Turkish Cargo, Miles&Smiles, Turkcell, İşCep, BtcTurk, Şok, NOW, Sütaş'],
    ['2022', J.gd, 'SAHA Robotic', ''],
    ['2021', J.jr, 'Antre Project', 'Eve, Aydın Örme, İstanbul Havacılık, Lusso, Pierre Cardin'],
    ['2020', J.intern, 'Dokuzdoksan', 'Taze Direkt']
  ];
  app.innerHTML = `
    <section class="page">
      <p class="lead">${esc(t('aboutLead'))}</p>
      <div class="about-copy"><span></span><div class="col">${t('aboutP').map(x => `<p>${esc(x)}</p>`).join('')}</div></div>
      <div class="facts">
        <h2>${esc(U(t('experience')))}</h2>
        <div>${jobs.map(j => `<div class="job"><span class="when">${esc(j[0])}</span><span><b>${esc(j[2])}</b><small>${esc(j[1])}</small></span><span>${esc(j[3])}</span></div>`).join('')}</div>
        <h2>${esc(U(t('recognition')))}</h2>
        <div class="rec">
          <div>${awardHTML({k:'kristal',n:2}, true)}${awardHTML({k:'felis',n:3}, true)}<a href="#barbie-sokta">Barbie Şok’ta</a></div>
          <div>${awardHTML({k:'effie'}, true)}<a href="#hayat-sana-maximum">Hayat Sana Maximum</a></div>
          <div>${awardHTML({k:'kristal',n:1}, true)}${awardHTML({k:'bronz',n:1}, true)}<a href="#turkish-airlines-a-new-thrill">Turkish Airlines / A New Thrill</a></div>
        </div>
        <h2>${esc(U(t('education')))}</h2>
        <div><p>${esc(t('eduText'))}</p></div>
        <h2>${esc(U(t('tools')))}</h2>
        <div><p>${esc(t('toolsText'))}</p></div>
        <h2>${esc(U(t('elsewhere')))}</h2>
        <div class="links">
          <a class="ico" href="${BEHANCE}" target="_blank" rel="noopener" aria-label="Behance">${ICONS.behance}</a>
          <a class="ico" href="${LINKEDIN}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
        </div>
      </div>
    </section>`;
}

function contactView() {
  app.innerHTML = `
    <section class="page">
      <p class="lead">${esc(t('contactLead'))}</p>
      <div class="contact-list">
        <a href="mailto:${EMAIL}"><span class="lab">${esc(U(t('email')))}</span><span class="val"><span>${EMAIL}</span></span></a>
        <a href="${LINKEDIN}" target="_blank" rel="noopener"><span class="lab">LINKEDIN</span><span class="val">${ICONS.linkedin}<span>Bilge Kaan Aydın</span></span></a>
        <a href="${BEHANCE}" target="_blank" rel="noopener"><span class="lab">BEHANCE</span><span class="val">${ICONS.behance}<span>behance.net/bilgekaanaydin</span></span></a>
        <div><span class="lab">${esc(U(t('basedIn')))}</span><span class="val"><span>${esc(t('city'))}</span></span></div>
      </div>
    </section>`;
}

function render(keep) {
  const y = window.scrollY;
  const key = location.hash.replace(/^#/, '');
  const p = PROJECTS.find(x => x.slug === key);
  let view = 'work';
  if (player.classList.contains('open')) closePlayer();
  if (p) { (p.layout === 'story' ? storyView : splitView)(p); document.title = `${p.title} — Bilge Kaan`; }
  else if (key === 'about') { aboutView(); view = 'about'; document.title = `${t('about')} — Bilge Kaan`; }
  else if (key === 'contact') { contactView(); view = 'contact'; document.title = `${t('contact')} — Bilge Kaan`; }
  else { workView(); document.title = 'Bilge Kaan — Senior Art Director'; }
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.dataset.nav === view) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  if (keep === true) window.scrollTo(0, y); else window.scrollTo(0, 0);
  armVideos();
}
window.addEventListener('hashchange', () => render());
chrome();
render();
