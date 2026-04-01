/**
 * site-data.js
 * Reads admin-saved data from localStorage and updates public pages.
 * Include this AFTER scripts.js on every public page.
 */

(function () {
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
      body: "Hello, I'm Priya, the founder and lead designer at Decor By P. My journey didn't start in a big agency or an extravagant studio; it started at home. I was always the one planning my cousins' birthdays, meticulously arranging flowers for our family poojas, and finding immense joy in transforming an ordinary living room into something magical.\n\nYears ago, while decorating my sister's wedding mandap with just a handful of helpers, I realized something profound. It wasn't just about arranging beautiful chairs or stringing lights. It was about creating a sanctuary—a space where families gather to bless, to cry happy tears, and to celebrate love unconditionally.\n\nThat profound realization became my calling. What started as a hobby fueled by pure love grew into Decor By P. I poured my heart into studying floral architectures, understanding color theory, and curating an inventory of the most beautiful thematic elements.\n\nToday, our mission remains deeply personal. Every drape we hang and every floral arrangement we craft is done with the same love I showed at my sister's wedding. We are not just a business; we are part of your family for the day. Your joy is our ultimate masterpiece.",
      img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800'
    },
    heroTitle: 'Crafting Unforgettable Moments',
    heroSubtitle: 'Luxurious and bespoke decor for your most cherished celebrations.',
  };

  function get(key) {
    try {
      const v = localStorage.getItem('se_' + key);
      return v ? JSON.parse(v) : DEFAULTS[key];
    } catch (e) {
      return DEFAULTS[key];
    }
  }

  const CATEGORY_LABELS = {
    weddings: 'Weddings', birthdays: 'Birthdays',
    'baby-showers': 'Baby Showers', traditional: 'Traditional Functions',
    corporate: 'Corporate Events', other: 'Other'
  };

  const page = document.body.dataset.page;

  /* ── INDEX PAGE ─────────────────────── */
  if (page === 'index') {

    // Hero
    const heroTitle = get('heroTitle');
    const heroSubtitle = get('heroSubtitle');
    const h1 = document.querySelector('.hero-title');
    const sub = document.querySelector('.hero-subtitle');
    if (h1) h1.textContent = heroTitle;
    if (sub) sub.textContent = heroSubtitle;

    // Services
    const services = get('services');
    const grid = document.querySelector('.services-grid');
    if (grid && services.length) {
      grid.innerHTML = services.map(s => `
        <div class="service-card">
          <i class="fas ${s.icon} service-icon"></i>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>`).join('');
      // Re-apply fade-in observer for new elements
      document.querySelectorAll('.service-card').forEach(el => {
        el.classList.add('fade-in');
      });
    }

    // Stats
    const stats = get('stats');
    const counters = document.querySelectorAll('.counter');
    const statValues = [stats.events, stats.clients, stats.years];
    counters.forEach((c, i) => {
      if (statValues[i] !== undefined) {
        c.setAttribute('data-target', statValues[i]);
        c.textContent = '0';
      }
    });

    // Featured images (first 3 portfolio items)
    const portfolio = get('portfolio');
    const featuredWraps = document.querySelectorAll('.featured-img-wrap');
    featuredWraps.forEach((wrap, i) => {
      if (portfolio[i]) {
        const img = wrap.querySelector('.featured-img');
        if (img) {
          img.src = portfolio[i].img;
          img.alt = portfolio[i].title;
        }
      }
    });

    // Testimonial
    const testimonials = get('testimonials');
    if (testimonials.length) {
      const t = testimonials[0];
      const tText = document.querySelector('.testimonial-text');
      const tAuthor = document.querySelector('.testimonial-author');
      if (tText) tText.textContent = t.text;
      if (tAuthor) tAuthor.textContent = '- ' + t.author;
    }
  }

  /* ── PORTFOLIO PAGE ─────────────────── */
  if (page === 'portfolio') {
    const portfolio = get('portfolio');
    const grid = document.querySelector('.portfolio-grid');
    if (grid && portfolio.length) {
      grid.innerHTML = portfolio.map(item => `
        <div class="portfolio-item" data-category="${item.category}">
          <img src="${item.img}" alt="${item.title}" class="portfolio-img">
          <div class="portfolio-info">
            <span class="portfolio-category">${CATEGORY_LABELS[item.category] || item.category}</span>
            <h3 class="portfolio-title">${item.title}</h3>
            <p class="portfolio-desc">${item.desc}</p>
          </div>
        </div>`).join('');

      // Re-attach filter logic for dynamically rendered items
      const filterBtns = document.querySelectorAll('.filter-btn');
      const items = document.querySelectorAll('.portfolio-item');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const filter = btn.dataset.filter;
          items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = 'block';
              setTimeout(() => item.style.opacity = '1', 10);
            } else {
              item.style.opacity = '0';
              setTimeout(() => item.style.display = 'none', 300);
            }
          });
        });
      });
    }
  }

  /* ── ABOUT PAGE ─────────────────────── */
  if (page === 'about') {
    const about = get('about');

    const heading = document.querySelector('.about-content h2');
    if (heading) {
      // Preserve the <span> highlight on first word
      const words = about.heading.split(' ');
      heading.innerHTML = `<span>${words[0]}</span> ${words.slice(1).join(' ')}`;
    }

    const contentDiv = document.querySelector('.about-content');
    if (contentDiv) {
      // Remove existing <p> tags and re-render
      contentDiv.querySelectorAll('p').forEach(p => p.remove());
      // Insert paragraphs before the button
      const btn = contentDiv.querySelector('a.btn');
      const paras = about.body.split('\n\n').filter(p => p.trim());
      paras.forEach(para => {
        const p = document.createElement('p');
        p.textContent = para.trim();
        contentDiv.insertBefore(p, btn);
      });
    }

    const img = document.querySelector('.about-img');
    if (img) {
      img.src = about.img;
      img.alt = 'Founder';
    }
  }

})();
