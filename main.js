// ═══ NICHE MODAL DATA ═══════════════════════════════════════
const NICHE_DATA = {
  shop: {
    icon: '🛒',
    title: 'Онлайн-магазин',
    before: ['Клиент теряется в каталоге', 'Неясно как оформить заказ', 'Брошенные корзины'],
    after: ['Понятная структура и быстрый выбор', 'Один шаг до покупки', 'Рост конверсии +40–70%'],
    image: null,
    links: [
      { label: 'Чай и кофе', url: 'https://promo-pearl-plus.lovable.app/' },
      { label: 'Автомиг — автозапчасти', url: 'https://automig-bright-store.lovable.app/' },
      { label: 'АвтоДжапан — запчасти из Японии', url: 'https://auto-zen-parts.lovable.app/' },
      { label: 'Книжный магазин', url: 'https://cozy-pages-store.lovable.app/' },
    ],
  },
  salon: {
    icon: '💇',
    title: 'Салон красоты',
    before: ['Клиент ищет контакт', 'Ждёт ответа администратора', 'Уходит к конкурентам'],
    after: ['Нажимает кнопку', 'Выбирает время онлайн', 'Получает подтверждение'],
    image: '/images/niche-salon.png',
    links: [
      { label: 'Stellar Salon — прототип', url: 'https://salon-stellar-site.lovable.app/' },
    ],
  },
  medical: {
    icon: '🏥',
    title: 'Медицинский центр',
    before: ['Клиент не понимает услугу', 'Звонит с базовыми вопросами', 'Боится и откладывает запись'],
    after: ['Получает ответы прямо на сайте', 'Доверяет и записывается онлайн', 'Нагрузка на ресепшн снижается'],
    image: null,
    links: [
      { label: 'Неврология — прототип', url: 'https://nevrolog-room.vercel.app/' },
      { label: 'МРТ-центр — прототип', url: 'https://mri-demo-site.vercel.app/' },
    ],
  },
  fitness: {
    icon: '🏋️',
    title: 'Фитнес / кроссфит',
    before: ['Клиент не понимает чем вы отличаетесь', 'Смотрит на цену — уходит', 'Не доходит до пробной тренировки'],
    after: ['Чувствует атмосферу через сайт', 'Оставляет заявку на пробную', 'Рост продаж абонементов'],
    image: null,
    links: [
      { label: 'Спорт-клуб — приём заявок (прототип)', url: 'https://picform-launchpad.vercel.app/' },
    ],
  },
  travel: {
    icon: '🌍',
    title: 'Туризм и экспедиции',
    before: ['Клиент видит маршрут, но не чувствует его', 'Много вопросов до оплаты', 'Долгое принятие решения'],
    after: ['Погружение в опыт через сайт', 'Ответы встроены в структуру', 'Заявка без лишних звонков'],
    image: null,
    links: [
      { label: 'ТамТам Тур — прототип', url: 'https://tamtam-tour-buddy.lovable.app/' },
    ],
  },
  expert: {
    icon: '🧑‍💼',
    title: 'Услуги и эксперты',
    before: ['Клиент не понимает что именно купит', 'Сложно объяснить ценность услуги', 'Теряет интерес быстро'],
    after: ['Чёткое объяснение результата', 'Доверие через кейсы и структуру', 'Рост среднего чека'],
    image: null,
    links: [],
  },
};

// ═══ NICHE MODAL LOGIC ══════════════════════════════════════
const nicheModal = document.getElementById('niche-modal');
const nicheModalClose = document.getElementById('niche-modal-close');
const nicheModalIcon = document.getElementById('niche-modal-icon');
const nicheModalTitle = document.getElementById('niche-modal-title');
const nicheModalInfographic = document.getElementById('niche-modal-infographic');
const nicheModalLinks = document.getElementById('niche-modal-links');

function openNicheModal(nicheKey) {
  const data = NICHE_DATA[nicheKey];
  if (!data) return;

  nicheModalIcon.textContent = data.icon;
  nicheModalTitle.textContent = data.title;

  // Инфографика
  if (data.image) {
    nicheModalInfographic.innerHTML = `<img class="niche-modal-img" src="${data.image}" alt="Инфографика: ${data.title}" />`;
  } else {
    const beforeItems = data.before.map(t => `<li>${t}</li>`).join('');
    const afterItems = data.after.map(t => `<li>${t}</li>`).join('');
    nicheModalInfographic.innerHTML = `
      <div class="niche-infographic">
        <div class="niche-infographic-col bad">
          <div class="niche-infographic-col-title">Без системы</div>
          <ul class="niche-infographic-list">${beforeItems}</ul>
        </div>
        <div class="niche-infographic-col good">
          <div class="niche-infographic-col-title">С системой</div>
          <ul class="niche-infographic-list">${afterItems}</ul>
        </div>
      </div>`;
  }

  // Ссылки на прототипы
  if (data.links.length > 0) {
    const linksHtml = data.links.map(l =>
      `<a class="niche-proto-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
    ).join('');
    nicheModalLinks.innerHTML = `<div class="niche-modal-links-title">Прототипы сайтов</div>${linksHtml}`;
  } else {
    nicheModalLinks.innerHTML = `
      <div class="niche-modal-links-title">Нет готового прототипа?</div>
      <a class="niche-proto-cta" href="#lead-form">Обсудить под мой бизнес</a>`;
  }

  nicheModal.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  nicheModalClose.focus();
}

function closeNicheModal() {
  nicheModal.setAttribute('hidden', '');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-niche]').forEach(card => {
  card.addEventListener('click', () => openNicheModal(card.dataset.niche));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openNicheModal(card.dataset.niche);
    }
  });
});

nicheModalClose.addEventListener('click', closeNicheModal);
nicheModal.addEventListener('click', e => {
  if (e.target === nicheModal) closeNicheModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeNicheModal();
});

// ═══ REVEAL ══════════════════════════════════════════════════
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealElements.forEach((element) => revealObserver.observe(element));

// ═══ MONEY EXPLOSION ═════════════════════════════════════════
const BILLS = [
  { type: 'bill', symbol: '$', bg: '#2d7a3a', text: '#a8f0b0' },
  { type: 'bill', symbol: '$', bg: '#1e5c2b', text: '#c5f5cc' },
  { type: 'bill', symbol: '€', bg: '#3a3fb5', text: '#b0b8ff' },
  { type: 'bill', symbol: '€', bg: '#5c2d8a', text: '#e0b8ff' },
  { type: 'bill', symbol: '$', bg: '#3a7a2d', text: '#b8f0a8' },
  { type: 'bill', symbol: '€', bg: '#2d3ab5', text: '#a8b8ff' },
  { type: 'coin', symbol: '●', bg: 'radial-gradient(circle at 35% 35%, #ffe066, #f5a800, #b87a00)', text: '#fff8dc' },
  { type: 'coin', symbol: '●', bg: 'radial-gradient(circle at 35% 35%, #ffd700, #e8960a, #a06000)', text: '#fff3b0' },
  { type: 'coin', symbol: '●', bg: 'radial-gradient(circle at 35% 35%, #ffec80, #f0b000, #c07800)', text: '#fffacd' },
];

function spawnMoney(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const count = 14;

  for (let i = 0; i < count; i++) {
    const bill = BILLS[Math.floor(Math.random() * BILLS.length)];
    const el = document.createElement('div');
    el.className = bill.type === 'coin' ? 'money-coin' : 'money-bill';
    if (bill.type === 'bill') el.textContent = bill.symbol;

    const angle = (i / count) * 360 + Math.random() * 26 - 13;
    const dist = 160 + Math.random() * 200;
    const dx = Math.cos((angle * Math.PI) / 180) * dist;
    const dy = Math.sin((angle * Math.PI) / 180) * dist - 60;
    const rot = Math.random() * 600 - 300;
    const duration = 1600 + Math.random() * 600;

    el.style.cssText = `
      left:${cx}px;
      top:${cy}px;
      background:${bill.bg};
      color:${bill.text};
      --dx:${dx}px;
      --dy:${dy}px;
      --rot:${rot}deg;
      --dur:${duration}ms;
      animation-delay:${i * 22}ms;
    `;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration + i * 22 + 100);
  }

  // ── Одна особая купюра — летит долго и блуждает ──────────────
  const special = document.createElement('div');
  special.className = 'money-bill money-bill--special';
  special.textContent = Math.random() > 0.5 ? '$' : '€';
  const wx1 = (Math.random() - 0.5) * 320;
  const wy1 = -160 - Math.random() * 120;
  const wx2 = (Math.random() - 0.5) * 440;
  const wy2 = -60 + Math.random() * 220;
  const wx3 = (Math.random() - 0.5) * 260;
  const wy3 = 80 + Math.random() * 160;
  special.style.cssText = `
    left:${cx}px; top:${cy}px;
    background:#1e5c2b; color:#c5f5cc;
    --wx1:${wx1}px; --wy1:${wy1}px;
    --wx2:${wx2}px; --wy2:${wy2}px;
    --wx3:${wx3}px; --wy3:${wy3}px;
    --wr1:${Math.random()*300 - 150}deg;
    --wr2:${Math.random()*600 - 300}deg;
    --wr3:${Math.random()*900 - 450}deg;
  `;
  document.body.appendChild(special);
  setTimeout(() => special.remove(), 5600);
}

document.querySelectorAll('.button.primary').forEach((btn) => {
  btn.addEventListener('click', spawnMoney);
});

// ═══ PRICING ACCORDION ═══════════════════════════════════════
document.querySelectorAll('.pricing-card-top').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.pricing-card');
    const isOpen = card.classList.contains('is-open');
    document.querySelectorAll('.pricing-card').forEach((c) => c.classList.remove('is-open'));
    if (!isOpen) card.classList.add('is-open');
  });
});

const leadForm = document.querySelector('#lead-form');
const formNote = document.querySelector('#form-note');
const interestField = document.querySelector('select[name="interest"]');

document.querySelectorAll('[data-interest-link]').forEach((link) => {
  link.addEventListener('click', () => {
    const selectedInterest = link.getAttribute('data-interest-link');

    if (interestField && selectedInterest) {
      interestField.value = selectedInterest;
    }

    if (formNote) {
      formNote.textContent = `Выбран интерес: ${selectedInterest}. Добавьте контакты и короткий бриф.`;
    }
  });
});

const floatingCta = document.querySelector('.floating-cta');

window.addEventListener('scroll', () => {
  if (!floatingCta) {
    return;
  }

  const shouldCompress = window.scrollY > 280;
  floatingCta.classList.toggle('is-compact', shouldCompress);
});

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const name = String(formData.get('name') || '').trim();
  const contact = String(formData.get('contact') || '').trim();
  const interest = String(formData.get('interest') || '').trim();
  const brief = String(formData.get('brief') || '').trim();

  const body = [
    'Здравствуйте, хочу обсудить маршрут с Kayur Travel.',
    '',
    `Имя/группа: ${name}`,
    `Контакт: ${contact}`,
    `Интерес: ${interest}`,
    `Бриф: ${brief || 'Уточню в переписке.'}`,
  ].join('\n');

  const mailtoUrl = `mailto:Kayur-Travel@mail.ru?subject=${encodeURIComponent('Заявка с протопрезсайта Kayur Travel')}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;

  if (formNote) {
    formNote.textContent = 'Черновик письма сформирован. Если почтовый клиент не открылся, используйте адрес Kayur-Travel@mail.ru.';
  }
});
// ═══ STAMP CANVAS ═══════════════════════════════════════════════════════════
function drawStamp() {
  const cv = document.getElementById('stamp-cv');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const W = 700, H = 700, CX = 350, CY = 350;

  function makeGrad(x1 = 0, y1 = 0, x2 = W, y2 = H) {
    const g = ctx.createLinearGradient(x1, y1, x2, y2);
    g.addColorStop(0,    '#4B5FFA');
    g.addColorStop(0.32, '#8B3FD9');
    g.addColorStop(0.66, '#E8364A');
    g.addColorStop(1,    '#F97316');
    return g;
  }

  function arcText(text, r, centerDeg, fs, options = {}) {
    const { invert = false, letterSpacing = 4, maxSpanDeg = 178, glitch = 0, color = '#312E81' } = options;
    const chars = [...text];
    ctx.font = `900 ${fs}px "Onest", Georgia, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const widths = chars.map((ch) => Math.max(ctx.measureText(ch).width, fs * 0.22));
    const textLength = widths.reduce((sum, width) => sum + width, 0) + letterSpacing * Math.max(chars.length - 1, 0);
    const span = Math.min(maxSpanDeg * Math.PI / 180, textLength / r);
    const center = centerDeg * Math.PI / 180;
    let angle = center + (invert ? span / 2 : -span / 2);

    chars.forEach((ch, i) => {
      const step = (widths[i] + letterSpacing) / r;
      angle += (invert ? -1 : 1) * step / 2;
      const rad = angle;
      const x = CX + r * Math.cos(rad);
      const y = CY + r * Math.sin(rad);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad + (invert ? -Math.PI / 2 : Math.PI / 2));
      ctx.shadowColor = 'rgba(255,255,255,0.42)';
      ctx.shadowBlur = 2;
      ctx.strokeStyle = 'rgba(255,255,255,0.72)';
      ctx.lineWidth = 2.6;
      ctx.lineJoin = 'round';
      ctx.strokeText(ch, 0, 0);
      ctx.shadowBlur = 0;
      if (glitch > 0 && ch !== ' ') {
        const shift = (((i * 37) % 7) - 3) * glitch * 0.18;
        ctx.globalAlpha = 0.28;
        ctx.fillStyle = '#0EA5E9';
        ctx.fillText(ch, shift - glitch, -glitch * 0.25);
        ctx.fillStyle = '#F43F5E';
        ctx.fillText(ch, shift + glitch, glitch * 0.25);
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = color;
      ctx.fillText(ch, 0, 0);
      ctx.restore();
      angle += (invert ? -1 : 1) * step / 2;
    });
  }

  function applyDistress(amount) {
    if (amount <= 0) return;
    let s = 42;
    function rng() { s ^= s << 13; s ^= s >> 17; s ^= s << 5; return (s >>> 0) / 4294967296; }
    const count = Math.floor(amount * 120);
    for (let i = 0; i < count; i++) {
      const angle = rng() * Math.PI * 2;
      const dist  = rng() * 310;
      const x = CX + Math.cos(angle) * dist;
      const y = CY + Math.sin(angle) * dist;
      const rr = 1 + rng() * (amount / 20);
      const a  = 0.4 + rng() * 0.6;
      ctx.beginPath();
      ctx.arc(x, y, rr, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    }
    const edgeCount = Math.floor(amount * 30);
    for (let i = 0; i < edgeCount; i++) {
      const ringR = [16, 275, 250, 168, 148][Math.floor(rng() * 5)] || 275;
      const a0   = rng() * Math.PI * 2;
      const sp   = 0.02 + rng() * 0.08;
      ctx.beginPath();
      ctx.arc(CX, CY, ringR + (rng() - 0.5) * 4, a0, a0 + sp);
      ctx.strokeStyle = `rgba(255,255,255,${0.5 + rng() * 0.5})`;
      ctx.lineWidth = 2 + rng() * 4;
      ctx.stroke();
    }
  }

  ctx.clearRect(0, 0, W, H);

  // Outer thick ring
  ctx.beginPath();
  ctx.arc(CX, CY, 308, 0, Math.PI * 2);
  ctx.strokeStyle = makeGrad();
  ctx.lineWidth = 36;
  ctx.stroke();

  // Separator ring
  ctx.beginPath();
  ctx.arc(CX, CY, 275, 0, Math.PI * 2);
  ctx.strokeStyle = makeGrad();
  ctx.lineWidth = 4;
  ctx.stroke();

  // Inner circle
  ctx.beginPath();
  ctx.arc(CX, CY, 170, 0, Math.PI * 2);
  ctx.strokeStyle = makeGrad();
  ctx.lineWidth = 19;
  ctx.stroke();

  // Thin inner ring
  ctx.beginPath();
  ctx.arc(CX, CY, 148, 0, Math.PI * 2);
  ctx.strokeStyle = makeGrad();
  ctx.lineWidth = 3;
  ctx.stroke();

  applyDistress(30);

  // GR monogram
  ctx.font = '900 123px "Onest", Georgia, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = makeGrad(CX - 123, CY - 62, CX + 123, CY + 62);
  ctx.fillText('GR', CX, CY + 12);

  // Arc text, spaced by measured glyph width for readability.
  arcText('СОЗДАНИЕ САЙТОВ • СТРАТЕГИЯ ПРОДАЖ', 235, 270, 40, { letterSpacing: 2.8, maxSpanDeg: 218, glitch: 1.2 });

  // Side separators
  ctx.font = '900 28px "Onest", Georgia, sans-serif';
  ctx.fillStyle = makeGrad();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('✦', CX - 222, CY);
  ctx.fillText('✦', CX + 222, CY);
}

document.fonts.ready.then(drawStamp);
