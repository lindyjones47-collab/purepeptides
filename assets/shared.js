// ===== Shared PurePeptides scripts =====
const WA_NUMBER = "33758563517";          // wa.me format
const WA_DISPLAY = "+33 7 58 56 35 17";
const SUPPORT_EMAIL = "sales@europemeds.com";

function waLink(text){
  const msg = encodeURIComponent(text || "Hello PurePeptides, I have a question about your research peptides.");
  return "https://wa.me/" + WA_NUMBER + "?text=" + msg;
}

// Inject the WhatsApp float + live chat panel
function mountWhatsApp(){
  // Idempotent: skip if page already has its own WA widget (e.g. index.html)
  if (document.querySelector('.wa-float')) return;
  const wrap = document.createElement('div');
  wrap.className = 'wa-float';
  wrap.innerHTML = `
    <div class="wa-panel" id="waPanel">
      <button class="wa-close" onclick="toggleWA()">✕</button>
      <div class="wa-head">
        <div class="ava">PP</div>
        <div>
          <div class="t1">PurePeptides Support</div>
          <div class="t2"><span class="dot"></span> Typically replies within minutes</div>
        </div>
      </div>
      <div class="wa-body">
        <div class="wa-msg">
          <div class="nm">PurePeptides</div>
          👋 Welcome! Need help with an order, payment, or product question? Chat with us on WhatsApp and our team will assist you right away.
          <div class="wa-time">Online now</div>
        </div>
      </div>
      <div class="wa-foot">
        <a class="wa-start" href="${waLink()}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5C10 8.5 9.5 7.1 9.3 6.6c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z"/></svg>
          Start WhatsApp Chat
        </a>
        <div class="wa-num">or call/message <a href="tel:+${WA_NUMBER}">${WA_DISPLAY}</a></div>
      </div>
    </div>
    <button class="wa-btn" onclick="toggleWA()" aria-label="WhatsApp chat">
      <svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.6.2-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.5-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5C10 8.5 9.5 7.1 9.3 6.6c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3 1.8.8 2.5.9 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4 0-.1-.2-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2z"/></svg>
    </button>`;
  document.body.appendChild(wrap);
}
function toggleWA(){ document.getElementById('waPanel').classList.toggle('open'); }

// Inject Tawk.to live chat + real-time visitor monitoring.
// Pinned bottom-LEFT so it doesn't collide with the WhatsApp float (bottom-right).
function mountTawk(){
  if (document.querySelector('script[src*="embed.tawk.to"]')) return; // idempotent
  const Tawk_API = window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();
  Tawk_API.customStyle = {
    visibility: {
      desktop: { position: 'bl', xOffset: 20, yOffset: 20 },
      mobile:  { position: 'bl', xOffset: 10, yOffset: 20 }
    }
  };
  const s1 = document.createElement('script');
  const s0 = document.getElementsByTagName('script')[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/6a33c54645840f1d49425270/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
}

// FAQ accordion
function toggleFaq(el){ el.parentElement.classList.toggle('open'); }

// ============================================
// MOBILE HAMBURGER MENU
// ============================================
// Site-wide nav links - one source of truth for the mobile menu
const MOBILE_NAV_LINKS = [
  { href: 'index.html',           label: 'Home',         icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
  { href: 'index.html#products',  label: 'Shop Peptides',icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' },
  { href: 'blog/',                label: 'Blog',         icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/></svg>' },
  { href: 'glossary/',            label: 'Peptide Glossary', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
  { href: 'calculator.html',      label: 'Peptide Calculator', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="12" x2="9" y2="12"/><line x1="12" y1="12" x2="13" y2="12"/><line x1="16" y1="12" x2="16" y2="12"/><line x1="8" y1="17" x2="9" y2="17"/><line x1="12" y1="17" x2="13" y2="17"/></svg>' },
  { href: 'converter.html',       label: 'Concentration Converter', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>' },
  { href: 'order-status.html',    label: 'Order Status', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
  { href: 'delivery.html',        label: 'Delivery Info',icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
  { href: 'faq.html',             label: 'FAQ',          icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' },
  { href: 'returns.html',         label: 'Returns',      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>' },
  { href: 'privacy.html',         label: 'Privacy Policy', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
  { href: 'terms.html',           label: 'Terms & Conditions', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' }
];

function mountMobileMenu(){
  // Idempotent: don't double-mount
  if (document.querySelector('.mobile-menu')) return;
  // Find the header
  const hdrIn = document.querySelector('.hdr-in');
  if (!hdrIn) return;
  // Build hamburger button
  const btn = document.createElement('button');
  btn.className = 'hamburger';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  btn.onclick = toggleMobileMenu;
  hdrIn.appendChild(btn);
  // Build slide-in menu
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.id = 'mobileMenu';
  menu.setAttribute('aria-hidden', 'true');
  menu.onclick = function(e){ if (e.target === menu) toggleMobileMenu(); };
  const linksHtml = MOBILE_NAV_LINKS.map(l =>
    `<a href="${l.href}">${l.icon}<span>${l.label}</span></a>`
  ).join('');
  menu.innerHTML = `
    <div class="mobile-menu-inner" role="dialog" aria-label="Site navigation">
      <div class="mobile-menu-head">
        <div class="t">Menu</div>
        <button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close menu">&times;</button>
      </div>
      <nav class="mobile-menu-list">
        ${linksHtml}
        <a href="checkout.html" class="cta">Checkout &rarr;</a>
      </nav>
      <div class="mobile-menu-foot">
        Need help? <a href="${waLink()}" target="_blank" rel="noopener">WhatsApp us</a> or email
        <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>
      </div>
    </div>`;
  document.body.appendChild(menu);
}

function toggleMobileMenu(){
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;
  const isOpen = menu.classList.toggle('open');
  document.body.classList.toggle('menu-open', isOpen);
  menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  const btn = document.querySelector('.hamburger');
  if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

// Close menu on Escape key
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('open')) toggleMobileMenu();
  }
});

// Mount on load
document.addEventListener('DOMContentLoaded', function(){
  mountWhatsApp();
  mountMobileMenu();
  mountTawk();
});
