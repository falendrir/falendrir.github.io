/**
 * main.js — Portfolio orchestration
 */
(function () {
  'use strict';

  // ─── SPLASH LOADER ──────────────────────────────────
  window.addEventListener('load', function () {
    document.getElementById('splash').classList.add('hidden');
  });

  // ─── FOOTER YEAR ────────────────────────────────────
  document.getElementById('footerYear').textContent = new Date().getFullYear();

  // ─── NAVBAR: shrink on scroll + active link ─────────
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', function () {
    // Shrink
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Active link
    let current = '';
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 200) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });

    // Back-to-top
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 600);
  });

  // ─── MOBILE NAV TOGGLE ──────────────────────────────
  const navToggle  = document.getElementById('navToggle');
  const navLinksEl = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinksEl.classList.toggle('open');
  });
  // Close on link click (mobile)
  navLinksEl.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navToggle.classList.remove('active');
      navLinksEl.classList.remove('open');
    });
  });

  // ─── BACK TO TOP ────────────────────────────────────
  document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── ROLE TYPER ─────────────────────────────────────
  (function () {
    const roles = ['Developer', 'Designer', 'Problem Solver', 'Creator', 'Innovator'];
    const el    = document.getElementById('roleTyper');
    let roleIdx = 0, charIdx = 0, isDeleting = false, delay = 120;

    function type () {
      const current = roles[roleIdx];
      if (isDeleting) {
        el.textContent = current.substring(0, charIdx--);
        if (charIdx < 0) {
          isDeleting = false;
          roleIdx    = (roleIdx + 1) % roles.length;
          charIdx    = 0;
          delay      = 500; // pause before next word
        } else {
          delay = 55;
        }
      } else {
        el.textContent = current.substring(0, charIdx++);
        if (charIdx > current.length) {
          isDeleting = true;
          delay      = 1400; // pause after full word
        } else {
          delay = 120;
        }
      }
      setTimeout(type, delay);
    }
    type();
  })();

  // ─── SCROLL REVEAL ──────────────────────────────────
  (function () {
    // Add .reveal class to all major child blocks automatically
    const targets = document.querySelectorAll(
      '.about-grid, .skill-card, .timeline-item, .project-card, ' +
      '.achievement-card, .contact-item, .contact-form, ' +
      '.section-title, .portfolio-filters'
    );
    targets.forEach(function (el) {
      el.classList.add('reveal');
    });

    function checkReveal () {
      const windowH = window.innerHeight;
      targets.forEach(function (el) {
        if (el.getBoundingClientRect().top < windowH - 80) {
          el.classList.add('visible');

          // Animate skill bars once visible
          if (el.classList.contains('skill-card')) {
            const bar = el.querySelector('.skill-bar');
            if (bar) {
              // width already set inline; trigger CSS transition by ensuring it starts from 0
              bar.style.width = '0';
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  bar.style.width = el.querySelector('.skill-percent').textContent.replace('%','') + '%';
                });
              });
            }
          }
        }
      });
    }

    // Use IntersectionObserver for performance (fallback: scroll)
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // skill bar animation
            if (entry.target.classList.contains('skill-card')) {
              const bar = entry.target.querySelector('.skill-bar');
              if (bar) {
                bar.style.width = '0';
                requestAnimationFrame(function () {
                  requestAnimationFrame(function () {
                    bar.style.width = entry.target.querySelector('.skill-percent').textContent.replace('%','') + '%';
                  });
                });
              }
            }
          }
        });
      }, { threshold: 0.15 });

      targets.forEach(function (el) { observer.observe(el); });
    } else {
      window.addEventListener('scroll', checkReveal);
      checkReveal();
    }
  })();

  // ─── PORTFOLIO FILTERS ──────────────────────────────
  (function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards      = document.querySelectorAll('.project-card');

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        cards.forEach(function (card) {
          if (filter === 'all' || card.dataset.category === filter) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });
  })();

  // ─── CONTACT FORM (demo — replace with your backend) ─
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! (Demo — connect to your backend or Formspree)');
    this.reset();
  });

})();
