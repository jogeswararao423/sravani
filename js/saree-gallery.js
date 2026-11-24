/**
 * SRAVANI MAKEOVERS — SAREE DRAPING INTERACTIVE REFERENCE LOOKBOOK
 * Handles modal lightbox, style filtering, full-screen viewing for Saree Draping Collections.
 */

(function () {
  'use strict';

  const SAREE_DATA = {
    "box-folding": {
      id: "box-folding",
      name: "1. Box Folding",
      shortName: "Box Folding",
      tagline: "Crisp Pre-Pressed Pleats & Travel-Ready Box Folding",
      description: "Architectural razor-sharp box pleating steam-pressed and packaged in travel-friendly compact box folds. Ready to drape effortlessly in under 5 minutes without disturbing intricate pallu zari or waist alignments.",
      photos: [
        {
          src: "assets/saree/box-folding-ref-1.jpg",
          alt: "Mustard Gold Kanjeevaram Saree Box Folding",
          tag: "Look 01 • Classic Fan Box Pleating",
          title: "Mustard Gold Silk with Royal Pink Zari",
          caption: "Architectural precision box pleats steam-pressed with diagonal fan alignment, framed by an authentic magenta peacock zari border."
        },
        {
          src: "assets/saree/box-folding-ref-2.jpg",
          alt: "Travel-Ready Packaged Mint & Purple Silk Saree",
          tag: "Look 02 • Travel-Packaged Protection",
          title: "Padded Travel Fold in Clear Protection Cover",
          caption: "Pristine pre-pleated mint and purple silk saree sealed in a dustproof travel case, ready for effortless destination wedding draping in minutes."
        },
        {
          src: "assets/saree/box-folding-ref-3.jpg",
          alt: "Mint Green & Royal Purple Fan Box Pleat",
          tag: "Look 03 • Architectural Fan Pleats",
          title: "Mint Brocade with Royal Purple Peacock Pallu",
          caption: "Full view of razor-sharp fan pleating with purple contrast border, demonstrating zero-crease symmetry and pin-locked waist pleats."
        },
        {
          src: "assets/saree/box-folding-ref-4.jpg",
          alt: "Bridal Party Multi-Saree Box Folding Set",
          tag: "Look 04 • Multi-Ceremony Trousseau Set",
          title: "Curated Bridal Trousseau 6-Pack Box Folds",
          caption: "Complete multi-ceremony wedding wardrobe pre-pleated, steam-set, and individually packaged for seamless 5-minute wardrobe changes."
        },
        {
          src: "assets/saree/box-folding-ref-5.jpg",
          alt: "Emerald Green & Crimson Red Diagonal Box Fold",
          tag: "Look 05 • Royal Diagonal Fan Fold",
          title: "Emerald Kanjeevaram with Crimson Zari",
          caption: "Dramatic diagonal fan pleating on emerald green floral brocade silk with crimson border, anchored for quick royal Muhurtham wear."
        }
      ]
    },
    "hanger-folding": {
      id: "hanger-folding",
      name: "2. Hanger Folding",
      shortName: "Hanger Folding",
      tagline: "Wardrobe-Ready Pre-Pleated Hanger Draping",
      description: "Expert full-length pre-pleated saree styling neatly hung on customized padded hangers. Ideal for destination weddings and multi-ceremony transitions—simply slip on and pin for zero-crease, showroom-perfect drape.",
      photos: [
        {
          src: "assets/saree/hanger-folding-ref-1.jpg",
          alt: "Full-Length Pre-Pleated Kanjeevaram Saree on Hanger",
          tag: "Look 01 • Vertical Curtain Display",
          title: "Full-Length Pre-Pleated Saree on Hanger",
          caption: "Architectural full-length pre-pleated drape suspended gracefully on a padded hanger, featuring crisp waist pleats and a rich maroon zari pallu ready to wear in seconds."
        },
        {
          src: "assets/saree/hanger-folding-ref-2.jpg",
          alt: "Royal Blue & Gold Brocade Pre-Pleated Saree on Hanger",
          tag: "Look 02 • Wardrobe-Ready Brocade",
          title: "Royal Blue & Gold Brocade on Hanger",
          caption: "Shimmering royal blue and gold banarasi silk pre-pleated and secured on a customized hanger for destination weddings and fast reception wardrobe changes."
        },
        {
          src: "assets/saree/hanger-folding-ref-3.jpg",
          alt: "Sea-Green Silk Saree with Antique Gold Zari on Hanger",
          tag: "Look 03 • Steam-Pressed Muhurtham Fold",
          title: "Sea-Green Silk Saree with Antique Gold Zari",
          caption: "Pristine pastel sea-green silk with heavy antique gold borders pre-pinned and hung on a padded hanger, ensuring zero-crease symmetry and effortless bridal wear."
        }
      ]
    },
    "fluffy-pleats": {
      id: "fluffy-pleats",
      name: "3. Fluffy Pleats",
      shortName: "Fluffy Pleats",
      tagline: "Airy Dimension & Romantic Cascading Pleats",
      description: "Romantic, cloud-soft cascading pleats creating modern texture, voluminous movement, and royal silhouette. Perfect for reception silk, organza, georgette, and designer cocktail sarees.",
      photos: [
        {
          src: "assets/saree/fluffy-pleats-ref-1.jpg",
          alt: "Pastel Pink Kanjeevaram with Cascading Fluffy Pleats",
          tag: "Look 01 • Pastel Pink Silk Cascade",
          title: "Pastel Pink Kanjeevaram with Cascading Fluffy Pleats",
          caption: "Shimmering pastel baby-pink Kanjeevaram silk draped with voluminous, airy cascading waist pleats, paired with an intricately embroidered designer blouse and traditional gold vaddanam."
        },
        {
          src: "assets/saree/fluffy-pleats-ref-2.jpg",
          alt: "Metallic Bronze Silk with Voluminous Accordion Pleats",
          tag: "Look 02 • Sculptural Accordion Volume",
          title: "Metallic Bronze & Crimson Silk Accordion Pleats",
          caption: "Dual-tone metallic bronze silk paired with a crimson border, featuring micro-precision accordion folds that open into a breathtaking, sculptural fan flare."
        },
        {
          src: "assets/saree/fluffy-pleats-ref-3.jpg",
          alt: "Marigold Orange Silk with Antique Zari Airy Pleats",
          tag: "Look 03 • Royal Marigold Zari Volume",
          title: "Marigold Orange Silk with Antique Zari Airy Pleats",
          caption: "Vibrant festive marigold silk with rich dark-chocolate and gold zari border, styled with fluid airy pleats offering majestic posture and effortless movement."
        },
        {
          src: "assets/saree/fluffy-pleats-ref-4.jpg",
          alt: "Dusty Rose Banarasi Silk Fluffy Fan Pleats",
          tag: "Look 04 • Dusty Rose Banarasi Fan Pleats",
          title: "Dusty Rose Banarasi Silk Fluffy Fan Pleats",
          caption: "High-definition macro detailing of layered fan pleating on dusty rose Banarasi silk, enhanced with delicate lavender piping for modern bridal grandeur."
        }
      ]
    }
  };

  let currentActiveStyle = "box-folding";
  let activeModalPhotos = [];
  let currentViewerIndex = 0;

  // DOM Elements
  let modalOverlay, modalContainer, modalTitle, modalTagline, modalDesc, modalTabsContainer, modalGrid;
  let viewerOverlay, viewerImg, viewerTitle, viewerCaption, viewerTag, viewerCounter, viewerPrev, viewerNext, viewerClose;

  function initSareeLookbook() {
    createModalElements();
    createViewerElements();
    bindCardTriggers();
  }

  function bindCardTriggers() {
    const cards = document.querySelectorAll('.subtype-card[data-style]');
    cards.forEach(card => {
      card.addEventListener('click', function (e) {
        const styleKey = this.getAttribute('data-style');
        if (styleKey && SAREE_DATA[styleKey]) {
          cards.forEach(c => c.classList.remove('active-subtype-card'));
          this.classList.add('active-subtype-card');
          openStyleModal(styleKey);
        }
      });

      // Keyboard Accessibility
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  function createModalElements() {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'hair-modal-overlay';
    modalOverlay.id = 'sareeLookbookModal';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-label', 'Saree Draping Reference Lookbook');

    modalOverlay.innerHTML = `
      <div class="hair-modal-dialog">
        <button class="hair-modal-close" id="sareeModalClose" aria-label="Close Reference Gallery">✕</button>
        <div class="hair-modal-header">
          <span class="hair-modal-eyebrow">✦ Sravani Makeovers • Saree Draping Lookbook ✦</span>
          <h2 class="hair-modal-title" id="sareeModalTitle">Saree Draping Collection</h2>
          <div class="hair-modal-tagline" id="sareeModalTagline">Pristine Pleats & Royal Silhouettes</div>
          <p class="hair-modal-desc" id="sareeModalDesc">Browse client reference photos and ceremony styles.</p>
        </div>

        <div class="hair-modal-tabs" id="sareeModalTabs"></div>

        <div class="hair-modal-grid" id="sareeModalGrid"></div>

        <div class="hair-modal-footer">
          <span class="hair-footer-hint">✦ Click any photo for 4K theater view • Press Esc to close</span>
          <a href="enquiry.html?service=Saree+Draping" class="btn-gold btn-sm">
            Book Saree Draping ✦
          </a>
        </div>
      </div>
    `;

    document.body.appendChild(modalOverlay);

    // Cache elements
    modalContainer = modalOverlay.querySelector('.hair-modal-dialog');
    modalTitle = modalOverlay.querySelector('#sareeModalTitle');
    modalTagline = modalOverlay.querySelector('#sareeModalTagline');
    modalDesc = modalOverlay.querySelector('#sareeModalDesc');
    modalTabsContainer = modalOverlay.querySelector('#sareeModalTabs');
    modalGrid = modalOverlay.querySelector('#sareeModalGrid');

    // Close trigger
    const closeBtn = modalOverlay.querySelector('#sareeModalClose');
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  function createViewerElements() {
    viewerOverlay = document.createElement('div');
    viewerOverlay.className = 'hair-viewer-overlay';
    viewerOverlay.id = 'sareeFullscreenViewer';
    viewerOverlay.setAttribute('role', 'dialog');
    viewerOverlay.setAttribute('aria-label', 'Full-screen Saree Draping Photo Viewer');

    viewerOverlay.innerHTML = `
      <button class="hair-viewer-close" id="sareeViewerClose" aria-label="Close Theater View">✕</button>
      <button class="hair-viewer-arrow prev" id="sareeViewerPrev" aria-label="Previous Photo">❮</button>
      <button class="hair-viewer-arrow next" id="sareeViewerNext" aria-label="Next Photo">❯</button>

      <div class="hair-viewer-container">
        <div class="hair-viewer-content">
          <div class="hair-viewer-img-wrap">
            <img src="" alt="" id="sareeViewerImg">
          </div>
          <div class="hair-viewer-caption-box">
            <span class="hair-viewer-badge" id="sareeViewerTag">Style Look</span>
            <h3 class="hair-viewer-title" id="sareeViewerTitle">Title</h3>
            <p class="hair-viewer-desc" id="sareeViewerDesc">Description</p>
            <span class="hair-viewer-counter" id="sareeViewerCounter">Photo 1 of 1</span>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(viewerOverlay);

    // Cache elements
    viewerImg = viewerOverlay.querySelector('#sareeViewerImg');
    viewerTitle = viewerOverlay.querySelector('#sareeViewerTitle');
    viewerCaption = viewerOverlay.querySelector('#sareeViewerDesc');
    viewerTag = viewerOverlay.querySelector('#sareeViewerTag');
    viewerCounter = viewerOverlay.querySelector('#sareeViewerCounter');
    viewerPrev = viewerOverlay.querySelector('#sareeViewerPrev');
    viewerNext = viewerOverlay.querySelector('#sareeViewerNext');
    viewerClose = viewerOverlay.querySelector('#sareeViewerClose');

    // Navigation triggers
    viewerClose.addEventListener('click', closeViewer);
    viewerPrev.addEventListener('click', showPrevPhoto);
    viewerNext.addEventListener('click', showNextPhoto);
    viewerOverlay.addEventListener('click', function (e) {
      if (e.target === viewerOverlay || e.target.classList.contains('hair-viewer-container')) {
        closeViewer();
      }
    });

    // Global keyboard listener
    document.addEventListener('keydown', function (e) {
      if (viewerOverlay && viewerOverlay.classList.contains('active')) {
        if (e.key === 'Escape') closeViewer();
        if (e.key === 'ArrowLeft') showPrevPhoto();
        if (e.key === 'ArrowRight') showNextPhoto();
      } else if (modalOverlay && modalOverlay.classList.contains('active')) {
        if (e.key === 'Escape') closeModal();
      }
    });
  }

  function openStyleModal(styleKey) {
    currentActiveStyle = styleKey;
    const styleData = SAREE_DATA[styleKey];
    if (!styleData) return;

    modalTitle.textContent = styleData.name;
    modalTagline.textContent = styleData.tagline;
    modalDesc.textContent = styleData.description;

    renderTabs(styleKey);
    renderGrid(styleData.photos);

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function renderTabs(activeKey) {
    modalTabsContainer.innerHTML = '';
    Object.keys(SAREE_DATA).forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'hair-tab-btn' + (key === activeKey ? ' active' : '');
      btn.type = 'button';
      btn.textContent = SAREE_DATA[key].shortName;
      btn.addEventListener('click', () => {
        openStyleModal(key);
      });
      modalTabsContainer.appendChild(btn);
    });
  }

  function renderGrid(photos) {
    activeModalPhotos = photos;
    modalGrid.innerHTML = '';

    photos.forEach((photo, index) => {
      const card = document.createElement('div');
      card.className = 'hair-ref-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', photo.title);

      card.innerHTML = `
        <div class="hair-ref-img-wrap">
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
          <span class="hair-ref-pill">${photo.tag}</span>
          <div class="hair-ref-zoom-badge">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>View Fullscreen</span>
          </div>
        </div>
        <div class="hair-ref-info">
          <h4>${photo.title}</h4>
          <p>${photo.caption}</p>
        </div>
      `;

      card.addEventListener('click', () => openViewer(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openViewer(index);
        }
      });

      modalGrid.appendChild(card);
    });
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openViewer(index) {
    if (!activeModalPhotos || !activeModalPhotos[index]) return;
    currentViewerIndex = index;
    updateViewerContent();
    viewerOverlay.classList.add('active');
  }

  function updateViewerContent() {
    const photo = activeModalPhotos[currentViewerIndex];
    if (!photo) return;

    viewerImg.src = photo.src;
    viewerImg.alt = photo.alt;
    viewerTag.textContent = photo.tag;
    viewerTitle.textContent = photo.title;
    viewerCaption.textContent = photo.caption;
    viewerCounter.textContent = `Photo ${currentViewerIndex + 1} of ${activeModalPhotos.length}`;
  }

  function showPrevPhoto() {
    if (activeModalPhotos.length === 0) return;
    currentViewerIndex = (currentViewerIndex - 1 + activeModalPhotos.length) % activeModalPhotos.length;
    updateViewerContent();
  }

  function showNextPhoto() {
    if (activeModalPhotos.length === 0) return;
    currentViewerIndex = (currentViewerIndex + 1) % activeModalPhotos.length;
    updateViewerContent();
  }

  function closeViewer() {
    viewerOverlay.classList.remove('active');
  }

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSareeLookbook);
  } else {
    initSareeLookbook();
  }

  window.SAREE_DATA = SAREE_DATA;
})();
