# Franck RAHON — Personal Portfolio

Portfolio personnel de **Franck RAHON**, Data Analyst spécialisé en données financières.

[![GitHub Pages](https://img.shields.io/badge/Hébergé-GitHub%20Pages-blue?style=flat&logo=github)](https://falendrir.github.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)
[![HTML5](https://img.shields.io/badge/-HTML5-E34F32?style=flat&logo=html5&logoColor=white)](https://www.w3.org/TR/html5/)
[![CSS3](https://img.shields.io/badge/-CSS3-264CE4?style=flat&logo=css3&logoColor=white)](https://www.w3.org/TR/CSS/)
[![JavaScript](https://img.shields.io/badge/-JavaScript-F0AD4E?style=flat&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🎯 Demo

👉 [falendrir.github.io](https://falendrir.github.io)

---

## 📖 Sections

| Section | Description |
|---|---|
| **Accueil** | Titre, présentation, disponibilité, liens LinkedIn / GitHub / CV, bandeau « En bref » |
| **Compétences** | Compétences regroupées par domaine, dont l'expertise métier finance |
| **Projets** | Études de cas (question métier, démarche, liens dashboard et code) |
| **Expérience** | Postes occupés, du plus récent au plus ancien |
| **Formation** | Le Wagon, Université Laval, ISG |
| **Contact** | Coordonnées + formulaire connecté à Web3Forms |

---|---|
| **Accueil** | Hero avec particules interactives et typer de rôles |
| **À propos** | Photo, bio, infos de contact et téléchargement du CV |
| **Compétences** | Cartes avec barres de progression animées (SQL, Python, Excel…) |
| **Expériences pro.** | Timeline verticale des postes occupés |
| **Portfolio** | Projets avec filtres par catégorie (Tsunami…) |
| **Éducation** | Parcours académique (Le Wagon, Université Laval, ISG) |
| **Contact** | Formulaire connecté à Web3Forms + coordonnées |

---

## 🛠️ Technologies utilisées

- **HTML5 / CSS3** — structure et styles (100% vanilla, aucun framework CSS)
- **JavaScript** — une seule ligne (année du pied de page)
- **Google Fonts** — polices *IBM Plex Sans* et *IBM Plex Mono*
- **Icônes** — SVG inline, aucune bibliothèque externe
- **Web3Forms** — réception des messages du formulaire de contact (gratuit)

---

## 📁 Structure du projet

```
.
├── index.html          ← Fichier unique : HTML, CSS et JS inlinés
├── assets/
│   ├── FR.jpg          ← Photo de profil
│   ├── Accueil.png     ← Image du projet Tsunami
│   ├── og-image.jpg    ← Image d’aperçu (partage LinkedIn, 1200×630)
│   └── Franck Rahon - CV.pdf   ← CV téléchargeable
└── README.md           ← Ce fichier
```

> ⚡ Tout le CSS et le JavaScript sont inlinés dans `index.html`.  
> Aucune dépendance externe à installer — juste pousser sur GitHub Pages.

---

## 🚀 Déploiement sur GitHub Pages

1. **Cloner** le dépôt :
   ```bash
   git clone https://github.com/falendrir/falendrir.github.io.git
   cd falendrir.github.io
   ```

2. Modifier le contenu dans `index.html` selon ses besoins.

3. **Pousser** les changements :
   ```bash
   git add .
   git commit -m "mise à jour du portfolio"
   git push origin main
   ```

4. Le site est automatiquement mis à jour à :  
   👉 `https://falendrir.github.io`

---

## ✏️ Personnalisation rapide

| Quoi modifier | Où dans `index.html` |
|---|---|
| Nom, prénom | Chercher `Franck RAHON` |
| Photo de profil | `assets/FR.jpg` (section d'accueil) |
| CV téléchargeable | Lien `CV (PDF)` dans l'en-tête |
| Compétences | Section `id="competences"` |
| Projets | Section `id="projets"` — un bloc `<article>` par projet |
| Couleur d'accent | Chercher `#B23A0B` |
| Clé Web3Forms | Champ `hidden` `access_key` dans le formulaire |

---

## 📬 Formulaire de contact

Le formulaire est connecté à **[Web3Forms](https://web3forms.com)** (plan gratuit, illimité).  
Les messages sont directement envoyés à l'adresse email associée à la clé API.

---

## 📝 License

Ce projet est sous licence **MIT**.  
© 2025 Franck RAHON
