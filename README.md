# Rose Garden - Online Flower Boutique

A responsive multi-page e-commerce website for a premium flower shop based in Marrakech, Morocco. Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks or backend required.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with a 6-slide auto-rotating carousel linking to all sections |
| `pages/about.html` | Brand story, mission, and value propositions |
| `pages/menu.html` | Product catalog with 12 pre-made bouquets and add-to-cart functionality |
| `pages/flower_bar.html` | DIY bouquet builder — pick individual flowers, set quantities, and name your arrangement |
| `pages/panier.html` | Shopping cart with item management, quantity editing, and order summary |
| `pages/flowers.html` | Flower encyclopedia using 3D flip cards (8 flowers with details) |
| `pages/reviews.html` | Customer review submission and display |
| `pages/contact.html` | Contact form with success confirmation modal |

---

## Features

- Shopping cart backed by `localStorage` — persists across page refreshes
- Custom bouquet builder with real-time price calculation
- Auto-rotating carousel with manual navigation controls
- 3D CSS flip cards for the flower encyclopedia
- Toast notifications on cart actions
- Review submission with dynamic card generation
- Fully responsive layout with a burger menu on mobile
- No external JavaScript libraries — vanilla JS only

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — Flexbox, Grid, custom properties, 3D transforms, media queries
- **JavaScript ** — DOM manipulation, localStorage, form handling
- **Google Fonts** — Playfair Display and Poppins
- **Font Awesome 6.5.0** — icons (loaded via CDN)

---

## Project Structure

```
mini_projet_s2/
├── index.html
├── pages/
│   ├── about.html
│   ├── menu.html
│   ├── flower_bar.html
│   ├── panier.html
│   ├── flowers.html
│   ├── reviews.html
│   └── contact.html
├── css/
│   ├── rose-style.css    (global: navbar, variables, burger menu)
│   ├── index.css
│   ├── about.css
│   ├── menu.css
│   ├── panier.css
│   ├── contact.css
│   ├── reviews.css
│   ├── flowers.css
│   └── flower_bar.css
├── js/
│   └── rose-script.js    (shared burger menu logic)
└── images/
    └── *.jpg             (51 product and hero images)
```

---


## Design Details

- **Primary color:** Deep rose `#d63384`
- **Accent:** Soft pink `#fce4ec`
- **Background:** Light pink `#fff5f8`
- **Fonts:** Playfair Display (headings) / Poppins (body)
- **Responsive breakpoints:** 968px (tablet), 480px (mobile)