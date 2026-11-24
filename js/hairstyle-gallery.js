/**
 * SRAVANI MAKEOVERS — BRIDAL HAIRSTYLE INTERACTIVE REFERENCE LOOKBOOK
 * Handles modal lightbox, style filtering, full-screen viewing, and inline gallery.
 */

(function () {
  'use strict';

  const HAIRSTYLE_DATA = {
    bridal: {
      id: "bridal",
      name: "1. Bridal",
      shortName: "Bridal",
      tagline: "Sacred Muhurtham Braid & 24K Temple Gold Jada",
      description: "Grand ceremonial masterpieces engineered for South Indian Muhurtham rituals. Features custom real jasmine flower venis, fragrant rose petals, antique 24K gold jada billalu medallions, and perfect Maang Tikka symmetry with 14-hour lightweight stay.",
      photos: [
        {
          src: "assets/hairstyles/bridal-ref-1.jpg",
          alt: "Traditional South Indian Floral Jaal Net & Red Rose Crown Braid",
          tag: "Look 01 • Floral Jaal Poola Jada",
          title: "Traditional Floral Jaal Net Braid",
          caption: "Intricately hand-woven jasmine mesh net (jaal) enveloping the royal plait, crowned with fragrant deep-red rose venis and centered lotus blossom."
        },
        {
          src: "assets/hairstyles/bridal-ref-2.jpg",
          alt: "Criss-Cross Pearl String Braided Plait with Antique Temple Brooch",
          tag: "Look 02 • Pearl Symmetry Plait",
          title: "Criss-Cross Pearl String Braid",
          caption: "Geometric micro-pearl strings woven diagonally along the length of the braid, finished with a heavy gold rakodi and auspicious kempu stone veni."
        },
        {
          src: "assets/hairstyles/bridal-ref-3.jpg",
          alt: "Sacred Temple Gold Jada Billalu Medallions & White Jasmine Venis",
          tag: "Look 03 • 24K Temple Billalu",
          title: "Antique Temple Jada Billalu Braid",
          caption: "Graduated antique Lakshmi temple gold medallions (billalu) framed with multi-layered pearl strings and a lush white jasmine floral arch."
        },
        {
          src: "assets/hairstyles/bridal-ref-4.jpg",
          alt: "Architectural Antique Temple Gold Clips & Gold Diya Radiance",
          tag: "Look 04 • Heritage Muhurtham Plait",
          title: "Heirloom Temple Architecture Clips",
          caption: "Sculptural tiered gold motifs cascading down a silky dense South Indian braid, accented with pearl droplets and fresh moggu gajra."
        },
        {
          src: "assets/hairstyles/bridal-ref-5.jpg",
          alt: "Pink Lotus Circular Gajra & Fishtail Braid with Pearl Accents",
          tag: "Look 05 • Lotus Floral Fishtail",
          title: "Lotus Circular Gajra & Fishtail Plait",
          caption: "A dramatic central pink lotus bud framed by a dense white jasmine wreath, flowing into a textured fishtail braid with delicate pearl pins and lotus tassels."
        },
        {
          src: "assets/hairstyles/bridal-ref-6.jpg",
          alt: "Cascading Chevron Jasmine Flower Venis & Royal Pink Silk Saree",
          tag: "Look 06 • Chevron Floral Bubbles",
          title: "Chevron Jasmine Floral Bubble Braid",
          caption: "Layered V-shaped jasmine flower venis nested between voluminous braid segments, providing an opulent 360-degree floral profile."
        }
      ]
    },
    "messy-traditional": {
      id: "messy-traditional",
      name: "2. Messy Bride Hairstyle (Traditional)",
      shortName: "Messy Bride (Traditional)",
      tagline: "Romantic Textured Plait with Baby's Breath & Pastel Florals",
      description: "A contemporary high-fashion interpretation of the sacred South Indian braid. Features soft romantic twists, airy volume pulls, delicate clusters of white baby's breath, pastel rosebuds, and subtle antique gold pins for the modern bride.",
      photos: [
        {
          src: "assets/hairstyles/messy-ref-1.jpg",
          alt: "Textured Traditional South Indian Plait with Baby's Breath & Jasmine Gajra",
          tag: "Look 01 • Jasmine & Baby's Breath",
          title: "Textured Plait with Delicate Floral Clusters",
          caption: "A sleek traditional braid crowned with fresh jasmine buds and accented down the plait with clusters of white baby's breath and antique gold brooches."
        },
        {
          src: "assets/hairstyles/messy-ref-2.jpg",
          alt: "Textured Fishtail Braid with Pastel Purple & Pink Floral Florets",
          tag: "Look 02 • Pastel Florets Fishtail",
          title: "Romantic Fishtail Braid with Blossom Florets",
          caption: "Intricate dimensional fishtail weave interwoven with delicate purple and pastel pink florets and baby's breath, paired with an embroidered magenta blouse."
        },
        {
          src: "assets/hairstyles/messy-ref-3.jpg",
          alt: "Traditional Plait Adorned with Graduated Lotus Ruby Kempu Pins",
          tag: "Look 03 • Kempu Lotus Medallions",
          title: "Lotus Ruby Kempu Temple Braid",
          caption: "A voluminous glossy traditional plait adorned with seven graduated 24K gold and pink lotus ruby kempu brooches with hanging pearl drops."
        },
        {
          src: "assets/hairstyles/messy-ref-4.jpg",
          alt: "Loose Textured Bridal Braid with Fresh Red Rosebuds & Baby's Breath",
          tag: "Look 04 • Rosebuds & Breath",
          title: "Soft Romantic Rosebud Plait",
          caption: "Featherlight textured twists nestled with miniature deep-red roses and airy baby's breath sprays, finished with an antique gold temple border."
        },
        {
          src: "assets/hairstyles/messy-ref-5.jpg",
          alt: "Royal Bubble Braid with Gold Temple Medallions & Dense Jasmine Halo",
          tag: "Look 05 • Temple Bubble Braid",
          title: "Sculpted Bubble Braid with Gold Jhumkas",
          caption: "Regal segmented bubble braid crowned with a dense white jasmine halo, featuring antique gold temple jhumka clips centered on each bubble."
        },
        {
          src: "assets/hairstyles/messy-ref-6.jpg",
          alt: "Floral Bouquet Accent Braid on Red Muhurtham Silk",
          tag: "Look 06 • Floral Bouquet Plait",
          title: "Full Floral Bouquet Segmented Braid",
          caption: "Dense volumetric South Indian plait adorned with cascading clusters of red carnation florets and golden baby's breath over a crimson silk saree."
        },
        {
          src: "assets/hairstyles/messy-ref-7.jpg",
          alt: "Voluminous Half-Up Cascading Waves with Wildflower Florets",
          tag: "Look 07 • Cascading Waves & Florets",
          title: "Voluminous Half-Up Waves with Purple Florets",
          caption: "Rich textured half-up curls cascading over shoulders, adorned with lavender wildflowers and baby's breath for grand reception and sangeet evenings."
        }
      ]
    },
    bun: {
      id: "bun",
      name: "3. Bun Hairstyle",
      shortName: "Bun Hairstyle",
      tagline: "Regal Sculpted Chignon & Jasmine Flower Halo",
      description: "Architectural royal updos tailored for grand receptions, sangeets, and muhurtham draping. Features flawless high or low chignons enveloped in fresh white jasmine flower rings (malli moggu) and antique 24K gold temple center brooches.",
      photos: [
        {
          src: "assets/hairstyles/bun-1.jpg",
          alt: "Royal Bridal Chignon Bun with Circular Jasmine Halo and Gold Temple Centerpiece",
          tag: "Look 01 • Royal Jasmine Halo",
          title: "Architectural Jasmine Crown Bun",
          caption: "Sculpted low-chignon encased in a dense circular ring of fragrant fresh jasmine buds with an ornate antique 24K gold temple brooch (rakodi)."
        },
        {
          src: "assets/hairstyles/bun-2.jpg",
          alt: "Classic South Indian Bridal Gajra Bun",
          tag: "Look 02 • Classic Gajra Donut",
          title: "Traditional Gajra Donut Bun",
          caption: "High-volume bridal bun anchored with non-damaging pins and anti-humidity glaze, holding dupatta weight effortlessly."
        },
        {
          src: "assets/hairstyles/bun-3.jpg",
          alt: "Textured Floral Wreath Low Bun",
          tag: "Look 03 • Floral Wreath Updo",
          title: "Textured Floral Wreath Low Bun",
          caption: "Romantic twisted chignon framed with mixed seasonal exotic florals and pearls for evening lehengas."
        },
        {
          src: "assets/hairstyles/bun-ref-4.jpg",
          alt: "Architectural Smooth Donut Bun with Dense Jasmine Halo on Sky-Blue Silk",
          tag: "Look 04 • Architectural Donut Bun",
          title: "Smooth Donut Bun with Circular Jasmine Ring",
          caption: "Ultra-sleek, mirror-finish circular donut bun enveloped by a thick halo of fresh white jasmine flower buds (malli moggu) on a rich turquoise silk saree."
        },
        {
          src: "assets/hairstyles/bun-ref-5.jpg",
          alt: "Full Floral Dome Moggu Bun Completely Enveloped in Fragrant Jasmine Buds",
          tag: "Look 05 • Full Moggu Dome",
          title: "Complete Jasmine Floral Dome Bun",
          caption: "Opulent full floral dome coiffure densely covered in fresh fragrant jasmine buds, delivering a majestic 360-degree blossom crown for sacred ceremonies."
        },
        {
          src: "assets/hairstyles/bun-ref-6.jpg",
          alt: "Royal Temple Chignon with Layered Red Rose Petals, Golden Buds & Antique Brooch",
          tag: "Look 06 • Rose & Gold Temple Chignon",
          title: "Layered Rose Petal & Gold Kempu Brooch Bun",
          caption: "Exquisite layered floral crown blending crimson rose petals, golden buds, and white jasmine, centered with an ornate antique 24K gold temple peacock brooch."
        },
        {
          src: "assets/hairstyles/bun-ref-7.jpg",
          alt: "Modern Sculptural Donut Bun Crowned with Crescent Baby's Breath",
          tag: "Look 07 • Baby's Breath Crescent",
          title: "Sleek Donut Bun with Baby's Breath Crown",
          caption: "Contemporary high-fashion smooth donut bun crowned with an airy crescent of delicate white baby's breath flowers, ideal for modern receptions and cocktail sarees."
        }
      ]
    },
    curly: {
      id: "curly",
      name: "4. Curly Hairstyle",
      shortName: "Curly Hairstyle",
      tagline: "Glossy Hollywood Glam Waves & Cascading Curls",
      description: "Red-carpet worthy waves and bouncy cascading curls engineered for glamorous cocktail parties, receptions, and sangeet celebrations. Features high-shine gloss, anti-humidity hold, and bespoke pearl or floral accents.",
      photos: [
        {
          src: "assets/hairstyles/curly-ref-1.jpg",
          alt: "Half-Up Volumetric Romantic Curls with Floral Tiara Brooch",
          tag: "Look 01 • Floral Tiara Half-Up",
          title: "Romantic Cascading Curls with Floral Crown Brooch",
          caption: "Bouncy textured spiral curls draped down the back, crowned with an intricate arched floral brooch of pastel pink rosebuds and baby's breath."
        },
        {
          src: "assets/hairstyles/curly-ref-2.jpg",
          alt: "Criss-Cross Twisted Half-Up Flowing into Cascading Spiral Curls",
          tag: "Look 02 • Twisted Half-Up Cascade",
          title: "Criss-Cross Twisted Crown with Defined Curls",
          caption: "Sculptural woven hair twists at the crown releasing into glossy, long-lasting spiral curls tailored for engagement ceremonies."
        },
        {
          src: "assets/hairstyles/curly-ref-3.jpg",
          alt: "Intricate Braided Half-Up with Diamond & Pearl Hair Vine",
          tag: "Look 03 • Pearl Vine Braid & Curls",
          title: "Textured Braided Half-Up with Pearl Hair Vine",
          caption: "Multi-strand textured braid blending seamlessly into cascading Hollywood ringlets, accented with a shimmering silver and pearl crystal hairpiece."
        },
        {
          src: "assets/hairstyles/curly-ref-4.jpg",
          alt: "Voluminous Glamour Ponytail Curls with Jasmine Gajra & Jhumkas",
          tag: "Look 04 • Jasmine Ponytail Glam",
          title: "Voluminous Textured Ponytail with Jasmine Gajra",
          caption: "A high-fashion bridal ponytail with dense cascading waves, crowned with a crescent of fragrant fresh jasmine and an antique gold jhumka medallion."
        },
        {
          src: "assets/hairstyles/curly-ref-5.jpg",
          alt: "Blush Pink Rosebud Brooch on Cascading Volumetric Curls",
          tag: "Look 05 • Blush Rosebud Waves",
          title: "Volumetric Sangeet Waves with Pink Rose Brooch",
          caption: "Full-bodied romantic waves treated with anti-humidity shine glaze, crowned with a handcrafted blush pink and pearl floral clip on evening lehenga."
        },
        {
          src: "assets/hairstyles/curly-ref-6.jpg",
          alt: "Cascading Spiral Waves Adorned with Baby's Breath Clusters",
          tag: "Look 06 • Baby's Breath Droplets",
          title: "Braided Half-Up with Baby's Breath Droplets",
          caption: "Soft romantic textured plait releasing into voluminous cascading ringlets, dotted with delicate white baby's breath sprays down the center."
        },
        {
          src: "assets/hairstyles/curly-ref-7.jpg",
          alt: "Caramel-Highlighted Voluminous Spiral Curls with Bubble Clips on Yellow Lehenga",
          tag: "Look 07 • Caramel Highlight Curls",
          title: "Textured Bubble Segment Curls with Gold Clips",
          caption: "Glamorous dimensional curls with subtle golden highlights, styled with tiered bubble segments and gold floral clips for Haldi and Mehendi celebrations."
        }
      ]
    }
  };

  let currentActiveStyle = "bridal";
  let activeModalPhotos = [];
  let currentViewerIndex = 0;

  // DOM Elements (Cached when initialized)
  let modalOverlay, modalContainer, modalTitle, modalTagline, modalDesc, modalTabsContainer, modalGrid;
  let viewerOverlay, viewerImg, viewerTitle, viewerCaption, viewerTag, viewerCounter, viewerPrev, viewerNext, viewerClose;
  let inlineShowcase, inlineTitle, inlineTagline, inlineDesc, inlineGrid;

  function initHairstyleLookbook() {
    createModalElements();
    createViewerElements();
    bindCardTriggers();
  }

  function bindCardTriggers() {
    const cards = document.querySelectorAll('.subtype-card[data-style]');
    cards.forEach(card => {
      card.addEventListener('click', function (e) {
        // Prevent accidental multiple triggers
        const styleKey = this.getAttribute('data-style');
        if (styleKey && HAIRSTYLE_DATA[styleKey]) {
          // Highlight clicked card
          cards.forEach(c => c.classList.remove('active-subtype-card'));
          this.classList.add('active-subtype-card');

          openStyleModal(styleKey);
        }
      });
    });
  }

  function createModalElements() {
    if (document.getElementById('hairLookbookModal')) return;

    modalOverlay = document.createElement('div');
    modalOverlay.id = 'hairLookbookModal';
    modalOverlay.className = 'hair-modal-overlay';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-label', 'Bridal Hairstyle Reference Gallery');

    modalOverlay.innerHTML = `
      <div class="hair-modal-dialog">
        <button class="hair-modal-close" id="hairModalClose" aria-label="Close Lookbook">✕</button>
        
        <div class="hair-modal-header">
          <span class="hair-modal-eyebrow">✦ SRAVANI MAKEOVERS • BRIDAL HAIR LOOKBOOK ✦</span>
          <h2 class="hair-modal-title" id="modalStyleTitle">Hairstyle Reference Gallery</h2>
          <p class="hair-modal-tagline" id="modalStyleTagline"></p>
          <p class="hair-modal-desc" id="modalStyleDesc"></p>
        </div>

        <!-- Filter Tabs -->
        <div class="hair-modal-tabs" id="modalFilterTabs">
          <button class="hair-tab-btn" data-target="bridal">1. Bridal</button>
          <button class="hair-tab-btn" data-target="messy-traditional">2. Messy Bride (Traditional)</button>
          <button class="hair-tab-btn" data-target="bun">3. Bun Hairstyle</button>
          <button class="hair-tab-btn" data-target="curly">4. Curly Hairstyle</button>
        </div>

        <!-- Photos Grid -->
        <div class="hair-modal-grid" id="modalPhotosGrid"></div>

        <div class="hair-modal-footer">
          <span class="hair-footer-hint">💡 Tap any photo to expand into 4K full-screen theater view</span>
          <a href="enquiry.html?service=Hairstyling" class="btn-gold btn-sm">Book This Style on WhatsApp ✦</a>
        </div>
      </div>
    `;

    document.body.appendChild(modalOverlay);

    // Cache elements
    modalContainer = modalOverlay.querySelector('.hair-modal-dialog');
    modalTitle = document.getElementById('modalStyleTitle');
    modalTagline = document.getElementById('modalStyleTagline');
    modalDesc = document.getElementById('modalStyleDesc');
    modalTabsContainer = document.getElementById('modalFilterTabs');
    modalGrid = document.getElementById('modalPhotosGrid');

    // Close on overlay click
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeStyleModal();
      }
    });

    document.getElementById('hairModalClose').addEventListener('click', closeStyleModal);

    // Tab buttons click
    modalTabsContainer.addEventListener('click', function (e) {
      const btn = e.target.closest('.hair-tab-btn');
      if (btn) {
        const target = btn.getAttribute('data-target');
        if (target && HAIRSTYLE_DATA[target]) {
          switchStyleInModal(target);
          // Also sync card active state
          document.querySelectorAll('.subtype-card[data-style]').forEach(c => {
            if (c.getAttribute('data-style') === target) {
              c.classList.add('active-subtype-card');
            } else {
              c.classList.remove('active-subtype-card');
            }
          });
        }
      }
    });

    // Keyboard ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (viewerOverlay && viewerOverlay.classList.contains('active')) {
          closeViewer();
        } else if (modalOverlay && modalOverlay.classList.contains('active')) {
          closeStyleModal();
        }
      }
    });
  }

  function createViewerElements() {
    if (document.getElementById('hairPhotoViewer')) return;

    viewerOverlay = document.createElement('div');
    viewerOverlay.id = 'hairPhotoViewer';
    viewerOverlay.className = 'hair-viewer-overlay';
    viewerOverlay.setAttribute('role', 'dialog');
    viewerOverlay.setAttribute('aria-label', 'Full-screen Hairstyle Image Viewer');

    viewerOverlay.innerHTML = `
      <div class="hair-viewer-container">
        <button class="hair-viewer-close" id="viewerCloseBtn" aria-label="Close Viewer">✕</button>
        <button class="hair-viewer-arrow prev" id="viewerPrevBtn" aria-label="Previous Photo">❮</button>
        <button class="hair-viewer-arrow next" id="viewerNextBtn" aria-label="Next Photo">❯</button>

        <div class="hair-viewer-content">
          <div class="hair-viewer-img-wrap">
            <img id="viewerImg" src="" alt="Full-screen Bridal Hairstyle Reference">
          </div>
          <div class="hair-viewer-caption-box">
            <div class="hair-viewer-badge" id="viewerTag"></div>
            <h3 class="hair-viewer-title" id="viewerTitle"></h3>
            <p class="hair-viewer-desc" id="viewerCaption"></p>
            <div class="hair-viewer-counter" id="viewerCounter"></div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(viewerOverlay);

    viewerImg = document.getElementById('viewerImg');
    viewerTitle = document.getElementById('viewerTitle');
    viewerCaption = document.getElementById('viewerCaption');
    viewerTag = document.getElementById('viewerTag');
    viewerCounter = document.getElementById('viewerCounter');
    viewerPrev = document.getElementById('viewerPrevBtn');
    viewerNext = document.getElementById('viewerNextBtn');
    viewerClose = document.getElementById('viewerCloseBtn');

    viewerClose.addEventListener('click', closeViewer);
    viewerPrev.addEventListener('click', () => navigateViewer(-1));
    viewerNext.addEventListener('click', () => navigateViewer(1));

    viewerOverlay.addEventListener('click', function (e) {
      if (e.target === viewerOverlay || e.target.classList.contains('hair-viewer-container')) {
        closeViewer();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (!viewerOverlay.classList.contains('active')) return;
      if (e.key === 'ArrowLeft') navigateViewer(-1);
      if (e.key === 'ArrowRight') navigateViewer(1);
    });
  }

  function openStyleModal(styleKey) {
    currentActiveStyle = styleKey;
    switchStyleInModal(styleKey);
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeStyleModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function switchStyleInModal(styleKey) {
    currentActiveStyle = styleKey;
    const data = HAIRSTYLE_DATA[styleKey];
    if (!data) return;

    modalTitle.innerHTML = `<span class="gold-gradient-text">${data.name}</span> — Reference Examples`;
    modalTagline.textContent = data.tagline;
    modalDesc.textContent = data.description;

    // Update tabs
    const tabs = modalTabsContainer.querySelectorAll('.hair-tab-btn');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-target') === styleKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Populate photos
    activeModalPhotos = data.photos;
    modalGrid.innerHTML = '';

    data.photos.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'hair-ref-card';
      card.setAttribute('data-index', idx);
      card.innerHTML = `
        <div class="hair-ref-img-wrap">
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
          <div class="hair-ref-zoom-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>Tap to Zoom</span>
          </div>
          <span class="hair-ref-pill">${photo.tag}</span>
        </div>
        <div class="hair-ref-info">
          <h4>${photo.title}</h4>
          <p>${photo.caption}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        openViewer(idx);
      });

      modalGrid.appendChild(card);
    });
  }

  function openViewer(index) {
    if (!activeModalPhotos || activeModalPhotos.length === 0) return;
    currentViewerIndex = (index + activeModalPhotos.length) % activeModalPhotos.length;
    updateViewerContent();
    viewerOverlay.classList.add('active');
  }

  function closeViewer() {
    if (viewerOverlay) {
      viewerOverlay.classList.remove('active');
    }
  }

  function navigateViewer(direction) {
    if (!activeModalPhotos || activeModalPhotos.length === 0) return;
    currentViewerIndex = (currentViewerIndex + direction + activeModalPhotos.length) % activeModalPhotos.length;
    updateViewerContent();
  }

  function updateViewerContent() {
    const photo = activeModalPhotos[currentViewerIndex];
    if (!photo) return;

    viewerImg.src = photo.src;
    viewerImg.alt = photo.alt;
    viewerTitle.textContent = photo.title;
    viewerCaption.textContent = photo.caption;
    viewerTag.textContent = photo.tag;
    viewerCounter.textContent = `Photo ${currentViewerIndex + 1} of ${activeModalPhotos.length} • ${HAIRSTYLE_DATA[currentActiveStyle].shortName}`;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHairstyleLookbook);
  } else {
    initHairstyleLookbook();
  }
})();
