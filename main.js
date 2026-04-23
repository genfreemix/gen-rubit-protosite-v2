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