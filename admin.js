// ── DEFAULT DATA ──────────────────────────────────────────
const DEFAULTS = {
  portfolio: [
    { id: 1, title: 'The Royal Jaipur Affair', category: 'weddings', desc: 'A grand mandap draped in deep reds and gold marigolds.', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Blossom Cradle Ceremony', category: 'traditional', desc: 'Soft pastel florals and delicate lighting for a baby\'s naming day.', img: 'https://images.unsplash.com/photo-1583939411023-14783179e581?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Enchanted Forest First Year', category: 'birthdays', desc: 'Whimsical woodland creatures and lush greenery.', img: 'https://images.unsplash.com/photo-1530103862676-de8892bf30fa?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Crystal Reception Gala', category: 'weddings', desc: 'Elegant candelabras and white roses under the stars.', img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Oh Baby! Classic Peach', category: 'baby-showers', desc: 'Balloons, sweet treats, and floral arches celebrating new life.', img: 'https://images.unsplash.com/photo-1555243896-771a80b85a3c?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Annual Tech Summit Excellence', category: 'corporate', desc: 'Sleek, modern lighting and minimalist stage setup.', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800' },
  ],
  testimonials: [
    { id: 1, author: 'Anjali & Vikram Desai', text: '"The decoration for our daughter\'s wedding was absolutely breathtaking. Every floral arrangement felt intentional and deeply personal. They truly brought our vision to life."' },
  ],
  stats: { events: 1520, clients: 1250, years: 15 },
  services: [
    { id: 1, icon: 'fa-rings', title: 'Weddings', desc: 'Elegant, culturally rich mandap setups, floral designs, and reception themes tailored to your dream day.' },
    { id: 2, icon: 'fa-birthday-cake', title: 'Birthdays & Baby Showers', desc: 'Whimsical, colorful, and joyful themes perfect for making intimate family gatherings extraordinary.' },
    { id: 3, icon: 'fa-glass-cheers', title: 'Corporate & Galas', desc: 'Sophisticated and professional ambiance for award nights, product launches, and grand corporate celebrations.' },
  ],
  about: {
    heading: 'Turning Passion Into Unforgettable Memories',
    body: "Hello, I'm Priya, the founder and lead designer at Decor By P. My journey didn't start in a big agency or an extravagant studio; it started at home. I was always the one planning my cousins' birthdays, meticulously arranging flowers for our family poojas, and finding immense joy in transforming an ordinary living room into something magical.\n\nYears ago, while decorating my sister's wedding mandap with just a handful of helpers, I realized something profound. It wasn't just about arranging beautiful chairs or stringing lights. It was about creating a sanctuary—a space where families gather to bless, to cry happy tears, and to celebrate love unconditionally.\n\nToday, our mission remains deeply personal. Every drape we hang and every floral arrangement we craft is done with the same love I showed at my sister's wedding. We are not just a business; we are part of your family for the day. Your joy is our ultimate masterpiece.",
    img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800'
  },
  heroTitle: 'Crafting Unforgettable Moments',
  heroSubtitle: 'Luxurious and bespoke decor for your most cherished celebrations.',
};

// ── HELPERS ──────────────────────────────────────────────
const ls = {
  get: (k) => { try { return JSON.parse(localStorage.getItem('se_' + k)) ?? DEFAULTS[k]; } catch { return DEFAULTS[k]; } },
  set: (k, v) => localStorage.setItem('se_' + k, JSON.stringify(v)),
};

function nextId(arr) { return arr.length ? Math.max(...arr.map(i => i.id)) + 1 : 1; }

function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast ${type} show`;
  setTimeout(() => t.className = 'toast', 2800);
}

const CATEGORY_LABELS = {
  weddings: 'Weddings', birthdays: 'Birthdays',
  'baby-showers': 'Baby Showers', traditional: 'Traditional',
  corporate: 'Corporate', other: 'Other'
};
const CATEGORY_TAG = {
  weddings: 'tag-wedding', birthdays: 'tag-birthday',
  'baby-showers': 'tag-babyshower', traditional: 'tag-traditional',
  corporate: 'tag-corporate', other: 'tag-other'
};

// ── AUTH ──────────────────────────────────────────────────
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'symphony2024';

function checkLogin() {
  return sessionStorage.getItem('se_admin') === 'true';
}

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    sessionStorage.setItem('se_admin', 'true');
    document.getElementById('login-wrap').style.display = 'none';
    document.getElementById('admin-app').style.display = 'flex';
    renderAll();
  } else {
    const err = document.getElementById('login-err');
    err.style.display = 'block';
    err.textContent = 'Invalid credentials. Try admin / symphony2024';
  }
});

document.getElementById('btn-logout').addEventListener('click', () => {
  sessionStorage.removeItem('se_admin');
  location.reload();
});

// ── NAVIGATION ───────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('page-' + item.dataset.page).classList.add('active');
  });
});

// ── RENDER ALL ────────────────────────────────────────────
function renderAll() {
  renderDashboard();
  renderPortfolio();
  renderTestimonials();
  renderStats();
  renderServices();
  renderAbout();
  renderHero();
}

// ── DASHBOARD ─────────────────────────────────────────────
function renderDashboard() {
  const portfolio = ls.get('portfolio');
  const testimonials = ls.get('testimonials');
  const stats = ls.get('stats');
  const services = ls.get('services');
  document.getElementById('dash-portfolio').textContent = portfolio.length;
  document.getElementById('dash-testimonials').textContent = testimonials.length;
  document.getElementById('dash-services').textContent = services.length;
  document.getElementById('dash-events').textContent = stats.events;
}

// ── PORTFOLIO ─────────────────────────────────────────────
function renderPortfolio() {
  const items = ls.get('portfolio');
  const tbody = document.getElementById('portfolio-tbody');
  if (!items.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state"><i class="fas fa-images"></i>No portfolio items yet. Add your first one!</div></td></tr>`;
    return;
  }
  tbody.innerHTML = items.map(item => `
    <tr>
      <td><img src="${item.img}" class="thumb" alt="" onerror="this.src='https://placehold.co/56x40/1a1d27/c9956a?text=IMG'"></td>
      <td>${item.title}</td>
      <td><span class="tag ${CATEGORY_TAG[item.category]}">${CATEGORY_LABELS[item.category]}</span></td>
      <td style="max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text-muted);font-size:0.82rem">${item.desc}</td>
      <td>
        <div style="display:flex;gap:0.5rem">
          <button class="btn btn-ghost" onclick="openPortfolioModal(${item.id})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deletePortfolio(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join('');
  renderDashboard();
}

// Portfolio Modal
let editingPortfolioId = null;
function openPortfolioModal(id = null) {
  editingPortfolioId = id;
  const modal = document.getElementById('portfolio-modal');
  const items = ls.get('portfolio');
  const item = id ? items.find(i => i.id === id) : null;
  document.getElementById('pm-title').value = item?.title || '';
  document.getElementById('pm-category').value = item?.category || 'weddings';
  document.getElementById('pm-desc').value = item?.desc || '';
  document.getElementById('pm-img').value = item?.img || '';
  if (item?.img) document.getElementById('pm-img-preview').src = item.img;
  document.getElementById('pm-img-preview').style.display = item?.img ? 'block' : 'none';
  document.getElementById('portfolio-modal-title').textContent = id ? 'Edit Portfolio Item' : 'Add Portfolio Item';
  modal.classList.add('open');
}
function closePortfolioModal() {
  document.getElementById('portfolio-modal').classList.remove('open');
  editingPortfolioId = null;
}
document.getElementById('pm-img').addEventListener('input', (e) => {
  const prev = document.getElementById('pm-img-preview');
  if (e.target.value) { prev.src = e.target.value; prev.style.display = 'block'; }
  else prev.style.display = 'none';
});
document.getElementById('portfolio-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const items = ls.get('portfolio');
  const data = {
    title: document.getElementById('pm-title').value.trim(),
    category: document.getElementById('pm-category').value,
    desc: document.getElementById('pm-desc').value.trim(),
    img: document.getElementById('pm-img').value.trim(),
  };
  if (editingPortfolioId) {
    const idx = items.findIndex(i => i.id === editingPortfolioId);
    items[idx] = { ...items[idx], ...data };
    showToast('Portfolio item updated!');
  } else {
    items.push({ id: nextId(items), ...data });
    showToast('Portfolio item added!');
  }
  ls.set('portfolio', items);
  closePortfolioModal();
  renderPortfolio();
});
function deletePortfolio(id) {
  if (!confirm('Delete this portfolio item?')) return;
  const items = ls.get('portfolio').filter(i => i.id !== id);
  ls.set('portfolio', items);
  renderPortfolio();
  showToast('Item deleted.', 'error');
}

// ── TESTIMONIALS ──────────────────────────────────────────
function renderTestimonials() {
  const items = ls.get('testimonials');
  const list = document.getElementById('testimonials-list');
  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><i class="fas fa-comments"></i>No testimonials yet.</div>`;
    return;
  }
  list.innerHTML = items.map(t => `
    <div class="testimonial-item">
      <div class="t-body">
        <strong>${t.author}</strong>
        <p>${t.text}</p>
      </div>
      <div class="t-actions">
        <button class="btn btn-ghost" onclick="openTestimonialModal(${t.id})"><i class="fas fa-edit"></i></button>
        <button class="btn btn-danger" onclick="deleteTestimonial(${t.id})"><i class="fas fa-trash"></i></button>
      </div>
    </div>`).join('');
  renderDashboard();
}

let editingTestimonialId = null;
function openTestimonialModal(id = null) {
  editingTestimonialId = id;
  const items = ls.get('testimonials');
  const item = id ? items.find(i => i.id === id) : null;
  document.getElementById('tm-author').value = item?.author || '';
  document.getElementById('tm-text').value = item?.text || '';
  document.getElementById('testimonial-modal-title').textContent = id ? 'Edit Testimonial' : 'Add Testimonial';
  document.getElementById('testimonial-modal').classList.add('open');
}
function closeTestimonialModal() {
  document.getElementById('testimonial-modal').classList.remove('open');
  editingTestimonialId = null;
}
document.getElementById('testimonial-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const items = ls.get('testimonials');
  const data = {
    author: document.getElementById('tm-author').value.trim(),
    text: document.getElementById('tm-text').value.trim(),
  };
  if (editingTestimonialId) {
    const idx = items.findIndex(i => i.id === editingTestimonialId);
    items[idx] = { ...items[idx], ...data };
    showToast('Testimonial updated!');
  } else {
    items.push({ id: nextId(items), ...data });
    showToast('Testimonial added!');
  }
  ls.set('testimonials', items);
  closeTestimonialModal();
  renderTestimonials();
});
function deleteTestimonial(id) {
  if (!confirm('Delete this testimonial?')) return;
  ls.set('testimonials', ls.get('testimonials').filter(i => i.id !== id));
  renderTestimonials();
  showToast('Testimonial deleted.', 'error');
}

// ── STATS ──────────────────────────────────────────────────
function renderStats() {
  const s = ls.get('stats');
  document.getElementById('stat-events').value = s.events;
  document.getElementById('stat-clients').value = s.clients;
  document.getElementById('stat-years').value = s.years;
}
document.getElementById('stats-form').addEventListener('submit', (e) => {
  e.preventDefault();
  ls.set('stats', {
    events: +document.getElementById('stat-events').value,
    clients: +document.getElementById('stat-clients').value,
    years: +document.getElementById('stat-years').value,
  });
  showToast('Stats saved!');
  renderDashboard();
});

// ── SERVICES ──────────────────────────────────────────────
function renderServices() {
  const items = ls.get('services');
  const tbody = document.getElementById('services-tbody');
  tbody.innerHTML = items.map(s => `
    <tr>
      <td><i class="fas ${s.icon}" style="font-size:1.3rem;color:var(--accent)"></i></td>
      <td>${s.title}</td>
      <td style="max-width:300px;color:var(--text-muted);font-size:0.83rem">${s.desc}</td>
      <td>
        <div style="display:flex;gap:0.5rem">
          <button class="btn btn-ghost" onclick="openServiceModal(${s.id})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteService(${s.id})"><i class="fas fa-trash"></i></button>
        </div>
      </td>
    </tr>`).join('');
}
let editingServiceId = null;
function openServiceModal(id = null) {
  editingServiceId = id;
  const items = ls.get('services');
  const item = id ? items.find(i => i.id === id) : null;
  document.getElementById('sm-title').value = item?.title || '';
  document.getElementById('sm-icon').value = item?.icon || 'fa-star';
  document.getElementById('sm-desc').value = item?.desc || '';
  document.getElementById('service-modal-title').textContent = id ? 'Edit Service' : 'Add Service';
  document.getElementById('service-modal').classList.add('open');
}
function closeServiceModal() {
  document.getElementById('service-modal').classList.remove('open');
  editingServiceId = null;
}
document.getElementById('service-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const items = ls.get('services');
  const data = {
    title: document.getElementById('sm-title').value.trim(),
    icon: document.getElementById('sm-icon').value.trim(),
    desc: document.getElementById('sm-desc').value.trim(),
  };
  if (editingServiceId) {
    const idx = items.findIndex(i => i.id === editingServiceId);
    items[idx] = { ...items[idx], ...data };
    showToast('Service updated!');
  } else {
    items.push({ id: nextId(items), ...data });
    showToast('Service added!');
  }
  ls.set('services', items);
  closeServiceModal();
  renderServices();
  renderDashboard();
});
function deleteService(id) {
  if (!confirm('Delete this service?')) return;
  ls.set('services', ls.get('services').filter(i => i.id !== id));
  renderServices();
  showToast('Service deleted.', 'error');
}

// ── ABOUT ──────────────────────────────────────────────────
function renderAbout() {
  const a = ls.get('about');
  document.getElementById('about-heading').value = a.heading;
  document.getElementById('about-body').value = a.body;
  document.getElementById('about-img').value = a.img;
  document.getElementById('about-img-preview').src = a.img;
}
document.getElementById('about-img').addEventListener('input', (e) => {
  document.getElementById('about-img-preview').src = e.target.value;
});
document.getElementById('about-form').addEventListener('submit', (e) => {
  e.preventDefault();
  ls.set('about', {
    heading: document.getElementById('about-heading').value.trim(),
    body: document.getElementById('about-body').value.trim(),
    img: document.getElementById('about-img').value.trim(),
  });
  showToast('About page saved!');
});

// ── HERO ──────────────────────────────────────────────────
function renderHero() {
  document.getElementById('hero-title').value = ls.get('heroTitle');
  document.getElementById('hero-subtitle').value = ls.get('heroSubtitle');
}
document.getElementById('hero-form').addEventListener('submit', (e) => {
  e.preventDefault();
  ls.set('heroTitle', document.getElementById('hero-title').value.trim());
  ls.set('heroSubtitle', document.getElementById('hero-subtitle').value.trim());
  showToast('Hero section saved!');
});

// ── INIT ──────────────────────────────────────────────────
if (checkLogin()) {
  document.getElementById('login-wrap').style.display = 'none';
  document.getElementById('admin-app').style.display = 'flex';
  renderAll();
}
