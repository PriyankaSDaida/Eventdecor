# Symphony Events
**Premium Event Decoration Website**

Symphony Events is a beautifully crafted, highly responsive, and elegant website designed for a luxury event decoration company. Focusing on weddings, corporate galas, and bespoke family events, this website delivers a premium digital experience matching the grandeur of the physical events it represents.

---

## 🌟 Key Features

### 1. **Luxurious Aesthetic & Typography**
Built seamlessly with `Vanilla CSS` to ensure zero-overhead performance, the site features a warm overarching color palette (Metallic Gold `#c39a4a`, Secondary Peach `#f4ebe3`, Charcoal `#2c2a29`) paired perfectly with **Playfair Display** (for regal headings) and **Lora** (for readable, engaging body text).

### 2. **Cinematic Hero & Scroll Animations**
- **Parallax Background**: The homepage features a stunning cinematic hero image that creates depth through a smooth fixed-attachment parallax effect.
- **Glassmorphism Navigation**: To maintain contrast over dark imagery, the navigation links start crisp white, but transition into a gorgeous ultra-modern "frosted-glass" dark-text bar the moment the user begins scrolling.
- **Intersection Observers**: Native JavaScript `IntersectionObserver` breathes life into the content. As users scroll smoothly down the page, elements (service cards, contact info, images) elegantly fade in and up.

### 3. **Conversion-Optimized Contact Funnel**
- **Floating WhatsApp Integration**: A dynamic, highly visible WhatsApp icon floats natively on mobile and desktop globally (corner-docked). Click-through drives the user directly into a pre-filled, highly convertible WhatsApp chat query.
- **Form Submission Success States**: Utilizing JavaScript, the form submission has been refactored away from jarring browser alerts. It elegantly transitions the user into a custom, beautifully styled "Request Received" success state upon hitting the Submit Inquiry button.

### 4. **Fully Featured Portfolio & Process Grids**
- The site offers a natively programmed filtering mechanism on the Portfolio page (`portfolio.html`), allowing users to smoothly transition between "Weddings", "Birthdays", and "Corporate" categories with fade-out/fade-in transitions.
- The homepage features an elegant, editorial "Creative Journey" three-step timeline with oversized watermark numbers, pushing the user visually through the business's workflow.

---

## 📂 Project Structure

```
event_decorator_site/
│
├── index.html         # The main landing page with Hero, Services, Stats & Features
├── portfolio.html     # High-end gallery with dynamic JS category filtering
├── about.html         # Rich, emotional biography outlining the founder's story
├── contact.html       # Fully-featured booking inquiry form and Google Maps embed
│
├── styles.css         # Global Vanilla CSS (Design system, Animations, Mobile Resp.)
├── scripts.js         # Vanilla JavaScript (Observers, Counters, WhatsApp injection)
│
└── README.md          # Project overview & instructions
```

---

## 🚀 Running the Project Locally

This project requires exactly **zero** build steps, NPM installations, or complex runtime environments. It relies on standard modern web capabilities.

### Method 1: Python Web Server (Recommended)
You can serve the HTML natively from any terminal using Python.

1. Open your terminal and navigate to the project directory:
   ```bash
   cd /path/to/event_decorator_site
   ```
2. Start the local development server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open a browser and visit: `http://localhost:8000`

### Method 2: Direct Browser Launch
Simply double-click `index.html` within your file explorer to immediately launch the application via your default web browser.

---

## 💻 Tech Stack
* **Markup**: HTML5 (Semantic Structure)
* **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid, Keyframe Animations)
* **Interactions**: Vanilla JavaScript (ES6, Events, Intersection Observer API)
* **Icons**: FontAwesome 6

---

*Designed and Developed dynamically for Symphony Events.*
