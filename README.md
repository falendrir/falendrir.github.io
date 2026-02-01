# Personal Portfolio Template

A dark-themed personal portfolio template inspired by [JayantGoel001's portfolio](https://github.com/JayantGoel001/JayantGoel001.github.io). Built with pure **HTML5, CSS3 & vanilla JavaScript** — zero build step required. Deploy instantly on GitHub Pages.

## Features

- 🌙 Dark Gunmetal theme with Orange accent
- ✨ Splash loader with dual animated rings
- 🎆 Interactive particle background (mouse-reactive)
- 🃏 3D tilt effect on cards (vanilla-tilt)
- 📊 Animated skill progress bars
- 📜 Scroll-reveal animations (IntersectionObserver)
- 🏷️ Portfolio filter by category
- 📱 Fully responsive & mobile-friendly
- ⚡ No dependencies / no build step — works as static files

## Sections

| Section | Description |
|---|---|
| **Home** | Hero with particles, role typer, social links |
| **About** | Profile photo, bio, info badges, CV download |
| **Skills** | Cards with animated progress bars |
| **Education** | Vertical timeline |
| **Portfolio** | Filterable project cards with hover overlay |
| **Achievements** | Award/badge cards |
| **Contact** | Info + form (connect to Formspree or your backend) |

## 🚀 Deploy on GitHub Pages

1. **Fork / clone** this repo into a repository named `<your-username>.github.io`
2. Go to **Settings → Pages → Source: `main` branch, `/ (root)` folder** → Save.
3. Your site will be live at `https://<your-username>.github.io/`

> No build step, no npm install. Just push and go.

## 📁 File Structure

```
├── index.html              ← Main page (edit content here)
├── css/
│   └── style.css           ← All styles (theme variables at the top)
├── js/
│   ├── main.js             ← App logic (typer, scroll-reveal, filters)
│   ├── particles.js        ← Canvas particle system
│   └── vanilla-tilt.js     ← 3D card tilt effect
└── assets/
    ├── favicon.svg         ← Site favicon
    ├── profile.svg         ← Replace with your photo
    └── project1–6.svg      ← Replace with project screenshots
```

## ✏️ Customisation Guide

### 1. Your Info
Open `index.html` and search-replace the placeholder text:
- **Your Name** → your actual name
- **you@email.com** → your email
- **Location, Country** → your city
- Social links → update `href` attributes

### 2. Theme Colors
Edit CSS variables at the top of `css/style.css`:
```css
--clr-bg:        #242a35;   /* Main background */
--clr-accent:    #ff9800;   /* Accent color     */
--clr-card:      #2c3344;   /* Card background  */
```

### 3. Profile Photo
Replace `assets/profile.svg` with your photo (`profile.jpg` or `profile.png`) and update the `<img src>` in the About section.

### 4. Project Cards
Each `.project-card` in the Portfolio section has:
- `data-category="web|app|tool"` — for the filter buttons
- An image, title, description, and tech tags
- Links to live demo and source code

### 5. Skills
Each `.skill-card` has a percentage set via `style="width: 85%"` on the `.skill-bar` and a matching `.skill-percent` label. Adjust as needed.

### 6. Contact Form
The form currently shows a demo alert. Connect it to a backend:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>`, then remove the JS `submit` listener.
- **Netlify Forms**: Add `netlify` attribute to `<form>`.
- **Custom backend**: POST to your API endpoint.

### 7. CV Download
Replace the `<a href="#" download>` in the About section with a link to your CV PDF:
```html
<a href="assets/cv.pdf" download class="btn btn--primary">…</a>
```

## License

MIT — feel free to use and adapt for personal projects.
