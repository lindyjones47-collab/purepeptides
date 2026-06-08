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

// FAQ accordion
function toggleFaq(el){ el.parentElement.classList.toggle('open'); }

// Mount on load
document.addEventListener('DOMContentLoaded', mountWhatsApp);
