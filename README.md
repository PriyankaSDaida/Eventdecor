# 🌸 Symphony Events — Premium Event Decoration Website

<p align="center">
  <img src="https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge" alt="Status: Live" />
  <img src="https://img.shields.io/badge/stack-Vanilla%20HTML%20%2F%20CSS%20%2F%20JS-gold?style=for-the-badge" alt="Tech Stack" />
  <img src="https://img.shields.io/badge/design-premium-blueviolet?style=for-the-badge" alt="Premium Design" />
  <img src="https://img.shields.io/badge/responsive-yes-blue?style=for-the-badge" alt="Responsive" />
</p>

> A fully responsive, luxury-grade event decoration company website built with Vanilla HTML, CSS & JavaScript — designed to convert visitors into bookings through a stunning, immersive digital experience.

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Pages & Features](#-pages--features)
- [Design System](#-design-system)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Performance & SEO](#-performance--seo)
- [WhatsApp Integration](#-whatsapp-integration)
- [Running Locally](#-running-locally)
- [Deployment Guide](#-deployment-guide)
- [Customization Guide](#-customization-guide)
- [Future Enhancements](#-future-enhancements)

---

## 🌟 About the Project

**Symphony Events** is a premium digital presence for an event decoration company specializing in:

- 💍 Weddings & Receptions
- 🎂 Birthdays & Baby Showers
- 🪢 Cradle Ceremonies & Traditional Functions
- 🏆 Corporate Galas & Award Nights

The website is crafted to evoke **luxury, emotion, and trust** — immediately converting visitors into clients. The design language mirrors high-end lifestyle and bridal magazines, using editorial typography, warm gold accents, and cinematic photography to deliver an unforgettable first impression.

---

## 📄 Pages & Features

### 🏠 `index.html` — Home Page
| Section | Description |
|---|---|
| **Hero Banner** | Full-viewport cinematic hero with a parallax-scrolling background image and animated CTAs — *"Book Your Event"* and *"View Our Work"* |
| **Signature Services** | Three-pane interactive service showcase (Weddings, Birthdays, Corporate) with hover elevation and icon glow effects |
| **The Creative Journey** | An editorial 3-step process timeline (Consultation → Design → Execution) with oversized watermark numerals |
| **Featured Decor Gallery** | A three-column interactive image gallery with a zoom-on-hover zoom effect and direct link to the full portfolio |
| **Trust Stats** | A full-bleed dark section with animated count-up counters for: `1,520+ Events`, `1,250+ Happy Clients`, `15+ Years of Elegance` |
| **Client Testimonials** | A highlighted testimonial card with a pull-quote design |

### 🖼️ `portfolio.html` — Portfolio Page
- Dynamic **category filter** buttons that smoothly fade portfolio items in/out via JavaScript
- Filter categories: `All`, `Weddings`, `Birthdays`, `Baby Showers`, `Traditional Functions`, `Corporate Events`
- Each card displays a full-bleed image with category badge, event title, and short description
- **Hover zoom** on portfolio images
- A WhatsApp CTA for viewing the full catalog

### 💛 `about.html` — Our Story Page
- A deeply personal, emotional biographical narrative from the founder
- Premium two-column layout with a **gold-bordered frame** around the founder's portrait image
- Scroll-triggered fade-in animation on the text and image blocks
- A dedicated CTA button leading directly to the Contact page

### 📬 `contact.html` — Contact / Let's Connect Page
| Feature | Description |
|---|---|
| **Inquiry Form** | Name, Phone, Email, Event Date, Venue/Location, Event Type (dropdown), and detailed Vision/Message textarea |
| **Inline Validation** | HTML5 native validation on all required fields |
| **Success State** | On form submission, form elegantly fades out and reveals a "Request Received" confirmation block — no jarring browser alerts |
| **Contact Sidebar** | Phone/WhatsApp links, email, studio address, and business hours |
| **Google Maps Embed** | A polished, rounded iframe embed of the studio's location in Bengaluru |

---

## 🎨 Design System

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--primary-gold` | `#c39a4a` | Buttons, active links, accents, icons |
| `--primary-gold-hover` | `#b2883c` | Gold hover state |
| `--secondary-peach` | `#f4ebe3` | Section background alternate |
| `--bg-color` | `#fdfcfb` | Main page background |
| `--text-dark` | `#2c2a29` | Headings, primary text |
| `--text-muted` | `#5e5a57` | Body paragraphs, descriptions |
| `--whatsapp` | `#25D366` | WhatsApp float button & links |

### Typography
| Role | Font | Source |
|---|---|---|
| Headings / Display | Playfair Display (400, 600, 700, Italic) | Google Fonts |
| Body / Paragraphs | Lora (400, 500, 600, Italic) | Google Fonts |

### Animations
- **Scroll Fade-In**: `IntersectionObserver` API triggers elegant `opacity: 0 → 1` + `translateY(30px → 0)` transitions as elements scroll into view
- **Counter Ramp-Up**: Stats animate from `0` to their target values as they enter the viewport
- **Parallax Hero**: `background-attachment: fixed` creates a classic parallax depth effect on the hero and stats sections
- **Bouncing Scroll Arrow**: A continuously bouncing chevron on the homepage hero guides users to scroll down
- **Glassmorphism Navbar**: On scroll, header transitions from transparent (white text over dark image) to a frosted `backdrop-filter: blur(10px)` state

---

## 📂 Project Structure

```
event_decorator_site/
│
├── 📄 index.html       # Home page — Hero, Services, Process, Gallery, Stats, Testimonials
├── 📄 portfolio.html   # Portfolio gallery with interactive JS category filtering
├── 📄 about.html       # Founder's emotional story & biography
├── 📄 contact.html     # Booking inquiry form, contact info, and Google Maps embed
│
├── 🎨 styles.css       # Global design system: CSS variables, layout, animations, responsive
├── ⚡ scripts.js       # Vanilla JS: scroll effects, counter animation, mobile nav, WhatsApp
│
└── 📖 README.md        # Project documentation (this file)
```

---

## 💻 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure (header, nav, main, section, footer, article) |
| **CSS3 (Vanilla)** | Design system with CSS variables, Flexbox, Grid, Keyframe animations, Media Queries |
| **JavaScript (ES6+)** | IntersectionObserver, counter animation, portfolio filter, mobile menu toggle, WhatsApp button injection |
| **Google Fonts** | Playfair Display & Lora typography |
| **FontAwesome 6** | All icons (phone, email, WhatsApp, bars, chevron, etc.) |
| **Google Maps Embed** | Studio location map on the Contact page |

> ✅ **Zero dependencies** — No Node.js, no npm packages, no build pipeline required.

---

## 📈 Performance & SEO

### SEO
- `<meta charset>` and `<meta name="viewport">` on every page
- Unique, keyword-rich `<meta name="description">` per page
- Descriptive `<h1>` tags with clear hierarchy (H1 → H2 → H3)
- All `<img>` tags include meaningful `alt` attributes
- Semantic HTML5 structure throughout (`<header>`, `<nav>`, `<section>`, `<footer>`)

### Performance
- No JavaScript frameworks or CSS libraries — pure native browser capabilities
- Images served from Unsplash CDN with quality and width parameters (`?q=80&w=800`)
- Google Maps iframe uses `loading="lazy"` to defer iframe loading
- Web Fonts loaded via Google Fonts CDN with `display=swap` for zero layout shift

---

## 📱 WhatsApp Integration

A floating WhatsApp action button is **dynamically injected** into every page via `scripts.js`. It is visible on both desktop and mobile, fixed to the bottom-right corner of the viewport.

**Clicking the button:**
- Opens WhatsApp directly with pre-filled text: _"Hi, I'm interested in your event decoration services."_
- Phone Number: `+91 80953 35050`
- Deep link: `https://wa.me/8095335050?text=Hi%2C%20I%E2%80%99m%20interested%20in%20your%20event%20decoration%20services.`

**Additional WhatsApp CTAs:**
- Portfolio page: "Chat for Full Catalog" button
- Contact page: "Message us directly on WhatsApp" inline link
- This structure is compatible with **WhatsApp Business Automation** — you can set up keyword-based auto-replies for words like "pricing", "availability", and "booking" via the WhatsApp Business App or API.

---

## 🚀 Running Locally

### Option 1: Python Web Server _(Recommended)_
```bash
# Navigate to the project folder
cd /path/to/event_decorator_site

# Start the server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 2: VS Code Live Server Extension
1. Open the project folder in VS Code
2. Right-click `index.html`
3. Select **"Open with Live Server"**

### Option 3: Direct File Launch
Double-click `index.html` in your Finder/file manager and open in any modern browser (Chrome, Safari, Firefox, Edge).

---

## 🌐 Deployment Guide

### Deploy to GitHub Pages _(Free Hosting)_
1. Push the code to a GitHub repository (`main` branch)
2. Go to **Repository → Settings → Pages**
3. Set source to `Deploy from branch → main → / (root)`
4. Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Deploy to Netlify _(Drag & Drop — Recommended)_
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop the `event_decorator_site/` folder into the Netlify dashboard
3. Your site is instantly live with an auto-generated URL
4. You can connect a **custom domain** (e.g., `www.symphonyevents.in`) for free

### Deploy to Vercel
```bash
npm install -g vercel
cd event_decorator_site
vercel --prod
```

---

## 🛠️ Customization Guide

### To Change Business Name
Replace all instances of **"Symphony Events"** across all `.html` files.

### To Update the WhatsApp Number
In `scripts.js`, find the phone number in the dynamic button generation code and replace `8095335050` with your number:
```javascript
waBtn.href = 'https://wa.me/YOUR_NUMBER?text=...';
```

### To Update Stats Counters
In `index.html`, update the `data-target` attribute values:
```html
<h3 class="counter" data-target="1520">0</h3>  <!-- Total Events -->
<h3 class="counter" data-target="1250">0</h3>  <!-- Happy Clients -->
<h3 class="counter" data-target="15">0</h3>    <!-- Years of Experience -->
```

### To Change the Color Theme
All design tokens are defined in a single location inside `styles.css`:
```css
:root {
  --primary-gold: #c39a4a;     /* Change this to your brand's primary color */
  --secondary-peach: #f4ebe3;  /* Section background */
  --bg-color: #fdfcfb;         /* Main background */
}
```

### To Add Portfolio Items
Copy any existing `<div class="portfolio-item">` block in `portfolio.html` and update:
- The `data-category` attribute (for filtering)
- The `src` attribute on the `<img>` tag (your image)
- The event title, category badge, and description text

---

## 🔮 Future Enhancements

- [ ] **Before & After Slider**: Drag-to-reveal interactive transformation on portfolio images
- [ ] **Dark Mode ("Midnight Gala")**: A moon/sun toggle transitioning to a rich charcoal + gold aesthetic
- [ ] **Cinematic Video Hero**: A looping, muted ambient video background for the homepage
- [ ] **Custom Page Preloader**: A gold line-art floral animation that plays while new pages load
- [ ] **Live Instagram Feed Grid**: An auto-updating social proof grid above the footer
- [ ] **Custom Gold Scrollbar**: A premium thin metallic scrollbar replacing the browser default

---

## 📞 Business Contact

- **WhatsApp**: [+91 80953 35050](https://wa.me/8095335050)
- **Email**: hello@symphonyevents.com
- **Location**: Bengaluru, India

---

<p align="center">Made with ❤️ for Symphony Events &mdash; <em>Crafting Unforgettable Moments</em></p>
