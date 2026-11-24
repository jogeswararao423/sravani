/* ==========================================================================
   SRAVANI MAKEOVERS — LUXURY 3D & DYNAMIC VISUAL ENGINE
   Powered by Three.js & GSAP
   - 3D Luxury Gold Shimmer & Bokeh Particle Field
   - Interactive 3D Card Parallax Tilt & Specular Glare
   - Zero Layout Shift | 60 FPS Optimized | Mobile-Friendly
   ========================================================================== */

(function () {
  'use strict';

    /* ==========================================================================
     1. THREE.JS 3D LUXURY GOLD SHIMMER PARTICLE FIELD
     ========================================================================== */
  function init3DBackground() {
    if (typeof THREE === 'undefined') return;

    // Check if background canvas already exists
    let canvas = document.getElementById('webgl-bg');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'webgl-bg';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '0';
      canvas.style.opacity = '0.75';
      document.body.prepend(canvas);
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
    } catch (e) {
      console.warn('WebGL not supported for 3D background:', e);
      return;
    }

    // Generate circular soft glow particle texture programmatically
    function createGlowTexture() {
      const size = 64;
      const c = document.createElement('canvas');
      c.width = size;
      c.height = size;
      const ctx = c.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      gradient.addColorStop(0, 'rgba(255, 248, 235, 1)');
      gradient.addColorStop(0.25, 'rgba(216, 195, 155, 0.85)');
      gradient.addColorStop(0.6, 'rgba(184, 146, 90, 0.35)');
      gradient.addColorStop(1, 'rgba(184, 146, 90, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);

      return new THREE.CanvasTexture(c);
    }

    const particleTexture = createGlowTexture();

    // Particle Geometry
    const particleCount = window.innerWidth < 768 ? 60 : 130;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    const spreadX = 220;
    const spreadY = 160;
    const spreadZ = 120;

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spreadX;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

      scales[i] = Math.random() * 0.8 + 0.4;
      speeds[i] = Math.random() * 0.04 + 0.015;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Luxury Champagne Gold Material (#B8925A & #D8C39B)
    const material = new THREE.PointsMaterial({
      color: 0xD8C39B,
      size: 7.5,
      map: particleTexture,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false,
      opacity: 0.7
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // Handle Resize
    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    }
    window.addEventListener('resize', onResize, { passive: true });

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    function animate() {
      animId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const posArray = geometry.attributes.position.array;

      // Drift upward and breathe
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += speeds[i] * (delta * 60);

        // Reset if drifted beyond top
        if (posArray[i * 3 + 1] > spreadY / 2) {
          posArray[i * 3 + 1] = -spreadY / 2;
          posArray[i * 3] = (Math.random() - 0.5) * spreadX;
        }

        // Gentle horizontal sway
        posArray[i * 3] += Math.sin(clock.getElapsedTime() * 0.8 + i) * 0.03;
      }
      geometry.attributes.position.needsUpdate = true;

      // Parallax smooth interpolation
      targetX += (mouseX * 12 - targetX) * 0.05;
      targetY += (-mouseY * 12 - targetY) * 0.05;

      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    }

    animate();

    // Pause when tab not visible to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        clock.getDelta(); // reset delta
        animate();
      }
    });
  }

  /* ==========================================================================
     2. INTERACTIVE 3D CARD PARALLAX TILT & SPECULAR GLARE
     ========================================================================== */
  function init3DCardTilt() {
    // Only enable tilt on desktop / devices with hover capability
    if (window.matchMedia('(hover: none)').matches) return;

    const cards = document.querySelectorAll(
      '.service-card, .subtype-card, .compact-redirect-pill, .about-showcase-3d, .about-value-card, .about-pillar-card'
    );

    cards.forEach((card) => {
      // Create subtle specular highlight element inside card
      let glare = card.querySelector('.card-3d-glare');
      if (!glare) {
        glare = document.createElement('div');
        glare.className = 'card-3d-glare';
        glare.style.position = 'absolute';
        glare.style.top = '0';
        glare.style.left = '0';
        glare.style.width = '100%';
        glare.style.height = '100%';
        glare.style.pointerEvents = 'none';
        glare.style.borderRadius = 'inherit';
        glare.style.opacity = '0';
        glare.style.transition = 'opacity 0.25s ease';
        glare.style.zIndex = '2';
        glare.style.mixBlendMode = 'overlay';
        card.style.position = card.style.position || 'relative';
        card.style.transformStyle = 'preserve-3d';
        card.style.willChange = 'transform';
        card.appendChild(glare);
      }

      function handleMouseMove(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const isShowcase = card.classList.contains('about-showcase-3d');
        const maxAngle = isShowcase ? 10 : 7;
        const rotateX = ((y - centerY) / centerY) * -maxAngle;
        const rotateY = ((x - centerX) / centerX) * maxAngle;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-5px) scale3d(1.015, 1.015, 1.015)`;

        if (isShowcase) {
          card.style.boxShadow = `${(-rotateY * 2.5).toFixed(1)}px ${(rotateX * 2.5 + 20).toFixed(1)}px 45px -8px rgba(184, 146, 90, 0.38), 0 0 25px rgba(212, 175, 55, 0.2)`;
        }

        // Position specular radial glare
        glare.style.opacity = isShowcase ? '0.75' : '0.65';
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.5) 0%, rgba(216, 195, 155, 0.2) 45%, transparent 70%)`;
      }

      function handleMouseLeave() {
        card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
        card.style.boxShadow = '';
        glare.style.opacity = '0';

        setTimeout(() => {
          card.style.transition = '';
        }, 450);
      }

      function handleMouseEnter() {
        card.style.transition = 'none';
      }

      card.addEventListener('mousemove', handleMouseMove, { passive: true });
      card.addEventListener('mouseleave', handleMouseLeave);
      card.addEventListener('mouseenter', handleMouseEnter);
    });
  }

  /* ==========================================================================
     3. ABOUT PAGE GSAP LUXURY ANIMATIONS
     ========================================================================== */
  function initAboutAnimations() {
    if (typeof gsap === 'undefined') return;
    const aboutSection = document.querySelector('.about-premium-section');
    if (!aboutSection) return;

    gsap.from('.about-hero-title, .gold-divider-3d, .about-lead-statement', {
      opacity: 0,
      y: 28,
      stagger: 0.1,
      duration: 0.85,
      ease: 'power3.out'
    });

    gsap.from('.about-value-card', {
      opacity: 0,
      x: -24,
      stagger: 0.12,
      duration: 0.75,
      delay: 0.35,
      ease: 'power2.out'
    });

    gsap.from('.about-main-frame-3d', {
      opacity: 0,
      scale: 0.94,
      duration: 1.0,
      delay: 0.25,
      ease: 'power3.out'
    });

    gsap.from('.about-floating-badge', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      delay: 0.6,
      ease: 'back.out(1.7)'
    });
  }

  /* ==========================================================================
     4. ABOUT SECTION 3D CURSOR SPOTLIGHT
     ========================================================================== */
  function initAboutSpotlight() {
    const aboutSection = document.querySelector('.about-premium-section');
    if (!aboutSection) return;

    aboutSection.addEventListener('mousemove', (e) => {
      const rect = aboutSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      aboutSection.style.backgroundImage = `radial-gradient(750px circle at ${x}px ${y}px, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 40%, transparent 70%)`;
    }, { passive: true });

    aboutSection.addEventListener('mouseleave', () => {
      aboutSection.style.transition = 'background-image 0.5s ease';
      aboutSection.style.backgroundImage = '';
      setTimeout(() => { aboutSection.style.transition = ''; }, 500);
    });
  }

  /* ==========================================================================
     5. INITIALIZATION ON DOM READY
     ========================================================================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      init3DBackground();
      init3DCardTilt();
      initAboutAnimations();
      initAboutSpotlight();
    });
  } else {
    init3DBackground();
    init3DCardTilt();
    initAboutAnimations();
    initAboutSpotlight();
  }
})();
