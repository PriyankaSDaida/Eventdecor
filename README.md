# 🌸 Symphony Events — Premium Event Decoration Website

<p align="center">
  <img src="https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge" alt="Status: Live" />
  <img src="https://img.shields.io/badge/stack-Vanilla%20HTML%20%2F%20CSS%20%2F%20JS-gold?style=for-the-badge" alt="Tech Stack" />
  <img src="https://img.shields.io/badge/admin-portal%20included-blueviolet?style=for-the-badge" alt="Admin Portal" />
  <img src="https://img.shields.io/badge/dark%20mode-Midnight%20Gala-1a1a1e?style=for-the-badge&logo=moon" alt="Dark Mode" />
  <img src="https://img.shields.io/badge/branch-enhancement--V1-orange?style=for-the-badge" alt="Branch" />
</p>

> A fully responsive, luxury-grade event decoration company website built with Vanilla HTML, CSS & JavaScript — complete with a **built-in Admin Portal**, an interactive **Before & After drag-to-reveal slider**, and a **"Midnight Gala" dark mode** toggle.

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Pages & Features](#-pages--features)
- [✨ Enhancements (v1)](#-enhancements-v1)
- [Admin Portal](#-admin-portal)
- [How Content Updates Work](#-how-content-updates-work)
- [Design System](#-design-system)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Performance & SEO](#-performance--seo)
- [WhatsApp Integration](#-whatsapp-integration)
- [Running Locally](#-running-locally)
- [Deployment Guide](#-deployment-guide)
- [Future Enhancements](#-future-enhancements)

---

## 🌟 About the Project

**Symphony Events** is a premium digital presence for an event decoration company specializing in:

- 💍 Weddings & Receptions
- 🎂 Birthdays & Baby Showers
- 🪢 Cradle Ceremonies & Traditional Functions
- 🏆 Corporate Galas & Award Nights

The website is crafted to evoke **luxury, emotion, and trust** — immediately converting visitors into clients through editorial typography, warm gold accents, and cinematic photography. All content is editable through the built-in admin portal — no coding required. The site now includes two premium interactive enhancements: a **drag-to-reveal Before & After slider** on the portfolio page and a site-wide **"Midnight Gala" dark mode**.

---

## 📄 Pages & Features

### 🏠 `index.html` — Home Page
| Section | Description |
|---|---|
| **Hero Banner** | Full-viewport cinematic hero with animated CTAs — *"Book Your Event"* and *"View Our Work"* |
| **Signature Services** | Three-pane service showcase (Weddings, Birthdays, Corporate) with hover effects — editable via admin |
| **The Creative Journey** | Editorial 3-step process timeline (Consultation → Design → Execution) |
| **Featured Decor Gallery** | Three-column image gallery pulled from portfolio data with zoom-on-hover |
| **Trust Stats** | Animated count-up counters — editable numbers via admin portal |
| **Client Testimonials** | Pull-quote testimonial card — editable via admin |

### 🖼️ `portfolio.html` — Portfolio Page
- Dynamic **category filter** buttons (All, Weddings, Birthdays, Baby Showers, Traditional, Corporate)
- All portfolio items rendered from admin-managed data
- Hover zoom on images, category badges, titles, and descriptions
- WhatsApp CTA for viewing the full catalog
- 🆕 **Before & After drag-to-reveal transformation slider** (3 showcases) — see [Enhancements v1](#-enhancements-v1)

### 💛 `about.html` — Our Story Page
- Founder biography rendered dynamically from admin-saved content
- Premium two-column layout with a gold-bordered founder portrait
- Scroll-triggered fade-in animations
- Heading, body paragraphs, and founder photo all editable via admin

### 📬 `contact.html` — Contact / Let's Connect Page
| Feature | Description |
|---|---|
| **Inquiry Form** | Name, Phone, Email, Event Date, Venue, Event Type, and Vision textarea |
| **Inline Validation** | HTML5 native validation on all required fields |
| **Success State** | Form fades out and shows "Request Received" confirmation on submit |
| **Contact Sidebar** | Phone/WhatsApp links, email, studio address, and business hours |
| **Google Maps Embed** | Studio location embed for Bengaluru |

---

## ✨ Enhancements (v1)

> Branch: `enhancement-V1` — committed and pushed to GitHub.

### 🎭 Before & After Drag-to-Reveal Slider

An interactive section at the bottom of `portfolio.html` showcasing three real event transformations — from an empty/plain venue to a fully decorated setup.

**How it works:**
- Each slider contains two absolutely positioned images stacked on top of each other
- The **"Before"** image is clipped using `clip-path: inset()`, masking the right portion
- Dragging/touching the **↔ handle** updates the `clip-path` in real-time, revealing the "After" image
- The divider line and circular handle track the cursor precisely

**Three showcases:**
| Card | Before → After |
|---|---|
| Royal Wedding Mandap | Bare banquet hall → Majestic floral sanctuary |
| Crystal Reception Gala | Empty hall → Evening of elegance |
| Enchanted Forest First Year | Plain walls → Whimsy and wonder |

**Technical details:**
- CSS: `position: absolute` + `height: 280px` on `.ba-slider` for reliable overlay geometry
- JS: Mouse and touch events with `clip-path: inset(0 X% 0 0)` for smooth, performant reveal
- Inline `<style>` and `<script>` in `portfolio.html` to bypass browser CSS caching
- Labels: **BEFORE** (dark pill) and **AFTER** (gold pill) positioned at top corners

---

### 🌙 Midnight Gala — Dark Mode

A site-wide dark mode accessible via a **moon/sun toggle button** in the navigation bar of every page.

**Toggle:** Click the `🌙` circle button between the nav links and hamburger icon.

**Palette:**
| Token | Light Mode | Dark Mode (Midnight Gala) |
|---|---|---|
| `--bg-color` | `#fdfcfb` | `#1a1a1e` (deep charcoal) |
| `--secondary-peach` | `#f4ebe3` | `#22222c` (dark charcoal) |
| `--text-dark` | `#2c2a29` | `#ede9e2` (cream white) |
| `--text-muted` | `#5e5a57` | `#9c9390` (warm grey) |
| `--primary-gold` | `#c39a4a` | `#c9a55a` (warm gold) |
| Card surfaces | `#ffffff` | `#25252f` (elevated charcoal) |

**Features:**
- 🔄 **Smooth 0.35s transitions** — backgrounds, text, borders, and shadows all cross-fade
- 💾 **localStorage persistence** (`se_theme`) — dark mode survives page navigation and browser restarts
- 🖥️ **System preference detection** — auto-applies OS dark mode on first visit if no saved preference
- ⚡ **Anti-FOUC** — an inline script in every page's `<head>` applies the saved theme *before* any CSS renders, eliminating the "flash of white"
- 🎨 **Gold + charcoal aesthetic** — cards get subtle gold borders; buttons invert to charcoal-on-gold; the nav frosted glass deepens

**Covered elements:**
Services cards · Process steps · Portfolio cards · Filter buttons · Testimonial cards · Contact form · Contact sidebar · Form inputs (background, border, placeholder) · Footer · Mobile nav dropdown · Social links · About section

---

## 🎛️ Admin Portal

The site includes a fully featured **Admin Portal** at `/admin.html` for managing all site content without editing any HTML files.

### Accessing the Admin Portal

```
URL:      http://localhost:8000/admin.html
Username: admin
Password: symphony2024
```

### Admin Sections

| Section | What You Can Manage |
|---|---|
| 📊 **Dashboard** | Overview of total portfolio items, testimonials, services, and events count |
| 🖼️ **Portfolio** | Add, edit, or delete portfolio items — title, category, description, and image URL |
| 💬 **Testimonials** | Add, edit, or delete client reviews shown on the homepage |
| ⭐ **Services** | Add, edit, or delete the service cards on the homepage |
| 📈 **Stats** | Update the Events Completed, Happy Clients, and Years of Elegance numbers |
| 👤 **About Page** | Edit the section heading, story body paragraphs, and founder photo URL |
| 🏠 **Hero Section** | Change the homepage headline and tagline |

### Admin Portal Features
- 🔐 **Session-based login** — stays logged in until browser tab closes
- 💾 **localStorage persistence** — all changes survive page refreshes
- 🖼️ **Live image preview** — instantly previews image URLs before saving
- ✅ **Toast notifications** — success/error feedback on every action
- 🔗 **"View Site" shortcut** — opens the public site in a new tab from the sidebar

---

## ⚙️ How Content Updates Work

The admin portal saves all content to the browser's **localStorage** (prefixed `se_`). The public pages read this data on every load via `site-data.js` and dynamically update the DOM.

```
Admin Portal (admin.html)
  └── Saves to localStorage (keys: se_portfolio, se_stats, se_about, etc.)
          │
          ▼
site-data.js (included on every public page)
  └── Reads localStorage on page load
  └── Falls back to hardcoded defaults if no admin data exists
  └── Updates DOM: headings, images, cards, counters, testimonials
```

**Update flow:**
1. Make a change in the admin portal and click **Save**
2. Refresh the corresponding public page
3. Changes appear immediately ✅

| Admin Save | Affected Public Page(s) |
|---|---|
| Hero text | `index.html` |
| Services | `index.html` |
| Stats | `index.html` |
| Featured images | `index.html` (first 3 portfolio items) |
| Testimonials | `index.html` |
| Portfolio items | `portfolio.html` |
| About content | `about.html` |

> **Note:** Since data is stored in `localStorage`, it is browser-specific. For multi-device or production use, replace `localStorage` with a backend (Firebase, Supabase, or a headless CMS).

---

## 🎨 Design System

### Light Mode Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--primary-gold` | `#c39a4a` | Buttons, active links, accents, icons |
| `--primary-gold-hover` | `#b2883c` | Gold hover state |
| `--secondary-peach` | `#f4ebe3` | Section background alternate |
| `--bg-color` | `#fdfcfb` | Main page background |
| `--text-dark` | `#2c2a29` | Headings, primary text |
| `--text-muted` | `#5e5a57` | Body paragraphs, descriptions |
| `--whatsapp` | `#25D366` | WhatsApp float button & links |

### 🌙 Dark Mode (Midnight Gala) Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--bg-color` | `#1a1a1e` | Main page background (deep charcoal) |
| `--secondary-peach` | `#22222c` | Alternate section backgrounds |
| `--text-dark` | `#ede9e2` | Headings & primary text (warm cream) |
| `--text-muted` | `#9c9390` | Body text & descriptions (warm grey) |
| `--primary-gold` | `#c9a55a` | Buttons, accents (slightly warmer gold) |
| Card Surface | `#25252f` | Service/testimonial/portfolio cards |
| Footer | `#111115` | Deep footer background |

### Admin Portal Color Palette (Dark Theme)
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0f1117` | Admin page background |
| `--surface` | `#1a1d27` | Sidebar & cards |
| `--accent` | `#c9956a` | Primary accent / active states |
| `--accent2` | `#9b6fa8` | Secondary accent / gradients |

### Typography
| Role | Font | Source |
|---|---|---|
| Headings / Display | Playfair Display (400, 600, 700, Italic) | Google Fonts |
| Body / Paragraphs | Lora (400, 500, 600, Italic) | Google Fonts |
| Admin UI | Inter (300–700) | Google Fonts |

### Animations
- **Scroll Fade-In**: `IntersectionObserver` triggers `opacity: 0→1` + `translateY(30px→0)` as elements scroll into view
- **Counter Ramp-Up**: Stats animate from `0` to target values when entering the viewport
- **Parallax Hero**: `background-attachment: fixed` creates depth on the hero and stats sections
- **Bouncing Scroll Arrow**: Continuously bouncing chevron on the homepage hero
- **Glassmorphism Navbar**: Transitions from transparent to frosted `backdrop-filter: blur(10px)` on scroll
- **Theme Toggle Spin**: Moon icon rotates 180° to reveal sun icon on dark mode activation
- **BA Slider Handle**: Circular ↔ handle tracks drag position with `clip-path` animation at 60fps

---

## 📂 Project Structure

```
event_decorator_site/
│
├── 📄 index.html         # Home — Hero, Services, Gallery, Stats, Testimonials
├── 📄 portfolio.html     # Portfolio gallery, JS filter + Before/After slider
├── 📄 about.html         # Founder's story & biography
├── 📄 contact.html       # Booking inquiry form, contact info, Google Maps
│
├── 🎨 styles.css         # Global design system: variables, layout, animations,
│                         # responsive breakpoints, dark mode (Midnight Gala)
├── ⚡ scripts.js         # Scroll effects, counter, mobile nav, BA slider logic,
│                         # Midnight Gala theme toggle + localStorage persistence
├── 🔄 site-data.js       # Reads localStorage and dynamically updates all public pages
│
├── 🛠️ admin.html         # Admin portal — content management dashboard (login required)
├── 🎨 admin.css          # Admin portal styles (dark premium theme)
├── ⚡ admin.js           # Admin portal logic — auth, CRUD, localStorage management
│
└── 📖 README.md          # Project documentation (this file)
```

---

## 💻 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure (header, nav, main, section, footer) |
| **CSS3 (Vanilla)** | Design system with CSS custom properties, Flexbox, Grid, Keyframe animations, Media Queries, `clip-path` for BA slider, `[data-theme]` attribute for dark mode |
| **JavaScript (ES6+)** | IntersectionObserver, counter animation, portfolio filter, BA slider drag events, theme toggle + localStorage, admin CRUD |
| **Google Fonts** | Playfair Display, Lora (public site) + Inter (admin portal) |
| **FontAwesome 6** | All icons across public site and admin portal |
| **Google Maps Embed** | Studio location on Contact page |
| **localStorage API** | Persistent content storage (admin data + theme preference) |

> ✅ **Zero dependencies** — No Node.js, no npm packages, no build pipeline required.

---

## 📈 Performance & SEO

### SEO
- `<meta charset>` and `<meta name="viewport">` on every page
- Unique, keyword-rich `<meta name="description">` per page
- Descriptive `<h1>` tags with clear hierarchy (H1 → H2 → H3)
- All `<img>` tags include meaningful `alt` attributes
- Semantic HTML5 structure throughout

### Performance
- No JavaScript frameworks or CSS libraries — pure native browser capabilities
- Images served from Unsplash CDN with quality and width parameters (`?q=80&w=800`)
- Google Maps iframe uses `loading="lazy"` to defer loading
- Web Fonts loaded via Google Fonts CDN with `display=swap` for zero layout shift
- Dark mode toggle uses **CSS custom properties** — no layout recalculation on theme switch
- Anti-FOUC inline script prevents any white flash when loading in dark mode

---

## 📱 WhatsApp Integration

A floating WhatsApp action button is **dynamically injected** into every page via `scripts.js`, fixed to the bottom-right corner of the viewport.

**Clicking the button:**
- Opens WhatsApp with pre-filled text: _"Hi, I'm interested in your event decoration services."_
- Phone Number: `+91 80953 35050`

**Additional WhatsApp CTAs:**
- Portfolio page: "Chat for Full Catalog" button
- Contact page: "Message us directly on WhatsApp" inline link

> Compatible with **WhatsApp Business Automation** — set up keyword-based auto-replies for "pricing", "availability", and "booking" via the WhatsApp Business App or API.

---

## 🚀 Running Locally

### Option 1: Python Web Server _(Recommended)_
```bash
cd event_decorator_site
python3 -m http.server 8000
open http://localhost:8000
```

### Option 2: VS Code Live Server Extension
1. Open the project folder in VS Code
2. Right-click `index.html` → **"Open with Live Server"**

### Option 3: Direct File Launch
Double-click `index.html` in Finder and open in any modern browser.

### Accessing the Admin Portal
```
http://localhost:8000/admin.html
Username: admin  |  Password: symphony2024
```

---

## 🌐 Deployment Guide

### Deploy to GitHub Pages _(Free)_
1. Push the code to a GitHub repository (`main` branch)
2. Go to **Repository → Settings → Pages**
3. Set source to `Deploy from branch → main → / (root)`
4. Live at: `https://yourusername.github.io/your-repo-name/`

### Deploy to Netlify _(Drag & Drop — Recommended)_
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop the `event_decorator_site/` folder into the dashboard
3. Site is instantly live — connect a custom domain (e.g., `www.symphonyevents.in`)

### Deploy to Vercel
```bash
npm install -g vercel
cd event_decorator_site
vercel --prod
```

> ⚠️ **Production Note:** localStorage is browser-local. For a deployed multi-device site, replace localStorage with a backend like **Firebase Firestore**, **Supabase**, or a **headless CMS** (Contentful, Sanity) so admin changes reflect everywhere.

---

## 🔮 Future Enhancements

- [ ] **Backend Integration** — Replace localStorage with Firebase/Supabase for multi-device admin sync
- [ ] **Image Upload** — Allow direct file uploads from admin instead of pasting URLs
- [ ] **Role-Based Access** — Multiple admin users with different permission levels
- [ ] **Cinematic Video Hero** — Looping, muted ambient video background on homepage
- [ ] **Live Instagram Feed Grid** — Auto-updating social proof grid above the footer
- [ ] **Admin Change History** — Audit log of all content edits with timestamps
- [ ] **Booking Calendar** — Availability calendar with date-blocking for confirmed events
- [ ] **Multi-Language Support** — English / Kannada / Hindi toggle for regional reach

### ✅ Shipped in `enhancement-V1`
- [x] **Before & After Slider** — Drag-to-reveal portfolio image transformations (3 showcases)
- [x] **Dark Mode ("Midnight Gala")** — Moon/sun toggle with charcoal `#1a1a1e` + gold aesthetic, system preference detection, anti-FOUC, full `localStorage` persistence

---

## 📞 Business Contact

- **WhatsApp**: [+91 80953 35050](https://wa.me/8095335050)
- **Email**: hello@symphonyevents.com
- **Location**: Bengaluru, India

---

<p align="center">Made with ❤️ for Symphony Events &mdash; <em>Crafting Unforgettable Moments</em></p>
