/**
 * particles.js — lightweight custom implementation
 * Renders floating, interconnected particles on a <canvas>.
 * Reacts subtly to mouse movement.
 */
(function () {
  'use strict';

  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');
  const container = document.getElementById('particles-container');
  container.appendChild(canvas);

  let W, H, particles = [], mouse = { x: -9999, y: -9999 };

  const CONFIG = {
    particleCount : 70,
    particleColor : '255,152,0',     // accent orange
    particleRadius: 2.2,
    linkDistance  : 140,
    linkColor    : '255,152,0',
    linkOpacity  : 0.12,
    speed        : 0.4,
    mouseRadius  : 150,
  };

  function resize () {
    W = canvas.width  = container.clientWidth;
    H = canvas.height = container.clientHeight;
  }

  function Particle () {
    this.x     = Math.random() * W;
    this.y     = Math.random() * H;
    this.vx    = (Math.random() - .5) * CONFIG.speed;
    this.vy    = (Math.random() - .5) * CONFIG.speed;
    this.r     = CONFIG.particleRadius + Math.random() * 1.2;
    this.alpha = .35 + Math.random() * .45;
  }

  function init () {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function dist (a, b) {
    const dx = a.x - b.x, dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function update () {
    particles.forEach(function (p) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      // Mouse repulsion (gentle)
      const d = dist(p, mouse);
      if (d < CONFIG.mouseRadius && d > 0) {
        const force = (CONFIG.mouseRadius - d) / CONFIG.mouseRadius * 0.06;
        p.x += (p.x - mouse.x) / d * force * 20;
        p.y += (p.y - mouse.y) / d * force * 20;
      }
    });
  }

  function draw () {
    ctx.clearRect(0, 0, W, H);

    // Draw links
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = dist(particles[i], particles[j]);
        if (d < CONFIG.linkDistance) {
          const alpha = CONFIG.linkOpacity * (1 - d / CONFIG.linkDistance);
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(' + CONFIG.linkColor + ',' + alpha + ')';
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw particles
    particles.forEach(function (p) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + CONFIG.particleColor + ',' + p.alpha + ')';
      ctx.fill();
    });
  }

  function loop () {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  // Events
  window.addEventListener('resize', function () { resize(); init(); });

  container.addEventListener('mousemove', function (e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  container.addEventListener('mouseleave', function () {
    mouse.x = -9999; mouse.y = -9999;
  });

  // Init
  resize();
  init();
  loop();
})();
