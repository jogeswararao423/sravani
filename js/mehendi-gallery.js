/**
 * SRAVANI MAKEOVERS — MEHENDI DESIGN INTERACTIVE REFERENCE LOOKBOOK
 * Handles modal lightbox, style filtering, full-screen viewing for Mehendi Collections.
 */

(function () {
  'use strict';

  const MEHENDI_DATA = {
    "baby-shower": {
      id: "baby-shower",
      name: "1. Baby Shower Mehndi",
      shortName: "Baby Shower",
      tagline: "Auspicious Seemantham & Godh Bharai Blessing Henna",
      description: "Heartfelt ceremonial henna crafted for mother-to-be celebrations, baby showers, and traditional Seemantham rituals. Features sacred baby-in-cradle portraits, blooming lotus blossoms, peacock cradles, and maternal blessings with 100% natural organic henna.",
      photos: [
        {
          src: "assets/mehendi/baby-ref-1.jpg",
          alt: "Sweet Baby Bottle & Footprints Henna Design",
          tag: "Look 01 • Baby Bottle & Onesie",
          title: "Sweet Baby Bottle & Footprints Henna",
          caption: "Adorable central palm illustration of a baby holding a feeding bottle, accented with tiny footprints, baby clothes on a clothesline, and 'BABY' wrist banner."
        },
        {
          src: "assets/mehendi/baby-ref-2.jpg",
          alt: "Maternal Bond & Footprint Mandalas",
          tag: "Look 02 • Mother & Baby Silhouette",
          title: "Maternal Bond & Footprint Mandalas",
          caption: "Dual-palm celebration henna featuring an intimate mother cradling her newborn silhouette on one palm, paired with baby footprints encircled by floral chakras on the other."
        },
        {
          src: "assets/mehendi/baby-ref-3.jpg",
          alt: "Toy Building Blocks & Floral Lotus Henna",
          tag: "Look 03 • B-A-B-Y Blocks & Clothesline",
          title: "Toy Building Blocks & Floral Lotus",
          caption: "Whimsical baby shower design showcasing B-A-B-Y toy alphabet blocks, a blooming lotus flower, baby rompers on a clothesline, and intricate lattice wrist cuffs."
        },
        {
          src: "assets/mehendi/baby-ref-4.jpg",
          alt: "Baby Crib, Rattle & Mandala Garland",
          tag: "Look 04 • Baby Crib & Rattle Charm",
          title: "Baby Crib, Rattle & Mandala Garland",
          caption: "Delicate hand-drawn baby crib motif with hanging beads, baby rattle charm, feeding bottle, sweet heart vines, and festive 'BABY SHOWER' lettering."
        },
        {
          src: "assets/mehendi/baby-ref-5.jpg",
          alt: "Symmetric Baby Footprints in Floral Halo",
          tag: "Look 05 • Sacred Dual Footprints Chakra",
          title: "Symmetric Baby Footprints in Floral Halo",
          caption: "Regal twin-palm ceremonial Seemantham henna featuring deeply stained baby footprints enclosed in ornate floral mandalas with graceful wrist creepers."
        },
        {
          src: "assets/mehendi/baby-ref-6.jpg",
          alt: "Pram Stroller & Mom-Dad Storytelling",
          tag: "Look 06 • Mom & Dad to Be Cradle",
          title: "Pram Stroller & Mom-Dad Storytelling",
          caption: "Detailed full-arm story henna depicting a baby sleeping in a vintage pram stroller, 'MOM TO BE' and 'DAD TO BE' celebration banners, and baby onesies."
        },
        {
          src: "assets/mehendi/baby-ref-7.jpg",
          alt: "Backhand Baby Footprint Chakras",
          tag: "Look 07 • Backhand Footprint Rosettes",
          title: "Backhand Baby Footprint Chakras",
          caption: "Airy, sophisticated back-hand henna featuring dual baby footprint rosettes with elegant finger jewelry trails and wrist jaali bands."
        },
        {
          src: "assets/mehendi/baby-ref-8.jpg",
          alt: "Graceful Mom-to-Be Portrait & Mobile Toy",
          tag: "Look 08 • Expectant Mother & Mobile Crib",
          title: "Graceful Mom-to-Be Portrait & Mobile Toy",
          caption: "Artistic illustration of the glowing expectant mother cradling her baby bump, hanging teddy bear mobile crib, and 'Small feet, Big Happiness' typography."
        },
        {
          src: "assets/mehendi/baby-ref-9.jpg",
          alt: "Dreamy Sleeping Baby on Cloud Motif",
          tag: "Look 09 • Sleeping Baby on Cloud & Elephants",
          title: "Dreamy Sleeping Baby on Cloud Motif",
          caption: "Whimsical celestial henna with a peaceful baby asleep on a cloud, baby footprint heart, cute festive elephants, and celebratory balloons."
        },
        {
          src: "assets/mehendi/baby-ref-10.jpg",
          alt: "Festive Gender Guess Finger Lettering",
          tag: "Look 10 • Girl & Boy Lettering Rings",
          title: "Festive Gender Guess Finger Lettering",
          caption: "Joyful Seemantham party design with 'G-I-R-L' and 'B-O-Y' lettering on finger caps, crowned with twin baby footprint sunburst mandalas."
        },
        {
          src: "assets/mehendi/baby-ref-11.jpg",
          alt: "Mother-Infant Love & Sacred Diamond Crests",
          tag: "Look 11 • Garden Seemantham Portraits",
          title: "Mother-Infant Love & Sacred Diamond Crests",
          caption: "Sunlit celebration henna framing an affectionate mother holding her newborn child, geometric footprint shields, and 'MOM TO BE' / 'DAD TO BE' diamond crests."
        }
      ]
    },
    "arabic": {
      id: "arabic",
      name: "2. Arabic Mehandi",
      shortName: "Arabic Mehendi",
      tagline: "Flowing Modern Bel Trails & Negative Space Artistry",
      description: "Contemporary high-fashion Arabic henna featuring flowing diagonal floral trails, dramatic leafy vine arches, negative space contours, and rich multidimensional shading.",
      photos: [
        {
          src: "assets/mehendi/arabic-ref-1.jpg",
          alt: "Contemporary Bold Arabic Shaded Floral Trail",
          tag: "Look 01 • Diagonal Bel Cascade",
          title: "Flowing Negative Space Floral Bel",
          caption: "Bold shaded petals and fluid leafy vines traveling gracefully from index fingertips down to the forearm, providing a chic modern statement."
        },
        {
          src: "assets/mehendi/arabic-ref-2.jpg",
          alt: "Dual Hand Symmetric Arabic Floral Lace",
          tag: "Look 02 • Symmetrical Arabic Lace",
          title: "Symmetrical Rose Clusters & Vine Arches",
          caption: "Dual-hand harmonized Arabic pattern with deep mahogany shading, delicate rosebuds, and breathing negative spaces tailored for cocktail & sangeet."
        },
        {
          src: "assets/mehendi/arabic-ref-3.jpg",
          alt: "Harmonized Dual-Hand Diagonal Bel Trail",
          tag: "Look 03 • Dual-Hand Floral Cascade",
          title: "Harmonized Dual-Hand Diagonal Bel Trail",
          caption: "Graceful flowing floral vines draped symmetrically across both back hands, with delicately shaded leaf tips and modern open contours."
        },
        {
          src: "assets/mehendi/arabic-ref-4.jpg",
          alt: "Sculptural Floral Mandala & Leafy Wrist Arches",
          tag: "Look 04 • Bold Mandala & Leaf Cuff",
          title: "Sculptural Floral Mandala & Leafy Wrist Arches",
          caption: "Striking high-contrast Arabic floral center with bold petal shading, open negative space accents, and sculpted vine cuffs."
        },
        {
          src: "assets/mehendi/arabic-ref-5.jpg",
          alt: "Dual Back-Hand Rose & Vine Arabesque",
          tag: "Look 05 • Sangeet Crimson Elegance",
          title: "Dual Back-Hand Rose & Vine Arabesque",
          caption: "Romantic dual-hand Arabic trails adorned with shaded cabbage roses and delicate leaf tendrils, resting on regal crimson bridal silk."
        },
        {
          src: "assets/mehendi/arabic-ref-6.jpg",
          alt: "Botanical Rose Vine with Ring Finger Lace",
          tag: "Look 06 • Haathphool Chain Arabesque",
          title: "Botanical Rose Vine with Ring Finger Lace",
          caption: "Artistic diagonal Arabic trail linking the ring fingertip to a sculpted wrist cuff with airy negative spaces and subtle shaded petals."
        },
        {
          src: "assets/mehendi/arabic-ref-7.jpg",
          alt: "Flowing Palm Arabesque & Shaded Petals",
          tag: "Look 07 • Palm Contour Florals",
          title: "Flowing Palm Arabesque & Shaded Petals",
          caption: "Organic inner-palm floral composition featuring bold shading gradients, leaf silhouettes, and fluid wrist vine flourishes."
        },
        {
          src: "assets/mehendi/arabic-ref-8.jpg",
          alt: "Slender Leafy Tendrils & Shaded Blossom",
          tag: "Look 08 • Minimalist Middle Finger Bel",
          title: "Slender Leafy Tendrils & Shaded Blossom",
          caption: "Modern minimalist Arabic flow highlighting the center finger with delicate curling leafy vines, shaded florets, and spacious skin breathability."
        },
        {
          src: "assets/mehendi/arabic-ref-9.jpg",
          alt: "Grand Palm Medallion & Shaded Foliage",
          tag: "Look 09 • Bold Shaded Palm Arabesque",
          title: "Grand Palm Medallion & Shaded Foliage",
          caption: "Deep mahogany organic henna with rich shadow gradients, crisp leaf borders, and elegant geometric finger lace tailored for reception soirées."
        },
        {
          src: "assets/mehendi/arabic-ref-10.jpg",
          alt: "Full-Length Palm to Forearm Vine Cascade",
          tag: "Look 10 • Forearm Extended Arabesque",
          title: "Full-Length Palm to Forearm Vine Cascade",
          caption: "Dramatic extended Arabic artwork flowing from the fingertips along the wrist and forearm with layered floral mandalas and leafy bel arches."
        },
        {
          src: "assets/mehendi/arabic-ref-11.jpg",
          alt: "Dramatic Cabbage Rose & Vine Arches",
          tag: "Look 11 • Shaded Rose Medallion",
          title: "Dramatic Cabbage Rose & Vine Arches",
          caption: "Voluminous shaded Arabic rose clusters crowned with sculpted leaf silhouettes and intricate geometric jaali accents."
        },
        {
          src: "assets/mehendi/arabic-ref-12.jpg",
          alt: "Contemporary Minimalist Vine & Floret",
          tag: "Look 12 • Modern Chic Negative Space",
          title: "Contemporary Minimalist Vine & Floret",
          caption: "Clean, ultra-modern Arabic styling with refined line weight, crisp diagonal alignment, and generous open skin canvas."
        },
        {
          src: "assets/mehendi/arabic-ref-13.jpg",
          alt: "Twin Hand Arabic Florets & Leaf Garlands",
          tag: "Look 13 • Dual-Hand Botanical Symphony",
          title: "Twin Hand Arabic Florets & Leaf Garlands",
          caption: "Harmonized twin hand pattern with synchronized floral trails, ring chains, and rich dark organic stain for festive celebrations."
        },
        {
          src: "assets/mehendi/arabic-ref-14.jpg",
          alt: "Royal Dual-Palm Henna with Shaded Lotus",
          tag: "Look 14 • Grand Bridal Palm Arabesque",
          title: "Royal Dual-Palm Henna with Shaded Lotus",
          caption: "Breathtaking dual-palm Arabic bridal composition featuring shaded lotus blooms, ornate diagonal bel vines, and deep mahogany tone on velvet silk."
        }
      ]
    },
    "bridal": {
      id: "bridal",
      name: "3. Bridal Mehandi",
      shortName: "Bridal Mehendi",
      tagline: "Royal Muhurtham Couture & Storytelling Henna",
      description: "Grand, full-arm and leg couture bridal henna narrating your personal love story. Features handcrafted Radha-Krishna and royal couple portraits, wedding baraat processions, sacred elephant motifs, and hidden groom name initials.",
      photos: [
        {
          src: "assets/mehendi/bridal-ref-1.jpg",
          alt: "Signature Royal Bridal Henna on Velvet Cushion",
          tag: "Look 01 • Signature Royal Bridal",
          title: "Royal Muhurtham Bridal Masterpiece",
          caption: "Exquisite dense bridal henna with royal elephant processions, intricate couple silhouette portraits, temple gold kadas, and fine jaali grids on royal red velvet cushion."
        },
        {
          src: "assets/mehendi/bridal-ref-2.jpg",
          alt: "Baraat Procession & Raja-Rani Full Arm Henna",
          tag: "Look 02 • Baraat & Royal Storytelling",
          title: "Full-Arm Raja-Rani Wedding Story",
          caption: "Dense ceremonial bridal sleeve featuring groom baraat on horseback, palanquin (doli) arrival, traditional jhumkas, and sacred Sindoor ceremony scenes."
        },
        {
          src: "assets/mehendi/bridal-ref-3.jpg",
          alt: "Intricate Bridal Feet & Anklet Mehendi",
          tag: "Look 03 • Royal Lotus Bridal Feet",
          title: "Intricate Bridal Feet & Lotus Jaali",
          caption: "Symmetric bridal feet mandala with delicate jewelry anklet cuffs, lotus buds, and fine geometric lattice work designed for Muhurtham rituals."
        },
        {
          src: "assets/mehendi/bridal-ref-4.jpg",
          alt: "Sacred Gaja Procession & Full Forearm Jaali",
          tag: "Look 04 • Royal Elephant & Jaali Grid",
          title: "Sacred Gaja Procession & Full Forearm Jaali",
          caption: "Dense ceremonial Rajasthani bridal sleeve adorned with royal caparisoned elephants, geometric jaali lattice, and antique gold wedding bangles."
        },
        {
          src: "assets/mehendi/bridal-ref-5.jpg",
          alt: "Twin Back-Hand Rose Cuffs on Scarlet Silk",
          tag: "Look 05 • Symmetrical Back-Hand Floral Lace",
          title: "Twin Back-Hand Rose Cuffs on Scarlet Silk",
          caption: "Opulent symmetrical bridal back-hand artwork resting on scarlet bridal lehenga silk, featuring dense finger jaali and botanical floral cuffs."
        },
        {
          src: "assets/mehendi/bridal-ref-6.jpg",
          alt: "Graceful Royal Peacock & Intricate Wrist Bands",
          tag: "Look 06 • Sacred Mayura Peacock & Vine",
          title: "Graceful Royal Peacock & Intricate Wrist Bands",
          caption: "Intricate peacock crests woven with blooming lotus vines, delicate lattice work, and temple jewelry kada cuffs for Muhurtham vows."
        },
        {
          src: "assets/mehendi/bridal-ref-7.jpg",
          alt: "Royal Couple Storytelling & Auspicious Kalash",
          tag: "Look 07 • Raja-Rani Wedding Portraits",
          title: "Royal Couple Storytelling & Auspicious Kalash",
          caption: "Exquisite heirloom bridal portraits of the Maharaja and Maharani, groom's procession on an elephant, and sacred Kalash blessing motifs."
        },
        {
          src: "assets/mehendi/bridal-ref-8.jpg",
          alt: "Sacred Radha-Krishna Palm Medallions",
          tag: "Look 08 • Radha-Krishna Divine Devotion",
          title: "Sacred Radha-Krishna Palm Medallions",
          caption: "Intricately hand-drawn central divine portraits of Radha and Krishna in traditional Mughal arches, surrounded by fine Jaal mesh."
        },
        {
          src: "assets/mehendi/bridal-ref-9.jpg",
          alt: "Royal Bridal Doli Arrival & Wedding Musicians",
          tag: "Look 09 • Doli Palanquin & Shehnai Melodies",
          title: "Royal Bridal Doli Arrival & Wedding Musicians",
          caption: "Ceremonial story depicting the bride's palanquin (doli) journey, shehnai musicians, sacred fire (havan kund), and wedding festivities."
        },
        {
          src: "assets/mehendi/bridal-ref-10.jpg",
          alt: "Ceremonial Bridal Feet Mandalas & Payal Cuffs",
          tag: "Look 10 • Auspicious Lotus Bridal Feet",
          title: "Ceremonial Bridal Feet Mandalas & Payal Cuffs",
          caption: "Sacred lotus mandala foot design with fine peacock crests, payal anklet borders, and toe-ring lace tailored for the Saptapadi vows."
        },
        {
          src: "assets/mehendi/bridal-ref-11.jpg",
          alt: "Grand Full-Arm Bridal Sleeve & Gold Kadas",
          tag: "Look 11 • Couple Silhouette & Lotus Grids",
          title: "Grand Full-Arm Bridal Sleeve & Gold Kadas",
          caption: "Full-length bridal sleeve featuring couple silhouette medallions, geometric jaali lattice, and layered floral arm bands."
        },
        {
          src: "assets/mehendi/bridal-ref-12.jpg",
          alt: "Sacred Wedding Rituals & Sindoor Moments",
          tag: "Look 12 • Sindoor Varmala Ceremony Story",
          title: "Sacred Wedding Rituals & Sindoor Moments",
          caption: "Vivid miniature scenes illustrating the holy Sindoor and Varmala garland exchange, framed by ornate Mughal paisley borders."
        },
        {
          src: "assets/mehendi/bridal-ref-13.jpg",
          alt: "Twin Lotus Medallions & Dainty Ring Chains",
          tag: "Look 13 • Royal Lotus Medallion Back-Hands",
          title: "Twin Lotus Medallions & Dainty Ring Chains",
          caption: "Bespoke symmetrical back-hand lotus mandalas with cascading pearl-effect chain links and delicate floral fingertip detailing."
        }
      ]
    },
    "simple": {
      id: "simple",
      name: "4. Simple Mehandi",
      shortName: "Simple Mehendi",
      tagline: "Minimalist Mandalas & Dainty Wrist Lace",
      description: "Delicate, featherlight designs ideal for sangeet parties, bridesmaids, and festive pujas. Features clean circular mandalas, intricate fingertip detailing, and elegant lace bracelet cuffs.",
      photos: [
        {
          src: "assets/mehendi/simple-ref-1.jpg",
          alt: "Delicate Minimalist Back-Hand Floral Mandala",
          tag: "Look 01 • Minimalist Back-Hand",
          title: "Delicate Floral Mandala & Pearl Ring Vine",
          caption: "A pristine circular mandala rosette crowned with delicate pearl chains connected to the ring finger, offering an airy and modern aesthetic."
        },
        {
          src: "assets/mehendi/simple-ref-2.jpg",
          alt: "Elegant Sangeet Bridesmaid Glove Motif",
          tag: "Look 02 • Sangeet Bridesmaid Lace",
          title: "Dainty Lace Wristband & Fingertips",
          caption: "Chic and swift henna styling for bridesmaids featuring delicate geometric cuff lines, leafy finger tips, and minimalist backhand symmetry."
        },
        {
          src: "assets/mehendi/simple-ref-3.jpg",
          alt: "Back-Hand Diagonal Floral Vine with Negative Space Rosettes",
          tag: "Look 03 • Diagonal Rosette Vine",
          title: "Back-Hand Floral Vine & Negative Space Rosettes",
          caption: "Chic Arabic-minimalist floral trail travelling gracefully across the back of the hand, highlighted by circular mandalas with negative-space centers and swirling leafy flourishes."
        },
        {
          src: "assets/mehendi/simple-ref-4.jpg",
          alt: "Back-Hand Dual Paisley & Pinky Finger Vine",
          tag: "Look 04 • Dual Paisley Pinky Vine",
          title: "Back-Hand Paisley Bel & Pinky Finger Trail",
          caption: "A bold paisley and floral bel extending across the wrist and back of the hand, accompanied by an elegant delicate floral trail running along the pinky finger."
        },
        {
          src: "assets/mehendi/simple-ref-5.jpg",
          alt: "Minimalist Center-Palm Lotus with Jaali Finger Caps",
          tag: "Look 05 • Center-Palm Lotus Jaali",
          title: "Minimalist Lotus Flower & Intricate Jaali Caps",
          caption: "A clean, bold shaded lotus blossom floating in the palm center, framed by an arched scalloped jaali border and full spiral checkered finger caps."
        },
        {
          src: "assets/mehendi/simple-ref-6.jpg",
          alt: "Twin-Palm Symmetrical Lotus Motifs with Dainty Bands",
          tag: "Look 06 • Twin-Palm Lotus Symmetry",
          title: "Symmetrical Palm Lotus Motifs & Pearl Bangles",
          caption: "Both hands facing upward with elegant shaded lotus motifs centered on each palm, vertical dot accents trailing to the wrists, and fine geometric finger bands."
        },
        {
          src: "assets/mehendi/simple-ref-7.jpg",
          alt: "Circular Palm Mandala with Floral Wristlet",
          tag: "Look 07 • Circular Palm Mandala",
          title: "Scalloped Floral Mandala & Wristlet Cuff",
          caption: "Classic circular central mandala encased in a delicate scalloped leafy border with negative space, complemented by a dainty floral bracelet band at the wrist."
        },
        {
          src: "assets/mehendi/simple-ref-8.jpg",
          alt: "Diagonal Palm Floral Vine to Index Finger",
          tag: "Look 08 • Index Finger Floral Bel",
          title: "Diagonal Palm Rosette Vine to Index Finger",
          caption: "An organic diagonal vine of rosettes, leaves, and shaded spiral buds traveling across the palm directly into the index finger, with solid stained fingertip caps."
        },
        {
          src: "assets/mehendi/simple-ref-9.jpg",
          alt: "Close-Up Shaded Lotus Palm with Arched Spiral Jaali",
          tag: "Look 09 • Shaded Lotus & Spiral Jaali",
          title: "Lotus Palm Bloom with Arched Jaali Mesh",
          caption: "Detailed close-up showing a prominent shaded lotus flower in the center of the palm beneath an intricate arched spiral jaali mesh and fully patterned finger cones."
        },
        {
          src: "assets/mehendi/simple-ref-10.jpg",
          alt: "Rustic Twin-Palm Minimalist Lotus Motifs",
          tag: "Look 10 • Rustic Twin-Palm Lotus",
          title: "Minimalist Dual Lotus Flowers & Knuckle Rings",
          caption: "Both palms resting flat over a wooden table featuring minimalist dark lotus flowers in the center, subtle scattered 4-dot diamond accents, and stained fingertips."
        },
        {
          src: "assets/mehendi/simple-ref-11.jpg",
          alt: "Lotus Wristlet Cuffs with Matching Palm Mandalas",
          tag: "Look 11 • Lotus Wristlet Mandalas",
          title: "Lotus Wrist Cuffs with Matching Palm Mandalas",
          caption: "A pair of hands showcasing elaborate lotus-themed wrist cuffs with scalloped bead trims, paired with matching circular lotus mandalas centered on both palms."
        },
        {
          src: "assets/mehendi/simple-ref-12.jpg",
          alt: "Traditional Solid Coin Tikki Mandala with Ornate Finger Lace",
          tag: "Look 12 • Traditional Chand Tikki",
          title: "Solid Coin Chand Tikki & Ornate Finger Jaali",
          caption: "Deep mahogany stain design featuring a traditional solid circular coin (chand/tikki) in the palm center, surrounded by intricate jaali and lace detailing."
        },
        {
          src: "assets/mehendi/simple-ref-13.jpg",
          alt: "Back-Hand Chandelier Hanging Lotus Jaali with Architectural Cuff",
          tag: "Look 13 • Chandelier Hanging Lotus",
          title: "Architectural Wristlet & Hanging Lotus Strings",
          caption: "Ornate back-of-hand design featuring an architectural dome cuff wristlet with delicate strings of suspended lotus bud motifs cascading down the back of the hand."
        }
      ]
    }
  };

  let currentActiveStyle = "baby-shower";
  let activeModalPhotos = [];
  let currentViewerIndex = 0;

  // DOM Elements
  let modalOverlay, modalContainer, modalTitle, modalTagline, modalDesc, modalTabsContainer, modalGrid;
  let viewerOverlay, viewerImg, viewerTitle, viewerCaption, viewerTag, viewerCounter, viewerPrev, viewerNext, viewerClose;

  function initMehendiLookbook() {
    createModalElements();
    createViewerElements();
    bindCardTriggers();
  }

  function bindCardTriggers() {
    const cards = document.querySelectorAll('.subtype-card[data-style]');
    cards.forEach(card => {
      card.addEventListener('click', function (e) {
        const styleKey = this.getAttribute('data-style');
        if (styleKey && MEHENDI_DATA[styleKey]) {
          cards.forEach(c => c.classList.remove('active-subtype-card'));
          this.classList.add('active-subtype-card');
          openStyleModal(styleKey);
        }
      });
    });
  }

  function createModalElements() {
    if (document.getElementById('mehendiLookbookModal')) return;

    modalOverlay = document.createElement('div');
    modalOverlay.id = 'mehendiLookbookModal';
    modalOverlay.className = 'hair-modal-overlay';
    modalOverlay.setAttribute('role', 'dialog');
    modalOverlay.setAttribute('aria-modal', 'true');
    modalOverlay.setAttribute('aria-label', 'Mehendi Design Reference Gallery');

    modalOverlay.innerHTML = `
      <div class="hair-modal-dialog">
        <button class="hair-modal-close" id="mehendiModalClose" aria-label="Close Lookbook">✕</button>
        
        <div class="hair-modal-header">
          <span class="hair-modal-eyebrow">✦ SRAVANI MAKEOVERS • MEHENDI DESIGN LOOKBOOK ✦</span>
          <h2 class="hair-modal-title" id="mehendiModalStyleTitle">Mehendi Reference Gallery</h2>
          <p class="hair-modal-tagline" id="mehendiModalStyleTagline"></p>
          <p class="hair-modal-desc" id="mehendiModalStyleDesc"></p>
        </div>

        <!-- Filter Tabs -->
        <div class="hair-modal-tabs" id="mehendiModalFilterTabs">
          <button class="hair-tab-btn" data-target="baby-shower">1. Baby Shower Mehndi</button>
          <button class="hair-tab-btn" data-target="arabic">2. Arabic Mehandi</button>
          <button class="hair-tab-btn" data-target="bridal">3. Bridal Mehandi</button>
          <button class="hair-tab-btn" data-target="simple">4. Simple Mehandi</button>
        </div>

        <!-- Photos Grid -->
        <div class="hair-modal-grid" id="mehendiModalPhotosGrid"></div>

        <div class="hair-modal-footer">
          <span class="hair-footer-hint">💡 Tap any photo to expand into 4K full-screen theater view</span>
          <a href="enquiry.html?service=Mehendi+Design" class="btn-gold btn-sm">Book This Style on WhatsApp ✦</a>
        </div>
      </div>
    `;

    document.body.appendChild(modalOverlay);

    // Cache elements
    modalContainer = modalOverlay.querySelector('.hair-modal-dialog');
    modalTitle = document.getElementById('mehendiModalStyleTitle');
    modalTagline = document.getElementById('mehendiModalStyleTagline');
    modalDesc = document.getElementById('mehendiModalStyleDesc');
    modalTabsContainer = document.getElementById('mehendiModalFilterTabs');
    modalGrid = document.getElementById('mehendiModalPhotosGrid');

    // Close on overlay click
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeStyleModal();
      }
    });

    document.getElementById('mehendiModalClose').addEventListener('click', closeStyleModal);

    // Tab buttons click
    modalTabsContainer.addEventListener('click', function (e) {
      const btn = e.target.closest('.hair-tab-btn');
      if (btn) {
        const target = btn.getAttribute('data-target');
        if (target && MEHENDI_DATA[target]) {
          switchStyleInModal(target);
          // Sync card active state
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
    if (document.getElementById('mehendiFullscreenViewer')) return;

    viewerOverlay = document.createElement('div');
    viewerOverlay.id = 'mehendiFullscreenViewer';
    viewerOverlay.className = 'hair-viewer-overlay';
    viewerOverlay.setAttribute('role', 'dialog');
    viewerOverlay.setAttribute('aria-modal', 'true');
    viewerOverlay.setAttribute('aria-label', 'Full-screen Mehendi Image Viewer');

    viewerOverlay.innerHTML = `
      <div class="hair-viewer-container">
        <button class="hair-viewer-close" id="mehendiViewerClose" aria-label="Close Viewer">✕</button>
        <button class="hair-viewer-arrow prev" id="mehendiViewerPrev" aria-label="Previous Photo">❮</button>
        <button class="hair-viewer-arrow next" id="mehendiViewerNext" aria-label="Next Photo">❯</button>

        <div class="hair-viewer-content">
          <div class="hair-viewer-img-wrap">
            <img id="mehendiViewerImg" src="" alt="Mehendi Reference Full View">
          </div>
          <div class="hair-viewer-caption-box">
            <span class="hair-viewer-badge" id="mehendiViewerTag"></span>
            <h3 class="hair-viewer-title" id="mehendiViewerTitle"></h3>
            <p class="hair-viewer-desc" id="mehendiViewerCaption"></p>
            <div class="hair-viewer-counter" id="mehendiViewerCounter">Photo 1 of 1</div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(viewerOverlay);

    // Cache viewer elements
    viewerImg = document.getElementById('mehendiViewerImg');
    viewerTitle = document.getElementById('mehendiViewerTitle');
    viewerCaption = document.getElementById('mehendiViewerCaption');
    viewerTag = document.getElementById('mehendiViewerTag');
    viewerCounter = document.getElementById('mehendiViewerCounter');
    viewerPrev = document.getElementById('mehendiViewerPrev');
    viewerNext = document.getElementById('mehendiViewerNext');
    viewerClose = document.getElementById('mehendiViewerClose');

    // Events
    viewerClose.addEventListener('click', closeViewer);
    viewerPrev.addEventListener('click', prevViewerPhoto);
    viewerNext.addEventListener('click', nextViewerPhoto);

    viewerOverlay.addEventListener('click', function (e) {
      if (e.target === viewerOverlay || e.target.classList.contains('hair-viewer-container')) {
        closeViewer();
      }
    });

    // Left/Right arrow keys for viewer
    document.addEventListener('keydown', function (e) {
      if (viewerOverlay && viewerOverlay.classList.contains('active')) {
        if (e.key === 'ArrowRight') nextViewerPhoto();
        if (e.key === 'ArrowLeft') prevViewerPhoto();
      }
    });
  }

  function openStyleModal(styleKey) {
    if (!MEHENDI_DATA[styleKey]) return;
    currentActiveStyle = styleKey;

    switchStyleInModal(styleKey);

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeStyleModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function switchStyleInModal(styleKey) {
    const data = MEHENDI_DATA[styleKey];
    if (!data) return;

    currentActiveStyle = styleKey;
    activeModalPhotos = data.photos || [];

    // Update headers
    modalTitle.textContent = data.name;
    modalTagline.textContent = data.tagline;
    modalDesc.textContent = data.description;

    // Update active tab button
    const tabs = modalTabsContainer.querySelectorAll('.hair-tab-btn');
    tabs.forEach(tab => {
      if (tab.getAttribute('data-target') === styleKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Populate photos grid
    renderModalPhotos(activeModalPhotos, styleKey);
  }

  function renderModalPhotos(photos, styleKey) {
    modalGrid.innerHTML = '';

    if (!photos || photos.length === 0) {
      modalGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #9C9187;">
          <p>Reference gallery for this category is being curated. Check back shortly!</p>
        </div>
      `;
      return;
    }

    photos.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'hair-ref-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${photo.title} in theater mode`);

      card.innerHTML = `
        <div class="hair-ref-img-wrap">
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
          <span class="hair-ref-pill">${photo.tag || 'Reference Look'}</span>
          <div class="hair-ref-zoom-badge">
            <span style="font-size: 1.4rem;">🔍</span>
            <span>View Fullscreen</span>
          </div>
        </div>
        <div class="hair-ref-info">
          <h4>${photo.title}</h4>
          <p>${photo.caption}</p>
        </div>
      `;

      card.addEventListener('click', function () {
        openViewer(idx);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openViewer(idx);
        }
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
    if (!viewerOverlay) return;
    viewerOverlay.classList.remove('active');
  }

  function nextViewerPhoto() {
    if (!activeModalPhotos || activeModalPhotos.length <= 1) return;
    currentViewerIndex = (currentViewerIndex + 1) % activeModalPhotos.length;
    updateViewerContent();
  }

  function prevViewerPhoto() {
    if (!activeModalPhotos || activeModalPhotos.length <= 1) return;
    currentViewerIndex = (currentViewerIndex - 1 + activeModalPhotos.length) % activeModalPhotos.length;
    updateViewerContent();
  }

  function updateViewerContent() {
    const photo = activeModalPhotos[currentViewerIndex];
    if (!photo) return;

    viewerImg.src = photo.src;
    viewerImg.alt = photo.alt;
    viewerTag.textContent = photo.tag || 'MEHENDI REFERENCE LOOK';
    viewerTitle.textContent = photo.title;
    viewerCaption.textContent = photo.caption;
    viewerCounter.textContent = `Photo ${currentViewerIndex + 1} of ${activeModalPhotos.length}`;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMehendiLookbook);
  } else {
    initMehendiLookbook();
  }

})();
