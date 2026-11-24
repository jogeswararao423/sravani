/**
 * SRAVANI MAKEOVERS — HAUTE COUTURE BRIDAL & CELEBRITY STUDIO
 * Multi-Page Master Application Engine
 * Native Web Standards | High Performance | Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Force clean reload on back/forward browser cache restoration
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      window.location.reload();
    }
  });

  const BUSINESS_PHONE = '916305377697';

  /* ==========================================================================
     1. LUXURY AUDIO ENGINE (Native Web Audio API)
     ========================================================================== */
  const AudioEngine = {
    ctx: null,
    init() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      } catch (e) {}
    },
    playChime() {
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.15); // A5
        gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.35);
      } catch (err) {}
    }
  };

  window.addEventListener('click', () => AudioEngine.init(), { once: true });

  /* ==========================================================================
     2. NAVIGATION & MOBILE DRAWER
     ========================================================================== */
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');
  const scrollTopBtn = document.querySelector('.fab-scroll-top');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (header) {
      if (scrollPos > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  function openMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (drawerClose) drawerClose.addEventListener('click', closeMobileMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

  // 3D Click Feedback for Navigation Links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mousedown', () => {
      link.classList.add('nav-3d-press');
    });
    link.addEventListener('mouseup', () => {
      setTimeout(() => link.classList.remove('nav-3d-press'), 120);
    });
    link.addEventListener('mouseleave', () => {
      link.classList.remove('nav-3d-press');
    });
    link.addEventListener('click', () => {
      if (typeof AudioEngine !== 'undefined' && AudioEngine.playChime) {
        AudioEngine.playChime();
      }
    });
  });

  // Mark Active Nav Link based on Current Page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .drawer-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html') || (currentPath === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ==========================================================================
     3. WHATSAPP ENQUIRY FORM HANDLER (PAGE & MODALS)
     ========================================================================== */
  const enquiryForm = document.getElementById('whatsapp-enquiry-form');

  // Auto-select service dropdown from URL query parameters (e.g. ?service=Hairstyling)
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedService = urlParams.get('service');
  const serviceDropdown = document.getElementById('enquiry-service');

  if (serviceDropdown && preselectedService) {
    for (let i = 0; i < serviceDropdown.options.length; i++) {
      if (serviceDropdown.options[i].value.toLowerCase().includes(preselectedService.toLowerCase()) ||
          serviceDropdown.options[i].text.toLowerCase().includes(preselectedService.toLowerCase())) {
        serviceDropdown.selectedIndex = i;
        break;
      }
    }
  }

  // Set min date for date pickers to today
  const datePickers = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  datePickers.forEach(picker => {
    picker.min = today;
  });

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      AudioEngine.playChime();

      const customerName = document.getElementById('enquiry-name')?.value.trim() || '';
      const phoneNumber = document.getElementById('enquiry-phone')?.value.trim() || '';
      const eventDate = document.getElementById('enquiry-date')?.value.trim() || '';
      const eventLocation = document.getElementById('enquiry-location')?.value.trim() || '';
      const serviceRequired = document.getElementById('enquiry-service')?.value.trim() || '';
      const additionalReq = document.getElementById('enquiry-requirements')?.value.trim() || 'None specified';

      // Validation
      if (!customerName || !phoneNumber || !eventDate || !eventLocation || !serviceRequired) {
        showToast('Required Fields Missing', 'Please fill in all required fields marked with *');
        return;
      }

      const digitsOnly = phoneNumber.replace(/\D/g, '');
      if (digitsOnly.length < 10) {
        showToast('Invalid Phone Number', 'Please enter a valid 10-digit mobile number.');
        return;
      }

      // Build WhatsApp message formatted with fields directly on consecutive rows
      const message = `Hello Sravani Makeovers!

I would like to enquire about your services.

Customer Name: ${customerName}
Phone Number: ${phoneNumber}
Event Date: ${eventDate}
Event Location: ${eventLocation}
Service Required: ${serviceRequired}
Additional Requirements: ${additionalReq}

Please share your availability and pricing details.
Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${BUSINESS_PHONE}?text=${encodedMessage}`;

      showToast('Preparing WhatsApp Enquiry', 'Opening WhatsApp to send your enquiry details...');

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 700);
    });
  }

  // Contact Page Form Handler
  const contactForm = document.getElementById('contact-page-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      AudioEngine.playChime();

      const name = contactForm.querySelector('[name="name"]')?.value.trim() || 'Client';
      const phone = contactForm.querySelector('[name="phone"]')?.value.trim() || '';
      const messageText = contactForm.querySelector('[name="message"]')?.value.trim() || '';

      const msg = `Hello Sravani Makeovers!\n\nName: ${name}\nPhone: ${phone}\nMessage: ${messageText}\n\nPlease get back to me. Thank you!`;
      const url = `https://wa.me/${BUSINESS_PHONE}?text=${encodeURIComponent(msg)}`;

      showToast('Opening WhatsApp', 'Redirecting you to Sravani Makeovers WhatsApp chat...');
      setTimeout(() => {
        window.open(url, '_blank');
      }, 700);
    });
  }

  /* ==========================================================================
     4. LIGHTBOX MODAL FOR GALLERIES
     ========================================================================== */
  const lightboxModal = document.querySelector('.lightbox-modal');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item, .portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4, h3, .portfolio-title')?.textContent || 'Sravani Makeovers Bridal Couture';
      const subtitle = item.querySelector('p, span, .portfolio-tag')?.textContent || 'Luxury Beauty Artistry';

      if (lightboxModal && lightboxImg && lightboxCaption && img) {
        AudioEngine.playChime();
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = `<strong>${title}</strong><br><span style="font-size:0.85rem; color:#C69A4D;">${subtitle}</span>`;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal?.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightboxModal?.classList.remove('active');
      closeMobileMenu();
      document.body.style.overflow = '';
    }
  });

  /* ==========================================================================
     5. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(title, message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">✦</div>
      <div class="toast-message">
        <h5>${title}</h5>
        <p>${message}</p>
      </div>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  /* ==========================================================================
     6. 1-SECOND ROTATING HERO BRIDAL PHOTO SHOWCASE CARD (NO COUNT NUMBER)
     ========================================================================== */
  const heroSlider = document.getElementById('heroPhotoSlider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('#heroSliderDots .slider-dot');
    const progressBar = document.getElementById('heroProgressFill');
    const prevBtn = document.getElementById('heroSliderPrev');
    const nextBtn = document.getElementById('heroSliderNext');

    let currentIndex = 0;
    const intervalMs = 1000; // Exact 1.0s per photo (1 second automatic continuous repeat)
    let progressStartTime = Date.now();
    let animFrameId = null;

    function showSlide(idx) {
      if (!slides.length) return;
      const safeIdx = ((idx % slides.length) + slides.length) % slides.length;

      for (let i = 0; i < slides.length; i++) {
        if (i === safeIdx) {
          slides[i].classList.add('active');
        } else {
          slides[i].classList.remove('active');
        }
      }

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === safeIdx);
      });

      currentIndex = safeIdx;
      progressStartTime = Date.now();
      if (progressBar) progressBar.style.width = '0%';
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function prevSlide() {
      showSlide(currentIndex - 1);
    }

    function stepProgress() {
      const now = Date.now();
      const elapsed = now - progressStartTime;
      const pct = Math.min(100, (elapsed / intervalMs) * 100);
      if (progressBar) progressBar.style.width = pct + '%';

      if (elapsed >= intervalMs) {
        nextSlide();
      }
      animFrameId = requestAnimationFrame(stepProgress);
    }

    // Initialize first slide and start automatic 1-second continuous rotation
    showSlide(0);
    animFrameId = requestAnimationFrame(stepProgress);

    // Arrow controls
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
      });
    }

    // Dots controls
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
      });
    });
  }

  /* ==========================================================================
     7. TACTILE BUTTON & INTERACTIVE CLICK SHINE EFFECT
     (Instant gold light sheen & ripple feedback so the user knows they clicked)
     ========================================================================== */
  function applyButtonShine(target, e) {
    if (!target) return;

    // Remove any previous shine class
    target.classList.remove('btn-clicked-shine');
    void target.offsetWidth; // Force reflow
    target.classList.add('btn-clicked-shine');

    // Create localized radial ripple gleam inside the button
    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-shine-ripple';
    
    // Position ripple at click point relative to target
    const clickX = (e && e.clientX) ? (e.clientX - rect.left) : (rect.width / 2);
    const clickY = (e && e.clientY) ? (e.clientY - rect.top) : (rect.height / 2);
    const size = Math.max(rect.width, rect.height) * 1.5;
    
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${clickX}px`;
    ripple.style.top = `${clickY}px`;
    
    target.appendChild(ripple);
    
    setTimeout(() => {
      if (ripple.parentNode) ripple.remove();
    }, 500);

    setTimeout(() => {
      if (target.classList) target.classList.remove('btn-clicked-shine');
    }, 550);
  }

  // Universal Click Listener for Buttons & Interactive Links
  document.addEventListener('click', (e) => {
    // 1. Detect button or interactive clickable element
    const btn = e.target.closest('button, .btn, .btn-gold, .btn-outline, [role="button"], input[type="submit"], input[type="button"], .hero-slider-arrow, .mobile-toggle, .drawer-close, .slider-dot, .fab-scroll-top, .fab-whatsapp, .tab-btn, .filter-btn, .subtype-card, .service-card, .faq-question, .contact-redirect-card, .btn-redirect, .compact-redirect-pill');
    
    if (btn) {
      applyButtonShine(btn, e);
      // Subtle audio chime feedback
      if (typeof AudioEngine !== 'undefined' && AudioEngine.playChime) {
        AudioEngine.playChime();
      }
    }

    // 2. Navigation links handle native instant navigation smoothly
    // (Zero artificial delays, zero layout shift)
  }, false);

});
