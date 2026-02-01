/**
 * vanilla-tilt.js — micro 3D tilt library
 * Apply [data-tilt] to any element.
 * Optional: data-tilt-max="15" data-tilt-speed="300" data-tilt-glare="true"
 */
(function () {
  'use strict';

  class VanillaTilt {
    constructor(el) {
      this.el   = el;
      this.max  = parseFloat(el.dataset.tiltMax)   || 12;
      this.speed= parseFloat(el.dataset.tiltSpeed) || 300;
      this.glare= el.dataset.tiltGlare === 'true';

      if (this.glare) this._createGlare();

      this.el.addEventListener('mousemove', this._onMove.bind(this));
      this.el.addEventListener('mouseleave', this._onLeave.bind(this));
      this.el.addEventListener('mouseenter', this._onEnter.bind(this));
    }

    _createGlare() {
      this.glareEl = document.createElement('div');
      this.glareEl.style.cssText =
        'position:absolute;top:0;left:0;width:100%;height:100%;' +
        'background:linear-gradient(135deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0) 60%);' +
        'pointer-events:none;border-radius:inherit;opacity:0;transition:opacity 0.3s;';
      this.el.style.position = 'relative';
      this.el.style.overflow = 'hidden';
      this.el.appendChild(this.glareEl);
    }

    _onEnter() {
      this.el.style.transition = 'none';
    }

    _onMove(e) {
      const rect = this.el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width  / 2;
      const centerY = rect.height / 2;

      const rotateX =  this.max * (y - centerY) / centerY;
      const rotateY = -this.max * (x - centerX) / centerX;

      this.el.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;

      if (this.glare) {
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
        this.glareEl.style.transform = `rotate(${angle}deg)`;
        this.glareEl.style.opacity  = '0.25';
      }
    }

    _onLeave() {
      this.el.style.transition = `transform ${this.speed}ms ease`;
      this.el.style.transform  = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
      if (this.glare) this.glareEl.style.opacity = '0';
    }
  }

  // Auto-init all [data-tilt] elements
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      new VanillaTilt(el);
    });
  });
})();
